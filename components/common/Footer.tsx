import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <span>{"I'm footer"}</span>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  text-align: center;
`;
