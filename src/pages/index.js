import Head from "next/head";
import Link from "next/link";

export default function Main() {
    return (
        <div>
            <Head>
                <title>하영권 포트폴리오</title>
                <meta neme='description' content='블로그 프로젝트' />
            </Head>
            <h1>실험실</h1>

            <Link href='/react-quill'>웹에디터</Link>
        </div>
    );
}