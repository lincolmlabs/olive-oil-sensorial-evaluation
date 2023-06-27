import React, { SetStateAction, useRef } from "react";
import { paintScale, zeroChangeHandler } from "./attribute.controller";
import {
  StyledAttributeLabel,
  StyledAttributeScale,
  StyledAttributeWrapper,
  StyledZeroCheckbox,
  StyledZeroLabel,
  StyledZeroScaleWrapper,
  StyledZeroWrapper,
  StyledSampleScale,
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
  sampleState: string;
  setSampleState: React.Dispatch<SetStateAction<string>>;
  scaleSize: number;
  list: any[];
}) {
  const scaleRef = useRef<HTMLSelectElement>(null);
  var samples = props.list;
  if (scaleRef.current) {
    while(scaleRef.current?.options.length > 0) {
      scaleRef.current?.options.remove(0);
    }
    for (var item in samples) {
      scaleRef.current?.options.add(new Option(samples[item]["Code"]));
    }
  }
  return (
    <StyledAttributeWrapper>
    <StyledAttributeLabel>{props.label}</StyledAttributeLabel>
      <StyledSampleScale 
        ref={scaleRef}
        value={props.sampleState}
        onChange={event => {
          props.setSampleState(event.target.value);
        }}
      />
    </StyledAttributeWrapper>
  );
}

export { Attribute, Samples };
