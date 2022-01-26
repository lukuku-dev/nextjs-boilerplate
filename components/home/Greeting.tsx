import styled from "styled-components";
interface Props {
  message: string;
}

function Greeting({ message }: Props) {
  return <MainMessage>{message}</MainMessage>;
}

const MainMessage = styled.p`
  color: blue;
  font-size: 20px;
`;
export default Greeting;
