import React, { useEffect } from "react";
import { SetStateAction } from "react";
import { attributes } from "../models/attributes.model";
import { descriptorsSelectionHandler } from "./descriptor.controller";

import {
  StyledAttributeLabel,
  StyledAttributeWrapper,
} from "../attribute/attribute.style";

import {
  CheckboxLabel,
  CheckboxWrapper,
  StyledCheckbox,
  StyledRadioButton,
} from "./descriptor.style";

function Descriptor(props: {
  label: string;
  descriptorId: string;
  descriptorDescription: string;
  descriptorState: boolean;
  setDescriptorState: React.Dispatch<SetStateAction<boolean>>;
  descriptionsSet: Set<string>;
  descriptionsSetDispatch: React.Dispatch<SetStateAction<Set<string>>>;
}) {
  return (
    <CheckboxWrapper id={props.descriptorId}>
      <CheckboxLabel>{props.label}</CheckboxLabel>
      <StyledCheckbox
        className={
          props.descriptorId in attributes.positives.fruity.descriptors
            ? "fruityDescriptor"
            : "defectDescriptor"
        }
        value={props.descriptorDescription}
        checked={props.descriptorState}
        type={"checkbox"}
        onChange={event => {
          descriptorsSelectionHandler(
            event,
            props.setDescriptorState,
            props.descriptionsSetDispatch
          );
        }}
      />
    </CheckboxWrapper>
  );
}

function RadioDescriptor(props: {
  label: string;
  descriptorId: string;
  name: string;
  value: number;
  descriptorDescription: string;
  descriptorState: number;
  setDescriptorState: React.Dispatch<SetStateAction<number>>;
}) {
  return (
    <StyledAttributeWrapper>
      <CheckboxWrapper id={props.descriptorId}>
        <CheckboxLabel>{props.label}</CheckboxLabel>
        <StyledRadioButton
          value={props.value}
          name={props.name}
          type={"radio"}
          onChange={event => {
            console.log(event.target.value + "/" + event.target.checked);
          }}
        />
      </CheckboxWrapper>
    </StyledAttributeWrapper>
  );
}

export { Descriptor, RadioDescriptor };
