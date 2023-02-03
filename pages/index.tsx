import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Link from "next/link";

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
									Lorem, ipsum dolor sit amet consectetur
								</h1>

								<p className="mt-8 text-base sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

								<div className="mt-10 sm:flex sm:items-center sm:space-x-8">
									<a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 bg-primary hover:bg-primary-dark focus:bg-primary-dark" role="button"> Start exploring </a>
								</div>
							</div>
							<div>
								<img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* articles */}
			<section id="articles" className="py-10 sm:py-16 lg:py-24">
				<div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
						<div className="lg:row-start-1 lg:row-end-3">
							<Link href="/article-detail" title="" className="block aspect-square">
								<img className="object-cover w-full h-full rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
							</Link>
							<p className="mt-5 text-2xl font-semibold">
								<Link href="/article-detail" title="" className="text-black">Lorem, ipsum.</Link>
							</p>
							<p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
						</div>
						<h2 className="lg:row-start-1 order-first lg:order-none text-3xl font-bold leading-tight text-center lg:text-4xl">Articles</h2>
						<div className="lg:row-start-2 lg:row-end-3">
							<Link href="/article-detail" title="" className="block aspect-square">
								<img className="object-cover w-full h-full rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
							</Link>
							<p className="mt-5 text-2xl font-semibold">
								<Link href="/article-detail" title="" className="text-black">Lorem, ipsum.</Link>
							</p>
							<p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
						</div>
						<div className="lg:row-start-1 lg:row-end-3">
							<Link href="/article-detail" title="" className="block aspect-square">
								<img className="object-cover w-full h-full rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
							</Link>
							<p className="mt-5 text-2xl font-semibold">
								<Link href="/article-detail" title="" className="text-black">Lorem, ipsum.</Link>
							</p>
							<p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
						</div>
					</div>
					<div className="text-center mt-10">
						<Link href="/articles" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 bg-primary hover:bg-primary-dark focus:bg-primary-dark" role="button">More articles</Link>
					</div>
				</div>
			</section>

			{/* gallery */}
			<section className="py-10 sm:py-16 lg:py-24">
				<div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold leading-tight text-center mb-12 lg:text-4xl">Gallery</h2>
					<Swiper
						modules={[Navigation, Autoplay]}
						spaceBetween={-20}
						breakpoints={{
							640: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 3,
							},
						}}
						centeredSlides
						loop
						autoplay
						navigation
					>
						{data.map(d => (
							<SwiperSlide key={d}>
								{({isActive}) => (
									<img src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="slide item" className={`aspect-square object-cover rounded-lg duration-300 ease-in-out origin-top ${!isActive ? 'scale-75' : ''}`} />
								)}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* banner */}
			<section className="sm:py-16 lg:py-20">
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
			</section>

			{/* maps */}
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0620118340416!2d110.36566675668149!3d-7.783250194967939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a591a4d553bd5%3A0xc0f964003add568b!2sTugu%20Jogja!5e0!3m2!1sid!2sid!4v1675311908705!5m2!1sid!2sid" width="100%" height="350" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

			{/* footer */}
			<Footer/>
		</>
	)
}
