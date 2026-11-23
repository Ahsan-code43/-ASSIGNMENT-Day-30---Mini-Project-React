function ProgramCard({ image, alt, title, description }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#dce2ed] bg-white transition-all duration-200 ease-out hover:-translate-y-1">
      <img
        src={image}
        alt={alt}
        className="block h-[210px] w-full object-cover"
      />

      <h3 className="mx-5 mt-5 mb-[10px] text-lg font-bold">
        {title}
      </h3>

      <p className="mx-5 mb-6 text-sm leading-[1.7] text-[#475467]">
        {description}
      </p>
    </div>
  )
}

function ProgramSection({ id, title, description, items }) {
  return (
    <section id={id} className="mt-4 rounded-xl bg-[#f7f8fc] px-[18px] py-[30px] md:mt-6 md:px-[30px] md:py-10">
      <div className="mb-7">
        <h2 className="mb-[14px] text-2xl font-bold md:text-[30px]">
          {title}
        </h2>

        <p className="text-[15px] leading-[1.8]">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {items.map((program) => (
          <ProgramCard
            key={program.title}
            image={program.image}
            alt={program.alt}
            title={program.title}
            description={program.description}
          />
        ))}
      </div>

      <div className="mt-[35px] text-center">
        <a
          href="#beranda"
          className="inline-block rounded-xl bg-[#d5ff40] px-[26px] py-[13px] text-[15px] font-bold text-[#171c35] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-85"
        >
          Kembali ke Atas
        </a>
      </div>
    </section>
  )
}

export default ProgramSection
