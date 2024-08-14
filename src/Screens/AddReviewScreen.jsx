/* eslint-disable */

import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import Header from "../Componants/Header";
import brand1 from "../assets/image1.jpg";
import Heading from "../Componants/Headnig";
import Title from "../Componants/Title";
import Footer from "../Componants/Footer";
import Stars from "../Componants/Stars";
import PrimaryButton from "../Componants/PrimaryButton";
import useBrands from "../Context/BrandsContext";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
function AddReviewScreen() {
  const  {userId}  = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [comments, setComments] = useState("");
  const [quality, setQuality] = useState(0);
  const [service, setService] = useState(0);
  const [reviewerId, setReviewerId] = useState(userId.reviewerId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { allBrands, brandLoading } = useBrands();
  const { brandId } = useParams();
 
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhoto(null);
      setPhotoPreview(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the submit button

    if (!comments.trim()) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Comments are required.",
      });
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("comments", comments);
    formData.append("quality", quality);
    formData.append("service", service);
    formData.append("reviewerId", reviewerId);
    if (photo) {
      formData.append("photos", photo); // Append the photo file
    }

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_APP_MAIN_API_LINK
        }/api/reviews/addbrandreview/${brandId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      );
      // console.log("Response:", response.data);
      Swal.fire({
        icon: "success",
        title: "Review Submitted",
        text: "Your review has been successfully submitted!",
      });
    } catch (error) {
      console.error("There was an error submitting the review:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response.data.Message || "An error occurred.",
      });
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <div className="bg-white">
      <Header />
      <div className="mx-24 mt-24 ">
        <div className="w-full py-12 px-36 h-60 ">
          <div
            className="w-full h-full rounded-2xl text-center flex justify-center items-center text-4xl font-bold"
            style={{
              backgroundImage: `url(${brand1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p>Share Your Experience</p>
          </div>
        </div>

        <hr className="h-0.5 my-2 bg-black" />

        {/* Content */}
        <div className="w-full h-full ">
          <div className="flex flex-col justify-center gap-8">
            {/* <Title
              className="text-3xl font-semibold mt-9"
              title="Which product would you like to review?"
            /> */}
            {/* Product */}
            <div className="flex items-center gap-12"></div>
            {/* Rate */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col gap-8">
                <Heading className="text-start" value1="Quality" />
                <input
                  type="number"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  min="1"
                  max="5"
                  className="w-full border-2 border-black p-4 rounded-lg text-xl"
                />
              </div>
              <div className="flex flex-col gap-8">
                <Heading className="text-start" value1="Service" />
                <input
                  type="number"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  min="1"
                  max="5"
                  className="w-full border-2 border-black p-4 rounded-lg text-xl"
                />
              </div>
            </div>
            {/* Recommend */}
            <div>
              <form action="#">
                <Title
                  className="text-3xl font-semibold mt-9"
                  title="Would you recommend the product to your friends?"
                />
                <input
                  className="w-4 h-4"
                  type="radio"
                  id="OfCourse"
                  name="recommendation"
                  value="Of course!"
                />
                <label className="text-xl mx-3" htmlFor="OfCourse">
                  Of Course!
                </label>
                <br />
                <input
                  className="w-4 h-4"
                  type="radio"
                  id="never"
                  name="recommendation"
                  value="never"
                />
                <label className="text-xl mx-3" htmlFor="never">
                  Never
                </label>
                <br />
                <input
                  className="w-4 h-4"
                  type="radio"
                  id="maybe"
                  name="recommendation"
                  value="Maybe."
                />
                <label className="text-xl mx-3" htmlFor="maybe">
                  Maybe.
                </label>
              </form>
            </div>
            {/* Review */}
            <div>
              <Title className="text-3xl font-semibold mt-9" title="Review" />
              <textarea
                className="bg-orange-100 w-full p-4 rounded-xl mt-4"
                id="review"
                name="review"
                rows="4"
                maxLength={200}
                placeholder="Write your opinion..."
                cols="50"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
            {/* Photo & Submit */}
            <div className="flex flex-col items-center justify-center p-4">
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <Title
                  className="text-3xl font-semibold mt-9"
                  title="Upload Photo"
                />
                <input
                  type="file"
                  id="photoUpload"
                  name="photoUpload"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="my-4"
                />
                {photoPreview && (
                  <div className="mb-4">
                    <img
                      src={photoPreview}
                      alt="Selected"
                      className="rounded-xl w-full h-auto"
                    />
                  </div>
                )}
                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    className={`bg-orange-500 text-white font-bold py-2 px-4 rounded-lg mt-8 w-full ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting} // Disable button when submitting
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddReviewScreen;
