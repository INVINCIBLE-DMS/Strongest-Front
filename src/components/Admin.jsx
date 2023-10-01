import { styled } from "styled-components";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { getPosts } from "../apis/getPosts";

export const Admin = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getPosts().then(res => setPosts(res.data));
  }, [])

  return (
    <Wrapper>
      {
        posts.map((post, index) => {
          return <Post key={index} Q={post.content} P={post.surveyType} I={index+1} A={post.agreeCnt} />
        })
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px 0 30px 0;
`;
