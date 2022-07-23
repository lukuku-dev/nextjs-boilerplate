import Image from "next/image";
import styled from "styled-components";
interface Props {
  message: string;
}

function Greeting({ message }: Props) {
  return (
    <GreetingSection>
      <div>
        <CompanyLogo>
          <Image src="/lukuku.png" layout="fill" />
        </CompanyLogo>
        {message}
      </div>
    </GreetingSection>
  );
}

const GreetingSection = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-Color);
  font-size: 20px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CompanyLogo = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  text-align: center;
`;

export default Greeting;
