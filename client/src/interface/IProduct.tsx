export default interface IProduct {
    id?: number | null;
    name: string;
    description: string;
    type: string;
    registeredAt: string;
  }
  export enum ProductType {
    CRITICO = "Crítico",
    NAO_CRITICO = "Não Crítico",
    SEMI_CRITICO = "Semi Crítico",
  }
  