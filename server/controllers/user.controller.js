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
      const newUser = new User({ email });
      await newUser.save();
      return sendResponse({
        res,
        status: 201,
        message: "email saved & verification otp sent",
        data: { email, mailId },
      });
    }
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
