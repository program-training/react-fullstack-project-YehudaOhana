import { TypeFullTrip } from "../CardType";

export default function CreateFullCard(data: TypeFullTrip) {
  return (
    <div className="FullCard">
      <h2>{data.id}</h2>
      <h3>{data.name}</h3>
      <h3>{data.destination}</h3>
      <p>{data.startDate}</p>
      <p>{data.endDate}</p>
      <p>{data.description}</p>
      <p>{data.price}</p>
      <img src={data.image} width={300} />
      <p>{data.activities}</p>
    </div>
  );
}
