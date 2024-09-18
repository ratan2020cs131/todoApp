import { sendResponse } from "../utils/response.util.js";
import User from "../models/user.model.js";
import generateOtp from "../utils/otp.util.js";
import sendMail from "../utils/mail.util.js";

export const verifyEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return sendResponse({
        res,
        status: 400,
        message: "provide a valid email",
      });
    const user = await User.findOne({ email });
    const OTP = generateOtp();

    const mailId = await sendMail({
      to: email,
      subject: "todoApp OTP",
      html: `Hi, your todoApp OTP is <b>${OTP}</b>`,
    });

    if (!user) {
      const newUser = new User({ email, otp: OTP });
      await newUser.save();
      return sendResponse({
        res,
        status: 201,
        message: "email saved & verification otp sent",
        data: { email, mailId },
      });
    }

    user.otp = OTP;
    await user.save();

    return sendResponse({
      res,
      status: 200,
      message: "verification otp sent",
      data: { email, mailId },
    });
  } catch (error) {
    console.log("Email verification error ---> ", error.message);
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!otp || !email)
      return sendResponse({
        res,
        status: 400,
        message: "provide a valid email and otp",
      });
    const user = await User.findOne({ email });
    if (!user)
      return sendResponse({
        res,
        status: 404,
        message: "provided email does not exist in our system",
      });
    if (user.otp === otp) {
      user.otp = "";
      await user.save();
      return sendResponse({
        res,
        status: 200,
        message: "user verified",
        data: user,
      });
    } else
      return sendResponse({
        res,
        status: 401,
        message: "wrong otp",
      });
  } catch (error) {
    console.log("OTP verification error ---> ", error.message);
  }
};
