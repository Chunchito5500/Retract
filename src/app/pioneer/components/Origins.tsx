import Image from "next/image";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../../fonts/Roboto-Regular.ttf",
});

const Origins = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2
          className={`text-5xl sm:text-6xl text-[#faf8f4] font-bold mt-8 mb-12 text-center ${BebasNeue.className}`}
        >
          A Full-Sized Ride — That Folds to Fit Your Life
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group flex flex-col h-full bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 rounded-xl p-6 w-full hover:transform hover:scale-[1.02]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src="/PioneerFeatures/Bworking.jpeg"
                alt="Breaking down traditional bike design"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3
                className={`text-2xl font-semibold text-[#ccc5b9] mb-4 ${BebasNeue.className}`}
              >
                Break it Down
              </h3>
              <p
                className={`text-base text-[#faf8f4]/90 leading-relaxed flex-1 ${Roboto.className}`}
              >
                We started with a standard bike — and took it apart. Our goal
                was to identify every point of resistance in traditional folding
                bikes: clunky hinges, awkward geometry, and limited portability.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col h-full bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 rounded-xl p-6 w-full hover:transform hover:scale-[1.02]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src="/PioneerFeatures/Lworking.jpeg"
                alt="Rethinking bike design process"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3
                className={`text-2xl font-semibold text-[#ccc5b9] mb-4 ${BebasNeue.className}`}
              >
                Rethink the Design
              </h3>
              <p
                className={`text-base text-[#faf8f4]/90 leading-relaxed flex-1 ${Roboto.className}`}
              >
                From frame structure to locking mechanisms, we reengineered
                everything. We focused on maintaining a{" "}
                <strong className="text-[#ccc5b9]">full-size ride feel</strong>, without the bulk that
                holds most folding bikes back.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col h-full bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 rounded-xl p-6 w-full hover:transform hover:scale-[1.02] md:col-span-2 lg:col-span-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src="/news/origin/bikechain.JPEG"
                alt="The Pioneer folding bike result"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3
                className={`text-2xl font-semibold text-[#ccc5b9] mb-4 ${BebasNeue.className}`}
              >
                The Result: The Pioneer
              </h3>
              <p
                className={`text-base text-[#faf8f4]/90 leading-relaxed flex-1 ${Roboto.className}`}
              >
                The first full-sized, fully foldable bike designed to keep up
                with real life. Take it on a plane, fit it in your car, store it
                in your dorm — and ride without limits.
              </p>
            </div>
          </div>
        </div>
        <div style={{ height: 110 }} />
      </div>
    </>
  );
};

export default Origins;