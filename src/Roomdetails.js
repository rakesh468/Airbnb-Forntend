import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Roomdetails.css";
import BasicRating from "./Basicrating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import StripeCheckout from "react-stripe-checkout";
// import { toast } from "react-toastify";
// import axios from "axios";

// toast.configure();

const API_URL = "https://airbnb-backendcode.herokuapp.com";

function Roomdetails() {
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

  async function handletoken(token) {
    console.log(token)
    // const response=await axios.post("https://airbnb-backendcode.herokuapp.com/checkout/payment",{
    //   token,
    //   rooms
    // })
    // const { status } = response.data;
    // if (status === "success") {
    //   toast("Payment successfull", { type: "success" });
    // } else {
    //   toast("Payment Failed", { type: "error" });
    // }
  }
  return (
    <Card className="detail-container">
      <div>
        <img src={rooms.img} alt={rooms.title} className="detail-image" />
      </div>
      <CardContent className="detail-info">
        <h3>{rooms.title}</h3>
        <h4>{rooms.location}</h4>

        <p>{rooms.description}</p>
        <BasicRating />
        <h2>${rooms.price}</h2>
        <h3>${rooms.total}</h3>
        <CardActions>
          <StripeCheckout
            stripeKey="pk_test_51KZ7tgSCLtg0NGDAlaK5C61XEPGHKE4zH0UbTO6eGe0bd23CKV2Z6tEzWkyvA9Yf3O2Fm2hARJfc9FoshOFiNuFT00q3zNCxlL"
            token={handletoken}
            billingAddress
            shippingAddress
           name={rooms.title}
           amount={rooms.total * 100}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Roomdetails;
