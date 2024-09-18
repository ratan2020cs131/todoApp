import { useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";
import { useAuth, useGetEmail, useVerifyOtp } from "../hooks/useAuth";
import Button from "../components/Button";
import { useAuthStates } from "../store/useAuth.store";
import { useModalVisibility } from "../store/useModal";

const AuthModalBody = () => {
  const { otpSent } = useAuthStates();
  const { sendEmail, isAuthenticating } = useGetEmail();
  const { sendOtp, isVerifyingOtp } = useVerifyOtp();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const sendEmailHandler = async () => {
    await sendEmail({
      email,
    });
  };

  const otpHandler = async () => {
    await sendOtp({
      email,
      otp,
    });
  };

  const isSubmitDisable = (() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return otpSent
      ? otp.trim().length !== 6
      : !emailRegex.test(email) || email.trim() === "";
  })();

  return (
    <div className="w-[25rem] flex gap-4 items-center">
      {otpSent ? (
        <TextInput
          maxLength={6}
          type="number"
          placeholder="Enter the otp sent to your mail"
          value={otp}
          onChange={(value) => setOtp(value)}
        />
      ) : (
        <TextInput
          placeholder="Type your email here"
          value={email}
          onChange={(value) => setEmail(value)}
        />
      )}
      <Button
        disabled={isSubmitDisable}
        title="Submit"
        loading={isAuthenticating || isVerifyingOtp}
        onClick={otpSent ? otpHandler : sendEmailHandler}
      />
    </div>
  );
};

const AuthModal = () => {
  const authenticated = useAuth();
  const showAuthModal = useModalVisibility();

  return (
    <Modal
      visible={showAuthModal}
      unClosable={!authenticated}
      title="Enter your email"
    >
      <AuthModalBody />
    </Modal>
  );
};
export default AuthModal;
