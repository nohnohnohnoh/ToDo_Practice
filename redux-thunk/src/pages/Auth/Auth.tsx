import React, { ReactEventHandler, useState } from "react";
import AuthModal from "./AuthModal";

const Auth = () => {
  const [isAuthType, setIsAuthType] = useState(true);

  const handleAuthType = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAuthType(!isAuthType);
  };
  return (
    <div>
      {isAuthType ? (
        <AuthModal
          handleAuthType={handleAuthType}
          type="signIn"
          title="로그인"
          change="회원가입으로 가기"
        />
      ) : (
        <AuthModal
          handleAuthType={handleAuthType}
          type="signUp"
          title="회원가입"
          change="로그인하러 가기"
        />
      )}
    </div>
  );
};

export default Auth;
