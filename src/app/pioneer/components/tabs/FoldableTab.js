import Image from "next/image";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../../fonts/Roboto-Regular.ttf",
});
const SourceSans = localFont({
  src: "../../../fonts/SourceSans3-Regular.ttf",
});

const FoldableTab = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group flex flex-col h-full border border-gray-200 transition duration-300 rounded-xl p-5 w-full">
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/RealBikePics/Bworking.jpeg"
                alt="Blog Image"
                width={600}
                height={400}
              />
            </div>
            <div className="my-6">
              <h3
                className={`text-2xl font-semibold text-[#ccc5b9] ${BebasNeue.className}`}
              >
                Break it Down
              </h3>
              <p
                className={`mt-5 text-base text-[#faf8f4] ${SourceSans.className}`}
              >
                We started with a standard bike — and took it apart. Our goal
                was to identify every point of resistance in traditional folding
                bikes: clunky hinges, awkward geometry, and limited portability.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col h-full border border-gray-200 transition duration-300 rounded-xl p-5 w-full">
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/RealBikePics/Lworking.jpeg"
                alt="Blog Image"
                width={600}
                height={400}
              />
            </div>
            <div className="my-6">
              <h3
                className={`text-2xl font-semibold text-[#ccc5b9] ${BebasNeue.className}`}
              >
                Rethink the Design.
              </h3>
              <p
                className={`mt-5 text-base text-[#faf8f4] ${SourceSans.className}`}
              >
                From frame structure to locking mechanisms, we reengineered
                everything. We focused on maintaining a{" "}
                <strong>full-size ride feel</strong>, without the bulk that
                holds most folding bikes back.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col h-full border border-gray-200 transition duration-300 rounded-xl p-5 w-full">
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src="/RealBikePics/bikeBONE.png"
                alt="Blog Image"
                width={600}
                height={400}
              />
            </div>
            <div className="my-6">
              <h3
                className={`text-2xl font-semibold text-[#ccc5b9] ${BebasNeue.className}`}
              >
                The Result: The Pioneer
              </h3>
              <p
                className={`mt-5 text-base text-[#faf8f4] ${SourceSans.className}`}
              >
                The first full-sized, fully foldable bike designed to keep up
                with real life. Take it on a plane, fit it in your car, store it
                in your dorm — and ride without limits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoldableTab;
