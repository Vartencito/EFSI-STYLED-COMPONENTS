import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 48px;
  }
`;
export const Name = styled.h1`
  font-weight: bold;
  font-size: 90px;
  color: #cccccc;
  margin: 0;
  padding-bottom: 5px;
  :hover {
    color: "#c1ffc1";
  }
`;
export const Category = styled.h2`
  color: ${({ color }) => color || "#ff80ed"};
  display: flex;
`;
export const Description = styled.p`
  color: #cccccc;
  display: flex;
`;
export const Image = styled.img`
  width: 20%;
`;
