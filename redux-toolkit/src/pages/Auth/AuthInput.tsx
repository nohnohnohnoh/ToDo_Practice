import React from "react";

interface AuthInputProps {
  email: string | number;
  password: string | number;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onActiveButton: () => void;
}

const AuthInput = ({
  email,
  password,
  onChangeEmail,
  onChangePassWord,
  onActiveButton,
}: AuthInputProps) => {
  return (
    <>
      <div className="authInputBox">
        <input
          onChange={onChangeEmail}
          onKeyUp={onActiveButton}
          type="text"
          className="authEmail"
          value={email}
        />
        <label className="authLabel">Email</label>
      </div>
      <div className="authInputBox">
        <input
          onChange={onChangePassWord}
          onKeyUp={onActiveButton}
          type="password"
          className="authPassword"
          value={password}
        />
        <label className="authLabel">PassWord</label>
      </div>
    </>
  );
};

export default AuthInput;
