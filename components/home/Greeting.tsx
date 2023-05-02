import Image from "next/image";
import styled from "styled-components";
interface Props {
  message: string;
}

function Greeting({ message }: Props) {
  return (
    <GreetingSection>
      <div>
      <div className="main-section-heading">
            <h2>Check payment details</h2>
      </div>
      </div>
    </GreetingSection>
  );
}

const GreetingSection = styled.div`
  min-height: 90vh;
  display: flex;
  color: var(--primary-Color);
  font-size: 20px;
  margin: 1% 10%;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const CompanyLogo = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  text-align: center;
`;



export default Greeting;
