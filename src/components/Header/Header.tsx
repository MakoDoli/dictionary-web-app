import { StyledHeader } from "./HeaderStyled";
import logo from "../../assets/images/logo.svg";
import { HeaderMenu } from "./HeaderStyled";
import arrow from "../../assets/images/icon-arrow-down.svg";
import { Toggle } from "./HeaderStyled";
import { Line } from "./HeaderStyled";
import { ToggleButton } from "./HeaderStyled";
import grey from "../../assets/images/icon-moongrey.svg";
import purple from "../../assets/images/icon-moonpurple.svg";
import { Modal } from "./HeaderStyled";
import { useState } from "react";

interface Props {
  theme: boolean;
  setTheme: (status: boolean) => void;
  setfont: (string: string) => void;
}

export default function Header(props: Props) {
  const { theme, setTheme, setfont } = props;
  const [showModal, setShowModa] = useState(false);

  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <HeaderMenu mode={theme}>
        <h2>Sans Serif</h2>
        <img
          onClick={() => setShowModa(!showModal)}
          src={arrow}
          alt="arrow"
          style={{ cursor: "pointer" }}
        />
        <Line></Line>
        <Toggle mode={theme} onClick={() => setTheme(!theme)}>
          <ToggleButton></ToggleButton>
        </Toggle>
        {!theme ? (
          <img src={grey} alt="moon" />
        ) : (
          <img src={purple} alt="moon" />
        )}
        {showModal ? (
          <Modal mode={theme}>
            <h2 onClick={() => setfont("Inter")}>Sans Serif</h2>
            <h2 onClick={() => setfont("Lora")}>Serif</h2>
            <h2 onClick={() => setfont("Inconsolata")}>Mono</h2>
          </Modal>
        ) : (
          ""
        )}
      </HeaderMenu>
    </StyledHeader>
  );
}
