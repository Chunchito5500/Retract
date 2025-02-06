// /navcomponents/AboutNav.js
const AboutNav = () => (
  <div className="absolute top-full left-0 w-full bg-[rgba(29,38,59,0.85)] shadow-lg p-6 animate-slideDown z-50">
    <div className="max-w-screen-lg mx-auto flex justify-between space-x-6">
      {/* Horizontal Links */}
      <a
        href="/aboutus"
        className="font-raleway text-white group"
        style={{ fontSize: "36px" }} // Set font size directly
      >
        About Us
        <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
      </a>
      {/* <a
        href="#"
        className="font-raleway text-white group"
        style={{ fontSize: "36px" }} // Set font size directly
      >
        Contact Us
        <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
      </a>
      <a
        href="#"
        className="font-raleway text-white group"
        style={{ fontSize: "36px" }} // Set font size directly
      >
        Blog Page
        <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
      </a>
      <a
        href="/privacypolicy"
        className="font-raleway text-white group"
        style={{ fontSize: "36px" }} // Set font size directly
      >
        Newsletter
        <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
      </a> */}
    </div>
  </div>
);

export default AboutNav;
