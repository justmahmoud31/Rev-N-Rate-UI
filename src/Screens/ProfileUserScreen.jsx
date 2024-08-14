/* eslint-disable */
import Footer from "../Componants/Footer";
import Header from "../Componants/Header";
import user from "../assets/user.png";
import review from "../assets/review.png";
import followers from "../assets/followers.png";
import heart from "../assets/heart.png";
import ReviewCard from "../Componants/Cards/ReviewCard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

function ProfileUserScreen() {
  const [allReviewer, setAllReviewer] = useState([]);
  const [reviewerLoading, setReviewerLoading] = useState(true);

  const { userId } = useContext(AuthContext); // Use context to check if user is logged in

  useEffect(() => {
    const fetchReviewerReviews = async () => {
      try {
        if (userId && userId.reviewerId) {
          const response = await axios.get(`http://localhost:3000/api/reviewer/reviewerReviews/${userId.reviewerId}`);
          setAllReviewer(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching reviewer reviews:", error);
      } finally {
        setReviewerLoading(false);
      }
    };

    fetchReviewerReviews();
  }, [userId]);

  if (reviewerLoading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="">
      <Header />

      <div className="flex flex-col justify-center items-center w-full mt-32 gap-y-4">
        <img className="w-60" src={userId.profilePic || user} alt="User profile" />
        <h3 className="text-3xl font-bold text-orange-500">{userId.username}</h3>
        <div className="flex gap-x-4">
          <div className="flex flex-col justify-center items-center">
            <img className="w-20" src={followers} alt="Followers" />
            <h3 className="text-lg font-bold">Followers</h3>
            <h3 className="text-lg">2.1 K</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-20" src={heart} alt="Likes" />
            <h3 className="text-lg font-bold">Likes</h3>
            <h3 className="text-lg ">2.1 K</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-20" src={review} alt="Reviews" />
            <h3 className="text-lg font-bold">Reviews</h3>
            <h3 className="text-lg ">{allReviewer.length}</h3>
          </div>
        </div>
      </div>

      <div className="grid mt-12 mx-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {allReviewer.map((review) => (
       <ReviewCard
       key={review.reviewId}
       content={review.comments}
       rete={review.quality}
       date={review.date}
       details={review.details}
       service={review.service}
       photos={review.photos}
       dislikes={review.dislikes}
       likes={review.likes}
     />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ProfileUserScreen;
