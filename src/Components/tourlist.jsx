import { Link } from "react-router-dom";

const tourList = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          <div className="p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white rounded-2xl flex flex-col items-start gap-y-2">
            <img
              src="./image/rock-climbing.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="Rock Climbing"
            />
            <h2 className="text-xl font-semibold mt-4 text-center text-textSub">
              Rock Climbing
            </h2>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="clock"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="M12,6.5c-0.276123,0-0.5,0.223877-0.5,0.5v4.1337891l-1.8476562-1.0664062C9.4133911,9.9293213,9.1077881,10.0110474,8.9697266,10.25s-0.0563354,0.5445557,0.1826172,0.6826172l2.5976562,1.5C11.8259277,12.4767456,11.9121704,12.5,12,12.5c0.2759399-0.0004883,0.4995117-0.2240601,0.5-0.5V7C12.5,6.723877,12.276123,6.5,12,6.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z"></path>
                </svg>
                <p className="text-textSub text-sm">3,5 hours of climbing</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="money"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="m13.3 36.9 1.2.9c1.4 1 3.2 1.7 5.3 2.1v3.6c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-4.1c4.1-1.6 6.7-5.3 6.7-9.5 0-6.4-4.8-9.1-8.5-10.6-3.4-1.4-3.4-1.9-3.4-2.1 0-.6 1.1-.7 1.5-.7 2 0 3.2.7 3.9 1.1l2 1.2c.3.1.6.2.8.1s.5-.3.6-.6l2.5-6.6c.2-.5 0-1-.4-1.2l-1.5-.9c-1.3-.7-2.6-1.3-4.1-1.6V4.5c0-.6-.4-1-1-1H21c-.6 0-1 .4-1 1v4c-4 1.6-6.4 5-6.4 9.1 0 5.9 4.8 8.5 8.9 10.1 2.9 1.2 2.9 1.9 2.9 2.3 0 1.1-1.9 1.2-2.1 1.2-1.6 0-3.2-.5-4.5-1.3l-2.1-1.4c-.3-.2-.6-.2-.9-.1-.3.1-.5.3-.6.6l-2.4 6.7c-.1.4.1.9.5 1.2zm3.4-6 1.1.7c1.6 1 3.6 1.7 5.6 1.7 2.4 0 4.1-1.3 4.1-3.2 0-1.7-1.2-2.9-4.2-4.1-4-1.6-7.6-3.6-7.6-8.3 0-3.5 2.2-6.3 5.7-7.5.4-.1.7-.5.7-1V5.5h4.6v3.3c0 .5.4.9.8 1 1.6.2 2.9.7 4.2 1.5l.7.4-1.8 4.7-1-.6c-.7-.4-2.3-1.3-4.9-1.3-2.6 0-3.5 1.4-3.5 2.7 0 1.6 1 2.4 4.7 3.9 3.6 1.5 7.2 3.6 7.2 8.7 0 3.7-2.3 6.7-6 7.9-.4.1-.7.5-.7 1v3.9h-4.7V39c0-.5-.4-.9-.9-1-2-.3-3.9-1-5.2-1.9l-.6-.4 1.7-4.8z"></path>
                </svg>
                <p className="text-textSub text-sm">$52 / person</p>
              </div>
            </div>
            <p className="text-base font-normal text-gray-400 mt-2 h-[150px]">
              Moody beach - a beautiful site for climbing. We welcome people
              with all levels to join the trip. Get the chance to see the
              stunning view of Lan Ha from 23 meters above the water!
            </p>
            <div className="flex items-center justify-between w-full">
            <Link to="/tour/rockclimbing" className="my-2 relative px-6 py-2 overflow-hidden font-medium text-gray-900 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative font-bold transition-colors duration-300 delay-200 group-hover:opacity-8 ease">
                  Learn More
                  </span>
              </Link>
              <Link to="/booking" className="my-2">
                <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                    Book Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white rounded-2xl flex flex-col items-start gap-y-2">
            <img
              src="./image/kayaking.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="Kayaking"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">Kayaking</h2>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="clock"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="M12,6.5c-0.276123,0-0.5,0.223877-0.5,0.5v4.1337891l-1.8476562-1.0664062C9.4133911,9.9293213,9.1077881,10.0110474,8.9697266,10.25s-0.0563354,0.5445557,0.1826172,0.6826172l2.5976562,1.5C11.8259277,12.4767456,11.9121704,12.5,12,12.5c0.2759399-0.0004883,0.4995117-0.2240601,0.5-0.5V7C12.5,6.723877,12.276123,6.5,12,6.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z"></path>
                </svg>
                <p className="text-textSub text-sm">4 hours of exploring</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="money"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="m13.3 36.9 1.2.9c1.4 1 3.2 1.7 5.3 2.1v3.6c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-4.1c4.1-1.6 6.7-5.3 6.7-9.5 0-6.4-4.8-9.1-8.5-10.6-3.4-1.4-3.4-1.9-3.4-2.1 0-.6 1.1-.7 1.5-.7 2 0 3.2.7 3.9 1.1l2 1.2c.3.1.6.2.8.1s.5-.3.6-.6l2.5-6.6c.2-.5 0-1-.4-1.2l-1.5-.9c-1.3-.7-2.6-1.3-4.1-1.6V4.5c0-.6-.4-1-1-1H21c-.6 0-1 .4-1 1v4c-4 1.6-6.4 5-6.4 9.1 0 5.9 4.8 8.5 8.9 10.1 2.9 1.2 2.9 1.9 2.9 2.3 0 1.1-1.9 1.2-2.1 1.2-1.6 0-3.2-.5-4.5-1.3l-2.1-1.4c-.3-.2-.6-.2-.9-.1-.3.1-.5.3-.6.6l-2.4 6.7c-.1.4.1.9.5 1.2zm3.4-6 1.1.7c1.6 1 3.6 1.7 5.6 1.7 2.4 0 4.1-1.3 4.1-3.2 0-1.7-1.2-2.9-4.2-4.1-4-1.6-7.6-3.6-7.6-8.3 0-3.5 2.2-6.3 5.7-7.5.4-.1.7-.5.7-1V5.5h4.6v3.3c0 .5.4.9.8 1 1.6.2 2.9.7 4.2 1.5l.7.4-1.8 4.7-1-.6c-.7-.4-2.3-1.3-4.9-1.3-2.6 0-3.5 1.4-3.5 2.7 0 1.6 1 2.4 4.7 3.9 3.6 1.5 7.2 3.6 7.2 8.7 0 3.7-2.3 6.7-6 7.9-.4.1-.7.5-.7 1v3.9h-4.7V39c0-.5-.4-.9-.9-1-2-.3-3.9-1-5.2-1.9l-.6-.4 1.7-4.8z"></path>
                </svg>
                <p className="text-textSub text-sm">$28 / person</p>
              </div>
            </div>
            <p className="text-base font-normal text-gray-400 mt-2 h-[150px]">
              There is plenty to see in the bay. Passing through archways and
              tunnels, swimming in the caves, places so hidden away that could
              easily be missed if you don't know they were there. Perfect way to
              connect with nature.
            </p>
            <div className="flex items-center justify-between w-full">
            <Link to="/tour/kayaking" className="my-2 relative px-6 py-2 overflow-hidden font-medium text-gray-900 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative font-bold transition-colors duration-300 delay-200 group-hover:opacity-8 ease">
                  Learn More
                  </span>
              </Link>
              <Link to="/booking" className="my-2">
                <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                    Book Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white rounded-2xl flex flex-col items-start gap-y-2">
            <img
              src="./image/deep-water-solo.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="Deep Water Solo"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">
              Deep Water Solo
            </h2>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="clock"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="M12,6.5c-0.276123,0-0.5,0.223877-0.5,0.5v4.1337891l-1.8476562-1.0664062C9.4133911,9.9293213,9.1077881,10.0110474,8.9697266,10.25s-0.0563354,0.5445557,0.1826172,0.6826172l2.5976562,1.5C11.8259277,12.4767456,11.9121704,12.5,12,12.5c0.2759399-0.0004883,0.4995117-0.2240601,0.5-0.5V7C12.5,6.723877,12.276123,6.5,12,6.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z"></path>
                </svg>
                <p className="text-textSub text-sm">3,5 hours of climbing</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="money"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="m13.3 36.9 1.2.9c1.4 1 3.2 1.7 5.3 2.1v3.6c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-4.1c4.1-1.6 6.7-5.3 6.7-9.5 0-6.4-4.8-9.1-8.5-10.6-3.4-1.4-3.4-1.9-3.4-2.1 0-.6 1.1-.7 1.5-.7 2 0 3.2.7 3.9 1.1l2 1.2c.3.1.6.2.8.1s.5-.3.6-.6l2.5-6.6c.2-.5 0-1-.4-1.2l-1.5-.9c-1.3-.7-2.6-1.3-4.1-1.6V4.5c0-.6-.4-1-1-1H21c-.6 0-1 .4-1 1v4c-4 1.6-6.4 5-6.4 9.1 0 5.9 4.8 8.5 8.9 10.1 2.9 1.2 2.9 1.9 2.9 2.3 0 1.1-1.9 1.2-2.1 1.2-1.6 0-3.2-.5-4.5-1.3l-2.1-1.4c-.3-.2-.6-.2-.9-.1-.3.1-.5.3-.6.6l-2.4 6.7c-.1.4.1.9.5 1.2zm3.4-6 1.1.7c1.6 1 3.6 1.7 5.6 1.7 2.4 0 4.1-1.3 4.1-3.2 0-1.7-1.2-2.9-4.2-4.1-4-1.6-7.6-3.6-7.6-8.3 0-3.5 2.2-6.3 5.7-7.5.4-.1.7-.5.7-1V5.5h4.6v3.3c0 .5.4.9.8 1 1.6.2 2.9.7 4.2 1.5l.7.4-1.8 4.7-1-.6c-.7-.4-2.3-1.3-4.9-1.3-2.6 0-3.5 1.4-3.5 2.7 0 1.6 1 2.4 4.7 3.9 3.6 1.5 7.2 3.6 7.2 8.7 0 3.7-2.3 6.7-6 7.9-.4.1-.7.5-.7 1v3.9h-4.7V39c0-.5-.4-.9-.9-1-2-.3-3.9-1-5.2-1.9l-.6-.4 1.7-4.8z"></path>
                </svg>
                <p className="text-textSub text-sm">$50 / person</p>
              </div>
            </div>
            <p className="text-base font-normal text-gray-400 mt-2 h-[150px]">
              Head out into the bay on one of our basket boats, armed with
              nothing but climbing shoes and chalk. Experience one of the most
              exhilarating sports Cat Ba has to offer.
            </p>
            <div className="flex items-center justify-between w-full">
            <Link to="/tour/deep-water-solo" className="my-2 relative px-6 py-2 overflow-hidden font-medium text-gray-900 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative font-bold transition-colors duration-300 delay-200 group-hover:opacity-8 ease">
                  Learn More
                  </span>
              </Link>
              <Link to="/booking" className="my-2">
                <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                    Book Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white rounded-2xl flex flex-col items-start gap-y-2">
            <img
              src="./image/treakking.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="Trekking"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">Trekking</h2>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="clock"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="M12,6.5c-0.276123,0-0.5,0.223877-0.5,0.5v4.1337891l-1.8476562-1.0664062C9.4133911,9.9293213,9.1077881,10.0110474,8.9697266,10.25s-0.0563354,0.5445557,0.1826172,0.6826172l2.5976562,1.5C11.8259277,12.4767456,11.9121704,12.5,12,12.5c0.2759399-0.0004883,0.4995117-0.2240601,0.5-0.5V7C12.5,6.723877,12.276123,6.5,12,6.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z"></path>
                </svg>
                <p className="text-textSub text-sm">3 hours of scrambling</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="money"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="m13.3 36.9 1.2.9c1.4 1 3.2 1.7 5.3 2.1v3.6c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-4.1c4.1-1.6 6.7-5.3 6.7-9.5 0-6.4-4.8-9.1-8.5-10.6-3.4-1.4-3.4-1.9-3.4-2.1 0-.6 1.1-.7 1.5-.7 2 0 3.2.7 3.9 1.1l2 1.2c.3.1.6.2.8.1s.5-.3.6-.6l2.5-6.6c.2-.5 0-1-.4-1.2l-1.5-.9c-1.3-.7-2.6-1.3-4.1-1.6V4.5c0-.6-.4-1-1-1H21c-.6 0-1 .4-1 1v4c-4 1.6-6.4 5-6.4 9.1 0 5.9 4.8 8.5 8.9 10.1 2.9 1.2 2.9 1.9 2.9 2.3 0 1.1-1.9 1.2-2.1 1.2-1.6 0-3.2-.5-4.5-1.3l-2.1-1.4c-.3-.2-.6-.2-.9-.1-.3.1-.5.3-.6.6l-2.4 6.7c-.1.4.1.9.5 1.2zm3.4-6 1.1.7c1.6 1 3.6 1.7 5.6 1.7 2.4 0 4.1-1.3 4.1-3.2 0-1.7-1.2-2.9-4.2-4.1-4-1.6-7.6-3.6-7.6-8.3 0-3.5 2.2-6.3 5.7-7.5.4-.1.7-.5.7-1V5.5h4.6v3.3c0 .5.4.9.8 1 1.6.2 2.9.7 4.2 1.5l.7.4-1.8 4.7-1-.6c-.7-.4-2.3-1.3-4.9-1.3-2.6 0-3.5 1.4-3.5 2.7 0 1.6 1 2.4 4.7 3.9 3.6 1.5 7.2 3.6 7.2 8.7 0 3.7-2.3 6.7-6 7.9-.4.1-.7.5-.7 1v3.9h-4.7V39c0-.5-.4-.9-.9-1-2-.3-3.9-1-5.2-1.9l-.6-.4 1.7-4.8z"></path>
                </svg>
                <p className="text-textSub text-sm">$32 / person</p>
              </div>
            </div>
            <p className="text-base font-normal text-gray-400 mt-2 h-[150px]">
              A 3-hour journey full of fun. Climb up and down the summits, off
              the beaten track, through the maze of bamboos that we call Cat Ba.
            </p>
            <div className="flex items-center justify-between w-full">
            <Link to="/tour/trekking" className="my-2 relative px-6 py-2 overflow-hidden font-medium text-gray-900 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative font-bold transition-colors duration-300 delay-200 group-hover:opacity-8 ease">
                  Learn More
                  </span>
              </Link>
              <Link to="/booking" className="my-2">
                <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                    Book Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white rounded-2xl flex flex-col items-start gap-y-2">
            <img
              src="./image/OIP.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="National park"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">
              National park
            </h2>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="clock"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="M12,6.5c-0.276123,0-0.5,0.223877-0.5,0.5v4.1337891l-1.8476562-1.0664062C9.4133911,9.9293213,9.1077881,10.0110474,8.9697266,10.25s-0.0563354,0.5445557,0.1826172,0.6826172l2.5976562,1.5C11.8259277,12.4767456,11.9121704,12.5,12,12.5c0.2759399-0.0004883,0.4995117-0.2240601,0.5-0.5V7C12.5,6.723877,12.276123,6.5,12,6.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z"></path>
                </svg>
                <p className="text-textSub text-sm">4,5 hours of exploring</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="money"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="m13.3 36.9 1.2.9c1.4 1 3.2 1.7 5.3 2.1v3.6c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-4.1c4.1-1.6 6.7-5.3 6.7-9.5 0-6.4-4.8-9.1-8.5-10.6-3.4-1.4-3.4-1.9-3.4-2.1 0-.6 1.1-.7 1.5-.7 2 0 3.2.7 3.9 1.1l2 1.2c.3.1.6.2.8.1s.5-.3.6-.6l2.5-6.6c.2-.5 0-1-.4-1.2l-1.5-.9c-1.3-.7-2.6-1.3-4.1-1.6V4.5c0-.6-.4-1-1-1H21c-.6 0-1 .4-1 1v4c-4 1.6-6.4 5-6.4 9.1 0 5.9 4.8 8.5 8.9 10.1 2.9 1.2 2.9 1.9 2.9 2.3 0 1.1-1.9 1.2-2.1 1.2-1.6 0-3.2-.5-4.5-1.3l-2.1-1.4c-.3-.2-.6-.2-.9-.1-.3.1-.5.3-.6.6l-2.4 6.7c-.1.4.1.9.5 1.2zm3.4-6 1.1.7c1.6 1 3.6 1.7 5.6 1.7 2.4 0 4.1-1.3 4.1-3.2 0-1.7-1.2-2.9-4.2-4.1-4-1.6-7.6-3.6-7.6-8.3 0-3.5 2.2-6.3 5.7-7.5.4-.1.7-.5.7-1V5.5h4.6v3.3c0 .5.4.9.8 1 1.6.2 2.9.7 4.2 1.5l.7.4-1.8 4.7-1-.6c-.7-.4-2.3-1.3-4.9-1.3-2.6 0-3.5 1.4-3.5 2.7 0 1.6 1 2.4 4.7 3.9 3.6 1.5 7.2 3.6 7.2 8.7 0 3.7-2.3 6.7-6 7.9-.4.1-.7.5-.7 1v3.9h-4.7V39c0-.5-.4-.9-.9-1-2-.3-3.9-1-5.2-1.9l-.6-.4 1.7-4.8z"></path>
                </svg>
                <p className="text-textSub text-sm">$35 / person</p>
              </div>
            </div>
            <p className="text-base font-normal text-gray-400 mt-2 h-[150px]">
              Visit the famous Cat Ba national park in the center of the island.
              Have the chance to visit the Ngu Lam peak, Viet Hai village.
              Cycling along the way to the harbor before getting on the boat
              back to town.
            </p>
            <div className="flex items-center justify-between w-full">
            <Link to="/tour/national-park" className="my-2 relative px-6 py-2 overflow-hidden font-medium text-gray-900 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative font-bold transition-colors duration-300 delay-200 group-hover:opacity-8 ease">
                  Learn More
                  </span>
              </Link>
              <Link to="/booking" className="my-2">
                <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                    Book Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white rounded-2xl flex flex-col items-start gap-y-2">
            <img
              src="./image/gp.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="Glowing Plankton"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">
              Glowing Plankton
            </h2>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="clock"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="M12,6.5c-0.276123,0-0.5,0.223877-0.5,0.5v4.1337891l-1.8476562-1.0664062C9.4133911,9.9293213,9.1077881,10.0110474,8.9697266,10.25s-0.0563354,0.5445557,0.1826172,0.6826172l2.5976562,1.5C11.8259277,12.4767456,11.9121704,12.5,12,12.5c0.2759399-0.0004883,0.4995117-0.2240601,0.5-0.5V7C12.5,6.723877,12.276123,6.5,12,6.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z"></path>
                </svg>
                <p className="text-textSub text-sm">2 hours of kayaking</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="money"
                  className="w-5 h-5 fill-textSub"
                >
                  <path d="m13.3 36.9 1.2.9c1.4 1 3.2 1.7 5.3 2.1v3.6c0 .6.4 1 1 1h6.7c.6 0 1-.4 1-1v-4.1c4.1-1.6 6.7-5.3 6.7-9.5 0-6.4-4.8-9.1-8.5-10.6-3.4-1.4-3.4-1.9-3.4-2.1 0-.6 1.1-.7 1.5-.7 2 0 3.2.7 3.9 1.1l2 1.2c.3.1.6.2.8.1s.5-.3.6-.6l2.5-6.6c.2-.5 0-1-.4-1.2l-1.5-.9c-1.3-.7-2.6-1.3-4.1-1.6V4.5c0-.6-.4-1-1-1H21c-.6 0-1 .4-1 1v4c-4 1.6-6.4 5-6.4 9.1 0 5.9 4.8 8.5 8.9 10.1 2.9 1.2 2.9 1.9 2.9 2.3 0 1.1-1.9 1.2-2.1 1.2-1.6 0-3.2-.5-4.5-1.3l-2.1-1.4c-.3-.2-.6-.2-.9-.1-.3.1-.5.3-.6.6l-2.4 6.7c-.1.4.1.9.5 1.2zm3.4-6 1.1.7c1.6 1 3.6 1.7 5.6 1.7 2.4 0 4.1-1.3 4.1-3.2 0-1.7-1.2-2.9-4.2-4.1-4-1.6-7.6-3.6-7.6-8.3 0-3.5 2.2-6.3 5.7-7.5.4-.1.7-.5.7-1V5.5h4.6v3.3c0 .5.4.9.8 1 1.6.2 2.9.7 4.2 1.5l.7.4-1.8 4.7-1-.6c-.7-.4-2.3-1.3-4.9-1.3-2.6 0-3.5 1.4-3.5 2.7 0 1.6 1 2.4 4.7 3.9 3.6 1.5 7.2 3.6 7.2 8.7 0 3.7-2.3 6.7-6 7.9-.4.1-.7.5-.7 1v3.9h-4.7V39c0-.5-.4-.9-.9-1-2-.3-3.9-1-5.2-1.9l-.6-.4 1.7-4.8z"></path>
                </svg>
                <p className="text-textSub text-sm">$39 / person</p>
              </div>
            </div>
            <p className="text-base font-normal text-gray-400 mt-2 h-[150px]">
              Head out into the bay on one of our basket boats, armed with
              nothing but climbing shoes and chalk. Experience one of the most
              exhilarating sports Cat Ba has to offer.
            </p>
            <div className="flex items-center justify-between w-full">
            <Link to="/tour/glowing-plankton" className="my-2 relative px-6 py-2 overflow-hidden font-medium text-gray-900 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-200 group-hover:w-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative font-bold transition-colors duration-300 delay-200 group-hover:opacity-8 ease">
                  Learn More
                  </span>
              </Link>
              <Link to="/booking" className="my-2">
                <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                    Book Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default tourList;
