import { useContext } from "react";
import { PageContext } from "../App";
type Props = {};

export default function UpdateTripForm({}: Props) {
  const context = useContext(PageContext);
  if (context)
    return (
      <div>
        <h1>welcome to Update Trip Form</h1>
        <button onClick={() => context.setPage("Trips")}>All Trips</button>
      </div>
    );
}
