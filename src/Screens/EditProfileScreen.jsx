/* eslint-disable */

import { useState } from "react";
import Header from "../Componants/Header";
import ProfileDataForm from "../Componants/ProfileDataForm";
import offer1 from "../assets/user.png";
import Footer from "../Componants/Footer";


function EditProfileScreen() {
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(offer1);

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
      setPhoto(offer1);
      setPhotoPreview(offer1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Photo:", photo);
  };
  return (
    <div>
      <Header></Header>

      <section className="mx-8 md:mx-24 grid  mt-24">
        {/* photo */}
        <div className="h-28 grid grid-cols-2">
          <div className="flex items-center justify-center">
            <label
              htmlFor="upload-photo"
              className="cursor-pointer bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400"
            >
              Upload Photo
            </label>
            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="flex items-center justify-center">
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Profile Preview"
                className="w-20 h-20 object-cover rounded-full"
              />
            )}
          </div>
        </div>
        <ProfileDataForm></ProfileDataForm>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default EditProfileScreen;
