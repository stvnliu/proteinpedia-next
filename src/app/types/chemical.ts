export enum ChemicalType {
    PROTEIN,
    AMINO_ACID,
}
export type Chemical = {
    id: number,
    name: string,
    type: ChemicalType,
    fullChemicalFormula: string,
}
