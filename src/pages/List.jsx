import React from "react";
import { styled } from "styled-components";
import { Admin } from "../components/Admin";
import PageBtn from "../components/PageBtn";

function List() {
  return (
    <Body>
      <Admin />
      <PageBtn />
    </Body>
  );
}

export default List;

const Body = styled.div`
  display: flex;
  margin-top: 20px;
`;
