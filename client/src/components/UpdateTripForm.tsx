import { useContext } from "react";
import { PageContext } from "../App";
type Props = {};

export default function UpdateTripForm({}: Props) {
  const pageContext = useContext(PageContext);
  if (pageContext)
    return (
      <div>
        <h1>welcome to Update Trip Form</h1>
        <button onClick={() => pageContext.setPage("Trips")}>All Trips</button>
      </div>
    );
}
