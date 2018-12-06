import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AddGroupBtn from "./AddGroupBtn";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Avenir Next";
  padding-top: 80px;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <AddGroupBtn />
      </Wrapper>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
