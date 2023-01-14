import styled from "styled-components";

export const ContactItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

export const ContactBtn = styled.button`
  margin-bottom: 5px;
  width: 100px;
  cursor: pointer;
  padding: 5px;
  color: yellow;
  border-radius: 4px;
  border: 1px solid #47bdfd;
  background-color: #00e1ff;
  &:hover {
    background-color: #ea1111fc;
  }
`;

export const Text = styled.p`
  color: teal;
  margin-right: 20px;
`;