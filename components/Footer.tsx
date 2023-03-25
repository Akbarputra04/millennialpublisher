import Link from "next/link";

export default function Footer() {
	return (
		<section className="py-10 bg-gray-200 sm:pt-16 lg:pt-24">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
				<div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
					<div className="col-span-2 flex flex-col gap-3 justify-between items-start md:col-span-3 lg:col-span-2 lg:pr-8">
						{/* <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" /> */}
						<h2 className="text-xl lg:text-2xl font-bold text-black">Dyatama Milenia</h2>

						<p className="text-base leading-relaxed text-gray-600">Dyatama Milenia dibawah PT Dyatama Milenia, adalah penerbit dengan komitmen tinggi untuk berkontribusi memajukan dunia literasi di Indonesia dengan menerbitkan buku-buku berkualitas.<br/>Tidak sekadar menerbitkan, kami juga sahabat Anda membaca buku</p>

					</div>

					<div>
						<p className="text-md font-bold tracking-widest uppercase">Content</p>

						<ul className="mt-6 space-y-4">
							<li>
								<Link href="/" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </Link>
							</li>

							<li>
								<Link href="books" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Books </Link>
							</li>

							<li>
								<Link href="/articles" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Articles </Link>
							</li>

							<li>
								<Link href="/about" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </Link>
							</li>
						</ul>
					</div>

					<div className="col-span-2 md:col-span-1 lg:col-span-2">
						<div className="flex flex-col items-center gap-5 bg-white rounded-lg p-7">
							<input
								type="text"
								name="search"
								id="search"
								placeholder="search"
								className="block w-full px-4 py-4 text-base text-black bg-gray-100 placeholder-gray-500 transition-all duration-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
								required
							/>
							<button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-full px-8 py-3 font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-full sm:mt-0 sm:w-auto hover:bg-primary-dark focus:bg-primary-dark">
								Search
							</button>
						</div>
					</div>
				</div>

				<div className="flex">
					<p className="mt-10 font-medium text-base leading-relaxed">
						Dyatama Milenia<br/>
						Jl Kemang Timur XVIII/ no 5<br/>
						Jakarta 12730<br/>
						Telepon : 021 719 5587<br/>
						Email : dyatamamilenia@yahoo.com
					</p>
				</div>

				<hr className="my-10 border-gray-200" />

				<p className="text-sm text-center text-gray-600">© Copyright 2023, All Rights Reserved by Dyatama Milenia</p>
			</div>
		</section>
	)
}
