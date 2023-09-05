import { useContext } from "react";
import { PageContext } from "../App";
type Props = {};

export default function NewTripForm({}: Props) {
  const context = useContext(PageContext);
  if (context)
    return (
      <div>
        <h1>welcome to New Trip Form</h1>
        <button onClick={() => context.setPage("Trips")}>All Trips</button>
      </div>
    );
}
