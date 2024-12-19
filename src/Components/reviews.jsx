import { useEffect, useState } from "react";
const Reviews = () => {
  const [id, setId] = useState(1); // Default to the first review
  const dataReviews = [
    {
      id: 1,
      author: "Patrick Garnett",
      title:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nomoumy eirmod",
      content:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
    {
      id: 2,
      author: "Katie Ryan",
      title:
        "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
      content:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
    },
    {
      id: 3,
      author: "Matthew Williams",
      title:
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.",
      content:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
    },
  ];

  const handleClickReview = (id) => {
    setId(id); // Update the selected review
  };

  const selectedReview = dataReviews.find((review) => review.id === id);

  return (
    <div className="w-full min-h-[600px] container max-w-[1280px] mx-auto p-10">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-y-10 py-10">
          <h1 className="text-4xl font-bold">Clients Of Langur's Adventures</h1>
          <p className="text-lg font-normal text-gray-600">
            Customers share wonderful memories of their trips with us.
          </p>
          <img src="./image/heading-border.png" className="w-fit" alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 md:w-full">
        <div className="flex flex-col items-start justify-start gap-4">
        <h1 className="font-semibold text-2xl">{selectedReview?.author}</h1>
          <h4 className="font-semibold text-lg">{selectedReview?.title}</h4>
          <p className="text-gray-700">{selectedReview?.content}</p>
        </div>
        <div className="flex items-center justify-start gap-4 mt-6">
          {dataReviews.map((item) => (
            <div
              key={item.id}
              className={`p-2 rounded-xl cursor-pointer ${
                item.id === id ? "bg-primary text-white" : "bg-gray-200"
              }`}
              onClick={() => handleClickReview(item.id)}
            >
              <p className="text-center">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
