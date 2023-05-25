import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../pages/sample-evaluation/sample-evaluation.style";
import { attributes } from "../attribute-descriptor/models/attributes.model";
import { dismissModal } from "./modal.controller";
import { IResult } from "./modal.model";
import { StyledModal } from "./modal.style";

function Modal(props: {
  modalRef: React.RefObject<HTMLDivElement>;
  shadowRef: React.RefObject<HTMLDivElement>;
  results: IResult;
}) {
  return (
    <StyledModal ref={props.modalRef}>
      <p>Resultado da avaliação</p>
      <div className="resultsContainer">
        <div className="resultWrapper odd">
          <p>{attributes.negatives.fusty.description}</p>
          <p>
            {props.results.fusty.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
        <div className="resultWrapper">
          <p>{attributes.negatives.musty.description}</p>
          <p>
            {props.results.musty.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
        <div className="resultWrapper odd">
          <p>{attributes.negatives.winey.description}</p>
          <p>
            {props.results.winey.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
        <div className="resultWrapper">
          <p>{attributes.negatives.frostbitten.description}</p>
          <p>
            {props.results.frostbitten.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
        <div className="resultWrapper odd">
          <p>{attributes.negatives.rancid.description}</p>
          <p>
            {props.results.rancid.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
        <div className="resultWrapper">
          <p>{attributes.negatives.otherDefects.description}</p>
          <p>
            {props.results.otherDefects.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
        <div className="resultWrapper odd">
          <p>Outros - Descritores</p>
          <p>
            {props.results.defectDescriptors.size > 0
              ? Array.from(props.results.defectDescriptors).join(", ")
              : "-"}
          </p>
        </div>
        <div className="resultWrapper">
          <p>{attributes.positives.fruity.description}</p>
          <p>
            {props.results.fruity.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
        <div className="resultWrapper odd">
          <p>Frutado - Descritores</p>
          <p>
            {" "}
            {props.results.fruityDescriptors.size > 0
              ? Array.from(props.results.fruityDescriptors).join(", ")
              : "-"}
          </p>
        </div>
        <div className="resultWrapper">
          <p>{attributes.positives.bitter.description}</p>
          <p>
            {props.results.bitter.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
        <div className="resultWrapper odd">
          <p>{attributes.positives.pungent.description}</p>
          <p>
            {props.results.pungent.toLocaleString("pt-br", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </p>
        </div>
      </div>
      <section>
        <PrimaryButton onClick={() => window.location.reload()}>
          Realizar nova análise
        </PrimaryButton>
        <SecondaryButton
          onClick={() => dismissModal(props.modalRef, props.shadowRef)}
        >
          Voltar
        </SecondaryButton>
      </section>
    </StyledModal>
  );
}

export { Modal };
