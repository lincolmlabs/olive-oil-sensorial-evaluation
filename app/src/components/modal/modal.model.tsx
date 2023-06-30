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
