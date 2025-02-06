// /navcomponents/GalleryNav.js
const GalleryNav = () => (
  <div className="absolute top-full left-0 w-full bg-[rgba(29,38,59,0.85)] shadow-lg p-6 animate-slideDown z-50">
    <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-6">
      {/* Left Section: Stacked Links */}
      <div className="space-y-4">
        <a
          href="/gallery"
          className="block font-raleway text-white text-left group"
          style={{ fontSize: "40px" }} // Set font size directly
        >
          Gallery
          <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        {/* <a
          href="/features"
          className="block font-raleway text-white text-left group"
          style={{ fontSize: "40px" }} // Set font size directly
        >
          Features
          <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a> */}
        <a
          href="/privacypolicy"
          className="block font-raleway text-white text-left group"
          style={{ fontSize: "40px" }} // Set font size directly
        >
          Privacy Policy
          <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
      </div>

      {/* Right Section: Card Template */}
      <div className="col-span-2">
        {/* <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
              className="object-cover h-48 w-full lg:h-auto lg:w-1/3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
);

export default GalleryNav;
