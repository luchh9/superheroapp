import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  return (
    <Formik
      // VALUES
      initialValues={{
        busqueda: "",
      }}
      //VALIDATION (return "errors")
      validate={(valores) => {
        let errores = {};

        //VALIDATION PASSWORD
        if (!valores.busqueda) {
          errores.busqueda = "Por favor Ingrese un heroe";
        }

        return errores; //retorna los errores para mostrar posteriormente mensajes
      }}
      onSubmit={(valores, { resetForm }) => {
        //PUSH HISTORY
        function Push() {
          history.push("/Result?" + valores.busqueda);
        }
        Push();
        //RESETEADO Y MENSAJE DE EXITO
        resetForm();
        console.log("Formulario enviado", valores);
      }}
    >
      {({ errors }) => (
        <div className="centrado">
          <div className="formprincipal centrar">
            <h1 className="formtitle centrar">BUSCA UN SUPERHEROE!</h1>
            <Form>
              <div className="form-group">
                <Field
                  name="busqueda"
                  type="text"
                  className="form-control"
                  id="busquedaHeroe"
                  placeholder="Busca un heroe"
                />
                <ErrorMessage
                  name="busqueda"
                  component={() => (
                    <div className="error">{errors.busqueda}</div>
                  )}
                />
              </div>
              <button type="submit" className="btn btn-dark buttonsubmit">
                Buscar
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Home;
