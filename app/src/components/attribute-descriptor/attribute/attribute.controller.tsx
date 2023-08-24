import { SetStateAction } from "react";
import { DescriptorClass } from "../descriptor/descriptor.model";
import { attributes, IResult } from "../models/attributes.model";

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
  const url = "https://lfdars.lincolmlabs.cloud/evaluation/" + panelInfo["batchName"];

  var sampleNumber = 0;
  var samples =  panelInfo["samples"];
  for (var item in samples) {
    if (samples[item]["Code"] == results.sample) {
      sampleNumber = samples[item]["Number"];
      break;
    }
  }

  var difficulty = -1;
  try {
    difficulty = parseInt(results.dificulty);
  } catch(e) {    
  }

  const jsonData = {
    "batchName": panelInfo["batchName"],
    "testAnalisys": panelInfo["testAnalisys"],
    "testNumber": panelInfo["testNumber"],
    "sampleNumber": sampleNumber,
    "sampleCode": results.sample,
    "user": sessionStorage.getItem("token"),
    "difficulty": difficulty,
    "comments": results.comments,
    "otherPerceptions": results.otherPerceptions,
    //need to bring to a upper level due typescrpt Set<string> being not serialized to json
    "defectDescriptors": Array.from(results.defectDescriptors.values()),
    "fruityDescriptors": Array.from(results.fruityDescriptors.values()),
    "responses": results,
  }

  const requestOptions = {
    method: "POST",
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(jsonData)
  };
  console.log(jsonData);
  await fetch(url, requestOptions)
    .then(response => {
      alert("Avaliação da amostra " + results.sample + " enviada com sucesso!");
    })
    .catch(error => console.error(error)); //If error occurs you will get here
}

export { paintScale, sendEvaluation, zeroChangeHandler };

