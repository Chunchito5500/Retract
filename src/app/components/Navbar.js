import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar glass bg-[#5ca4a9] min-w-full align-top top-0 items-center ">
      <div className="navbar-start">
        <div className="dropdown">
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
                {/* <li>
                  <div class="avatar">
                    <div className="width-24 rounded-full ring ring-[#9bc1bc] ring-offset ring-offset-2">
                      <Image
                        src="/retract-modified.png"
                        alt="Company Logo"
                        width={96} // Replace 96 with the actual width of your image
                        height={96} // Replace 96 with the actual height of your image
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </li> */}
                <li>
                  <Link href="/" legacyBehavior>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/explore" legacyBehavior>
                    Explore Bikes
                  </Link>
                </li>
                <li>
                  <Link href="/cart" legacyBehavior>
                    Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-center">
        <div className="dropdown dropdown-hover">
          <Link href="/" legacyBehavior>
            <a
              tabIndex="0"
              role="button"
              className="btn-success m-1 text-[#DCE5E6] hover:text-white text-xl font-sans"
            >
              Retractability
            </a>
          </Link>
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
  );
};

export default Navbar;
