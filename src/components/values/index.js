import { UserIcon, LightBulbIcon, LockClosedIcon, HandThumbUpIcon, CheckCircleIcon, DocumentTextIcon, ScaleIcon, CursorArrowRaysIcon, CalculatorIcon } from '@heroicons/react/24/outline'

export default function Values() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <UserIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Integrity</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Uphold the highest ethical standards in all financial matters, ensuring honesty, transparency, and accuracy.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <LightBulbIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Expertise</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Commit to continuous learning and development to provide clients with the most up-to-date knowledge.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <LockClosedIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Confidentiality</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Safeguard client information with discretion and confidentiality, respecting privacy and financial data.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <HandThumbUpIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Accountability</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Take ownership of your work, acknowledging and correcting mistakes when they occur.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <CheckCircleIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Innovation</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Embrace technology and innovative solutions to enhance efficiency and provide top-tier services.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <DocumentTextIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Accuracy</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Ensure precision and thoroughness in financial calculations to minimize errors and financial risks.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <ScaleIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Fairness</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Treat every client fairly, ensuring equal and unbiased financial advice and services.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <CursorArrowRaysIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Customer Focus</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Focus on building strong relationships with clients and understanding their financial needs.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
              <CalculatorIcon className="h-6 w-6 text-white" />
            </div>
            <dt className="mt-4 text-xl font-semibold text-white">Precision</dt>
            <dd className="mt-2 text-base text-gray-400 text-center">
              Maintain a high level of precision in all financial calculations and reports to avoid errors.
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}
