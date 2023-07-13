import styled from "styled-components";

export const StyledWordcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
  }
`;
export const StyledWord = styled.div<{ mode: boolean }>`
  h1 {
    /* font-family: Inter; */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${(props) => (props.mode ? "white" : "#2d2d2d")};
  }
  h3 {
    color: #a445ed;
    /* Body M - Sans */
    /* font-family: Inter; */
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const Noun = styled.div<{ mode: boolean }>`
  color: ${(props) => (props.mode ? "white" : "#2d2d2d")};
  /* font-family: Inter; */
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 29px;
  h4 {
    color: ${(props) => (props.mode ? "white" : "#2d2d2d")};
    /* font-family: Inter; */
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
  }
`;
export const NounLine = styled.div<{ mode: boolean }>`
  height: 1px;
  background-color: ${(props) => (!props.mode ? "#E9E9E9" : "#3a3a3a")};
  width: 100%;
`;

export const Meaning = styled.div`
  color: #757575;
  /* font-family: Inter; */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 31px;
`;

export const Text = styled.li<{ mode: boolean }>`
  color: ${(props) => (props.mode ? "white" : "#2d2d2d")};
  /* font-family: Inter; */
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 13px;
  margin-left: 24px;
`;
export const Synonym = styled.div`
  color: #a445ed;
  /* font-family: Inter; */
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 31px;
  cursor: pointer;
`;
export const Example = styled.p`
  color: #757575;
  /* font-family: Inter; */
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const Source = styled.div<{ mode: boolean }>`
  width: 100%;
  border-top: 1px solid #3a3a3a;
  margin-top: 40px;
  color: #757575;
  display: flex;
  gap: 20px;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  padding-top: 20px;
  a {
    text-decoration: none;
    color: ${(props) => (!props.mode ? "#2D2D2D" : "white")};
  }
`;
