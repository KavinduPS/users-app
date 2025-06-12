import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link, useLocation } from "react-router-dom";
import * as Yup from "yup";

const EditUser = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <Formik
      initialValues={{
        username: state.user.username,
        name: state.user.name,
        email: state.user.email,
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        name: Yup.string()
          .max(20, "Must be 100 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={async (values) => {
        await axios.put(`http://localhost:8080/user/${state.user.id}`, values);
        navigate("/");
      }}
    >
      <div className="flex justify-center align-center flex-col w-1/2 m-auto mt-10 border rounded-lg border-gray-200 p-10">
        <h1 className="text-center text-[36px] font-bold">Update User</h1>
        <Form className="flex align-center justify-center flex-col w-full ">
          <div className="px-10  py-4 flex flex-col">
            <label className="mb-2" htmlFor="username">
              Username
            </label>
            <Field
              className="mb-1 px-2 border border-gray-300 h-8 rounded-lg"
              name="username"
              type="text"
            />
            <ErrorMessage className="mb-2 color-red-400" name="username" />
          </div>

          <div className="px-10 py-4 flex flex-col">
            <label className="mb-2" htmlFor="name">
              Name
            </label>
            <Field
              className="mb-1 px-2 border border-gray-300 h-8 rounded-lg"
              name="name"
              type="text"
            />
            <ErrorMessage className="mb-2 text-red-400" name="name" />
          </div>

          <div className="px-10 py-4 flex flex-col">
            <label className="mb-2" htmlFor="email">
              Email Address
            </label>
            <Field
              className="mb-1 px-2 border border-gray-300 h-8 rounded-lg"
              name="email"
              type="email"
            />
            <ErrorMessage className="mb-2 text-red-400" name="email" />
          </div>

          <div className="px-10 py-4 flex justify-center">
            <button
              className="p-2 w-1/4 bg-green-300 rounded-lg mx-2 hover:cursor-pointer"
              type="submit"
            >
              Submit
            </button>
            <Link
              className="p-2 w-1/4 bg-red-300 rounded-lg mx-2 hover:cursor-pointer text-center"
              to={"/"}
            >
              <button>Cancel</button>
            </Link>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default EditUser;
