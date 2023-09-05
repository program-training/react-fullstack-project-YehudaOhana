import { useContext } from "react";
import { PageContext } from "../App";
type Props = {};

export default function UserLogin({}: Props) {
  const context = useContext(PageContext);
  if (context)
    return (
      <div>
        <h1>welcome to User Login</h1>
        <button onClick={() => context.setPage("Home")}>Home</button>
      </div>
    );
}
