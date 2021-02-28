import styled from "styled-components";

const Button = styled.button`
    background-color: #008CBA;
    transition-duration: 0.4s;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    &:hover {
    background-color: white;
    color: #008CBA;
    `;

const UserInput = styled.input`
  padding: 10px 10px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  padding: 10px 10px;
`;

const Container = styled.div`
  width: 100%;
  background-color: #ddd;
`;

const Skills = styled.div`
  text-align: right;
  color: white;
`;

const Rate = styled.div`
  padding-top: 10px;
  height: 30px;
  transition-duration: 1s;
  width: ${(props) => props.currentPercent};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const MainPage = styled.div`
  background-color: #008cba;
  padding-left: 30%;
  padding-top: 30%;
  padding-bottom: 30%;
`;

const Card = styled.div`
  background-color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 500px;
  text-align: center;
  color: white;
`;

export { Button, UserInput, Container, Skills, Rate, MainPage, Card, Wrapper };
