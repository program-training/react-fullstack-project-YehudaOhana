export interface OpenCard {
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

type Props = {
  trip: OpenCard;
};

export default function CreateCardById(data: Props): JSX.Element {
  return (
    <div>
      <h2>{data.trip.id}</h2>
      <h3>{data.trip.name}</h3>
      <h3>{data.trip.destination}</h3>
      <p>{data.trip.startDate}</p>
      <p>{data.trip.endDate}</p>
      <p>{data.trip.description}</p>
      <p>{data.trip.price}</p>
      <img src={data.trip.image} width={300} />
      <p>{data.trip.activities}</p>
    </div>
  );
}
