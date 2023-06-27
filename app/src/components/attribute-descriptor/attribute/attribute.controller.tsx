import { SetStateAction } from "react";
import { DescriptorClass } from "../descriptor/descriptor.model";
import { attributes } from "../models/attributes.model";
import { IResult } from "../../modal/modal.model";

const paintScale = (scale: HTMLInputElement | null, zero?: 0) => {
  if (scale) {
    const scaleMin = parseFloat(scale.min);
    const scaleMax = parseFloat(scale.max);
    const scaleValue = zero === 0 ? zero : scale.valueAsNumber;

    scale.style.backgroundSize =
      ((scaleValue - scaleMin) * 100) / (scaleMax - scaleMin) + "% 100%";
  }
};

const disableDescriptors = (
  descriptorClass: DescriptorClass,
  descriptorsDispatches: Array<React.Dispatch<SetStateAction<boolean>>>,
  descriptorsSetDispatch: React.Dispatch<SetStateAction<Set<string>>>
) => {
  document
    .querySelectorAll<HTMLInputElement>(descriptorClass)
    .forEach(_descriptor => {
      _descriptor.disabled = true;
    });
  descriptorsDispatches.forEach(_dispatch => _dispatch(false));
  descriptorsSetDispatch(prev => {
    prev.clear();
    return prev;
  });
};

const enableDescriptors = (descriptorClass: DescriptorClass) => {
  document
    .querySelectorAll<HTMLInputElement>(descriptorClass)
    .forEach(_descriptor => (_descriptor.disabled = false));
};

const zeroChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<SetStateAction<number>>,
  scaleRef: React.RefObject<HTMLInputElement>,
  attributeId: string,
  descriptorsDispatches?: Array<React.Dispatch<SetStateAction<boolean>>>,
  descriptorsSetDispatch?: React.Dispatch<SetStateAction<Set<string>>>
) => {
  if (event.target.checked) {
    paintScale(scaleRef.current, 0);
    setState(0);
    if (scaleRef.current) scaleRef.current.disabled = true;
    if (attributeId === attributes.negatives.otherDefects.id) {
      descriptorsDispatches &&
        descriptorsSetDispatch &&
        disableDescriptors(
          ".defectDescriptor",
          descriptorsDispatches,
          descriptorsSetDispatch
        );
    }
    if (attributeId === attributes.positives.fruity.id) {
      descriptorsDispatches &&
        descriptorsSetDispatch &&
        disableDescriptors(
          ".fruityDescriptor",
          descriptorsDispatches,
          descriptorsSetDispatch
        );
    }
  } else {
    setState(-1);
    if (scaleRef.current) scaleRef.current.disabled = false;
    if (attributeId === attributes.negatives.otherDefects.id) {
      enableDescriptors(".defectDescriptor");
    }
    if (attributeId === attributes.positives.fruity.id) {
      enableDescriptors(".fruityDescriptor");
    }
  }
};

const sendEvaluation = async (results: IResult, panelInfo: any) => {
  const url = "http://rslanagro005627:8080/evaluation/PS-2023-01-12/01/user01";

  var sampleNumber = 0;
  var samples =  panelInfo["samples"];
  for (var item in samples) {
    if (samples[item]["Code"] == results.sample) {
      sampleNumber = samples[item]["Number"];
      break;
    }
  }

  const jsonData = {
    "batchName": panelInfo["batchName"],
    "testAnalysis": panelInfo["testAnalysis"],
    "testNumber": panelInfo["testNumber"],
    "sampleNumber": sampleNumber,
    "sampleCode": results.sample,
    "user": "user01",
    "responses": results,
  }

  const requestOptions = {
    method: "POST",
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(jsonData)
  };
  await fetch(url, requestOptions)
    .then(response => response.json())
    .catch(error => console.error(error)); //If error occurs you will get here
}

export { paintScale, zeroChangeHandler, sendEvaluation };
