import { useContext } from "react";
import { PageContext } from "../App";
type Props = {};

export default function UserRegistration({}: Props) {
  const pageContext = useContext(PageContext);
  if (pageContext)
    return (
      <div>
        <h1>welcome to User Registration</h1>
        <button onClick={() => pageContext.setPage("Home")}>Home</button>
      </div>
    );
}
