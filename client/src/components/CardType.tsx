export interface TypeTrip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

export interface TypeFullTrip {
  key: string;
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}
