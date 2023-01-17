import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/slice/userSlice";
import { useAuth } from "../hooks/userAuth";
import { useAppDispatch } from "../hooks/redux-hooks";
import styled from "styled-components";
const WrapperContentPage = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  justify-content: space-around;
`;
const ContentPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/authorization");
    }
  }, [isAuth]);

  return (
    <WrapperContentPage>
      <div>Menu</div>
      <div>Aside</div>
      <div>Messages</div>
      <div>User Info</div>
      <div>
        <button onClick={() => dispatch(removeUser())}>Log Out {email}</button>
      </div>
    </WrapperContentPage>
  );
};

export default ContentPage;
