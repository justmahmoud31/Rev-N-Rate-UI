import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import RevRateLogo from "../assets/logo.svg";
import brand1 from "../assets/image1.jpg";
import Links from "../Componants/Links";
import { Link, useNavigate } from "react-router-dom";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email || !username || !password || !phone) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "All fields are required.",
      });
      setIsSubmitting(false); // Re-enable the button
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          email,
          username,
          password,
          phone,
        }
      );

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have successfully registered!",
      });
      navigate("/");
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response.data.Message || "An error occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="grid max-w-full min-h-screen grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center ">
        <div className="home__data flex flex-col items-center justify-center max-w-full mx-12 my-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-32 w-auto"
              src={RevRateLogo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-500 hover:text-orange-500">
              SIGN UP
            </h2>
          </div>

          <div className="mt-10 w-full lg:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-orange-500"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-orange-500"
                  >
                    Username
                  </label>
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-orange-500"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-gray-600 hover:text-gray-800"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-orange-500"
                  >
                    Phone Number
                  </label>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Enter your phone number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className={`bg-orange-500 text-white font-bold py-2 px-4 rounded-lg mt-8 w-full ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting} // Disable button when submitting
              >
                {isSubmitting ? "Submitting..." : "SIGN UP"}
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account ?
              <Link to="/login">
                <Links value="Login" />
              </Link>
            </p>
          </div>
        </div>
        <div
          className="home__img hidden sm:flex max-h-full"
          style={{
            backgroundImage: `url(${brand1})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        ></div>
      </div>
    </>
  );
}
