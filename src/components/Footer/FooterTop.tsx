function Footer() {
  return (
    <section className="bg-gray-100">
      <div className="border-b border-gray-200 px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:items-center md:gap-6 lg:gap-8">
          <div className="w-full max-w-xs shrink-0 sm:max-w-sm md:w-auto">
            <img
              src="/images/phone-app.webp"
              alt="OLX App"
              className="h-auto w-full object-contain md:h-36 md:w-auto lg:h-44"
            />
          </div>

          <div className="flex flex-1 flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                TRY THE OLX APP
              </h2>

              <p className="mt-2 max-w-md text-base text-gray-700 sm:text-lg">
                Buy, sell and find just about anything using the app on your
                mobile.
              </p>
            </div>

            <div className="hidden h-16 w-px shrink-0 bg-gray-300 md:block" />

            <div className="flex flex-col items-center md:items-start">
              <p className="mb-2 font-bold text-gray-900">GET YOUR APP TODAY</p>

              <div className="flex flex-col items-center gap-2 md:items-start">
                <a href="#" className="shrink-0">
                  <img
                    src="/images/appstore_2x.webp"
                    alt="Download on the App Store"
                    className="h-9 w-auto object-contain sm:h-10"
                  />
                </a>

                <a href="#" className="shrink-0">
                  <img
                    src="/images/playstore_2x.webp"
                    alt="Get it on Google Play"
                    className="h-9 w-auto object-contain sm:h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-8 sm:px-6 md:grid-cols-5 md:gap-x-8 lg:px-8">
        <div>
          <h3 className="mb-4 font-bold text-gray-900">POPULAR LOCATIONS</h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>Chennai</p>
            <p>Pune</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gray-900">TRENDING LOCATIONS</h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p>Bhubaneswar</p>
            <p>Hyderabad</p>
            <p>Chandigarh</p>
            <p>Nashik</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gray-900">ABOUT US</h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p>About OLX India</p>
            <p>Ask VAYA AI</p>
            <p>Tech@OLX</p>
            <p>Careers</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gray-900">OLX</h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p>Help</p>
            <p>Sitemap</p>
            <p>Legal & Privacy information</p>
            <p>Vulnerability Disclosure Program</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gray-900">FOLLOW US</h3>

          <img
            src="/images/socials.png"
            alt="Follow us on social media"
            className="h-8 w-auto object-contain sm:h-9"
          />

          <div className="mt-4 flex flex-col items-start gap-2">
            <img
              src="/images/appstore_1.png"
              alt="Get it on Google Play"
              className="h-10 w-auto object-contain"
            />

            <img
              src="/images/googleplay_1.png"
              alt="Download on the App Store"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
