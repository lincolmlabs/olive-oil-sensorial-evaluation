import React, { SetStateAction } from "react";
import { sendEvaluation } from "../../components/attribute-descriptor/attribute/attribute.controller";
import { IResult } from "./sample-evaluation.model";

const isResultsValid = (results: IResult) => {
  let key: keyof IResult;
  for (key in results) {
    if (
      key !== "defectDescriptors" &&
      key !== "fruityDescriptors" &&
      results[key] === -1
    ) {
      alert(
        "É necessário avaliar todos os atributos! Caso a nota de algum atributo seja zero, deve-se selecionar ZERO ao lado da escala."
      );
      return false;
    }
  }
  if (results.otherDefects > 0 && results.defectDescriptors.size < 1) {
    alert(
      "É necessário selecionar ao menos um descritor de Outros Atributos Negativos!"
    );

    return false;
  }
  if (results.fruity > 0 && results.fruityDescriptors.size < 1) {
    alert("É necessário selecionar ao menos um descritor de Frutado!");
    return false;
  }

  return true;
};

const showCalibrationModal = (
  shadowRef: React.RefObject<HTMLDivElement>,
  calibrationModalRef: React.RefObject<HTMLDivElement>,
  scaleCalibrationInputRef: React.RefObject<HTMLInputElement>
) => {
  if (
    shadowRef.current &&
    calibrationModalRef.current &&
    scaleCalibrationInputRef.current
  ) {
    shadowRef.current.classList.toggle("show");
    calibrationModalRef.current.classList.toggle("show");
    window.scrollTo({ top: 0 });
    (document.querySelector("body") as HTMLBodyElement).style.overflowY =
      "hidden";
    scaleCalibrationInputRef.current.focus();
  }
};

const calibrationHandler = (
  shadowRef: React.RefObject<HTMLDivElement>,
  calibrationModalRef: React.RefObject<HTMLDivElement>,
  scaleCalibrationInputRef: React.RefObject<HTMLInputElement>,
  graderInputRef: React.RefObject<HTMLInputElement>,
  setScaleSize: React.Dispatch<SetStateAction<number>>,
  setGrader: React.Dispatch<SetStateAction<string>>
) => {
  if (scaleCalibrationInputRef.current) {
    const newScaleSize =
      (393 * 10) / scaleCalibrationInputRef.current.valueAsNumber;

    sessionStorage.setItem("scaleSize", newScaleSize.toString());
    setScaleSize(newScaleSize);
    if (graderInputRef.current) {
      setGrader(graderInputRef.current.value);
      sessionStorage.setItem("grader", graderInputRef.current.value);
    }
  }
  if (shadowRef.current && calibrationModalRef.current) {
    shadowRef.current.classList.toggle("show");
    calibrationModalRef.current.classList.toggle("show");
    (document.querySelector("body") as HTMLBodyElement).style.overflowY =
      "visible";
  }
};

const saveResultsHandler = (results: IResult, panelInfo: any) => {
  if (isResultsValid(results)) {
    sendEvaluation(results, panelInfo, sessionStorage.getItem("grader"));
  }
}

export { calibrationHandler, saveResultsHandler, showCalibrationModal };

