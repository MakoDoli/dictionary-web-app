import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ family: string }>`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: ${(props) => props.family}
    
}
`;
