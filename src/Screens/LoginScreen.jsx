import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import RevRateLogo from "../assets/logo.svg";
import brand1 from "../assets/image1.jpg";
import Links from "../Componants/Links";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const { login } = useContext(AuthContext); // Use context to manage auth state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Email and password are required.",
      });
      setIsSubmitting(false); // Re-enable the button
      return;
    }

    try {
      await login(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
      });
      navigate('/'); // Navigate to the main page
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "An error occurred.",
      });
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
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
              LOGIN
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
                  className="block w-full border border-gray-300 rounded-md p-2 mt-1"
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
                  className="block w-full border border-gray-300 rounded-md p-2 mt-1"
                />
              </div>

              <button
                type="submit"
                className={`bg-orange-500 text-white font-bold py-2 px-4 rounded-lg mt-8 w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "LOGIN"}
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?
              <Link to="/signup">
                <Links value="Sign up" />
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
