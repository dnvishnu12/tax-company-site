export default function CeoMessage() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt=""
            src="https://static.wixstatic.com/media/79b798_2c0f2dad800d4fd68e0ea8dbdf0da7a0~mv2.png/v1/fill/w_389,h_69,al_c,lg_1,q_85,enc_avif,quality_auto/RTM_logo.png"
            className="mx-auto h-12"
          />
          <figure className="mt-10">
              <p className="text-gray-600 text-center">
                “Welcome to RightTaxMate! At RightTaxMate, we're more than just
                numbers and spreadsheets. We're your dedicated team of tax and
                accounting professionals committed to helping individuals and
                businesses navigate the complex world of finance with ease and
                confidence. With a wealth of experience and expertise, we've been
                serving our clients with top-notch tax and accounting services for
                15+ years. What sets us apart from the rest? It's our unwavering
                commitment to delivering personalized, client-centric services.
                When you choose RightTaxMate, you're not just a client; you're a
                valued partner on a shared journey towards financial success. We
                take the time to understand your unique needs and goals, and we
                work tirelessly to tailor our services to meet and exceed your
                expectations. Our team of seasoned professionals stays up to date
                with the ever-changing tax laws and financial regulations,
                ensuring that you benefit from the most relevant and advantageous
                strategies. We provide a wide range of services from Tax Planning
                to Business Advisory. ​ We look forward to being your trusted
                partner on your journey to financial success.”
              </p>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://static.wixstatic.com/media/79b798_2e313d91c58d4cf09e9fdcd0dd181b16~mv2.jpg/v1/crop/x_86,y_136,w_832,h_860/fill/w_250,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gangaraj.jpg"
                className="mx-auto size-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-sm">
                <div className="font-semibold text-gray-900">
                  Gangaraju Hanumaiah
                </div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">Founder & CEO</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    );
  }
  