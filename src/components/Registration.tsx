import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slice/userSlice";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";

const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hendleRegistration = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
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
      <Form handleClick={hendleRegistration} textBtn={"Registration"} />
    </div>
  );
};

export default Registration;
