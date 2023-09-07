import { useContext } from "react";
import { PageContext } from "../App";
type Props = {};

export default function UserLogin({}: Props) {
  const pageContext = useContext(PageContext);
  if (pageContext)
    return (
      <div>
        <h1>welcome to User Login</h1>
        <button onClick={() => pageContext.setPage("Home")}>Home</button>
      </div>
    );
}
