import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const HeaderMenu = styled.div<{ mode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;
  h2 {
    color: ${(props) => (props.mode ? "white" : "#2d2d2d")};
    text-align: right;
    /* font-family: Inter; */
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const Line = styled.div`
  height: 32px;
  width: 1px;
  border: 1px solid #e9e9e9;
`;
export const Toggle = styled.div<{ mode: boolean }>`
  width: 38px;
  height: 20px;
  background-color: ${(props) => (props.mode ? "#A445ED" : "#757575")};
  border-radius: 20px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.mode ? "flex-start" : "flex-end")};
  cursor: pointer;
`;
export const ToggleButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;
export const Modal = styled.div<{ mode: boolean }>`
  width: 100px;
  height: 82px;
  background-color: ${(props) => (props.mode ? "#1F1F1F" : "white")};
  position: absolute;
  box-shadow: 0px 5px 30px 0px #a445ed;
  border-radius: 16px;
  top: 50px;
  right: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  h2:hover {
    color: #a445ed;
  }
`;
