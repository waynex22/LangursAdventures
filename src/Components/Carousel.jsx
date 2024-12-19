import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "Image 1",
      title: "Enjoy The Peace",
      description: "This is the description for the first image.",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "Image 2",
      title: "Explore Cat Ba Island",
      description: "This is the description for the second image.",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      alt: "Image 3",
      title: "Explore Cat Ba Island",
      description: "This is the description for the third image.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    },4000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="relative container mx-auto p-4">
      {/* Carousel Image */}
      <div className="relative w-full h-[600px]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover rounded-3xl"
        />
        {/* Info Overlay */}
        <div className="absolute bottom-[40%] left-[10%] right-0 w-fit ">
          <div className="p-6 bg-gray-800/10 backdrop-blur-[1px] rounded-xl text-white">
            <h2 className="text-2xl font-bold">{images[currentIndex].title}</h2>
            <p className="mt-2">{images[currentIndex].description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/10 backdrop-blur-[1px] text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 128 128"
          id="chevron-left"
        >
          <path
            stroke="#fff"
            stroke-width="8"
            d="M79.5 94L48.9781 63.478L79.5 32.9561"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/20 backdrop-blur-[33px] text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 128 128"
          id="chevron-right"
        >
          <path
            stroke="#fff"
            stroke-width="8"
            d="M48.5 33L79.0219 63.522L48.5 94.0439"
          ></path>
        </svg>
      </button>

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
