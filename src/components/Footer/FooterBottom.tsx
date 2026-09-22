function FooterBottom() {
  return (
    <section className="bg-[#1B4DB1] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <div className="flex items-center gap-10 overflow-x-auto border-b border-blue-400/40 pb-6 sm:gap-16 sm:pb-7 lg:gap-20">
          <div className="flex shrink-0 items-center gap-6 border-r border-blue-300/40 pr-8 sm:pr-10">
            <img
              src="/images/cartrade_tech.svg"
              alt="CarTradeTech Group"
              className="h-10 w-auto shrink-0 object-contain sm:h-12"
            />
          </div>

          <img
            src="/images/olx_2025.svg"
            alt="OLX"
            className="h-11 w-auto shrink-0 object-contain sm:h-14"
          />

          <img
            src="/images/carwale.svg"
            alt="CarWale"
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
          />

          <img
            src="/images/bikewale.svg"
            alt="BikeWale"
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
          />

          <img
            src="/images/cartrade.svg"
            alt="CarTrade"
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
          />

          <img
            src="/images/mobility.svg"
            alt="Mobility Outlook"
            className="h-12 w-auto shrink-0 object-contain sm:h-14"
          />
        </div>
  
        <div className="flex flex-col gap-3 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>Help - Sitemap</div>
          <div>All rights reserved © 2026 OLX</div>
        </div>
      </div>
    </section>
  );
}

export default FooterBottom;
