const people = [
    {
      name: 'Gangaraju Hanumaiah',
      role: 'CEO & Founder RightTaxMate',
      imageUrl:
        'https://static.wixstatic.com/media/79b798_2e313d91c58d4cf09e9fdcd0dd181b16~mv2.jpg/v1/crop/x_86,y_136,w_832,h_860/fill/w_250,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gangaraj.jpg',
    },
    {
      name: 'Harish Karkal',
      role: 'ACA, EA admitted to practice before the IRS',
      imageUrl:
        'https://static.wixstatic.com/media/79b798_0878db8c800d48a5ae71fa5f53e95bd8~mv2.jpg/v1/crop/x_0,y_4,w_176,h_201/fill/w_246,h_266,al_c,lg_1,q_80,enc_avif,quality_auto/Harish.jpg',
    },
    {
      name: 'Prashanth K Shetty',
      role: 'Senior Tax Consultant RightTaxMate - Katy, TX',
      imageUrl:
        'https://static.wixstatic.com/media/79b798_dba328e505d743d39c84b5c08ec311f2~mv2.jpeg/v1/crop/x_71,y_0,w_314,h_335/fill/w_250,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Prashanth.jpeg',
    },
    {
      name: 'Sunil Kumar Arora',
      role: 'All India Rank Holder CA & CPA (USA)',
      imageUrl:
        'https://static.wixstatic.com/media/79b798_4cd18791cb7f456682a2322b61fc3527~mv2.png/v1/fill/w_232,h_251,al_c,lg_1,q_85,enc_avif,quality_auto/Sunil%20Kumar%20Arora.png',
    },
  ];
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  