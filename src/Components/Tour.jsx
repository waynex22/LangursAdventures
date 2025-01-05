import { Link } from "react-router-dom";
const tour = () => {
  return (
    <>
      <div className="min-h-[600px] container max-w-[1280px] mx-auto mt-10 p-10">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col w-full md:w-1/2 gap-y-10 py-10">
            <h1 className="text-4xl font-bold text-textSub">Daily Tour</h1>
            <img src="./image/heading-border.png" className="w-fit" alt="" />
          </div>
          <div className="w-full md:w-1/3 text-lg text-gray-500 mt-6 md:mt-0">
            <p>
              Choose the service that's right for you and we'll create
              unforgettable moments on your journey to discover wonderful
              nature!
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10 gap-6 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/3 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-2xl flex flex-col items-center">
            <img
              src="./image/rock-climbing.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="Rock Climbing"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">
              Rock Climbing
            </h2>
            <p className="text-base font-normal text-gray-400 text-center mt-2 h-[150px]">
              Moody beach - a beautiful site for climbing. We welcome people
              with all levels to join the trip. Get the chance to see the
              stunning view of Lan Ha from 23 meters above the water!
            </p>
            <Link to="/tour/rockclimbing" className="my-2">
              <button class="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                  Learn More
                </span>
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-2xl flex flex-col items-center">
            <img
              src="./image/kayaking.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="Kayaking"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">Kayaking</h2>
            <p className="text-base font-normal text-gray-400 text-center mt-2 h-[150px]">
              There is plenty to see in the bay. Passing through archways and
              tunnels, swimming in the caves, places so hidden away that could
              easily be missed if you don't know they were there. Perfect way to
              connect with nature.
            </p>
            <Link to="/tour/kayaking" className="my-2">
              <button class="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                  Learn More
                </span>
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-2xl flex flex-col items-center">
            <img
              src="./image/deep-water-solo.jpg"
              className="w-full h-[300px] object-cover rounded-2xl"
              alt="Deep Water Solo"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">
              Deep Water Solo
            </h2>
            <p className="text-base font-normal text-gray-400 text-center mt-2 h-[150px]">
              Head out into the bay on one of our basket boats, armed with
              nothing but climbing shoes and chalk. Experience one of the most
              exhilarating sports Cat Ba has to offer.
            </p>
            <Link to="/tour/deep-water-solo" className="my-2">
              <button class="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:bg-white group">
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-base font-semibold text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                  Learn More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default tour;
