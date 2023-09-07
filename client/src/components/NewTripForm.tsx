import { useContext, useState } from "react";
import { PageContext } from "../App";
import { TypeFullTrip } from "./CardType";

type Props = {};

async function createNewTrip(typeFullTrip: TypeFullTrip) {
  await fetch(`http://localhost:8080/api/trips`, {
    method: "POST",
    headers: {
      Authorization: "test-token",
      "content-type": "application/json",
    },
    body: JSON.stringify(typeFullTrip),
  });
}

export default function NewTripForm({}: Props) {
  const pageContext = useContext(PageContext);
  const [newTrip, setNewTrip] = useState<TypeFullTrip>({
    key: "",
    id: "",
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: 0,
    image: "",
    activities: [],
  });
  console.log(newTrip);
  if (pageContext)
    return (
      <div>
        <h3>enter New Trip</h3>
        <form>
          <input
            type="text"
            placeholder="key"
            onChange={(e) => setNewTrip({ ...newTrip, key: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="id"
            onChange={(e) => setNewTrip({ ...newTrip, id: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setNewTrip({ ...newTrip, name: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="destination"
            onChange={(e) =>
              setNewTrip({ ...newTrip, destination: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="startDate"
            onChange={(e) =>
              setNewTrip({ ...newTrip, startDate: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="endDate"
            onChange={(e) =>
              setNewTrip({ ...newTrip, endDate: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="description"
            onChange={(e) =>
              setNewTrip({ ...newTrip, description: e.target.value })
            }
          ></input>
          <input
            type="number"
            placeholder="price"
            onChange={(e) =>
              setNewTrip({ ...newTrip, price: Number(e.target.value) })
            }
          ></input>
          <input
            type="text"
            placeholder="image"
            onChange={(e) => setNewTrip({ ...newTrip, image: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="activities"
            onChange={(e) =>
              setNewTrip({ ...newTrip, activities: Array(e.target.value) })
            }
          ></input>
          <input type="submit" onClick={() => createNewTrip(newTrip)}></input>
        </form>
        <button onClick={() => pageContext.setPage("Trips")}>All Trips</button>
      </div>
    );
}
