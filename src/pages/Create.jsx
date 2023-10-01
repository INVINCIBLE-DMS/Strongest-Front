import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import PageBtn from "../components/PageBtn";
import { create } from "../apis/create";

function Create() {
  const [img, setImg] = useState(null);
  const [selectedKind, setSelect] = useState(null);
  const kind = [
    { title: "에너지 방향", surveyType: "SOCIAL_TYPE" },
    { title: "인식 방식", surveyType: "KNOWLEDGE_TYPE" },
    { title: "판단 결정", surveyType: "EMOTION_TYPE" },
    { title: "생활 양식", surveyType: "DECISION_TYPE" },
  ];
  const [data, setData] = useState({ content: "", surveyType: "" });

  const { content, surveyType } = data;

  useEffect(() => {
    setData({
      ...data,
      surveyType: selectedKind,
    });
  }, [selectedKind]);

  const onChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImg(URL.createObjectURL(file));
    } else {
      setImg(null);
    }
  };

  const onInput = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      content: value,
    });
  };

  return (
    <>
      <Body>
        <Container>
          <InputContainer>
            <InputWrap>
              <Label for='file'>
                {img ? <Img src={img} /> : "정사각형 이미지를 업로드 해주세용"}
              </Label>
              <ImgInput
                type='file'
                id='file'
                accept='image/*'
                onChange={onChange}></ImgInput>
            </InputWrap>
            <Input onChange={onInput} value={data.content} />
          </InputContainer>
          <BtnContainer>
            {kind.map((element) => (
              <SelectBtn
                it={element.surveyType}
                select={selectedKind}
                onClick={() => {
                  setSelect(element.surveyType);
                }}>
                {element.title}
              </SelectBtn>
            ))}
          </BtnContainer>
        </Container>
        <PageBtn />
      </Body>
      <CreateBtnBox>
        <CreateBtn
          onClick={() => {
            create(data);
          }}>
          생성
        </CreateBtn>
      </CreateBtnBox>
    </>
  );
}

export default Create;

const CreateBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const CreateBtn = styled.div`
  width: 300px;
  height: 80px;
  background-color: darkblue;
  color: white;
  border-radius: 20px;
  text-align: center;
  line-height: 80px;
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
`;

const InputContainer = styled.div`
  width: 50%;
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const BtnContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const InputWrap = styled.div`
  overflow: hidden;
  width: 400px;
  height: 400px;
  border: 5px dotted lightgray;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 400px;
`;

const ImgInput = styled.input`
  display: none;
`;

const Input = styled.input`
  width: 390px;
  height: 30px;
  border-radius: 30px;
  padding-left: 10px;
  outline: none;
  border: 1.2px solid gray;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SelectBtn = styled.div`
  cursor: pointer;
  width: 30%;
  height: 100px;
  background-color: ${({ it, select }) =>
    it == select ? "rgb(71, 192, 101)" : "gray"};
  text-align: center;
  line-height: 100px;
  border-radius: 30px;
  font-size: 20px;
  color: white;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;
