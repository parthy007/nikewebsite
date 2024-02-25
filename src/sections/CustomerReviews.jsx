import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className="font-bold font-palanquin text-4xl text-center">
        What our <span className="text-coral-red">Customers</span> say?
      </div>
      <p className="info text text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        experiences with us.
      </p>
      <div className="flex flex-1 justify-evenly mt-24 items-center gap-14 max-lg:flex-col ">
        {reviews.map((review) => (
          <ReviewCard key={review.CustomerReviews} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
