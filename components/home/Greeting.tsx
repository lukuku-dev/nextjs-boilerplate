"use client";
import Image from "next/image";
import styled from "styled-components";
import packages from "package.json";

interface Props {
  message: string;
}

function Greeting({ message }: Props) {
  return (
    <GreetingSection>
      <div>
        <CompanyLogo>
          <Image src="/icon.png" width={50} height={50} alt="Alt Text" />
        </CompanyLogo>
        <h2>{message}</h2>

        <Title>Dependencies</Title>
        <List>
          {Object.entries(packages.dependencies).map((pack, key) => (
            <li key={key}>{pack}</li>
          ))}
        </List>

        <Title>Dev Dependencies</Title>
        <List>
          {Object.entries(packages.devDependencies).map((pack, key) => (
            <li key={key}>{pack}</li>
          ))}
        </List>
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

const Title = styled.h3`
  color: #777;
  margin: 0;
`;

const List = styled.ul`
  li {
    list-style: none;
    font-size: 16px;
    color: #777;
    text-align: center;
    line-height: 24px;
  }
`;

export default Greeting;
