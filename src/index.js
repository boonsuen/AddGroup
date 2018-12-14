import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AddGroup from "./AddGroup";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Avenir Next";
  height: 300px;
  background-color: #f7f8fe;
  z-index: 1;
  position: relative;
  padding: 80px 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <h1>JavaScript</h1>
          <AddGroup />
        </Header>
      </Wrapper>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
