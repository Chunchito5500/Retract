import React from "react";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});
const SourceSans = localFont({
  src: "../../fonts/SourceSans3-Regular.ttf",
});

const FaqG = () => {
  return (
    <div className="bg-[#e6e6e9]">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2
            className={`text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 ${Roboto.className}`}
          >
            Our Goals for Sustainability
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className={`text-3xl text-gray-800 ${BebasNeue.className}`}>
                Biking: A Cleaner Way to Move
              </h3>
              <p className={`mt-2 text-gray-600 ${SourceSans.className}`}>
                Every foldable bike we design is meant to reduce dependency on
                cars. The Pioneer makes it easier to bike more, ride farther,
                and connect with public transit — cutting back on emissions with
                every trip.
              </p>
            </div>

            <div>
              <h3 className={`text-3xl text-gray-800 ${BebasNeue.className}`}>
                Engineering for Lower Impact
              </h3>
              <p className={`mt-2 text-gray-600 ${SourceSans.className}`}>
                As students, we’re building with intention. We’re designing
                smarter bikes that support cleaner living — compact, easy to
                store, and made to keep people riding instead of driving.
              </p>
            </div>

            <div>
              <h3 className={`text-3xl text-gray-800 ${BebasNeue.className}`}>
                Sourcing with Sustainability in Mind
              </h3>
              <p className={`mt-2 text-gray-600  ${SourceSans.className}`}>
                We don’t use carbon-neutral materials yet — but we’re working
                toward it. Our goal is to partner with manufacturers who share
                our vision for sustainability, quality, and ethical sourcing.
              </p>
            </div>

            <div>
              <h3 className={`text-3xl text-gray-800 ${BebasNeue.className}`}>
                Building Toward a Circular Future
              </h3>
              <p className={`mt-2 text-gray-600 ${SourceSans.className}`}>
                In the future, we aim to launch repair and recycling programs to
                keep bikes out of landfills. We want every Pioneer to have a
                long, useful life — and a responsible end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqG;
