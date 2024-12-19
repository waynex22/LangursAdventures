const sessioninfo = () => {
  return (
    <>
      <div
        className="container mx-auto bg-cover bg-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-around py-6 ">
          <img
            src="./image/location.png"
            className="p-6 max-w-xs md:max-w-lg"
            alt="Location"
          />
          <div className="flex flex-col text-center md:text-left p-6">
            <h1 className="font-bold text-primary text-2xl md:text-4xl">LOCATION</h1>
            <p className="text-base md:text-lg font-normal text-gray-500">
              About 4 hours from Ha Noi
            </p>
          </div>
        </div>

        {/* UNESCO Heritage Section */}
        <div className="flex flex-col md:flex-row items-center justify-around py-6">
          <div className="flex flex-col text-center md:text-left p-6">
            <h1 className="font-bold text-primary text-2xl md:text-4xl">UNESCO HERITAGE</h1>
            <p className="text-base md:text-lg font-normal text-gray-500">
              Lan Ha Bay is included in the UNESCO heritage list in September
              2023
            </p>
          </div>
          <img
            src="./image/earth.png"
            className="p-6 max-w-xs md:max-w-sm"
            alt="Earth"
          />
        </div>

        {/* Eco-Tourism Section */}
        <div className="flex flex-col md:flex-row items-center justify-around py-6">
          <img
            src="./image/Beachs.png"
            className="p-6 max-w-xs md:max-w-sm"
            alt="Beach"
          />
          <div className="flex flex-col text-center md:text-left p-6">
            <h1 className="font-bold text-primary text-2xl md:text-4xl">ECO-TOURISM</h1>
            <p className="text-base md:text-lg font-normal text-gray-500">
              Enjoy the peaceful scenery with sustainability
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default sessioninfo;
