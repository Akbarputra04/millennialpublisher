import Link from "next/link"
import { useState } from "react"

export default function Header() {

	const [menuShow, setMenuShow] = useState(false)

	const toggleMenu = () => {
		setMenuShow(prev => !prev)
	}

	return (
		<header>
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					<div className="flex-shrink-0">
						<a href="#" title="" className="flex">
							<img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg" alt="" />
						</a>
					</div>

					<button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100" onClick={toggleMenu}>
						{menuShow ? (
							<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						) : (
							<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>

					<div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
						<Link href="/" className="text-base font-semibold text-black transition-all duration-200 hover:opacity-80">Home</Link>

						<Link href="/books" className="text-base font-semibold text-black transition-all duration-200 hover:opacity-80">Books</Link>

						<a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:opacity-80"> Articles </a>

						<a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:opacity-80"> About </a>
					</div>
				</div>
			</div>
			{menuShow && (
				<nav className="min-h-screen px-4 py-10 text-center bg-green-50 md:hidden">
					<nav className="flex flex-col items-center mt-10 space-y-2">
						<Link href="/" className="py-2 font-medium transition-all duration-200 focus:opacity-80">Home</Link>

						<Link href="/books" className="py-2 font-medium transition-all duration-200 focus:opacity-80">Books</Link>

						<a href="#" title="" className="py-2 font-medium transition-all duration-200 focus:opacity-80"> Articles </a>

						<a href="#" title="" className="py-2 font-medium transition-all duration-200 focus:opacity-80"> About </a>
					</nav>
				</nav>
			)}
		</header>
	)
}
