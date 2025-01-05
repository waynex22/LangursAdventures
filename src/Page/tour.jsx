import TourTitle from "../Components/tourTitle";
import TourList from "../Components/tourlist";
const tour = () => {
  return (
    <>
      <div className="min-h-[600px] bg-sessionImg">
        <div className="">
          <TourTitle />
        </div>
        <TourList />
      </div>
    </>
  );
};

export default tour;
