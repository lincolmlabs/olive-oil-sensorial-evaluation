import React, { SetStateAction, useRef } from "react";
import { paintScale, zeroChangeHandler } from "./attribute.controller";
import {
  StyledAttributeLabel,
  StyledAttributeScale,
  StyledAttributeWrapper,
  StyledListWrapper,
  StyledRadioButton,
  StyledSampleScale,
  StyledTextArea,
  StyledZeroCheckbox,
  StyledZeroLabel,
  StyledZeroScaleWrapper,
  StyledZeroWrapper,
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
  const samplesEvaluated = sessionStorage.getItem("samplesEvaluated");
  var samples = props.list;
  if (scaleRef.current) {
    while(scaleRef.current?.options.length > 0) {
      scaleRef.current?.options.remove(0);
    }
    const _samples = samplesEvaluated ? samplesEvaluated.split(",") : [];
    for (var item in samples) {
      if (_samples.find((s) => s === samples[item]["Code"])) { //(obj) => obj.value === 123)
        continue;
      }
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

function TextAttribute(props: {
  attributeId: string;
  label: string;
  placeholder: string; 
  rows: number;
  textState: string;
  setTextState: React.Dispatch<SetStateAction<string>>;
}) {
  const scaleRef = useRef<HTMLTextAreaElement>(null);

  return (
    <StyledAttributeWrapper>
      <StyledAttributeLabel>{props.label}</StyledAttributeLabel>
      <StyledZeroScaleWrapper>
        <StyledTextArea 
          ref={scaleRef} 
          placeholder={props.placeholder}
          rows={props.rows} 
          onChange={e => { props.setTextState(e.target.value) }} 
        />
      </StyledZeroScaleWrapper>
    </StyledAttributeWrapper>
  );
}

function RadioAttributes(props: {
  attributeId: string;
  label: string;
  itemLabels: string[];
  itemValues: string[];
  valueState: string;
  setValueState: React.Dispatch<SetStateAction<string>>;
}) {
  const scaleRef = useRef<HTMLInputElement>(null);

  var radios:any[] = [];

  var x=0;
  props.itemLabels.forEach(name => {
    radios.push(
      <p key={name}>
        <StyledRadioButton
          ref={scaleRef}
          type="radio"
          name={props.attributeId}
          value={props.itemValues[x]}
          onChange={e => { props.setValueState(e.target.value) }} 
        />&nbsp;
        <StyledZeroLabel htmlFor={props.attributeId}>{name}</StyledZeroLabel>
      </p>
    );
    x++;
  });

  return (
    <StyledAttributeWrapper>
      <StyledAttributeLabel>{props.label}</StyledAttributeLabel>
      <StyledListWrapper>
        {radios}
      </StyledListWrapper>
    </StyledAttributeWrapper>
  );
}

export { Attribute, RadioAttributes, Samples, TextAttribute };

