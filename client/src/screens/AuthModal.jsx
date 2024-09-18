import { useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";
const AuthModalBody = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <TextInput
        placeholder="Type your email here"
        value={email}
        onChange={(value) => setEmail(value)}
      />
    </div>
  );
};

const AuthModal = () => {
  return <Modal title="Enter you email" />;
};
export default AuthModal;
