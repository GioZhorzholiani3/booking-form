import styled from "styled-components";

const Head = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #3f33e1;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: #8fb8d8;
`;

const Header = () => {
  return (
    <header>
      <Head>booking form</Head>
    </header>
  );
};

export default Header;
