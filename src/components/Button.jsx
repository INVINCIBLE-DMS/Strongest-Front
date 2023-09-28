import { styled } from 'styled-components';

export const Button = ({ Text, Click }) => {
  return <Wrapper onClick={Click}>
    {Text}
  </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 30px;
    background: gray;
    color: white;
    border-radius: 10px;
    font-weight: bolder;
    cursor: pointer;
`