function Hero({ title, highlight, description }) {
  return (
    <section id="beranda" className="flex flex-col gap-4 md:gap-6">
      <div className="h-[235px] overflow-hidden rounded-xl md:h-[350px] lg:h-[440px]">
        <img src="/assets/hero.png" alt="Belajar bahasa Inggris bersama LUMOS"
          className="block h-full w-full object-cover" />
      </div>

      <div className="relative overflow-hidden rounded-xl bg-[#f7f8fc] px-[18px] py-[35px] text-center md:px-5 md:py-[45px]">
        <img src="/assets/hero1.png" alt=""
          className="absolute top-1/2 left-5 hidden w-[170px] -translate-y-1/2 lg:block" />

        <h1 className="relative z-10 mb-[18px] text-[27px] leading-[1.3] font-bold md:text-[40px]">
          {title}<br />
          <span className="text-[#3056d3]">{highlight}</span>
        </h1>

        <p className="relative z-10 mx-auto mb-[30px] max-w-[650px] text-sm leading-[1.8] md:text-base">
          {description}
        </p>

        <div className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-4">
          <a href="#program" className="inline-block rounded-xl bg-[#d5ff40] px-[18px] py-3 text-[13px] font-bold text-[#171c35] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-85 md:px-[26px] md:py-[13px] md:text-[15px]">
            Mulai Belajar
          </a>

          <a href="#tkami" className="inline-block rounded-xl border border-[#3056d3] bg-white px-[18px] py-3 text-[13px] font-bold text-[#3056d3] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-85 md:px-[26px] md:py-[13px] md:text-[15px]">
            Eksplor
          </a>
        </div>

        <img src="/assets/hero2.png" alt=""
          className="absolute top-1/2 right-5 hidden w-[170px] -translate-y-1/2 lg:block" />
      </div>
    </section>
  )
}

export default Hero
