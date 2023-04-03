import { useState, useRef, useCallback, useMemo } from "react";
import dynamic from 'next/dynamic';
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/firebase";

const Editor = dynamic(() => import('@/components/editor'), {
    ssr: false
})

export default function Write() {
    const [html, setHtml] = useState();
    const [imgUrl, setImgUrl] = useState('');
    const editorRef = useRef(null);
    const changeHandler = (contents) => {
        setHtml(contents)
    }

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.addEventListener('change', async () => {
            const file = input.files[0];

            try {
                const storage = getStorage(app);
                const storageRef = ref(storage, `img/${file.name}`);
                await uploadBytes(storageRef, file)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then((url) => setImgUrl(url))
                    })
                const editor = editorRef.current.getEditor();
                const range = editor.getSelection();
                editor.insertEmbed(range.index, 'image', imgUrl);
                editor.setSelection(range.index + 1);
            } catch {
                console.log('떙!')
            }
        })
    }

    return (
        <>
            <Editor
                changeHandler={changeHandler}
                imageHandler={imageHandler}
                editorRef={editorRef}
            />
        </>
    );
}