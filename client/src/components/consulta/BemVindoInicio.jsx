import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FiCalendar } from "react-icons/fi";
import { useAuthUser } from "react-auth-kit";

const BemVindoInicio = () => {
  const auth = useAuthUser();
  return (
    <>
      <div className="border p-2 bg-dark bg-gradient text-white">
        <h5>Bem Vindo!</h5>
        <h3>{auth().nome}</h3>
        <p className="w-50 word-break">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          quidem natus ipsam ea, fugit facilis nobis repudiandae pariatur
          possimus adipisci nisi quo sapiente nulla consequuntur, quaerat a
          assumenda sunt sequi.
        </p>
      </div>
    </>
  );
};

export default BemVindoInicio;
