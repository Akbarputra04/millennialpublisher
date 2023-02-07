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
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">About Us</h2>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit fermentum non vitae dictum. Aliquet faucibus ullamcorper volutpat posuere. Curabitur erat dolor imperdiet nibh bibendum eget dui. Nibh integer adipiscing vivamus sit libero, mauris quam dui. Non in donec etiam gravida lectus. Phasellus gravida ultrices libero vel diam, habitasse justo.</p>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Diam phasellus tortor cursus proin erat. Hendrerit augue vel cras nec. Massa orci eu posuere dui bibendum pellentesque in. Quam vitae ornare senectus in potenti sed. Diam elit arcu est, augue porttitor in. Interdum malesuada at dui, eu viverra phasellus ipsum. Sollicitudin sed massa dignissim porta.</p>
                        </div>

                        <div className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </>
    )
}
