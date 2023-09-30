import { styled } from "styled-components";
import { Button } from "./Button";
import { useState } from "react";

export const Post = ({ Q, P, C }) => {
  const [opened, setOpened] = useState(false);

  const Comment = () => {
    if (opened === false) setOpened(true);
    else setOpened(false);
  };

  return (
    <Wrapper>
      <Question>
        <h1>
          질문: <span>{Q}</span>
        </h1>
        <h1>
          성향 목록: <span>{P}</span>
        </h1>
      </Question>
      <Buttons>
        <Button Text='찬성' />
        <Button
          Text={<img src='/imgs/Comment.svg' width='20' height='20' />}
          Click={Comment}
        />
      </Buttons>
      <Comments display={opened}>
        <Line />
        <h3>댓글</h3>
        <input type='text' placeholder='댓글을 입력하세요' />
        <ul>
          {C.map((i) => {
            return <li>{i}</li>;
          })}
        </ul>
      </Comments>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-height: auto;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 15px;
  background: whitesmoke;
  transition: 0.2s all;
`;

const Question = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  & > h1 {
    font-size: 20px;
    & > span {
      font-size: 15px;
    }
  }
`;

const Buttons = styled.div`
  gap: 10px;
  display: flex;
`;

const Comments = styled.div`
  gap: 10px;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  & > input {
    width: 50%;
    background: white;
    border: 1px solid black;
    border-radius: 15px;
    outline: none;
  }
  & ul {
    padding: 0;
    list-style: none;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: black;
`;
