import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { styled } from "styled-components";

function PageBtn() {
  const linking = useNavigate();
  const path = useLocation();
  const buttons = [
    {
      title: "질문 생성",
      path: "/",
    },
  ];

  console.log(path);

  return (
    <Wrapper>
      {buttons.map((element, index) => (
        <Button
          link={element.path}
          path={path.pathname}
          key={index}
          onClick={() => {
            linking(`${element.path}`);
          }}>
          {element.title}
        </Button>
      ))}
    </Wrapper>
  );
}

export default PageBtn;

const Wrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Button = styled.div`
  width: 300px;
  height: 200px;
  background-color: ${({ path, link }) =>
    path == link ? "rgb(71, 192, 101)" : "gray"};
  margin-top: 20px;
  border-radius: 20px;
  text-align: center;
  line-height: 200px;
  font-size: 24px;
  color: white;
`;
