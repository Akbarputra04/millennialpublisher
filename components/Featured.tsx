export default function Featured() {
    return (
        <div className="flex justify-center flex-col lg:flex-row gap-5 lg:gap-20">
            <img src="/images/feature.png" alt="" />
            <div className="flex flex-col gap-5 lg:gap-unset justify-between">
                <div className="flex flex-col items-start">
                    <p className="mt-1 text-md lg:text-3xl font-bold uppercase">soft cover</p>
                    <p className="mt-1 text-md lg:text-xl font-medium">Mulai dari</p>
                    <p className="mt-1 text-md lg:text-3xl text-[blue] bg-[yellow]">Rp 75.000</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="mt-1 text-md lg:text-3xl font-bold capitalize">deskripsi buku</p>
                    <p className="mt-1 text-md lg:text-xl">Pengalaman hidup seseorang ketika Zaman <br/>Penjajahan Belanda, Jepang, Era Revolusi <br/>Kemerdekaan RI, Era Orde Lama, Orde Baru<br/>dan Era Reformasi, diceritakan secara rinci <br/>dalam buku ini.</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="mt-1 text-md lg:text-3xl font-bold capitalize">detail</p>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <p className="mt-1 text-md lg:text-xl">Jumlah Halaman: <b>117</b></p>
                            <p className="mt-1 text-md lg:text-xl">Tanggal Terbit: <b>April 2023</b></p>
                            <p className="mt-1 text-md lg:text-xl">ISBN: <b>Dalam Pengurusan</b></p>
                            <p className="mt-1 text-md lg:text-xl">Bahasa: <b>Indonesia</b></p>
                        </div>
                        <div className="flex flex-col gap-2 lg:gap-5">
                            <p className="mt-1 text-md lg:text-xl">Penerbit: <b>PT.Dyatama Milenia</b></p>
                            <p className="mt-1 text-md lg:text-xl">Berat: <b>0,10 kg</b></p>
                            <p className="mt-1 text-md lg:text-xl">Lebar: <b>14 cm</b></p>
                            <p className="mt-1 text-md lg:text-xl">Panjang: <b>20 cm</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}