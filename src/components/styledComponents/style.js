import styled from "styled-components";

export const NavBar = styled.nav`
  background: white;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px white;
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 2rem;
  margin: 15px;
  color: black;
  position: relative;

  &:before {
    content: "WEB";
    position: absolute;
    font-size: 6px;
    color: black;
    bottom: 0;
    left: 80px;
  }
  &:after {
    content: "DEVELOPER";
    position: absolute;
    font-size: 6px;
    color: black;
    bottom: 0;
    right: 2px;
  }
`;
export const NameFooter = styled.span`
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  color: white;
  position: relative;

  &:before {
    content: "WEB";
    position: absolute;
    font-size: 6px;
    color: white;
    bottom: 0;
    left: 80px;
  }
  &:after {
    content: "DEVELOPER";
    position: absolute;
    font-size: 6px;
    color: white;
    bottom: 0;
    right: 2px;
  }
`;
export const Toggle = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    width: 3rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
export const Bar = styled.div`
  @media (max-width: 700px) {
    position: relative;
    width: 0.8rem;
    height: 3px;
    background: black;
    transition: all 4s ease-in-out;

    &:before {
      content: "";
      position: absolute;
      height: 3px;
      width: 25px;
      background: black;
      transition: all 0.3s ease-in-out;
      transform: ${(props) =>
        props.open ? "rotate(65deg)" : "translateY(-8px)"};
      right: ${(props) => (props.open ? "-11px" : "0")};
      border-radius: 5px;
    }
    &:after {
      content: "";
      border-radius: 5px;
      width: 25px;
      position: absolute;
      height: 3px;
      background: black;
      transition: all 0.3s ease-in-out;
      transform: ${(props) =>
        props.open ? "rotate(-65deg)" : "translateY(8px)"};
      right: ${(props) => (props.open ? "0.5px" : "0")};
    }
  }
`;
export const NavItems = styled.div`
  @media (max-width: 700px) {
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    top: 45px;
    margin: 0;
    transition: all 0.3s ease-in-out;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 5px 1rem 5px;
`;
export const MainFooter = styled.div`
  color: white;
  background: #31475f;
  padding-top: 3rem;
  position: relative;
  bottom: 0;
  box-shadow: 0 0 15px white;
`;
export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const UlIcon = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 9rem;
  font-size: 2rem;

  @media (max-width: 425px) {
    flex-direction: column;
    font-size: 1rem;
    width: 1rem;
  }
`;
export const Icons = styled.span`
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
export const MainContent = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HomeButton = styled.button`
  padding: 7px;
  margin: 5px;
  font-size: 1rem;
  font-weight: 300;
  text-align: start;
  background: transparent;
  border: none;
  letter-spacing: 0.2em;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  outline: none;
`;
export const StyledForm = styled.form`
  position: absolute;
  width: 500px;
  height: 400px;
  left: 50%;
  top: 0;
  transform: translate(-50%, 50%);
  background: #31475f;
  padding: 15px;

  @media (max-width: 700px) {
    width: 300px;
    height: 420px;
    top: -15%;
  }
`;
export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;
export const Inputs = styled.input`
  margin: 10px 0px;
  padding: 5px;
  height: 35px;
  transition: border 0.2s ease-in-out;
  outline: none;
  border: none;
  border-radius: 2px;

  &:focus {
    border: ${(props) => (props.email ? "3px solid green" : "2px solid red")};
  }
`;
export const FormSubmit = styled.button`
  margin: 10px 0px;
  width: 100%;
  height: 35px;
  font-weight: 700;
  background: white;
  border: none;
`;
