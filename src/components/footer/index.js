export default function Footer() {
    return (
      <footer className="bg-[#101828] text-white py-12">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
            <p className="text-center text-sm md:text-base">
              © 2023 by <strong>RightTaxMate</strong>. All rights reserved.
            </p>
            <div className="flex space-x-8 justify-center items-center">
              <a
                href="https://vimeo.com/489659021"
                className="text-gray-400 hover:text-white transform transition duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://static.wixstatic.com/media/b9564d85709a42348c5c2fcb2b355ee5.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b9564d85709a42348c5c2fcb2b355ee5.png"
                  alt="Vimeo"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.facebook.com/RightTaxMate/"
                className="text-gray-400 hover:text-white transform transition duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e316f544f9094143b9eac01f1f19e697.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCl9w_oKbS3fMZgzN3krwvgw/featured"
                className="text-gray-400 hover:text-white transform transition duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://static.wixstatic.com/media/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a1b09fe8b7f04378a9fe076748ad4a6a.png"
                  alt="YouTube"
                  className="w-10 h-10"
                />
              </a>
            </div>
            <div className="flex space-x-8 justify-center">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-base">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white text-base">
                Terms of Service
              </a>
              <a href="/terms-of-use" className="text-gray-400 hover:text-white text-base">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  