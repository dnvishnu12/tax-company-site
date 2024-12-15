import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Info() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 lg:mx-[10rem] lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-1 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            OUR VISION
          </h2>
          <p className="mt-4 text-left">
            At RightTaxMate, our vision is to be the leading authority in the
            field of taxation and accounting, recognized for our unwavering
            commitment to excellence and innovation. We aspire to set new
            industry standards by continuously adapting to changing financial
            landscapes, leveraging cutting-edge technology, and providing a
            client experience that is second to none. Our goal is to become the
            go-to destination for individuals and businesses seeking expert
            financial advice, a trusted partner in their financial journeys, and
            a hub of knowledge and insight within our community. We envision a
            future where financial success is within reach for everyone we
            serve, and where RightTaxMate is synonymous with integrity,
            expertise, and transformative financial solutions.
          </p>
        </div>
        <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-1 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            OUR MISSION
          </h2>
          <p className="mt-4 text-left">
            At RightTaxMate, our mission is to provide expert financial guidance
            and support to individuals and businesses, enabling them to navigate
            the complex landscape of taxes and finances with confidence and
            ease. We are committed to delivering unparalleled service, fostering
            lasting relationships, and achieving the highest standards of
            integrity and professionalism in all that we do. Our goal is to
            empower our clients to make informed financial decisions, optimize
            their tax strategies, and achieve their financial objectives. With a
            team of dedicated professionals, cutting-edge technology, and a
            client-centered approach, we strive to be the trusted partner that
            our clients rely on for all their accounting and tax needs.
            Together, we'll build a solid foundation for your financial success.
          </p>
        </div>
      </div>
    </div>
  );
}
