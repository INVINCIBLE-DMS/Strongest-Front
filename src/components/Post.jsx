import { styled } from "styled-components";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { getComments } from "../apis/getComments";
import { postAgree } from "../apis/postAgree";
import { postComments } from "../apis/postComments";
import { patchComments } from "../apis/patchComments";

export const Post = ({ Q, P, I, A }) => {
  const [opened, setOpened] = useState(false);
  const [edit, setEdit] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(I).then(res => setComments(res.data));
  }, [])

  const Comment = () => {
    if (opened === false) setOpened(true);
    else setOpened(false);
  };

  const uploadComment = e => {
    if(e.code==="Enter") {
      if(edit===0) {
        postComments(I, comment).then(() => window.location.reload());
        // setComments([...comments, { "content": comment, "update": false }])
        // setComment('');
      }
      else {
        patchComments(edit, comment).then(() => {
          window.location.reload();
        });
      }
    }
  }

  const clickComment = e => {
    setEdit(e.target.id);
    setComment((e.target.innerText).replaceAll("(수정됨)", ""));
  }

  const Agree = () => {
    if(!localStorage.getItem(`agreed_${I}`)) {
      localStorage.setItem(`agreed_${I}`, true);
      postAgree(I).then(() => {
        alert(`찬성했습니다. 총 ${A+1}명이 찬성했습니다.`);
        window.location.reload();
      });
    }
  }

  return (
    <Wrapper>
      <Question>
        <h1> 질문: <span>{Q}</span> </h1>
        <h1> 성향: <span>{P}</span> </h1>
      </Question>
      <Buttons>
        <Button Text='찬성' Click={Agree}/>
        <Button Text={<img src='/imgs/Comment.svg' width='20' height='20' />} Click={Comment} />
      </Buttons>
      <Comments display={opened}>
        <Line />
        <h3>댓글</h3>
        <input type='text' placeholder='댓글을 입력하세요' onKeyDown={uploadComment} value={comment} onChange={e => setComment(e.target.value)}/>
        <ul>
          {
            comments.map((comment, index) => {
            return <li id={comment.id} key={index} onClick={clickComment}>{comment.content}<Edited Edit={comment.update}>(수정됨)</Edited></li>;
            })
          }
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
  & * { user-select: none; }
`;

const Question = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  & > h1 {
    font-size: 20px;
    & > span { font-size: 15px; }
  }
`;

const Buttons = styled.div`
  gap: 10px;
  display: flex;
`;

const Comments = styled.div`
  gap: 10px;
  flex-direction: column;
  display: ${(props) => (props.display ? "flex" : "none")};
  & > input {
    width: 50%;
    outline: none;
    border-radius: 15px;
    background: white;
    border: 1px solid black;
  }
  & ul {
    padding: 0;
    list-style: none;
    & > li { 
      gap: 1px;
      display: flex;
      align-items: center;
      cursor: pointer; 
      &:hover { 
        text-decoration: underline; 
      }
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: black;
`;

const Edited = styled.i`
  display: ${props => props.Edit ? "block" : "none"};
  margin-left: 2px;
  color: gray;
  font-size: 9px;
`;