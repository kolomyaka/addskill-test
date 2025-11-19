export interface Offer {
  id: string;
  name: string;
  status: string;
  launchDate: string;
  balance: number;
  spent: number;
  platforms: Platform[];
}

export interface Platform {
  id: string;
  name: string;
  color: string;
}

export interface OffersSchema {
  loading: boolean;
  error: string | null;
  data: Offer[] | undefined;
}
