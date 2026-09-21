function FooterBottom() {
  return (
    <section className="bg-blue-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Company logos */}
        <div className="flex flex-wrap items-center justify-between gap-8 border-b border-blue-500 pb-10">
          <div className="text-center">
            <p className="text-xl font-bold">
              CarTradeTech
            </p>

            <p className="text-sm">
              GROUP
            </p>
          </div>

          <div className="text-3xl font-extrabold">
            olx
          </div>

          <div className="text-xl font-bold">
            carwale
          </div>

          <div className="text-xl font-bold">
            bikewale
          </div>

          <div className="text-xl font-bold">
            CarWale
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-4 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            Help - Sitemap
          </div>

          <div>
            All rights reserved © 2006-2026 OLX
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterBottom;