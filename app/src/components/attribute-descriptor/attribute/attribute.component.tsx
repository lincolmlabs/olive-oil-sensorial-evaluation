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

async function loadSamples(target: React.RefObject<HTMLSelectElement>) {
  const url = "https://jsonplaceholder.typicode.com/users";
  await fetch(url)
    .then(response => {
      return response.json();
    })
    .then(samples => {
      var select = target.current;
      if(select) {
        while(select.options.length > 0) {
          target.current?.options.remove(0);
        }
      }
      for (var item in samples) {
        target.current?.add(new Option(samples[item]["username"]));
      }
    })
    .catch(error => console.error(error)); //If error occurs you will get here
}

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
  loadSamples(scaleRef);
  return (
    <StyledAttributeWrapper>
      <StyledAttributeLabel>{props.label}</StyledAttributeLabel>
      <StyledSampleScale 
        ref={scaleRef}
        onChange={event => {
          window.alert(event.currentTarget);
        }}
      />
    </StyledAttributeWrapper>
  );
}

export { Attribute, Samples };
