import { useContext, useState } from "react";
import { PageContext } from "../App";
import CreateCardById from "./CreateCardById/CreateCardById";
import { OpenCard } from "./TypeTrip";

type Props = {};

export async function getTripById(id: string) {
  const promiseData = await fetch(`http://localhost:8080/api/trips/${id}`);
  const trip = await promiseData.json();
  return trip;
}

export default function TripDetail({}: Props) {
  const context = useContext(PageContext);

  const id = "10";
  getTripById(id).then((trip) => setTrip(trip));
  const [trip, setTrip] = useState<OpenCard>();

  if (context && trip)
    return (
      <div>
        <h1>welcome to Trip Detail</h1>
        <CreateCardById trip={trip}></CreateCardById>
        <button onClick={() => context.setPage("Trips")}>All Trips</button>
      </div>
    );
}
