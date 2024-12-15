import { AcademicCapIcon, BanknotesIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Tax',
    description:
      'Our experts deliver personalized tax advice to thousands of clients, addressing a wide range of financial circumstances and goals. We specialize in managing the tax affairs of individuals, small businesses, and large corporations across the USA and globally. Our tailored solutions ensure compliance, optimize savings, and promote sustainable financial success.',
    icon: BanknotesIcon,
  },
  {
    name: 'Bookkeeping & Payroll',
    description:
      'We offer comprehensive bookkeeping, tax audit, and preparation services to reduce costs and ensure regulatory compliance. Our expertise helps maximize business income and expense efficiency, hold employees accountable, and minimize exposure to financial and tax audit risks, ensuring smooth operations and long-term financial stability for your business.',
    icon: AcademicCapIcon,
  },
  {
    name: 'International Compliance',
    description:
      'Indian nationals or individuals of Indian origin in the U.S. face challenges transferring funds due to Indian tax laws, Reserve Bank regulations, and compliance requirements. We ensure seamless repatriation by providing guidance, certifications, and support for FBAR (Foreign Bank Account Reporting) and OVDP (Offshore Voluntary Disclosure Program), ensuring full legal compliance.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Business Services',
    description:
      'We offer comprehensive services to support businesses at every stage, including Business Formation to establish the right legal and operational structure, Virtual CFO/Controller Services to provide strategic financial management and drive operational efficiency, and expert IRS Representation to resolve audits, disputes, and compliance issues.',
    icon: UserGroupIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Our Services</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Tailored Solutions to Meet Your Needs
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            We provide expert services that cater to your financial, tax, and business needs, ensuring compliance and driving long-term success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <service.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
