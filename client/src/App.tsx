import { useState, createContext } from "react";
import "./App.css";
import "./components/TripDetail/TripDetail.css";
import "../src/components/CreateCard/CreateCard.css";
import Home from "./components/Home";
import Trips from "./components/Trips";
import NewTripForm from "./components/NewTripForm";
import TripDetail from "./components/TripDetail/TripDetail";
import UpdateTripForm from "./components/UpdateTripForm";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";

export const PageContext = createContext<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const TripContext = createContext<{
  trip: string;
  setTrip: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

function App() {
  const [page, setPage] = useState("Home");
  const [trip, setTrip] = useState("");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <TripContext.Provider value={{ trip, setTrip }}>
        {page === "Home" ? <Home /> : null}
        {page === "Trips" ? <Trips /> : null}
        {page === "TripDetail" ? <TripDetail /> : null}
        {page === "NewTripForm" ? <NewTripForm /> : null}
        {page === "UpdateTripForm" ? <UpdateTripForm /> : null}
        {page === "UserRegistration" ? <UserRegistration /> : null}
        {page === "UserLogin" ? <UserLogin /> : null}
      </TripContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
