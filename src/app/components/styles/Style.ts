import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #212121;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 12rem 4rem;
  gap: 2rem;
  @media (min-width: 767px) {
    width: 600px;
  }
  @media only screen and (max-width: 959px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 959px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 0.8rem;
  }
`;
export const CardWords = styled.div`
  color: #e1e1e1;
  font-size: 6rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ContainerInputName = styled.div`
  width: 100%;
  padding: 0.5rem;
  @media (max-width: 767px) {
    padding-left: 0;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 479px) {
    padding-left: 0;
  }
`;
export const WordMatch = styled.span`
  padding: 0 0.5rem;
  background-color: #055036;
  @media only screen and (max-width: 959px) {
    font-size: 6rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 959px) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 767px) {
    font-size: 4rem;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 2rem;
  }
`;

export const WordNonMatch = styled.span`
  @media only screen and (max-width: 959px) {
    font-size: 6rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 959px) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 767px) {
    font-size: 4rem;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 2rem;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    padding-left: 0;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
    padding-left: 0;
  }

  @media only screen and (max-width: 479px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const InputName = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding-left: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  margin: 4px 2px;
  height: 2.5rem;
  color: #444444;
  background-color: #b2b2b2;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
export const ButtonFormName = styled.button`
  background-color: #055036;
  color: #e1e1e1;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 15px 20px;
  text-align: center;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color: #01140c;
  }
`;

export const LabelName = styled.label`
  color: #e1e1e1;
  width: fit-content;
  display: flex;
  font-weight: 700;
`;
