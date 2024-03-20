import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Sidebar from "./main";
import * as THREE from "three";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar glass bg-[#5ca4a9] min-w-full align-top top-0 items-center ">
        <div className="navbar-start">
          <div className="dropdown">
            {/* Line thingys */}

            <div class="drawer">
              <input id="my-drawer" type="checkbox" class="drawer-toggle" />
              <div class="drawer-content">
                <label for="my-drawer">
                  <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </div>
                </label>
              </div>
              <div class="drawer-side">
                <label
                  for="my-drawer"
                  aria-label="close sidebar"
                  class="drawer-overlay"
                ></label>
                <ul class="menu p-4 w-80 min-h-full bg-[#9bc1bc] text-[#e6ebe0]-content">
                  <li>
                    <div class="avatar">
                      <div className="width-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image
                          src="/retract-modified.png"
                          alt="Company Logo"
                          width={96} // Replace 96 with the actual width of your image
                          height={96} // Replace 96 with the actual height of your image
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="gallery.html">Explore Bikes</a>
                  </li>
                  <li>
                    <a>Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-center">
          <div class="dropdown dropdown-hover">
            <div
              tabindex="0"
              role="button"
              class="btn-success m-1 text-[#DCE5E6] hover:text-white"
            >
              <a className="text-xl font-sans">Retractability</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div tabindex="0" role="button" className="btn btn-ghost btn-circle">
            {/* <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  href="index.html"
                />
              </svg>
              <a href="index.html"></a>
              <span className="badge badge-sm indicator-item">8</span>
            </div> */}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full overflow-hidden">
                {/* <Image
              alt="Tailwind CSS Navbar component"
              src="/profile.jpg" // Assuming 'profile.jpg' is directly in the 'public' folder
              width={40} // The width of the image in pixels
              height={40} // The height of the image in pixels
              className="rounded-full" // Apply rounded corners
              /> */}
              </div>
            </div>
            <ul
              tabindex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Page */}

      <div className="bg-[#e6ebe0] py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-[#5ca4a9]">
                  A new way to bike
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#ed6a5a] sm:text-4xl">
                  The Quark Foldable Bike
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Introducing the Quark Foldable Bike, the next leap in cycling
                  innovation. Compact enough to fit in a backpack, it&apos;s
                  designed for the modern explorer.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* Video */}
            {/* <video loop autoPlay muted width="720" height="600">
              <source src="Bike2.mp4" type="video/MP4" />
            </video> */}
            <div width="800px" height="800px">
              <Script
                type="module"
                src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
              />
              <model-viewer
                src="bike folded 1.glb"
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                tone-mapping="commerce"
                poster="poster.webp"
                shadow-intensity="0"
                autoplay
                camera-orbit=""
                style={{
                  width: "100%",
                  height: "500px",
                  border: "2px solid #9bc1bc", // Assuming you still want the border
                  // transform: "rotateX(180deg)", // Rotate 180 degrees around the Y axis
                }}
              >
                <div class="progress-bar hide" slot="progress-bar">
                  <div class="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                  View in your space
                </button>
                <div id="ar-prompt"></div>
              </model-viewer>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>The Quark Foldable Bike reinvents the wheel.</p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-none text-[#5ca4a9]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Innovative Design:
                      </strong>{" "}
                      The Quark Foldable Bike reimagines cycling mobility,
                      offering unparalleled convenience without sacrificing
                      style or functionality. It&apos;s your go-anywhere
                      companion.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="mt-1 h-6 w-5 flex-none text-[#5ca4a9]"
                      viewBox="0 0 25 25"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM6.80317 11.25H9.35352C9.47932 10.8052 9.71426 10.4062 10.0276 10.0838L8.75225 7.87485C7.7184 8.68992 6.99837 9.88531 6.80317 11.25ZM10.0507 7.1238L11.3262 9.33314C11.5418 9.27884 11.7676 9.25 12 9.25C12.2324 9.25 12.4581 9.27883 12.6737 9.33312L13.9493 7.12378C13.3466 6.88264 12.6888 6.75 12 6.75C11.3112 6.75 10.6534 6.88265 10.0507 7.1238ZM15.2477 7.87481L13.9724 10.0837C14.2857 10.4062 14.5207 10.8052 14.6465 11.25H17.1968C17.0016 9.88529 16.2816 8.68988 15.2477 7.87481ZM17.1968 12.75H14.6465C14.5207 13.1949 14.2857 13.5939 13.9723 13.9163L15.2477 16.1252C16.2816 15.3102 17.0016 14.1147 17.1968 12.75ZM13.9492 16.8762L12.6736 14.6669C12.4581 14.7212 12.2324 14.75 12 14.75C11.7676 14.75 11.5419 14.7212 11.3263 14.6669L10.0507 16.8762C10.6534 17.1174 11.3112 17.25 12 17.25C12.6888 17.25 13.3465 17.1174 13.9492 16.8762ZM8.75229 16.1252L10.0276 13.9163C9.71428 13.5938 9.47933 13.1948 9.35352 12.75H6.80317C6.99837 14.1147 7.71842 15.3101 8.75229 16.1252ZM11.3859 13.089C11.3823 13.0869 11.3787 13.0847 11.375 13.0826C11.3715 13.0806 11.368 13.0786 11.3645 13.0766C10.9967 12.859 10.75 12.4583 10.75 12C10.75 11.5434 10.9949 11.1439 11.3605 10.9258C11.3653 10.9231 11.3702 10.9204 11.375 10.9176C11.3801 10.9146 11.3851 10.9116 11.3902 10.9086C11.5705 10.8076 11.7785 10.75 12 10.75C12.2204 10.75 12.4275 10.8071 12.6073 10.9072C12.6131 10.9107 12.619 10.9142 12.6249 10.9177C12.6306 10.9209 12.6362 10.9241 12.642 10.9272C13.0062 11.1457 13.25 11.5444 13.25 12C13.25 12.4595 13.0021 12.8611 12.6327 13.0783C12.6301 13.0797 12.6276 13.0812 12.625 13.0827C12.6222 13.0843 12.6194 13.0859 12.6166 13.0876C12.4347 13.191 12.2242 13.25 12 13.25C11.7768 13.25 11.5673 13.1915 11.3859 13.089ZM5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Durability Redefined:
                      </strong>{" "}
                      Say goodbye to the fear of flat tires. The Quark&apos;s
                      tires are crafted from a special pop-resistant material,
                      offering peace of mind on any adventure.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-none text-[#5ca4a9]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.584,1.617l-4.625,2.89L5.333,2.195L0.709,4.495v13.888l4.625-2.313l4.625,1.157l4.625-1.734l4.625,1.734
								V3.93L14.584,1.617z M18.053,15.492l-3.469-1.157l-4.625,1.734l-4.625-1.155l-3.468,1.734V5.086l3.468-1.734l4.625,2.312
								l4.625-2.891l3.469,1.734V15.492z M10.248,6.827c-0.16,0-0.29,0.163-0.29,0.363v6.781c0,0.201,0.129,0.363,0.29,0.363
								c0.16,0,0.289-0.162,0.289-0.363V7.19C10.537,6.99,10.408,6.827,10.248,6.827z M5.623,5.093c-0.16,0-0.29,0.163-0.29,0.363v7.938
								c0,0.201,0.129,0.363,0.29,0.363c0.16,0,0.289-0.162,0.289-0.363V5.456C5.912,5.256,5.783,5.093,5.623,5.093z M14.584,12.815
								c0,0.2,0.129,0.363,0.289,0.363s0.289-0.163,0.289-0.363V4.878c0-0.2-0.129-0.364-0.289-0.364s-0.289,0.164-0.289,0.364V12.815z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Versatility Unmatched:
                      </strong>{" "}
                      Engineered for every destination—work, college, parks,
                      urban landscapes, or trails. The Quark Foldable Bike
                      adapts to your lifestyle, ensuring you&apos;re ready for
                      wherever life takes you.
                    </span>
                  </li>
                </ul>
                <p className="mt-8"></p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"></h2>
                <p className="mt-6"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div>
        <section class="bg-[#e6ebe0]">
          <div class="py-4 lg:py-2 px-2 mx-auto max-w-screen-md">
            <h2 class="mb-16 text-4xl tracking-tight font-extrabold text-center text-[#ed6a5a]">
              Gallery
            </h2>
          </div>
        </section>
      </div>

      {/* Row1 */}
      <div class="bg-[#e6ebe0]">
        <div
          class=" bg-[#e6ebe0]"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingBottom: "60px", // This acts as the space between the rows
          }}
        >
          {/* Product1 */}
          <div class=" bg-[#e6ebe0]">
            <div
              class="box"
              style={{
                width: "480px",
                height: "680px",
                backgroundColor: "#DAD7CE",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <figure>
                <model-viewer
                  src="tire folded 1.glb"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  tone-mapping="commerce"
                  poster="poster.webp"
                  shadow-intensity="1"
                  autoplay
                  camera-orbit="-20deg 110deg"
                  style={{
                    width: "100%",
                    height: "500px",
                    border: "2px solid #5ca4a9",
                  }}
                >
                  <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                  </div>
                  <button slot="ar-button" id="ar-button">
                    View in your space
                  </button>
                  <div id="ar-prompt"></div>
                </model-viewer>
              </figure>
              <div
                class="card-body"
                style={{
                  backgroundColor: "#5ca4a9",
                }}
              >
                <h2 class="card-title font-sans">
                  The Retractability Bicycle Wheel:
                </h2>
                <p class="font-sans">Reinventing the wheel. Literally! </p>
                <p class="font-serif">
                  {" "}
                  With Retractability&apos;s take on the bicyle wheel, our
                  airless tires allow users to maintain the traditional bike
                  feel, without the fear of popping tires.
                </p>
                <div class="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          {/* Product2 */}
          <div class=" bg-[#e6ebe0]">
            <div
              class="box"
              style={{
                width: "480px",
                height: "680px",
                backgroundColor: "#DAD7CE",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <figure>
                <model-viewer
                  src="bike unfolded 1.glb"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  tone-mapping="commerce"
                  poster="poster.webp"
                  shadow-intensity="1"
                  autoplay
                  camera-orbit=""
                  style={{
                    width: "100%",
                    height: "500px",
                    border: "2px solid #5ca4a9",
                  }}
                >
                  <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                  </div>
                  <button slot="ar-button" id="ar-button">
                    View in your space
                  </button>
                  <div id="ar-prompt"></div>
                </model-viewer>
              </figure>
              <div
                class="card-body"
                style={{
                  backgroundColor: "#5ca4a9",
                }}
              >
                <h2 class="card-title font-sans">
                  The Retractability Bicycle:
                </h2>
                <p class="font-sans">
                  Traditional Bikes, with a Compact Design
                </p>
                <p class="font-serif">
                  {" "}
                  Retractability Bicycles offer a breath of fresh air to the
                  foldable biking industry. Our bikes are designed to be
                  durable, efficient, and the next step in biking.
                </p>
                <div class="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stuff */}

      <div>
        <section class="bg-[#e6ebe0]">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#ed6a5a]">
              Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Want to know more? Have a question? Need details about our
              business plan? Let us know at{" "}
              <font color="#3CC8FF">retractabilitybicycles@gmail.com</font>
            </p>
            {/* <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#9bc1bc] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#9bc1bc] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#9bc1bc] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:dark:text-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form> */}
          </div>
        </section>
      </div>

      {/* <div className="bg-[#e6ebe0] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Transactions every year
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                4
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Assets under holding
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                12
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                New users annually
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                6
              </dd>
            </div>
          </dl>
        </div>
      </div> */}

      {/* More Stuff */}

      {/* <div>
        <div className="bg-[#e6ebe0] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/Image/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/Image/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/Image/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/Image/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/Image/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width="158"
                height="48"
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <footer class="bg-[#e6ebe0]">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="index.html" class="hover:underline">
              Retractability
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
}
