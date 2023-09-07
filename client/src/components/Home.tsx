import { useContext } from "react";
import { PageContext } from "../App";
type Props = {};

export default function Home({}: Props) {
  const pageContext = useContext(PageContext);
  if (pageContext)
    return (
      <div>
        <h1>welcome to Home</h1>
        <button onClick={() => pageContext.setPage("Trips")}>All Trips</button>
        <button onClick={() => pageContext.setPage("UserRegistration")}>
          Registration
        </button>
        <button onClick={() => pageContext.setPage("UserLogin")}>log in</button>
      </div>
    );
}
