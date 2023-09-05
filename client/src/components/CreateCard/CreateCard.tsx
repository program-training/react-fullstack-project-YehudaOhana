import CreateCardById from "../CreateCardById/CreateCardById";
import { useContext } from "react";
import { PageContext } from "../../App";

interface TypeTrip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

export default function CreateCard(data: TypeTrip): JSX.Element {
  const context = useContext(PageContext);
  return (
    <div
      className="CreateCard"
      onClick={() => context?.setPage("createCardById")}
    >
      <h2>{data.id}</h2>
      <h3>{data.name}</h3>
      <h3>{data.destination}</h3>
      <p>{data.startDate}</p>
      <p>{data.endDate}</p>
      <img src={data.image} width={300} />
    </div>
  );
}
