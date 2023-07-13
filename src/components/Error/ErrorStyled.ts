import styled from "styled-components";

export const ErrorContainer = styled.div<{ mode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 40px;
    margin-top: 80px;
  }
  h5 {
    color: ${(props) => (props.mode ? "#2D2D2D" : "white")};
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 40px;
  }
  p {
    color: #757575;
    text-align: center;
    /* Body M - Sans */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 20px;
  }
`;
