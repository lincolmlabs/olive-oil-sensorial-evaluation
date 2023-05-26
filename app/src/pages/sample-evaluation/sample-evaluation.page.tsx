import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Header, Attribute, Descriptor, Modal } from "../../components";
import {
  AttributesContainer,
  ButtonsSection,
  CalibrationMessage,
  CalibrationModal,
  CalibrationScale,
  CheckboxesSection,
  InputWrapper,
  MobileScreen,
  PrimaryButton,
  ScaleValueInput,
  SecondaryButton,
  SectionTitle,
  Shadow,
  StyledMain,
  StyledSection,
} from "./sample-evaluation.style";
import { attributes } from "../../components/attribute-descriptor/models/attributes.model";
import {
  calibrationHandler,
  seeResultsHandler,
  showCalibrationModal,
} from "./sample-evaluation.controller";
import { IResult } from "./sample-evaluation.model";

function SampleEvaluationPage() {
  const [fusty, setFusty] = useState(-1.0);
  const [musty, setMusty] = useState(-1.0);
  const [winey, setWiney] = useState(-1.0);
  const [frostbitten, setFrostbitten] = useState(-1.0);
  const [rancid, setRancid] = useState(-1.0);
  const [otherDefects, setOtherDefects] = useState(-1.0);
  const [fruity, setFruity] = useState(-1.0);
  const [bitter, setBitter] = useState(-1.0);
  const [pungent, setPungent] = useState(-1.0);
  const [defectDescriptors, setDefectDescriptors] = useState(new Set<string>());
  const [fruityDescriptors, setFruityDescriptors] = useState(new Set<string>());
  const [metalic, setMetalic] = useState(false);
  const [hay, setHay] = useState(false);
  const [rough, setRough] = useState(false);
  const [grubby, setGrubby] = useState(false);
  const [brine, setBrine] = useState(false);
  const [burnt, setBurnt] = useState(false);
  const [vegetableWater, setVegetableWater] = useState(false);
  const [esparto, setEsparto] = useState(false);
  const [cucumber, setCucumber] = useState(false);
  const [greasy, setGreasy] = useState(false);
  const [green, setGreen] = useState(false);
  const [ripe, setRipe] = useState(false);
  const [scaleSize, setScaleSize] = useState(393);

  const scaleCalibrationInputRef = useRef<HTMLInputElement>(null);
  const modalResultsRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const calibrationModal = useRef<HTMLDivElement>(null);

  const results: IResult = {
    fusty,
    musty,
    winey,
    frostbitten,
    rancid,
    otherDefects,
    defectDescriptors,
    fruity,
    fruityDescriptors,
    bitter,
    pungent,
  };

  const defectDescriptionsDispatches = [
    setBrine,
    setMetalic,
    setBurnt,
    setCucumber,
    setRough,
    setHay,
    setVegetableWater,
    setGreasy,
    setGrubby,
    setEsparto,
  ];

  const fruityDescriptionsDispatches = [setGreen, setRipe];

  useEffect(() => {
    const savedScaleSize = sessionStorage.getItem("scaleSize");
    savedScaleSize
      ? setScaleSize(Number.parseFloat(savedScaleSize))
      : showCalibrationModal(
          shadowRef,
          calibrationModal,
          scaleCalibrationInputRef
        );
  }, []);

  return (
    <>
      <CalibrationModal ref={calibrationModal}>
        <CalibrationMessage>
          <p>
            Olá! Antes de começar, será necessário calibrar a escala de
            avaliação.
          </p>
          <p>
            Meça com uma régua o tamanho atual da escala. Digite o valor medido
            utilizando uma casa decimal. Por fim, clique em calibrar.
          </p>
        </CalibrationMessage>
        <label>
          Escala de avaliação
          <CalibrationScale type={"range"} size={scaleSize} disabled />
        </label>

        <InputWrapper>
          <label>
            Medida da escala (cm){" "}
            <ScaleValueInput ref={scaleCalibrationInputRef} />
          </label>
          <SecondaryButton
            onClick={() =>
              calibrationHandler(
                shadowRef,
                calibrationModal,
                scaleCalibrationInputRef,
                setScaleSize
              )
            }
          >
            Calibrar
          </SecondaryButton>
        </InputWrapper>
      </CalibrationModal>
      <MobileScreen>
        Sua tela possui dimensões muito pequenas para a exibição desta
        aplicação. Utilize um dispositivo com tela maior, com largura mínima de
        761px e altura mínima de 500px.
      </MobileScreen>
      <Shadow ref={shadowRef} />
      <Modal
        modalRef={modalResultsRef}
        shadowRef={shadowRef}
        results={{
          bitter,
          frostbitten,
          fruity,
          fusty,
          musty,
          otherDefects,
          pungent,
          rancid,
          winey,
          defectDescriptors,
          fruityDescriptors,
        }}
      />
      <Header />
      <StyledMain>
        <StyledSection>
          <SectionTitle>Intensidade da percepção de defeitos para a amostra N3Y</SectionTitle>
          <AttributesContainer>
            <Attribute
              attributeId={attributes.negatives.fusty.id}
              label={attributes.negatives.fusty.description}
              scaleState={fusty}
              setScaleState={setFusty}
              scaleSize={scaleSize}
            />
            <Attribute
              attributeId={attributes.negatives.musty.id}
              label={attributes.negatives.musty.description}
              scaleState={musty}
              setScaleState={setMusty}
              scaleSize={scaleSize}
            />
            <Attribute
              attributeId={attributes.negatives.winey.id}
              label={attributes.negatives.winey.description}
              scaleState={winey}
              setScaleState={setWiney}
              scaleSize={scaleSize}
            />
            <Attribute
              attributeId={attributes.negatives.frostbitten.id}
              label={attributes.negatives.frostbitten.description}
              scaleState={frostbitten}
              setScaleState={setFrostbitten}
              scaleSize={scaleSize}
            />
            <Attribute
              attributeId={attributes.negatives.rancid.id}
              label={attributes.negatives.rancid.description}
              scaleState={rancid}
              setScaleState={setRancid}
              scaleSize={scaleSize}
            />
            <Attribute
              attributeId={attributes.negatives.otherDefects.id}
              label={attributes.negatives.otherDefects.description}
              scaleState={otherDefects}
              setScaleState={setOtherDefects}
              scaleSize={scaleSize}
              descriptorsDispatches={defectDescriptionsDispatches}
              descriptorsSetDispatch={setDefectDescriptors}
            />
          </AttributesContainer>
          <CheckboxesSection>
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.metalic.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.metalic
                  .description
              }
              label={
                attributes.negatives.otherDefects.descriptors.metalic
                  .description
              }
              descriptorState={metalic}
              setDescriptorState={setMetalic}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.hay.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.hay.description
              }
              label={
                attributes.negatives.otherDefects.descriptors.hay.description
              }
              descriptorState={hay}
              setDescriptorState={setHay}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.rough.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.rough.description
              }
              label={
                attributes.negatives.otherDefects.descriptors.rough.description
              }
              descriptorState={rough}
              setDescriptorState={setRough}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.grubby.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.grubby.description
              }
              label={
                attributes.negatives.otherDefects.descriptors.grubby.description
              }
              descriptorState={grubby}
              setDescriptorState={setGrubby}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.brine.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.brine.description
              }
              label={
                attributes.negatives.otherDefects.descriptors.brine.description
              }
              descriptorState={brine}
              setDescriptorState={setBrine}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.burnt.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.burnt.description
              }
              label={
                attributes.negatives.otherDefects.descriptors.burnt.description
              }
              descriptorState={burnt}
              setDescriptorState={setBurnt}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.vegetableWater.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.vegetableWater
                  .description
              }
              label={
                attributes.negatives.otherDefects.descriptors.vegetableWater
                  .description
              }
              descriptorState={vegetableWater}
              setDescriptorState={setVegetableWater}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.esparto.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.esparto
                  .description
              }
              label={
                attributes.negatives.otherDefects.descriptors.esparto
                  .description
              }
              descriptorState={esparto}
              setDescriptorState={setEsparto}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.cucumber.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.cucumber
                  .description
              }
              label={
                attributes.negatives.otherDefects.descriptors.cucumber
                  .description
              }
              descriptorState={cucumber}
              setDescriptorState={setCucumber}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
            <Descriptor
              descriptorId={
                attributes.negatives.otherDefects.descriptors.greasy.id
              }
              descriptorDescription={
                attributes.negatives.otherDefects.descriptors.greasy.description
              }
              label={
                attributes.negatives.otherDefects.descriptors.greasy.description
              }
              descriptorState={greasy}
              setDescriptorState={setGreasy}
              descriptionsSetDispatch={setDefectDescriptors}
              descriptionsSet={defectDescriptors}
            />
          </CheckboxesSection>
        </StyledSection>
        <StyledSection>
          <SectionTitle>
            Intensidade da percepção de atributos positivos
          </SectionTitle>
          <AttributesContainer>
            <Attribute
              attributeId={attributes.positives.fruity.id}
              label={attributes.positives.fruity.description}
              scaleState={fruity}
              setScaleState={setFruity}
              scaleSize={scaleSize}
              descriptorsDispatches={fruityDescriptionsDispatches}
              descriptorsSetDispatch={setFruityDescriptors}
            />
            <CheckboxesSection>
              <Descriptor
                descriptorId={attributes.positives.fruity.descriptors.green.id}
                label={
                  attributes.positives.fruity.descriptors.green.description
                }
                descriptorDescription={
                  attributes.positives.fruity.descriptors.green.description
                }
                descriptorState={green}
                setDescriptorState={setGreen}
                descriptionsSetDispatch={setFruityDescriptors}
                descriptionsSet={fruityDescriptors}
              />
              <Descriptor
                descriptorId={attributes.positives.fruity.descriptors.ripe.id}
                label={attributes.positives.fruity.descriptors.ripe.description}
                descriptorDescription={
                  attributes.positives.fruity.descriptors.ripe.description
                }
                descriptorState={ripe}
                setDescriptorState={setRipe}
                descriptionsSetDispatch={setFruityDescriptors}
                descriptionsSet={fruityDescriptors}
              />
            </CheckboxesSection>
            <Attribute
              attributeId={attributes.positives.bitter.id}
              label={attributes.positives.bitter.description}
              scaleState={bitter}
              setScaleState={setBitter}
              scaleSize={scaleSize}
            />
            <Attribute
              attributeId={attributes.positives.pungent.id}
              label={attributes.positives.pungent.description}
              scaleState={pungent}
              setScaleState={setPungent}
              scaleSize={scaleSize}
            />
          </AttributesContainer>
        </StyledSection>
        <ButtonsSection>
          <PrimaryButton
            onClick={() =>
              seeResultsHandler(shadowRef, modalResultsRef, results)
            }
          >
            Ver resultados
          </PrimaryButton>
          <SecondaryButton
            onClick={() => {
              window.location.reload();
            }}
          >
            Limpar
          </SecondaryButton>
        </ButtonsSection>
      </StyledMain>
    </>
  );
}

export { SampleEvaluationPage as SampleEvaluation };
