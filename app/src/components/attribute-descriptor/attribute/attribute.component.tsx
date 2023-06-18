import React, { SetStateAction, useRef } from "react";
import { paintScale, zeroChangeHandler } from "./attribute.controller";
import {
  StyledAttributeLabel,
  StyledSampleLabel,
  StyledAttributeScale,
  StyledAttributeWrapper,
  StyledZeroCheckbox,
  StyledZeroLabel,
  StyledZeroScaleWrapper,
  StyledZeroWrapper,
  StyledSampleScale,
  StyledSampleWrapper
} from "./attribute.style";

function Attribute(props: {
  attributeId: string;
  label: string;
  scaleState: number;
  setScaleState: React.Dispatch<SetStateAction<number>>;
  scaleSize: number;
  descriptorsDispatches?: Array<React.Dispatch<SetStateAction<boolean>>>;
  descriptorsSetDispatch?: React.Dispatch<SetStateAction<Set<string>>>;
}) {
  const scaleRef = useRef<HTMLInputElement>(null);

  return (
    <StyledAttributeWrapper>
      <StyledAttributeLabel>{props.label}</StyledAttributeLabel>
      <StyledZeroScaleWrapper>
        <StyledZeroWrapper>
          <StyledZeroLabel>Zero</StyledZeroLabel>
          <StyledZeroCheckbox
            type={"checkbox"}
            onChange={event =>
              zeroChangeHandler(
                event,
                props.setScaleState,
                scaleRef,
                props.attributeId,
                props.descriptorsDispatches,
                props.descriptorsSetDispatch
              )
            }
          />
        </StyledZeroWrapper>
        <StyledAttributeScale
          value={props.scaleState}
          ref={scaleRef}
          type={"range"}
          max={10.0}
          min={0.0}
          step={0.1}
          size={props.scaleSize}
          onChange={event => {
            paintScale(event.currentTarget);
            props.setScaleState(event.currentTarget.valueAsNumber);
          }}
        />
      </StyledZeroScaleWrapper>
    </StyledAttributeWrapper>
  );
}

function Samples(props: {
  value: string;
  label: string;
  scaleSize: number;
  list: string[];
}) {
  const scaleRef = useRef<HTMLSelectElement>(null);
  const options = ["F5T", "A4D", "R2A", "G7A", "Y9A", "K1W"]

  for(var x=0; x<options.length; x++) {
    scaleRef.current?.add(new Option(options[x]))
  }
  return (
    <StyledSampleWrapper>
      <StyledSampleLabel>{props.label}</StyledSampleLabel>
      <StyledSampleScale 
        ref={scaleRef}
        onChange={event => {
          window.alert(event.currentTarget);
        }}
      />
    </StyledSampleWrapper>
  );
}

export { Attribute, Samples };
