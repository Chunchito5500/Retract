import Link from "next/link";
import Image from "next/image";

const HomeNav = () => (
  <div className="absolute top-full left-0 w-full bg-[rgba(29,38,59,0.85)] shadow-lg p-6 animate-slideDown z-50">
    <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-24">
      {/* The Pioneer Card */}
      <Link href="/quark" className="w-full">
        <div className="card bg-[#39434c] shadow-xl transition-all hover:shadow-2xl w-full h-full flex flex-col">
          <figure className="px-10 pt-10">
            <Image
              src="RetractOrange.png"
              alt="Pioneer"
              className="rounded-xl transition-transform duration-500 hover:scale-110 h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center flex-1">
            <h2 className="card-title text-gray-800 dark:text-white">
              The Pioneer{" "}
              <span className="badge badge-secondary ml-2">NEW</span>
            </h2>
            <p className="text-gray-500 dark:text-neutral-400">
              The first bike to pioneer the change in the biking industry.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </Link>

      {/* The Pioneer Lite Card */}
      <Link href="/pioneerlite" className="w-full">
        <div className="card bg-[#464E55] shadow-xl transition-all hover:shadow-2xl w-full h-full flex flex-col">
          <figure className="px-10 pt-10">
            <Image
              src="pioneerlitegif.gif"
              alt="Pioneer Lite"
              className="rounded-xl transition-transform duration-500 hover:scale-110 h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center flex-1">
            <h2 className="card-title text-gray-800 dark:text-white">
              The Pioneer Lite{" "}
              <span className="badge badge-outline ml-2">In Development</span>
            </h2>
            <p className="text-gray-500 dark:text-neutral-400">
              A smaller model in the works!
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default HomeNav;
