import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 0 0 2rem;
  text-align: center;
  justify-content: center;
  background-color: #ee0d5d;
  @media screen and (max-width: 1024px) {
    padding: 2.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  position:relative;
  display:flex;
  align-items:center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const Machine = styled("img")`
  max-width: 870px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
