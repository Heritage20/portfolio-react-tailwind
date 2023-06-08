import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="h-64 bg-grey pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-deep-blue">
            JANE ESPER
          </p>
          <p className="font-playfair text-md text-deep-blue">
            © {year} ESPER. Made with ❤️ from Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
