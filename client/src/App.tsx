import { useState, createContext } from "react";
import "./App.css";
import "../src/components/CreateCard/CreateCard.css";
import Home from "./components/Home";
import Trips from "./components/Trips";
import NewTripForm from "./components/NewTripForm";
import TripDetail from "./components/TripDetail";
import UpdateTripForm from "./components/UpdateTripForm";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";
import CreateCardById, {
  OpenCard,
} from "./components/CreateCardById/CreateCardById";

export const PageContext = createContext<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const TripContext = createContext<{
  trip: OpenCard;
  setTrip: React.Dispatch<React.SetStateAction<OpenCard>>;
} | null>(null);

function App() {
  const [page, setPage] = useState("Home");
  const [trip, setTrip] = useState({} as OpenCard);
  return (
    <TripContext.Provider value={{ trip, setTrip }}>
      <PageContext.Provider value={{ page, setPage }}>
        {page === "Home" ? <Home /> : null}
        {page === "Trips" ? <Trips /> : null}
        {page === "TripDetail" ? <TripDetail /> : null}
        {page === "NewTripForm" ? <NewTripForm /> : null}
        {page === "UpdateTripForm" ? <UpdateTripForm /> : null}
        {page === "UserRegistration" ? <UserRegistration /> : null}
        {page === "UserLogin" ? <UserLogin /> : null}
        {page === "createCardById" ? <CreateCardById trip={trip} /> : null}
      </PageContext.Provider>
    </TripContext.Provider>
  );
}

export default App;
