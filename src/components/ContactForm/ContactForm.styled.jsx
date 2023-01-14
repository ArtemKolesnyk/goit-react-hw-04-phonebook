import styled from "styled-components";

export const Form = styled.form`
  color: teal;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  
`;

export const Label = styled.label`
  color: green;
  margin: 10px;
`;

export const Button = styled.button`
    width: 100px;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #47bdfd;
    background-color: #00e1ff;
    margin-bottom: 25px;
  &:hover {
    background-color: #8aaa52fc;
  }
`;

export const Input = styled.input`
  border: solid teal 2px;
  border-radius: 4px;
  margin: 10px;
  &:focus {
    border-radius: 4px;
    border: solid  teal 2px;
    box-shadow: 20px 20px 50px teal;
  }
`;