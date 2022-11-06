const Rating = ({ rating }) => {
  const stars = {
    "5.0": "0px 0px",
    4.5: "0px -40px",
    "4.0": "0px -20px",
    3.5: "0px -80px",
    "3.0": "0px -60px",
    2.5: "0px -120px",
    "2.0": "0px -100px",
    1.5: "0px -160px",
    "1.0": "0px -140px",
    0.5: "0px -200px",
    "0.0": "0px -280px",
  };

  const calculateRating = (rating) => {
    let result = "";
    rating = rating * 10;
    result += Math.floor(rating / 10);
    rating = rating % 10;
    if (rating >= 0 && rating < 4) {
      result += ".0";
    } else if (rating >= 4 && rating <= 7) {
      result += ".5";
    } else {
      result = Number(result) + 1 + ".0";
    }
    return result;
  };

  return (
    <div className="my-1 flex items-center text-sm text-current font-medium">
      <span
        className="inline-block w-[83px] h-5 bg-rating-img bg-no-repeat"
        style={{
          backgroundPosition: stars[calculateRating(rating.rate)],
        }}
      ></span>
      <span className="ml-2 text-[#007185] hover:text-c-orange cursor-pointer">
        {rating.rate} out of 5
      </span>
    </div>
  );
};

export default Rating;
