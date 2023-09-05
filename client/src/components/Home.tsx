import { useContext } from "react";
import { PageContext } from "../App";
type Props = {};

export default function Home({}: Props) {
  const context = useContext(PageContext);
  if (context)
    return (
      <div>
        <h1>welcome to Home</h1>
        <button onClick={() => context.setPage("Trips")}>All Trips</button>
        <button onClick={() => context.setPage("UserRegistration")}>
          Registration
        </button>
        <button onClick={() => context.setPage("UserLogin")}>log in</button>
      </div>
    );
}
