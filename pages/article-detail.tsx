import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ArticleDetail() {

    return (
        <>
            <Header />

            {/* articles */}
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <h2 className="text-3xl font-bold leading-tight text-bold sm:text-4xl lg:text-5xl">Lorem ipsum dolor sit amet.</h2>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>

                    <div className="max-w-md mt-8 lg:mt-16 lg:max-w-full">
                        <p className="mb-4 text-lg leading-relaxed text-gray-600 lg:mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, enim quod ipsum tenetur hic odio nihil voluptatibus voluptatem! Eos cumque saepe assumenda quibusdam facilis necessitatibus accusamus totam veritatis aliquam optio, distinctio cupiditate voluptas dolorem sequi omnis vel odio ducimus corrupti eaque, ut dolorum fugiat praesentium alias neque? Aperiam, inventore cum.</p>
                        <img className="w-full mb-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                        <p className="mb-4 text-lg leading-relaxed text-gray-600 lg:mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, enim quod ipsum tenetur hic odio nihil voluptatibus voluptatem! Eos cumque saepe assumenda quibusdam facilis necessitatibus accusamus totam veritatis aliquam optio, distinctio cupiditate voluptas dolorem sequi omnis vel odio ducimus corrupti eaque, ut dolorum fugiat praesentium alias neque? Aperiam, inventore cum.</p>
                        <p className="mb-4 text-lg leading-relaxed text-gray-600 lg:mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, enim quod ipsum tenetur hic odio nihil voluptatibus voluptatem! Eos cumque saepe assumenda quibusdam facilis necessitatibus accusamus totam veritatis aliquam optio, distinctio cupiditate voluptas dolorem sequi omnis vel odio ducimus corrupti eaque, ut dolorum fugiat praesentium alias neque? Aperiam, inventore cum.</p>
                        <p className="mb-4 text-lg leading-relaxed text-gray-600 lg:mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, enim quod ipsum tenetur hic odio nihil voluptatibus voluptatem! Eos cumque saepe assumenda quibusdam facilis necessitatibus accusamus totam veritatis aliquam optio, distinctio cupiditate voluptas dolorem sequi omnis vel odio ducimus corrupti eaque, ut dolorum fugiat praesentium alias neque? Aperiam, inventore cum.</p>
                    </div>
                </div>
            </section>


            {/* footer */}
            <Footer />
        </>
    )
}
