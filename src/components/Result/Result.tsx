/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { StyledWordcontainer } from "./Result.styled";
import { StyledWord } from "./Result.styled";
import play from "../../assets/images/icon-play.svg";
import { Noun } from "./Result.styled";
import { NounLine } from "./Result.styled";
import { Meaning } from "./Result.styled";
import { Text } from "./Result.styled";
import { Synonym } from "./Result.styled";
import { DataType } from "./DataType";
import { Source } from "./Result.styled";
import { useState } from "react";
import wiki from "../../assets/images/icon-new-window.svg";

interface Props {
  theme: boolean;
  info: DataType | undefined;
  setWord: (string: string | undefined) => void;
}
export default function Result(props: Props) {
  const { theme, info, setWord } = props;

  const nounMeanings = info?.meanings[0].definitions;
  const verbMeanings = info?.meanings[1]?.definitions;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioUrl = info?.phonetics.find((elem) => elem.audio !== "");
  const source = audioUrl?.audio;

  return (
    <>
      <StyledWordcontainer>
        <StyledWord mode={theme}>
          <h1>{info?.word}</h1>
          <h3>{info?.phonetic}</h3>
        </StyledWord>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => setIsPlaying(!isPlaying)}
          src={play}
          alt="play"
        />
        <audio src={source} controls={isPlaying}></audio>
      </StyledWordcontainer>
      <Noun mode={theme}>
        <h4>noun</h4>
        <NounLine mode={theme}></NounLine>
      </Noun>
      <Meaning>Meaning</Meaning>
      <ul>
        {nounMeanings?.map((elem, index) => (
          <Text key={index} mode={theme}>
            {elem.definition}
          </Text>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Meaning>Synonyms</Meaning>
        <Synonym onClick={() => setWord(info?.meanings[0].synonyms[0])}>
          {info?.meanings[0].synonyms[0]}
        </Synonym>
      </div>
      <Noun mode={theme}>
        <h4>verb</h4>
        <NounLine mode={theme}></NounLine>
      </Noun>
      <Meaning>Meaning</Meaning>
      <ul>
        {verbMeanings?.map((elem, index) => (
          <Text key={index} mode={theme}>
            {elem.definition}
          </Text>
        ))}
      </ul>
      <Source mode={theme}>
        Source{" "}
        <a target="_blank" href={info?.sourceUrls[0]}>
          {`${info?.sourceUrls[0]}  `}
          <img src={wiki} alt="link"></img>
        </a>
      </Source>
    </>
  );
}
