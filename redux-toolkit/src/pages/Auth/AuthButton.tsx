import React from "react";

interface AuthButtonProps {
  type: string;
  handleAuthType: (e: React.FormEvent<HTMLButtonElement>) => void;
  activeButton: boolean;
  title: string;
  change: string;
  handleSignIn: (e: React.FormEvent<HTMLButtonElement>) => void;
  handleSignUp: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const AuthButton = ({
  type,
  handleAuthType,
  activeButton,
  title,
  change,
  handleSignIn,
  handleSignUp,
}: AuthButtonProps) => {
  const chagneFormData = (e: React.FormEvent<HTMLButtonElement>) => {
    if (type === "signIn") {
      handleSignIn(e);
    } else if (type === "signUp") {
      handleSignUp(e);
    }
  };

  return (
    <div className="authButtonBox">
      <button
        onClick={chagneFormData}
        className={activeButton ? "activeAuthButton" : "authButton"}
      >
        {title}
      </button>
      <button className="authTypeButton" onClick={handleAuthType}>
        {change}
      </button>
    </div>
  );
};

export default AuthButton;
