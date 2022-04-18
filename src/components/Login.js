import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Login() {
  const [SendForm, setSendForm] = useState(false);
  const [TokenMsg, setTokenMsg] = useState(false);

  return (
    <Formik
      // VALORES
      initialValues={{
        email: "",
        password: "",
      }}
      //VALIDACION (validate retorna errors)
      validate={(valores) => {
        let errores = {};

        //validacion para el email
        if (!valores.email) {
          errores.email = "Por favor Ingrese un email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email =
            "El correo solo puede contener letras, puntos, guiones o guion bajo.";
        }
        //validacion para la password
        if (!valores.password) {
          errores.password = "Por favor Ingrese una contraseña";
        }

        return errores; //retorna los errores para mostrar posteriormente mensajes
      }}
      onSubmit={(valores, { resetForm }) => {
        //AXIOS POST
        const PostData = async (valores) => {
          let data = {
            email: valores.email,
            password: valores.password,
          };
          try {
            const resp = await axios.post(
              "http://challenge-react.alkemy.org/",
              data
            );
            let token = resp.data.token;
            console.log("axio post:", token);
            //GUARDADO EN LOCALSTORAGE
            if (token) {
              const arrayHeroes = [];
              localStorage.setItem("heroes", JSON.stringify(arrayHeroes));
              localStorage.setItem("token", token);
              window.location.reload(false);
            }
          } catch (err) {
            setTokenMsg(true);
            setTimeout(() => setTokenMsg(false), 3500);
            console.log(err);
          }
        };

        PostData(valores);
        //RESETEADO Y MENSAJE DE EXITO
        resetForm();
        setSendForm(true);
        setTimeout(() => setSendForm(false), 3500);
        console.log("formulario enviado", valores);
      }}
    >
      {({ errors }) => (
        <div className="formprincipal">
          <h1 className="formtitle">
            BIENVENIDO A <span>SUPERHERO!</span>
          </h1>
          <Form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <Field
                name="email"
                type="email"
                className="form-control form-login"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control form-login"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-dark buttonsubmit">
              Login
            </button>
          </Form>
          {SendForm && (
            <p className="exito">El formulario se envio con exito!</p>
          )}
          {TokenMsg && <p className="error">No fue autorizado!</p>}
        </div>
      )}
    </Formik>
  );
}

export default Login;
