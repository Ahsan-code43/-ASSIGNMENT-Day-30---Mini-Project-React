function FeatureCard({ image, alt, title, description }) {
  return (
    <div className="rounded-xl border border-[#dce2ed] bg-white p-6 transition-all duration-200 ease-out hover:-translate-y-1">
      <img src={image} alt={alt}
        className="mb-5 h-[45px] w-[45px] object-contain" />

      <h3 className="mb-[10px] text-[17px] font-bold">
        {title}
      </h3>

      <p className="text-sm leading-[1.7] text-[#3056d3]">
        {description}
      </p>
    </div>
  )
}

function FeatureSection({ id, title, description, items }) {
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
        {items.map((fitur) => (
          <FeatureCard
            key={fitur.title}
            image={fitur.image}
            alt={fitur.alt}
            title={fitur.title}
            description={fitur.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
