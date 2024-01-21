import React from "react";

const Car = () => {
  return (
    <div>
      <div class="relative w-full bg-white">
        <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div class="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div class="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div class="rounded-full bg-white p-1 px-2">
                <p class="text-sm font-medium">the Race machine</p>
              </div>
            </div>
            <h1 class="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              A new BMW M4 the race machine that will not just ride your body
              but soul too
            </h1>
            <p class="mt-8 text-lg text-gray-700"></p>
            <form action="" class="mt-8 flex items-start space-x-2">
              <div>
                <input
                  class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                />
                <p class="mt-2 text-sm text-gray-500">
                  We care about your privacy
                </p>
              </div>
              <div>
                <button
                  type="button"
                  class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div class="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              class="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
