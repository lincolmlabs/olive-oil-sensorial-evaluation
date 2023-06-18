import React, { DataHTMLAttributes, SetStateAction, useRef } from "react";
import {
  StyledAttributeLabel,
  StyledAttributeScale,
  StyledAttributeWrapper,
  StyledSampleScaleWrapper,
} from "./samples.style";

function Samples(props: {
  value: string;
  label: string;
  list: string[];
}) {
  const scaleRef = useRef<HTMLSelectElement>(null);
  const options = ["F5T", "A4D", "R2A", "G7A", "Y9A", "K1W"]

  for(var x=0; x<options.length; x++) {
    scaleRef.current?.add(new Option(options[x]))
  }
  return (
    <StyledAttributeWrapper>
      <StyledAttributeLabel>{props.label}</StyledAttributeLabel>
      <StyledSampleScaleWrapper>
        <StyledAttributeScale
          value={props.value}
          ref={scaleRef}
          onChange={event => {
            window.alert(event.currentTarget);
          }}
        />
      </StyledSampleScaleWrapper>
    </StyledAttributeWrapper>
  );
}

export { Samples };
