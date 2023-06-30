export interface IEvaluationInfo {
  sampleId: string;
  sessionId: string;
}

export interface IResult {
  sample: string;
  comments: string;
  fusty: number;
  musty: number;
  winey: number;
  frostbitten: number;
  rancid: number;
  otherDefects: number;
  fruity: number;
  bitter: number;
  pungent: number;
  defectDescriptors: Set<string>;
  fruityDescriptors: Set<string>;
}

export interface IAttribute {
  id: string;
  description: string;
}

export const sliderNegativeAttributes = [
  { id: "fusty", description: "Fermentado\nBorras" },
  { id: "musty", description: "Mofado\nUmidade\nTerroso" },
  { id: "winey", description: "Avinhado\nAvinagrado\nÁcido" },
  { id: "frostbitten", description: "Azeitona gelada\n(madeira úmida)" },
  { id: "rancid", description: "Rançoso" },
  { id: "others", description: "Outros atributos\nnegativos" },
];

export const sliderPositiveAttributes = [
  { id: "fruity", description: "Frutado" },
  { id: "bitter", description: "Amargo" },
  { id: "pungent", description: "Picante" },
];

export const checkboxNegativeAttributes = [
  { id: "metalic", description: "Metálico" },
  { id: "hay", description: "Feno / amadeirado" },
  { id: "rough", description: "Basto / grosseiro" },
  { id: "grubby", description: "Gafa" },
  { id: "vegetableWater", description: "Água de vegetação / arraste" },
  { id: "brine", description: "Salmoura" },
  { id: "cucumber", description: "Pepino" },
  { id: "greasy", description: "Lubrificante" },
  { id: "esparto", description: "Esparto" },
  { id: "burnt", description: "Queimado / cozido" },
];

export const checkboxPositiveAttributes = [
  { id: "green", description: "Verde" },
  { id: "ripe", description: "Maduro" },
];
