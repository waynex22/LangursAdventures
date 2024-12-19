const sessionAboutCatba = () => {
  return (
    <div className="relative w-full h-[600px]">
      <div className="absolute inset-0 bg-primary opacity-20"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-sessionImg"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-around gap-8 h-full container mx-auto px-4">
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            src="./image/catba.jpg"
            className="w-3/4 lg:w-full rounded-full"
            alt="Cat Ba"
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Why do we call it Cat Ba?
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            Cat Ba Island, historically known as “Cac Ba,” translates to
            “Women’s Island.” The name comes from a legend that says three women
            of the Tran Dynasty were killed, and their bodies washed up on
            different beaches of the island. The local fishermen found them and
            built temples to honor these women. Cat Ba is known for its
            staggering limestone mountains, lush mangrove forests, and mostly
            untouched sandy beaches. It is the largest island in Hai Phong next
            to Halong Bay and is also known for its stunning landscapes, unique
            culture, and abundant wildlife. Some of its main attractions include
            Cat Ba National Park, Beaches, Hospital Cave, Monkey Island, and
            Viet Hai Fishing Village.
          </p>
        </div>
      </div>
    </div>
  );
};

export default sessionAboutCatba;
