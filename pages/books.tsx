import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useSWR from 'swr';
import { Book } from "./api/books";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Books() {

    const { data, error } = useSWR('/api/books', fetcher);

    return (
        <>
            <Header />

            {/* books */}
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Buku-buku terbitan millenium publisher</h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                        </div>

                        {/* <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div> */}
                    </div>

                    <div className="grid max-w-md grid-cols-2 gap-3 lg:gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-4 lg:max-w-full">
                        {!data && (
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Sedang memuat...</p>
                        )}
                        {error && (
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Terjadi kesalahan saat memuat</p>
                        )}
                        {data && data.map((d: Book) => (
                            <div key={d.judul} className="overflow-hidden bg-white rounded-md lg:rounded-lg shadow-md">
                                <div className="p-3 lg:p-5">
                                    <div className="relative">
                                        <div className="block aspect-w-4 aspect-h-3">
                                            <img className="object-cover w-full h-full rounded lg:rounded-md" src={d.foto} alt={d.judul} />
                                        </div>
                                    </div>
                                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{d.terbit}</span>
                                    <p className="mt-1 text-md lg:text-xl font-bold">
                                        {d.judul}
                                    </p>
                                    {d.isbn && (
                                    <p className="mt-4 text-base text-gray-600 flex flex-col lg:flex-row lg:gap-1"><b>ISBN : </b>{d.isbn}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                        <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </section>


            {/* footer */}
            <Footer />
        </>
    )
}
