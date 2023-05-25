import React, { SetStateAction } from "react";
import { attributes } from "../models/attributes.model";

const descriptorSetToggle = (
  descriptorsSet: Set<string>,
  descriptor: string
) => {
  if (descriptorsSet.has(descriptor)) {
    descriptorsSet.delete(descriptor);
    return descriptorsSet;
  } else {
    return descriptorsSet.add(descriptor);
  }
};

const descriptorsSelectionHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<SetStateAction<boolean>>,
  descriptionsSetDispatch: React.Dispatch<SetStateAction<Set<string>>>
) => {
  setState(prev => !prev);

  Object.keys(attributes.positives.fruity.descriptors).some(
    _descriptor => _descriptor === event.target.value
  )
    ? descriptionsSetDispatch(previosState =>
        descriptorSetToggle(previosState, event.target.value)
      )
    : descriptionsSetDispatch(previosState =>
        descriptorSetToggle(previosState, event.target.value)
      );
};

export { descriptorsSelectionHandler };
