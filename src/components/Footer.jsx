function Footer({ links }) {
  return (
    <footer id="kontak" className="mt-[60px] bg-[#171c35] px-6 pt-[45px] pb-7">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[30px] flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {links.map((link) => (
            <span
              key={link.label}
              className="text-sm text-[#d1d5db]"
            >
              {link.label}
            </span>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#9ca3af]">
          © 2026 Lumos. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
