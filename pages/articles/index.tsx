import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import useSWR from 'swr';
import { Article } from "../api/articles";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Articles() {
    
    const { data, error } = useSWR('/api/articles', fetcher);

    return (
        <>
            <Header />

            {/* articles */}
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {!data && (
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Sedang memuat...</p>
                        )}
                        {error && (
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Terjadi kesalahan saat memuat</p>
                        )}
                        {data && data.map((d: Article) => (
                            <div key={d.id} className="overflow-hidden bg-white rounded-lg shadow">
                                <div className="p-5">
                                    <div className="relative">
                                        <Link href={`articles/${d.id}`} title="" className="block aspect-w-4 aspect-h-3">
                                            <img className="object-cover w-full h-full rounded-md" src={d.thumbnail} alt="" />
                                        </Link>
                                    </div>
                                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{d.timestamp}</span>
                                    <p className="mt-5 text-2xl font-semibold">
                                        <Link href={`articles/${d.id}`} title="" className="text-black">{d.title}</Link>
                                    </p>
                                    <p className="mt-4 text-base text-gray-600">{d.summary}</p>
                                    <Link href={`articles/${d.id}`} title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-primary transition-all duration-200 border-b-2 border-transparent hover:border-primary focus:border-primary">
                                        Continue Reading
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* footer */}
            <Footer />
        </>
    )
}
