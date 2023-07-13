import { StyledHeader } from "./HeaderStyled";
import logo from "../../assets/images/logo.svg";
import { HeaderMenu } from "./HeaderStyled";
import arrow from "../../assets/images/icon-arrow-down.svg";
import { Toggle } from "./HeaderStyled";
import { Line } from "./HeaderStyled";
import { ToggleButton } from "./HeaderStyled";

interface Props {
  theme: boolean;
  setTheme: (status: boolean) => void;
}

export default function Header(props: Props) {
  const { theme, setTheme } = props;

  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <HeaderMenu mode={theme}>
        <h2>Sans Serif</h2>
        <img src={arrow} alt="arrow" style={{ cursor: "pointer" }} />
        <Line></Line>
        <Toggle mode={theme} onClick={() => setTheme(!theme)}>
          <ToggleButton></ToggleButton>
        </Toggle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke={theme ? "#A445ED" : "#838383"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </HeaderMenu>
    </StyledHeader>
  );
}
