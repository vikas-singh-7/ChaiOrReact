import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("");
  const setNavigate = useNavigate();
  return (
    <div>
      <div class="relative w-full bg-green-600 text-white">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div class="inline-flex items-center space-x-2">
            <span class="font-bold">DevUI</span>
          </div>
          <div class="hidden lg:block">
            <ul class="ml-12 inline-flex space-x-8 ">
              <li>
                <Link
                  to="/"
                  class="inline-flex items-center text-sm font-semibold text-white hover:text-white-900"
                >
                  Home
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="inline-flex items-center text-sm font-semibold text-white-800 hover:text-white-900"
                >
                  About
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  class="inline-flex items-center text-sm font-semibold text-white-800 hover:text-white-900"
                >
                  Contact
                  <span>
                    <svg
                      xmlns="https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div class="flex grow justify-end">
            <input
              class="flex h-10 w-[250px] rounded-md bg-white-100 px-3 py-2 text-lg placeholder:text-black-900 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 border-2 border-black text-black"
              type="text"
              placeholder="Search"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <button
                onClick={() => {
                  if (value == "car") {
                    console.log(value);
                    setNavigate("/car");
                    setValue("")
                  }
                }}
                type="button"
                class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-white ml-3"
              >
                submit
              </button>
            </div>
          </div>
          <div class="ml-2 mt-2 hidden lg:block">
            <span class="relative inline-block">
              <img
                class="h-10 w-10 rounded-full"
                src="https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w"
                alt="Dan_Abromov"
              />
              <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
            </span>
          </div>
          <div class="ml-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
