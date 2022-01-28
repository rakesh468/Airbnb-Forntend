import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Addrooms.css";

const formvalidationSchema = yup.object({
  img: yup.string().required(" Image URL Required"),
  title: yup.string().required("Title Required"),
  description: yup.string().required("Description Required"),
  location: yup.string().required("Location Required"),
  price: yup.string().required("Price Required"),
  total: yup.string().required("Total Required"),
});

const API_URL="https://airbnb-backendcode.herokuapp.com";

function Addrooms() {
  const history = useHistory();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        img: "",
        title: "",
        description: "",
        location: "",
        price: "",
        total: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (newrooms) => {
        console.log("onSubmit", newrooms);
        addrooms(newrooms);
      },
    });

  const addrooms = (newrooms) => {
    console.log(newrooms);
    fetch(`${API_URL}/airbnb`, {
      method: "POST",
      body: JSON.stringify(newrooms),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/search"));
  };
  return (
    <form onSubmit={handleSubmit} className="room-form">
      <TextField
        id="img"
        name="img"
        variant="outlined"
        values={values.img}
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
        values={values.title}
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
        values={values.location}
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
        values={values.description}
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
        values={values.price}
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
        values={values.total}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.total && touched.total}
        label="Enter Total amount"
        helperText={errors.total && touched.total && errors.total}
      />

      <Button type="submit" variant="contained">
        Add Room
      </Button>
    </form>
  );
}
export default Addrooms;
