import { useContext, useState, useEffect } from "react";
import { PageContext } from "../App";
import { TypeTrip } from "./CardType";
import CreateCard from "./CreateCard/CreateCard";

type Props = {};

export async function GetTrips() {
  const promiseData = await fetch("http://localhost:8080/api/trips");
  const arrData = await promiseData.json();
  return arrData;
}

export default function Trips({}: Props) {
  const pageContext = useContext(PageContext);
  const [trip, setTrip] = useState<TypeTrip[]>([]);

  useEffect(() => {
    GetTrips().then((arrData) => setTrip(arrData));
  }, []);

  async function onDelete(id: string) {
    await fetch(`http://localhost:8080/api/trips/${id}`, {
      method: "DELETE",
      headers: { Authorization: "test-token" },
    });
    GetTrips().then((arrData) => setTrip(arrData));
  }

  if (pageContext)
    return (
      <div>
        <div>
          <h1>welcome to the Trips</h1>
          {trip.map((Data) => (
            <CreateCard
              key={Data.id}
              id={Data.id}
              name={Data.name}
              destination={Data.destination}
              startDate={Data.startDate}
              endDate={Data.endDate}
              image={Data.image}
              onDelete={(id) => onDelete(id)}
            />
          ))}
        </div>
        <button onClick={() => pageContext.setPage("Home")}>Home</button>
        <button onClick={() => pageContext.setPage("NewTripForm")}>
          New Trip Form
        </button>
      </div>
    );
}
