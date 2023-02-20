import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useSWR from 'swr';
import { Article } from "../api/articles";
import { useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ArticleDetail() {
    const router = useRouter()
    const { article_id } = router.query

    const { data, error } = useSWR(`/api/articles/${article_id}`, fetcher);

    return (
        <>
            <Header />

            {/* articles */}
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    {!data && (
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Sedang memuat...</p>
                    )}
                    {error && (
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Terjadi kesalahan saat memuat</p>
                    )}
                    {data && (
                        <>
                            <h2 className="text-3xl font-bold leading-tight text-bold sm:text-4xl lg:text-5xl">{data.title}</h2>
                            <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{data.timestamp}</span>

                            <div className="max-w-md mt-8 lg:mt-16 lg:max-w-full" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                        </>
                    )}
                </div>
            </section>


            {/* footer */}
            <Footer />
        </>
    )
}
