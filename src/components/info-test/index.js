const posts = [
    {
      id: 1,
      title: 'OUR VISION',
      description:
        'At RightTaxMate, our vision is to be the leading authority in the field of taxation and accounting, recognized for our unwavering commitment to excellence and innovation. We aspire to set new industry standards by continuously adapting to changing financial landscapes, leveraging cutting-edge technology, and providing a client experience that is second to none. Our goal is to become the go-to destination for individuals and businesses seeking expert financial advice, a trusted partner in their financial journeys, and a hub of knowledge and insight within our community. We envision a future where financial success is within reach for everyone we serve, and where RightTaxMate is synonymous with integrity, expertise, and transformative financial solutions.',
    },
    {
      id: 2,
      title: 'OUR MISSION',
      description:
        'At RightTaxMate, our mission is to provide expert financial guidance and support to individuals and businesses, enabling them to navigate the complex landscape of taxes and finances with confidence and ease. We are committed to delivering unparalleled service, fostering lasting relationships, and achieving the highest standards of integrity and professionalism in all that we do. Our goal is to empower our clients to make informed financial decisions, optimize their tax strategies, and achieve their financial objectives. With a team of dedicated professionals, cutting-edge technology, and a client-centered approach, we strive to be the trusted partner that our clients rely on for all their accounting and tax needs. Together, we\'ll build a solid foundation for your financial success.',
    },
  ];
  
  export default function InfoTest() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">About Us</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Discover our mission and vision for success.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-sm/6 text-gray-600">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  