import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div class="mx-auto max-w-7xl px-4">
          <div class="mx-auto max-w-7xl py-12 ">
            <div class="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              <div class="flex items-center justify-center">
                <div class="px-2 md:px-12">
                  <p class="text-2xl font-bold text-gray-900 md:text-4xl">
                    Get in touch
                  </p>
                  <p class="mt-4 text-lg text-gray-600">
                    Our friendly team would love to hear from you.
                  </p>
                  <form action="" class="mt-8 space-y-4">
                    <div class="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div class="grid w-full  items-center gap-1.5">
                        <label
                          class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="first_name"
                        >
                          First Name
                        </label>
                        <input
                          class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="grid w-full  items-center gap-1.5">
                        <label
                          class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="last_name"
                        >
                          Last Name
                        </label>
                        <input
                          class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="phone_number"
                      >
                        Phone number
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="tel"
                        id="phone_number"
                        placeholder="Phone number"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        id="message"
                        placeholder="Leave us a message"
                        cols="3"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <img
                alt="Contact us"
                class="hidden max-h-full w-full rounded-lg object-cover lg:block"
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-gray-100">
          <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div class="py-20">
              <div class="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
                <div class="space-y-4">
                  <p class="w-full text-4xl font-bold text-gray-900">
                    Our Offices
                  </p>
                  <p class="w-full text-lg text-gray-600">
                    Find us at these locations.
                  </p>
                </div>
                <div class="space-y-4 divide-y-2">
                  <div class="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                    <p class="w-full text-xl font-semibold  text-gray-900">
                      Bengaluru office
                    </p>
                    <p class="w-full text-base  text-gray-600">
                      Mon-Sat 9am to 5pm.
                    </p>
                    <p class="text-sm font-semibold text-gray-600">
                      100, Electronic City Phase-1, Bengaluru, Karnataka 560100
                      IN
                    </p>
                  </div>
                  <div class="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                    <p class="w-full text-xl font-semibold  text-gray-900">
                      Head office
                    </p>
                    <p class="w-full text-base  text-gray-600">
                      Mon-Sat 9am to 5pm.
                    </p>
                    <p class="text-sm font-semibold text-gray-600">
                      12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN
                    </p>
                  </div>
                  <div class="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                    <p class="w-full text-xl font-semibold  text-gray-900">
                      Karnataka office
                    </p>
                    <p class="w-full text-base  text-gray-600">
                      Mon-Sat 9am to 5pm.
                    </p>
                    <p class="text-sm font-semibold text-gray-600">
                      42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru,
                      Karnataka 560025 IN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-6" />
       
      </div>
    </div>
  );
};

export default Contact;
