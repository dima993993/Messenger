import { FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const WrapperForm = styled.div`
  width: 60%;
  height: 80vh;
  margin: auto;
  border: 1px solid red;
  text-align: center;
  border-radius: 20px;
  background-color: var(--color-bg);
`;

interface FormProps {
  textBtn: string;
  handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({ textBtn, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <WrapperForm>
      <div>
        <TextField
          placeholder="Enter Email"
          variant="filled"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextField
          placeholder="Enter Password"
          variant="filled"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => handleClick(email, password)}
          style={{ backgroundColor: "var(--color-active)" }}
        >
          {textBtn}
        </Button>
      </div>
    </WrapperForm>
  );
};

export default Form;
