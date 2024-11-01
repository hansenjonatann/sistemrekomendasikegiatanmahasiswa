export default function HalamanProfil () {
    return (
        <div className="mr-[44px]">
            <div className="mt-[29px] bg-white border border-black rounded-[20px] h-[255px]">
                <h1 className="text-end text-black mr-[14px] font-semibold mt-2">Edit</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 mx-[35px]">

                    <div className="col-span-1">
                        <div className="w-[180px] h-[180px] border border-black"></div>
                    </div>

                    <div >
                        <form action="" className="flex space-x-4">
                            <div className=" text-black">
                                <div className="flex flex-col">
                                <label htmlFor="nama">Nama</label>
                                <input type="text" className=" border-2 border-black mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black" placeholder="Hansen Jonatan" />
                                </div>

                                <div className="flex flex-col mt-4">
                                    <label htmlFor="prodi">Prodi</label>
                                <input type="text" className=" border-2 border-black mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black" placeholder="Program Studi" />

                                </div>
                            </div>

                            <div className=" text-black">
                                <div className="flex flex-col">
                                <label htmlFor="npm">NPM</label>
                                <input type="text" className=" border-2 border-black mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black" placeholder="2231155" />
                                </div>

                                <div className="flex flex-col mt-4">
                                    <label htmlFor="angkatan">Angkatan</label>
                                <input type="number" className=" border-2 border-black mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black" placeholder="2022" />

                                </div>
                            </div>

                            <div className=" text-black">
                                <div className="flex flex-col">
                                <label htmlFor="nohp">No. HP</label>
                                <input type="tel" className=" border-2 border-black mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black" placeholder="081112345678" />
                                </div>

                                <div className="flex flex-col mt-4">
                                    <label htmlFor="email">Email</label>
                                <input type="email" className=" border-2 border-black mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black" placeholder="mahasiswa@gmail.com" />

                                </div>
                            </div>
                        </form>
                    </div>

                </div>

                <div className=" bg-white h-64 mt-14 border border-black rounded-[20px]">
        
      </div>
            </div>
        </div>
    )
}