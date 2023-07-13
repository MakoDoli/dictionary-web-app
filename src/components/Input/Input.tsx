import { StyledSearch } from "./InputStyled";
import { StyledInput } from "./InputStyled";
import search from "../../assets/images/icon-search.svg";
import { useState } from "react";
interface Props {
  theme: boolean;
  word: string | undefined;
  setWord: (value: string) => void;
  handleSearch: () => void;
}
export default function Input(props: Props) {
  const { theme, word, setWord } = props;
  const [borderLine, setBorderLIne] = useState(false);

  return (
    <StyledSearch mode={theme} outline={borderLine}>
      <StyledInput
        mode={theme}
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onFocus={() => setBorderLIne(true)}
        onBlur={() => setBorderLIne(false)}
      />
      <img onClick={props.handleSearch} src={search} alt="search" />
    </StyledSearch>
  );
}
