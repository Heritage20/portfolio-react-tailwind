import linkedIn from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedIn} alt="linkedin-link" />
      </a>
      <a
        href="https://www.twitter.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="twitter-link" />
      </a>
      <a
        href="https://www.facebook.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook-link" />
      </a>
      <a
        href="https://www.instagram.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
