import { styled } from 'styled-components';
import { Post } from './Post';

export const Admin = () => {
  return <Wrapper>
    <Post Q="질문 1" P="성향 1" C={["댓글1", "댓글2"]}/>
    <Post Q="질문 2" P="성향 2" C={["댓글댓글1", "댓글댓글2"]}/>
    <Post Q="질문 3" P="성향 3" C={["댓글댓글댓글1", "댓글댓글댓글2"]}/>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1500px;
  box-sizing: border-box;
  padding: 30px 0 30px 0;
`