import Link from "next/link";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Featured from "@/components/Featured";

const data = [1, 2, 3, 4, 5, 6]

export default function Home() {

	return (
		<>
			<Header/>
			
			<div className="bg-gradient-to-b from-green-50 to-green-100">
				<section className="py-10 sm:py-16 lg:py-24">
					<div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
						<div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
							<div>
								<h1 className="tes text-4xl font-bold sm:text-6xl lg:text-7xl">
								Merajut literasi sumbangsih untuk negeri
								</h1>

								<p className="mt-8 text-base sm:text-xl">Dyatama Milenia sejak 1999 turut berkontribusi dalam industri penerbitan buku, menghadirkan sajian literasi, turut membangun wawasan dan memperkaya khasanah perspektif kognitif untuk negeri</p>

								<div className="mt-10 sm:flex sm:items-center sm:space-x-8">
									{/* <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 bg-primary hover:bg-primary-dark focus:bg-primary-dark" role="button"> Start exploring </a> */}
								</div>
							</div>
							<div>
								<img className="w-full" src="./images/hero.png" alt="hero image" />
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* books */}
			<section className="py-10 sm:py-16 lg:py-24">
				<div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
						<div className="lg:row-start-1 lg:row-end-3">
							<div className="block aspect-square">
								<img className="object-cover w-full h-full rounded-md" src="./images/book-kiri.png" alt="" />
							</div>
							<span className="block mt-5 text-sm font-semibold tracking-widest text-gray-500 uppercase">MEI 2000</span>
							<p className="mt-1 text-2xl font-semibold">
								<h4 title="" className="text-black">Pengelolaan Tradisional Gender - Telaah Keislaman</h4>
							</p>
							<p className="mt-4 text-base text-gray-600 flex flex-col lg:flex-row lg:gap-1"><b>ISBN : </b>979-95880-6-5</p>
						</div>
						<div className="lg:row-start-2 lg:row-end-3">
							<div className="block aspect-square">
								<img className="object-cover w-full h-full rounded-md" src="./images/book-tengah.png" alt="" />
							</div>
							<span className="block mt-5 text-sm font-semibold tracking-widest text-gray-500 uppercase">FEBRUARI 2002</span>
							<p className="mt-1 text-2xl font-semibold">
								<h4 title="" className="text-black">Perang Palembang Melawan V.O.C</h4>
							</p>
							<p className="mt-4 text-base text-gray-600 flex flex-col lg:flex-row lg:gap-1"><b>ISBN : </b>979-9437-3x-x</p>
						</div>
						<div className="lg:row-start-1 lg:row-end-3">
							<div className="block aspect-square">
								<img className="object-cover w-full h-full rounded-md" src="./images/book-kanan.png" alt="" />
							</div>
							<span className="block mt-5 text-sm font-semibold tracking-widest text-gray-500 uppercase">JANUARI 2000</span>
							<p className="mt-1 text-2xl font-semibold">
								<Link href="/article-detail" title="" className="text-black">Kenangan Benua Kelam</Link>
							</p>
							<p className="mt-4 text-base text-gray-600 flex flex-col lg:flex-row lg:gap-1"><b>ISBN : </b>979-95880-0-6</p>
						</div>
					</div>
					{/* <div className="text-center mt-10">
						<Link href="/articles" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 bg-primary hover:bg-primary-dark focus:bg-primary-dark" role="button">More articles</Link>
					</div> */}
				</div>
			</section>
			
			<section className="py-10 sm:py-16 lg:py-24 px-4">
				<Featured/>
			</section>

			{/* banner */}
			{/* <section className="sm:py-16 lg:py-20">
				<div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-200 to-gray-100 p-8 lg:p-14">
					<div className="text-center lg:flex lg:items-center lg:justify-between lg:gap-20 lg:text-left">
						<h2 className="text-2xl lg:text-3xl font-bold text-black mb-5 lg:mb-0">Lorem ipsum dolor sit amet.</h2>
						<div className="flex-1 sm:flex sm:justify-center sm:gap-8 lg:justify-end">
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Lorem ipsum dolor sit amet."
								className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
								required
							/>
							<button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-full px-10 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-full sm:mt-0 sm:w-auto hover:bg-primary-dark focus:bg-primary-dark">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</section> */}

			{/* maps */}
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9363242285763!2d106.821377!3d-6.272104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f226e65b7db5%3A0xd3cea7def9174f89!2sJl.%20Kemang%20Tim.%2018%20No.5%2C%20RT.4%2FRW.3%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012730!5e0!3m2!1sid!2sid!4v1675762527635!5m2!1sid!2sid" width="100%" height="350" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			{/* footer */}
			<Footer/>
		</>
	)
}
