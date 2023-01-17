import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slice/userSlice";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hendleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return (
    <div>
      <Form handleClick={hendleLogin} textBtn={"Login"} />
    </div>
  );
};

export default Login;
