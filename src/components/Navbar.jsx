function Navbar({ navLinks }) {
  return (
    <header className="bg-[#f7f8fc]">
      <div className="mx-auto flex min-h-[74px] w-[95%] max-w-[1280px] flex-col items-center justify-between gap-4 border-b border-[#e8eaf1] py-[18px] md:flex-row md:px-[10px] md:py-3 lg:px-[30px]">
        <a href="/#beranda">
          <img src="/assets/logo.png" alt="LUMOS" className="block w-[140px] lg:w-[170px]" />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-[18px] gap-y-3 md:gap-x-[15px] lg:gap-x-[30px]">
          {navLinks.map((menu) => (
            <a key={menu.href} href={`/${menu.href}`}
              className="text-[13px] font-bold text-[#171c35] hover:text-[#3056d3] lg:text-[15px]">
              {menu.label}
            </a>
          ))}

          <a href="/#program" className="inline-block rounded-xl bg-[#3056d3] px-[25px] py-[10px] text-[13px] font-bold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#2047c5] lg:text-[15px]">
            Daftar
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar