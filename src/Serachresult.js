import "./Searchresult.css";
import BasicRating from "./Basicrating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import {useHistory} from "react-router-dom";

function Searchresult({

  img,
  location,
  title,
  description,
  price,
  total,
  deletebutton,
  editbutton,
  id
})
{
const history=useHistory();

  return (
    <Card className="searchresult">
      <img src={img} alt={title}onClick={()=>history.push("/rooms/"+id)} />
      <CardContent className="searchresult_info" >
        <div className="searchesult_infotop">
        <h3>
            <b>{title}</b>
          </h3>
          <h4>{location}</h4>
          
          <p>{description}</p>
        </div>
        <BasicRating />
        <h2>${price}</h2>
        <h3><b>Total:$</b>{total}</h3>
        <CardActions>
          {deletebutton}
          {editbutton}
        </CardActions>
      </CardContent>
    </Card>
  );
}
export default Searchresult;
