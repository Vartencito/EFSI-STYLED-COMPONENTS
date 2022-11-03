import styled from "styled-components";

export const GlosarioItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color || "black"};
`;

export const GlosarioItemCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color: ${({ color }) => color || "black"};
`;

export const GlosarioItemP = styled.p`
  padding: space-around;
  background-color: green;
  color: ${({ color }) => color || "grey"};
`;
