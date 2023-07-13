import styled from "styled-components";

export const StyledSearch = styled.div<{ mode: boolean; outline: boolean }>`
  display: flex;
  justify-content: space-between;
  /* width: 327px; */
  height: 48px;
  background-color: ${(props) => (props.mode ? "#1F1F1F" : "#F4F4F4")};
  margin-top: 40px;
  border-radius: 16px;
  border: 1px solid #a445ed;
  padding: 0 24px;
  border: ${(props) => (props.outline ? '1px solid "#A445ED"' : "none")};
  img {
    width: 18px;
    height: 18px;
  }
  align-items: center;
`;

export const StyledInput = styled.input<{ mode: boolean }>`
  width: 280px;
  height: 46px;
  border-radius: 16px;
  background-color: ${(props) => (props.mode ? "#1F1F1F" : "#F4F4F4")};
  color: ${(props) => (!props.mode ? "#2d2d2d" : "#F4F4F4")};
  font-family: Inconsolata;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  outline: none;
`;
