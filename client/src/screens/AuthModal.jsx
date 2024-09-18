import { useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";
import { useAuth, useGetEmail } from "../hooks/useAuth";
import Button from "../components/Button";

const AuthModalBody = () => {
  const { sendEmail, isAuthenticating } = useGetEmail();
  const [email, setEmail] = useState("");

  const sendEmailHandler = async () => {
    await sendEmail({
      email,
    });
  };

  return (
    <div className="w-[25rem] flex gap-4 items-center">
      <TextInput
        placeholder="Type your email here"
        value={email}
        onChange={(value) => setEmail(value)}
      />
      <Button title="Submit" loading={isAuthenticating} onClick={sendEmailHandler} />
    </div>
  );
};

const AuthModal = () => {
  const authenticated = useAuth();

  return (
    <Modal unClosable={!authenticated} title="Enter your email">
      <AuthModalBody />
    </Modal>
  );
};
export default AuthModal;
