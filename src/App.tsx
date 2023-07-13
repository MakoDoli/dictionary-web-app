/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";
import axios from "axios";
import { DataType } from "./components/Result/DataType";

function App() {
  const [theme, setTheme] = useState(true);
  const [word, setWord] = useState<string | undefined>("keyboard");
  const [wordInfo, setWordInfo] = useState<DataType | undefined>();
  // let wordInfo: DataType;

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${
    word ? word : ""
  }`;

  const searchWord = async function () {
    try {
      const response = await axios.get(url);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.data;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      setWordInfo(data[0]);

      console.log(wordInfo);
    } catch {
      console.error(Error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    searchWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main mode={theme}>
      <GlobalStyles />

      <Header theme={theme} setTheme={setTheme} />
      <Input
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        handleSearch={searchWord}
        theme={theme}
        word={word}
        setWord={setWord}
      />
      <Result info={wordInfo} theme={theme} setWord={setWord} />
    </Main>
  );
}

export default App;
const Main = styled.main<{ mode: boolean }>`
  background-color: ${(props) => (props.mode ? "#050505" : "white")};
  min-width: 100%;
  min-height: 100vh;
  padding: 24px;
  @media screen and (min-width: 1050px) {
    padding: 58px 351px 30px 351px;
  }
`;
