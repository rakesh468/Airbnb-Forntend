import "./SearchPage.css";
// import Button from "@mui/material/Button";
import Searchresult from "./Serachresult";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SearchIcon from "@mui/icons-material/Search";

const API_URL = "https://airbnb-backendcode.herokuapp.com";

function SearchPage() {
  const [rooms, setrooms] = useState([]);
  const [Search,setSearch]=useState("");

  const getrooms = () => {
    fetch(`${API_URL}/airbnb`, {
      method: "GET",
  })
      .then((data) => data.json())
      .then((rm) => setrooms(rm));
  };
  useEffect(getrooms, []);

  const deleterooms = (id) => {
    fetch(`${API_URL}/airbnb/${id}`, {
      method: "DELETE",
      headers:{"X-auth-token":localStorage.getItem('token')}
    }).then(() => getrooms());
  };

  const history = useHistory();

  return (
    <div className="searchpage">
      <div className="serach_bar">
        <div className="header_center">
        <input type="text" placeholder="Search Hotel" onChange={(event)=>{setSearch(event.target.value)}} />
        <SearchIcon />
      </div>
      <div className="searchpage_info">
        <p>62 stays  24 August to 30 August  2 Guest</p>
        <h2>Stays Nearby</h2>
       </div>
       </div>

      {rooms.filter((val)=>(
        // if(Search === ""){
        //   return val;
        // }else if(val.title.toLowerCase().includes(Search.toLowerCase())){
        //   return val;
        // }
        val.title.toLowerCase().includes(Search.toLowerCase())
      )).map(
        ({ img, location, title, description, price, total, id, _id }) => (
          <Searchresult
            img={img}
            location={location}
            title={title}
            description={description}
            price={price}
            total={total}
            key={_id}
            id={_id}
            deletebutton={
              <IconButton
                style={{ marginLeft: "auto" }}
                onClick={() => deleterooms(_id)}
                color="error"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
            editbutton={
              <IconButton
                color="secondary"
                aria-label="Edit"
                onClick={() => history.push("/airbnb/edit/" + _id)}
              >
                <ModeEditIcon />
              </IconButton>
            }
          />
        )
      )}
    </div>
  );
}
export default SearchPage;
