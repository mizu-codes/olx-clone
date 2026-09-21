function FooterTop() {
  return (
    <section className="bg-gray-100">
      {/* App promotion */}
      <div className="border-b border-gray-200 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              TRY THE OLX APP
            </h2>

            <p className="mt-3 max-w-xl text-lg text-gray-700">
              Buy, sell and find just about anything using the
              app on your mobile.
            </p>
          </div>

          <div>
            <p className="mb-3 font-bold text-gray-900">
              GET YOUR APP TODAY
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                 App Store
              </button>

              <button
                type="button"
                className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                ▶ Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-10 md:grid-cols-5">
        <div>
          <h3 className="mb-5 font-bold text-gray-900">
            POPULAR LOCATIONS
          </h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>Chennai</p>
            <p>Pune</p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-gray-900">
            TRENDING LOCATIONS
          </h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p>Bhubaneswar</p>
            <p>Hyderabad</p>
            <p>Chandigarh</p>
            <p>Nashik</p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-gray-900">
            ABOUT US
          </h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p>About OLX India</p>
            <p>Ask VAYA AI</p>
            <p>Tech@OLX</p>
            <p>Careers</p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-gray-900">
            OLX
          </h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p>Help</p>
            <p>Sitemap</p>
            <p>Legal & Privacy information</p>
            <p>Vulnerability Disclosure Program</p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-gray-900">
            FOLLOW US
          </h3>

          <div className="flex gap-2 text-sm font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
              f
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white">
              ◎
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white">
              ▶
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              X
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterTop;