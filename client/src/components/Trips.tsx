import { useContext, useState } from "react";
import { PageContext } from "../App";
import { TypeTrip } from "./TypeTrip";
import CreateCard from "./CreateCard/CreateCard";

type Props = {};

async function getTrip() {
  const promiseData = await fetch("http://localhost:8080/api/trips");
  const arrData = await promiseData.json();
  return arrData;
}

export default function Trips({}: Props) {
  const context = useContext(PageContext);

  getTrip().then((arrData) => setTrip(arrData));
  const [trip, setTrip] = useState<TypeTrip[]>([]);

  if (context)
    return (
      <div>
        <div>
          <h1>welcome to the Trips</h1>
          {trip.map((Data) => (
            <CreateCard
              id={Data.id}
              name={Data.name}
              destination={Data.destination}
              startDate={Data.startDate}
              endDate={Data.endDate}
              image={Data.image}
            ></CreateCard>
          ))}
        </div>
        <button onClick={() => context.setPage("Home")}>Home</button>
        <button onClick={() => context.setPage("NewTripForm")}>
          New Trip Form
        </button>
      </div>
    );
}
