"use client"

import { useState } from "react";
import { selectFirstName, selectLastName } from "../store/geral/geralSelectors";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Input from "./Input";
import { GeralActions } from "../store/geral/geralActions";
import { ButtonFormName, ContainerInputName, InputContainer, InputName, LabelName } from "./styles/Style";

function Form() {
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const [firstNameLocal, setFirstNameLocal] = useState<string>(firstName);
  const [lastNameLocal, setLastNameLocal] = useState<string>(lastName);

  const dispatch = useAppDispatch();

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    if (targetName === "firstName") {
      setFirstNameLocal(targetValue);
    } else {
      setLastNameLocal(targetValue);
    }
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(
      GeralActions.setName({
        firstName: firstNameLocal,
        lastName: lastNameLocal,
      })
    );
  }

  return (
    <form onSubmit={submitForm}>
      <InputContainer>
        <ContainerInputName>
          <LabelName htmlFor="firstName">First Name</LabelName>
          <InputName
            id="firstName"
            name="firstName"
            value={firstNameLocal}
            maxLength={50}
            onChange={handleNameChange}
          />
        </ContainerInputName>
        <Input
          className="InputForm"
          label="Last Name"
          classNameLabel="Label"
          maxLength={50}
          id="lastName"
          name="lastName"
          value={lastNameLocal}
          onChange={handleNameChange}
        />
      </InputContainer>
      <ButtonFormName>
        Breakify
      </ButtonFormName>
    </form>
  );
}

export default Form;
