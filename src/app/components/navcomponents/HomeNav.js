import Link from "next/link";
import Image from "next/image";

const HomeNav = () => (
  <div className="absolute top-full left-0 w-full bg-[rgba(29,38,59,0.85)] shadow-lg p-6 animate-slideDown z-50">
    <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-24">
      {/* The Pioneer Card */}
      <Link href="/pioneer" className="block w-full h-full">
        <div className="card bg-white/10 backdrop-blur-lg shadow-xl transition-transform hover:shadow-2xl hover:scale-105 w-full h-full flex flex-col rounded-lg border border-white/20 cursor-pointer">
          <figure className="px-10 pt-10">
            <Image
              src="/bikeBONE.png"
              alt="Pioneer"
              width={300}
              height={250}
              className="rounded-xl object-cover"
            />
          </figure>
          <div className="card-body items-center text-center flex-1">
            <h2 className="card-title text-white">
              The Pioneer{" "}
              <span className="badge badge-secondary ml-2">Coming Soon!</span>
            </h2>
            <p className="text-gray-300 mb-2">
              The first bike to pioneer the change in the biking industry.
            </p>
          </div>
        </div>
      </Link>

      {/* The Pioneer Lite Card (Non-Clickable) */}
      <div className="cursor-not-allowed card bg-white/10 backdrop-blur-lg shadow-xl w-full h-full flex flex-col justify-center items-center rounded-lg border border-white/20">
        <div className="card-body text-center flex flex-col items-center">
          <h2 className="card-title text-white px-10 pt-20">
            The Pioneer Lite{" "}
            <span className="badge badge-outline ml-2">In Development</span>
          </h2>
          <p className="text-gray-300">A smaller model in the works!</p>
        </div>
      </div>
    </div>
  </div>
);

export default HomeNav;
