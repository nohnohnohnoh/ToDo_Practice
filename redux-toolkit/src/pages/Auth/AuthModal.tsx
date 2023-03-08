import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";
import "./stylesAuth/auth.scss";
import { AppDispatch, RootState } from "../../Store";
import { signUp, signIn } from "../../actions/UserAction";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  handleAuthType: (e: React.FormEvent<HTMLButtonElement>) => void;
  type: string;
  title: string;
  change: string;
}

const AuthModal = ({ handleAuthType, type, title, change }: AuthModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState(false);
  const users = useSelector((state: RootState) => state.users);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  let params = { email: email, password: password };

  const handleSignIn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(signIn(params)).then((res: any) => {
      if (res.payload.message === "성공적으로 로그인 했습니다") {
        localStorage.setItem("token", res.payload.token);
        alert("SIGNINSUCCESS");
        navigate("/todos");
      }
    });
  };

  const handleSignUp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(signUp(params)).then((res: any) => {
      if (res.payload.message === "계정이 성공적으로 생성되었습니다") {
        alert("SIGNUPSUCCESS");
      }
    });
  };

  const onActiveButton = () => {
    return email.includes("@") && email.includes(".") && password.length >= 8
      ? setActiveButton(true)
      : setActiveButton(false);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onChangePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <div className="auth">
      <section className="authBox">
        <form className="authContent">
          <div className="authLogoBox">
            <header className={activeButton ? "activeAuthLogo" : "authLogo"}>
              {title}
            </header>
          </div>
          <AuthInput
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassWord={onChangePassWord}
            onActiveButton={onActiveButton}
          />
          <AuthButton
            type={type}
            handleAuthType={handleAuthType}
            activeButton={activeButton}
            title={title}
            change={change}
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
          />
        </form>
      </section>
    </div>
  );
};

export default AuthModal;
