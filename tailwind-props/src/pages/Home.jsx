import React from "react";

const Blog = () => {
  return (
    
      <div>
        <div class="mx-auto max-w-7xl px-2">
          <div class="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <p class="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              Resources and insights
            </p>
            <p class="max-w-4xl text-base text-gray-600 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              veritatis voluptates neque itaque repudiandae sint, explicabo
              assumenda quam ratione placeat?
            </p>
            <div class="mt-6 flex w-full items-center space-x-2 md:w-1/3">
              <input
                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Search Topics"
              />
              <button
                type="button"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Search
              </button>
            </div>
          </div>
          <div class="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
            <div class="flex w-full items-end border-b border-gray-300">
              <div class="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
                Design
              </div>
              <div class="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
                Product
              </div>
              <div class="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
                Software Engineering
              </div>
              <div class="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
                Customer Success
              </div>
            </div>
          </div>
          <div class="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="border">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Design
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  10 Tips for Crafting the Perfect UX Portfolio
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Learn how to showcase your design skills and stand out in a
                  crowded job market.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg"
                    alt="Emily Lee"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      Emily Lee
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      3 April 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border">
              <img
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Technology
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  The Future of Mobile App Development
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Discover the latest trends and techniques that will shape the
                  future of mobile app development.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="John Smith"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      John Smith
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      1 April 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Business
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  How to Launch a Successful Startup
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Learn the essential steps to launch a successful startup and
                  make your dreams a reality.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah Brown"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      Sarah Brown
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      28 March 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border">
              <img
                src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Health
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  The Benefits of Mindfulness Meditation
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Discover the scientifically proven benefits of mindfulness
                  meditation and how it can improve your health and wellbeing.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                    alt="David Kim"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      David Kim
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      25 March 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border">
              <img
                src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Education
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  Why Learning a Second Language is Important
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Explore the benefits of learning a second language and how it
                  can improve your cognitive abilities.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    alt="Maria Rodriguez"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      Maria Rodriguez
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      22 March 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border">
              <img
                src="https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Travel
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  The Best Places to Visit in Europe
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Discover the top destinations in Europe and plan your dream
                  vacation.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://randomuser.me/api/portraits/men/99.jpg"
                    alt="Alex Johnson"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      Alex Johnson
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      19 March 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border">
              <img
                src="https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1476&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Food
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  How to Make the Perfect Cup of Coffee
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Learn the secrets to making the perfect cup of coffee and
                  impress your friends and family.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://randomuser.me/api/portraits/women/63.jpg"
                    alt="Thomas Lee"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      Thomas Lee
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      16 March 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border">
              <img
                src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Fashion
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  The Latest Fashion Trends for Spring 2023
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Discover the hottest fashion trends for the upcoming spring
                  season and stay ahead of the curve.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://randomuser.me/api/portraits/women/47.jpg"
                    alt="Jessica Kim"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      Jessica Kim
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      13 March 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border">
              <img
                src="https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #Sports
                </p>
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900">
                  The Benefits of Yoga for Athletes
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600">
                  Learn how practicing yoga can improve your athletic
                  performance and prevent injuries.
                </p>
                <div class="mt-4 flex space-x-3 ">
                  <img
                    class="h-full w-10 rounded-lg"
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    alt="Michael Johnson"
                  />
                  <div>
                    <p class="text-sm font-semibold leading-tight text-gray-900">
                      Michael Johnson
                    </p>
                    <p class="text-sm leading-tight text-gray-600">
                      10 March 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full border-t border-gray-300">
            <div class="mt-2 flex items-center justify-between">
              <div class="hidden md:block">
                <p>
                  showing <strong>1</strong> to <strong>10</strong> of{" "}
                  <strong>20</strong> results
                </p>
              </div>
              <div class="space-x-2">
                <button
                  type="button"
                  class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-12 max-w-7xl bg-gray-50">
          <footer class="px-4 py-10">
            <div class="flex flex-col md:flex-row md:items-center">
              <span>
                <svg
                  width="40"
                  height="46"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    fill="black"
                  ></path>
                </svg>
              </span>
              <div class="mt-4 grow md:ml-12 md:mt-0">
                <p class="text-base font-semibold text-gray-700">
                  © 2023 DevUI Component Library
                </p>
              </div>
            </div>
            <div class="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700">Company</p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>About us</li>
                  <li>Company History</li>
                  <li>Our Team</li>
                  <li>Our Vision</li>
                  <li>Press Release</li>
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700">
                  Our Stores
                </p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>Washington</li>
                  <li>New Hampshire</li>
                  <li>Maine</li>
                  <li>Texas</li>
                  <li>Indiana</li>
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700">Services</p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>UI / UX Design</li>
                  <li>App Development</li>
                  <li>API reference</li>
                  <li>API status</li>
                  <li>Documentation</li>
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700">Legal</p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                  <li>Disclaimer</li>
                  <li>Media Policy</li>
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700">
                  Social Links
                </p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Linkedin</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
    
    </div>
  );
};

export default Blog;
