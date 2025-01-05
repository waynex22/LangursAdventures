const SessionColab = () => {
    return (
      <>
        <div className="relative w-full md:h-[600px] h-fit">
          {/* Background Layers */}
          <div className="absolute inset-0 bg-slate-300 opacity-20"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-sessionImg"
          ></div>
  
          {/* Content */}
          <div className="relative z-10 flex flex-col gap-8 h-full container mx-auto lg:p-10 max-w-[1280px]">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start justify-between">
              <div className="flex flex-col w-full lg:w-1/2 gap-y-6 py-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-textSub">Partners</h1>
                <img
                  src="./image/heading-border.png"
                  className="w-24 lg:w-fit"
                  alt="Heading Border"
                />
              </div>
              <div className="w-full lg:w-1/3 text-base lg:text-lg text-gray-800 mt-4 lg:mt-0">
                <p>Leading partners also accompany Langur's Adventures</p>
              </div>
            </div>
  
            {/* Partner Logos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src="./image/asiaOutdoors.png"
                  className="w-full h-auto max-w-[120px] object-contain"
                  alt="Asia Outdoors"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src="./image/vietclimb.png"
                  className="w-full h-auto max-w-[120px] object-contain"
                  alt="VietClimb"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src="./image/Mad-rock.png"
                  className="w-full h-auto max-w-[120px] object-contain"
                  alt="Mad Rock"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src="./image/blackDiamond.png"
                  className="w-full h-auto max-w-[120px] object-contain"
                  alt="Black Diamond"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src="./image/palms.png"
                  className="w-full h-auto max-w-[120px] object-contain"
                  alt="PALMS"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src="./image/cloudly.png"
                  className="w-full h-auto max-w-[120px] object-contain"
                  alt="Cloudly"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src="./image/company.png"
                  className="w-full h-auto max-w-[120px] object-contain"
                  alt="Company"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src="./image/companyName.png"
                  className="w-full h-auto max-w-[120px] object-contain"
                  alt="CompanyName"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center">
                {/* Empty Placeholder or Add More Logos */}
                <div className="w-full h-auto max-w-[120px]"></div>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                {/* Empty Placeholder or Add More Logos */}
                <div className="w-full h-auto max-w-[120px]"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default SessionColab;
  