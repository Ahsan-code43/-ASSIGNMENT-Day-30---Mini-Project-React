function MentorSection({ id, title, description }) {
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
    </section>
  )
}

export default MentorSection