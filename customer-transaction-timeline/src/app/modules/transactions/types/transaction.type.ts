export default interface ITransactionDay {
  id: string;
  transactions: ITransaction[];
}

export interface ITransaction {
  id: number;
  timestamp: string;
  amount: number;
  currencyCode: string;
  currencyRate?: number;
  description: string;
  otherParty: IOtherParty;
}

export interface IOtherParty {
  name: string;
  iban: string;
}
