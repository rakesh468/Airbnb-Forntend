import "./Searchresult.css";
import BasicRating from "./Basicrating";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function Searchresult({ img, location, title, description, price, total,deletebutton,editbutton}) {
  return (
    <Card className="searchresult">
      <img src={img} alt="" />
      < CardContent className="searchresult_info">
        <div className="searchesult_infotop">
          <p>{location}</p>
          <h3>
            <b>{title}</b>
          </h3>
          <p>{description}</p>
        </div>
        <BasicRating />
        <h2>{price}</h2>
        <p>{total}</p>
        <CardActions>
        {deletebutton}
        {editbutton}
        </CardActions>
      </CardContent>
    </Card>
  );
}
export default Searchresult;
