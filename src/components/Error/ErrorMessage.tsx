import { ErrorContainer } from "./ErrorStyled";
interface Props{
    theme: boolean
}
export default function ErrorMessage(props: Props) {
  return (
    <ErrorContainer mode={props.theme}>
      <span>😕</span>
      <h5>No Definitions Found</h5>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </ErrorContainer>
  );
}
