import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from "yup";

//form validation using formik and yup//
const formvalidationSchema = yup.object({
  img: yup.string().required(" Image URL Required"),
  title: yup.string().required("Title Required"),
  description: yup.string().required("Description Required"),
  location: yup.string().required("Location Required"),
  price: yup.string().required("Price Required"),
  total: yup.string().required("Total Required"),
});

const API_URL = "https://airbnb-backendcode.herokuapp.com";

function Editrooms() {
  const { id } = useParams();
  const [rooms, setrooms] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/airbnb/${id}`, {
      method: "GET",
      headers:{"X-auth-token":localStorage.getItem('token')}
    })
      .then((data) => data.json())
      .then((rm) => setrooms(rm));
  }, [id]);

  return rooms ? <Updaterooms rooms={rooms} /> : "";
}
function Updaterooms({ rooms }) {
  const history = useHistory();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        img: rooms.img,
        title: rooms.title,
        description: rooms.description,
        location: rooms.location,
        price: rooms.price,
        total: rooms.total,
      },
      validationSchema: formvalidationSchema,
      onSubmit: (updaterooms) => {
        console.log("onsubmit", updaterooms);
        editrooms(updaterooms);
      },
    });
  const editrooms = (updaterooms) => {
    console.log(updaterooms);
    fetch(`${API_URL}/airbnb/${rooms._id}`, {
      method: "PUT",
      body: JSON.stringify(updaterooms),
      headers: { 
        "X-auth-token":localStorage.getItem('token'),
        "Content-Type": "application/json" },
     }).then(() => history.push("/search"));
  };
  return (
    <form onSubmit={handleSubmit} className="room-form">
      <TextField
        id="img"
        name="img"
        variant="outlined"
        value={values.img}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.img && touched.img}
        label="Enter Image URL"
        helperText={errors.img && touched.img && errors.img}
      />

      <TextField
        id="title"
        name="title"
        variant="outlined"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.title && touched.title}
        label="Enter Title"
        helperText={errors.title && touched.title && errors.title}
      />

      <TextField
        id="location"
        name="location"
        variant="outlined"
        value={values.location}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Enter Location"
        error={errors.location && touched.location}
        helperText={errors.location && touched.location && errors.location}
      />

      <TextField
        id="description"
        name="description"
        variant="outlined"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.description && touched.description}
        label="Enter Description"
        helperText={
          errors.description && touched.description && errors.description
        }
      />
      <TextField
        id="price"
        name="price"
        variant="outlined"
        value={values.price}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.price && touched.price}
        label="Enter Price"
        helperText={errors.price && touched.price && errors.price}
      />

      <TextField
        id="total"
        name="total"
        variant="outlined"
        value={values.total}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.total && touched.total}
        label="Enter Total amount"
        helperText={errors.total && touched.total && errors.total}
      />

      <Button type="submit" variant="contained" color="success">
        Save
      </Button>
    </form>
  );
}
export default Editrooms;
