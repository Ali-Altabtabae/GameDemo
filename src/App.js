import React, { useState } from "react";
import {
  Button,
  UserInput,
  Container,
  Skills,
  Rate,
  MainPage,
  Card,
  Wrapper,
} from "./style";

function App() {
  const theme = {
    green: {
      backgroundColor: "darkgreen", // main background color
    },
    blue: {
      backgroundColor: "darkblue", // main background color
    },
    yellow: {
      backgroundColor: "gold", // main background color
    },
    orange: {
      backgroundColor: "orange", // main background color
    },
    red: {
      backgroundColor: "red", // main background color
    },
  };

  const [currentBar, setBar] = useState("black");
  const toggleBar = () => {
    if (parseFloat(query) === defaultNumber) setBar("green");
    else if (
      defaultNumber <= parseFloat(query) + 5 &&
      defaultNumber >= parseFloat(query) - 5
    )
      setBar("blue");
    else if (
      defaultNumber <= parseFloat(query) + 10 &&
      defaultNumber >= parseFloat(query) - 10
    )
      setBar("yellow");
    else if (
      defaultNumber <= parseFloat(query) + 15 &&
      defaultNumber >= parseFloat(query) - 15
    )
      setBar("orange");
    else if (
      defaultNumber <= parseFloat(query) + 20 &&
      defaultNumber >= parseFloat(query) - 20
    )
      setBar("red");
    else setBar("black");
  };

  const [currentPercent, setPercent] = useState("0%");
  const togglePercent = () => {
    if (parseFloat(query) === defaultNumber) setPercent("100%");
    else if (
      defaultNumber <= parseFloat(query) + 5 &&
      defaultNumber >= parseFloat(query) - 5
    )
      setPercent("70%");
    else if (
      defaultNumber <= parseFloat(query) + 10 &&
      defaultNumber >= parseFloat(query) - 10
    )
      setPercent("50%");
    else if (
      defaultNumber <= parseFloat(query) + 15 &&
      defaultNumber >= parseFloat(query) - 15
    )
      setPercent("30%");
    else if (
      defaultNumber <= parseFloat(query) + 20 &&
      defaultNumber >= parseFloat(query) - 20
    )
      setPercent("10%");
    else setPercent("0%");
  };

  // Correct Random Number
  const [defaultNumber, setDefaultNumber] = useState(undefined);
  const changeNumber = () => {
    setDefaultNumber(Math.floor(Math.random() * 100));
  };
  
  // Query that saves user input
  const [query, setQuery] = useState(0);

  // Messages
  const [check, setCheck] = useState("Try");
  const gameFunction = () => {
    if (parseFloat(query) === defaultNumber) setCheck("You Won");
    else if (attempt === 1) setCheck("You Lost")
    else setCheck("Try Again");
  };

  // Gives user hintbar about the correct number
  const [hintbar, setHintbar] = useState("...");
  const hintbarFunction = () => {
    if (parseFloat(query) === defaultNumber) setHintbar("Found it!");
    else if (
      defaultNumber <= parseFloat(query) + 5 &&
      defaultNumber >= parseFloat(query) - 5
    )
      setHintbar("Too Close");
    else if (
      defaultNumber <= parseFloat(query) + 10 &&
      defaultNumber >= parseFloat(query) - 10
    )
      setHintbar("Good Guess");
    else if (
      defaultNumber <= parseFloat(query) + 15 &&
      defaultNumber >= parseFloat(query) - 15
    )
      setHintbar("Bad Guess");
    else if (
      defaultNumber <= parseFloat(query) + 20 &&
      defaultNumber >= parseFloat(query) - 20
    )
      setHintbar("Unlucky");
    else setHintbar("...");
  };

  // Count number of attempts
  const [attempt, setAttempt] = useState(5);
  const attmeptCounter = () => setAttempt(attempt - 1);

  // Gives user limited amount of attempts
  const [gameover, setGameover] = useState(false);
  const gameoverFunction = () => {
    if (attempt === 1 || parseFloat(query) === defaultNumber) setGameover(true);
    else setGameover(false);
  };

  // Gives Hint 

  let randomArray = [
    Math.floor(Math.random() * 10) + ", ",
    Math.floor(Math.random() * 20) + 10 + ", ",
    Math.floor(Math.random() * 20) + 30 + ", ",
    Math.floor(Math.random() * 20) + 50 + ", ",
    Math.floor(Math.random() * 30) + 70 + ", ",
    defaultNumber + ", "
  ];
  randomArray = randomArray.sort(() => Math.random() - 0.5);
  
  // Gives user hint
  const [hint, setHint] = useState(null);
  const handleHint= () => {
    setHint(randomArray);
  };
  const [hintover, setHintover] = useState(false);
  const hintoverFunction = () => {
     setHintover(true);
   };

  return (
    <MainPage>
      <Card>
        <br/>
      <Button onClick={changeNumber}>Start The Game</Button>
      {defaultNumber}
        <Wrapper>
          <UserInput
            placeholder="Make a Guess"
            setQuery={setQuery}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Wrapper>
        <gameFunction />
        <Wrapper>
          <Button
            disabled={gameover}
            onClick={() => {
              gameFunction();
              hintbarFunction();
              attmeptCounter();
              gameoverFunction();
              toggleBar();
              togglePercent();
            }}
          >
            {check}
          </Button>
        </Wrapper>
        <Wrapper>
          <p>Attempts left: {attempt}</p>
        </Wrapper>
        <Container>
          <Skills>
            <Rate theme={theme[currentBar]} currentPercent={currentPercent}>
              {hintbar}
            </Rate>
          </Skills>
        </Container>
        <Wrapper>
          <Button disabled={hintover} onClick={() => {
            handleHint();
            hintoverFunction();
            }}>Hint</Button>
          <Wrapper>{hint}</Wrapper>
        </Wrapper>
      </Card>
    </MainPage>
  );
}

export default App;
