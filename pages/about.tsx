import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {

    return (
        <>
            <Header />

            {/* about */}
            <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">About Us</h2>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Millennium Publisher sejak 1999 turut berkotribusi dalam industri penerbitan buku,
                            menghadirkan sajian literasi, turut membangun wawasan dan memperkaya khasanah perspektif
                            kognitif untuk negeri</p>

                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Pekerjaan utama kami berkisar pada perencanaan, memperoleh, merancang, dan
                            mendistribusikan buku kepada publik.</p>

                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8"><b>Visi</b><br/>
                            Menjadi penerbit nasional inovatif serta mengolah literasi, referensi, berkotribusi untuk
                            mencerdaskan kehidupan bangsa.</p>

                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8"><b>Misi</b><br/>
                            <ul className="list-disc list-inside">
                                <li>Meningkatkan kapasitas dan kapabilitas layanan penerbitan nasional</li>
                                <li>Mengoptimalkan pemanfaatan ilmu pengetahuan dan teknologi untuk mendukung pelayanan penerbitan yang efisien, transparan, dan akuntabel</li>
                                <li>Memperkuat jejaring dan kerja sama penerbitan dengan pemangku kepentingan untuk lingkup nasional.</li>
                                <li>Memastikan standar kualitas publikasi.</li>
                            </ul>
                            </p>

                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Penerbitan Millennium Publisher mempunyai tugas merencanakan, memperoleh, mengemas,
                            dan menyebarluaskan informasi ilmiah kepada masyarakat.</p>
                        </div>

                        <img className="w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="./images/about.jpg" alt="about image" />
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </>
    )
}
