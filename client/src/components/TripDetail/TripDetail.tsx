import { useContext, useState, useEffect } from "react";
import { PageContext, TripContext } from "../../App";
import FullCard from "../CreateFullCard/CreateFullCard";
import { TypeFullTrip } from "../CardType";

type Props = {};

export async function getTripById(id: string) {
  const promiseData = await fetch(`http://localhost:8080/api/trips/${id}`);
  const data = await promiseData.json();
  return data;
}

export default function TripDetail({}: Props) {
  const context = useContext(PageContext);
  const tripContext = useContext(TripContext);
  if (tripContext)
    useEffect(() => {
      getTripById(tripContext.trip).then((trip) => setTrip(trip));
    }, []);

  const [trip, setTrip] = useState<TypeFullTrip>();
  if (context && trip)
    return (
      <div className="FullCard">
        <FullCard
          key={trip.id}
          id={trip.id}
          name={trip.name}
          destination={trip.destination}
          startDate={trip.startDate}
          endDate={trip.endDate}
          description={trip.description}
          price={trip.price}
          image={trip.image}
          activities={trip.activities}
        />
        <button onClick={() => context.setPage("Trips")}>back</button>
      </div>
    );
}
