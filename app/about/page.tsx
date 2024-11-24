export default function HalamanAbout() {
  return (
    <div className="mt-10 bg-white border border-black h-[510px] mr-7 rounded-[20px]">
      <h1 className="font-bold text-black text-xl pt-10 text-center">
        About Us
      </h1>
      <div className="flex flex-col   space-y-2  px-4 mt-5 text-md">
        <p className=" text-black">
          Web ini dibuat untuk memberikan rekomendasi kegiatan kepada Mahasiswa
          sesuai dengan kemampuan mereka masing - masing yang diambil dari
          catatan kegiatan yang mereka lakukan sebelumnya.
        </p>
        <p className="text-black ">
          Kegiatan ini digunakan untuk meningkatkan keahlian Mahasiswa dibidang
          tertentu, sehingga akan memberikan mereka pengetahuan untuk menghadapi
          mata kuliah yang diambil dalam prodinya.
        </p>
        <p className="text-black ">
          Web ini dibuat oleh Mahasiswa angktan 2022 Prodi Sistem Informasi.
          Mahasiswa tersebut berasal dari kelas 5PSIA yang berasal dari kelompok
          5 mata kuliah AI (Artificial Intelligence) atau kecerdasan buatan yang
          beranggotakan Hansen Jonatan sebagai Back End & Front End Dev, Sri sebagai Back End, Java
          sebagai UI UX desainer, Stanley sebagai UI UX desainer & Front End Dev dan Rubin
          sebagai UI UX Desainer.
        </p>

        <div className="flex justify-center pt-[100px]">
          <div className="flex flex-col">
            <h1 className="font-bold text-center">Dibuat oleh Mahasiswa UIB  </h1>
            <h3 className="font-extrabold text-center mt-8"> ( Universitas Internasional Batam )</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
