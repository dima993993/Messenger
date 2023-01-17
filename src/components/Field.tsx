import { FC } from "react";
import styled from "styled-components";

interface FieldProps {
  type: string;
  placeholder: string;
  title: string;
  handleOnChange: (e: string) => void;
}

const WrapperField = styled.div`
  input {
    border: 1px solid #cccccc;
    border-radius: 8px;
    padding: 5px 10px;
  }
`;

const Field: FC<FieldProps> = ({
  type,
  placeholder,
  title,
  handleOnChange,
}) => {
  return (
    <WrapperField>
      <label>{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </WrapperField>
  );
};

export default Field;
