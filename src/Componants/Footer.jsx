/* eslint-disable */
import RevRateLogo from "../assets/logo.svg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <div className="sm:flex justify-center items-start bg-orange-500 mt-28 gap-x-14 p-12">
      <img
        className="h-36  pt-4"
        src={RevRateLogo}
        alt="Your Company"
      />

      <ul className="list-none space-y-2 p-4">
        <li>
          <a
            href="#learn-more"
            className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
          >
            Learn More
          </a>
        </li>
        <li>
          <a
            href="#about-lift"
            className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
          >
            About Lift
          </a>
        </li>
        <li>
          <a
            href="#press-releases"
            className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
          >
            Press Releases
          </a>
        </li>
        <li>
          <a
            href="#environment"
            className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
          >
            Environment
          </a>
        </li>
        <li>
          <a
            href="#jobs"
            className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
          >
            Jobs
          </a>
        </li>
        <li>
          <a
            href="#privacy-policy"
            className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#contact-us"
            className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
          >
            Contact Us
          </a>
        </li>
      </ul>

      <ul className="list-none space-y-2 p-4">
        <li>
          <span className="text-base font-medium text-slate-200">
            Contact Us
          </span>
        </li>
        <li>
          <span className="text-base text-slate-200">
            Ticket Office: 123-456-7890
          </span>
        </li>
        <li>
          <span className="text-base text-slate-200">
            Hotel Reservation: (+20) 2 3836739
          </span>
        </li>
      </ul>

      <ul className="list-none space-y-2 p-4">
        <li>
          <a
            href="#learn-more"
            className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
          >
            Social media
          </a>
        </li>
        <div className="flex gap-x-4">
          <li>
            <a
              href="#"
              className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
            >
              <img className="w-5" src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a
              href="#about-lift"
              className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
            >
              <img className="w-5" src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a
              href="#about-lift"
              className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
            >
              <img className="w-5" src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a
              href="#about-lift"
              className="text-base font-medium text-slate-200 hover:text-gray-500 transition-colors duration-300"
            >
              <img className="w-5" src={youtube} alt="" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
