import { useContext } from "react";
import { PageContext, TripContext } from "../../App";
import { TypeTrip } from "../CardType";
interface Props extends TypeTrip {
  onDelete: (id: string) => void;
}
export default function CreateCard(data: Props) {
  const pageContext = useContext(PageContext);
  const tripContext = useContext(TripContext);

  if (pageContext && tripContext)
    return (
      <div
        className="CreateCard"
        onClick={() => [
          pageContext.setPage("TripDetail"),
          tripContext.setTrip(data.id),
        ]}
      >
        <h2>{data.id}</h2>
        <h3>{data.name}</h3>
        <h3>{data.destination}</h3>
        <p>{data.startDate}</p>
        <p>{data.endDate}</p>
        <img src={data.image} width={300} height={190} />
        <button
          onClick={(e) => {
            e.stopPropagation();
            data.onDelete(data.id);
          }}
        >
          delete
        </button>
      </div>
    );
}
