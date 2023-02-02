export default function Footer() {
	return (
		<section className="py-10 bg-gray-200 sm:pt-16 lg:pt-24">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
				<div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
					<div className="col-span-2 flex flex-col justify-between items-start md:col-span-3 lg:col-span-2 lg:pr-8">
						<img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />

						<p className="text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

					</div>

					<div>
						<p className="text-md font-bold tracking-widest uppercase">Company</p>

						<ul className="mt-6 space-y-4">
							<li>
								<a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
							</li>

							<li>
								<a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
							</li>

							<li>
								<a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
							</li>

							<li>
								<a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
							</li>
						</ul>
					</div>

					<div>
						<p className="text-md font-bold tracking-widest uppercase">Help</p>

						<ul className="mt-6 space-y-4">
							<li>
								<a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
							</li>

							<li>
								<a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
							</li>

							<li>
								<a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
							</li>

							<li>
								<a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
							</li>
						</ul>
					</div>

					<div className="col-span-2 md:col-span-1 lg:col-span-2">
						<div className="flex flex-col items-center gap-5 bg-white rounded-lg p-7">
							<p className="text-xl font-bold text-center uppercase">Lorem ipsum dolor sit amet.</p>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Lorem ipsum dolor sit amet."
								className="block w-full px-4 py-4 text-base text-black bg-gray-100 placeholder-gray-500 transition-all duration-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
								required
							/>
							<button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-full px-8 py-3 font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-full sm:mt-0 sm:w-auto hover:bg-primary-dark focus:bg-primary-dark">
								Get Started
							</button>
						</div>
					</div>
				</div>

				<hr className="mt-16 mb-10 border-gray-200" />

				<p className="text-sm text-center text-gray-600">© Copyright 2023, All Rights Reserved by millennium publisher</p>
			</div>
		</section>
	)
}
