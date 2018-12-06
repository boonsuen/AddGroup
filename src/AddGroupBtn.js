import React from "react";
import styled, { css } from "styled-components";
import { topBubbles, bottomBubbles } from "./keyframes";
import img_addGroup from "./addgroup.svg";

const bubbleColor = "#db9eff";

const topMixin = css`
  animation: ${topBubbles} ease-in-out 0.75s forwards;
`;

const bottomMixin = css`
  animation: ${bottomBubbles} ease-in-out 0.75s forwards;
`;

const StyledAddGroupBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 48px;
  outline: none;
  box-sizing: border-box;
  background: linear-gradient(128.71deg, #5859bf 0%, #9495f5 100%);
  box-shadow: 0 2px 15px rgba(217, 138, 255, 0.5);
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  font-size: 16px;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;

  &:focus {
    outline: 0;
  }

  &:focus {
    outline: 0;
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &:before {
    ${props => (props.animate ? topMixin : "color: blue;")};
    display: ${props => (props.animate ? "block" : "none")};
    top: -75%;
    background-image: radial-gradient(
        circle,
        ${bubbleColor} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${bubbleColor} 20%,
        transparent 30%
      ),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${bubbleColor} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;
  }

  &:after {
    ${props => (props.animate ? bottomMixin : "none")};
    display: ${props => (props.animate ? "block" : "none")};
    bottom: -75%;
    background-image: radial-gradient(
        circle,
        ${bubbleColor} 20%,
        transparent 20%
      ),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${bubbleColor} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${bubbleColor} 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
      20% 20%;
  }

  &:active {
    transform: scale(0.9);
  }

  img {
    margin: -1px 9px 0 0;
  }
`;

class AddGroupBtn extends React.Component {
  state = {
    animatingBubbles: false
  };
  animateBubbles = _ => {
    this.setState({ animatingBubbles: false });
    this.setState({ animatingBubbles: true });
    setTimeout(() => {
      this.setState({ animatingBubbles: false });
    }, 700);
  };
  handleClick = e => {
    e.preventDefault();
    e.persist();
    this.animateBubbles();
  };
  render() {
    return (
      <StyledAddGroupBtn
        onClick={this.handleClick}
        animate={this.state.animatingBubbles}
      >
        <img src={img_addGroup} alt="" />
        <span>Add group</span>
      </StyledAddGroupBtn>
    );
  }
}

export default AddGroupBtn;
