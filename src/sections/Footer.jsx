import { socialImgs } from "../constants";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
          <a
            href="tel:+0862393786"
            className="flex max-w-full items-center gap-2 px-2 py-1 rounded-md transition"
            aria-label="Phone"
          >
            <FaPhoneAlt className="text-white text-sm shrink-0" />
            <p className="text-white text-sm font-medium leading-tight">0862 393 786</p>
          </a>
          <a
            href="mailto:namnam140399@gmail.com"
            className="flex max-w-full min-w-0 items-center gap-2 px-2 py-1 rounded-md transition md:min-w-fit"
            aria-label="Email"
          >
            <FaEnvelope className="text-white text-sm shrink-0" />
            <p className="text-white text-sm font-medium leading-tight break-all">
              namnam140399@gmail.com
            </p>
          </a>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a href={socialImg.link} target="_blank" rel="noopener noreferrer">
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Nam Pham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
