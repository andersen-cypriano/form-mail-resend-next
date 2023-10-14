"use client";

import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  function sendMail() {
    axios
      .post("http://localhost:3000/api", {
        data: {
          name: name,
        },
      })
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <>
      <h1>Formulário</h1>
      <input type="text" onChange={handleChange} className="text-zinc-700"/>
      <input type="submit" value="Enviar" onClick={sendMail} className="bg-lime-600"/>
    </>
  );
}
