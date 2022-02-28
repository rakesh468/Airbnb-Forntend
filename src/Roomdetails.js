import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Roomdetails.css";
import BasicRating from "./Basicrating";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const API_URL = "https://airbnb-backendcode.herokuapp.com";

function Roomdetails() {
  const history = useHistory();
  const { id } = useParams();
  const [rooms, setrooms] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/airbnb/${id}`, {
      method: "GET",
      headers: { "X-auth-token": localStorage.getItem("token") },
    })
      .then((data) => data.json())
      .then((dt) => setrooms(dt));
  }, [id]);
  return (
    <Card className="detail-container">
      <div>
        <img src={rooms.img} alt={rooms.title} className="detail-image" />
      </div>
      <CardContent className="detail-info">
        <h4>{rooms.location}</h4>
        <h3>{rooms.title}</h3>
        <p>{rooms.description}</p>
        <BasicRating />
        <h2>{rooms.price}</h2>
        <h3>{rooms.total}</h3>
        <CardActions>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="contained"
            onClick={() => history.push("/search")}
          >
            Go Back
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Roomdetails;
