"use client";

import axios from "axios";
import { useState } from "react";
require('dotenv').config();
const querystring = require('querystring');

export default function Form() {
  const [name, setName] = useState<string | null>();
  const [sobrenome, setSobrenome] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeSobrenome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobrenome(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };



  function sendMail() {
    axios
      .post("http://localhost:3000/api", {
        data: {
          name: name,
          sobrenome: sobrenome,
          email: email
        },
      })
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="form">
          <h1 className="font-mono mb-1">Formulário</h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              onChange={handleChangeName}
              className="text-zinc-700 m-0 h-8 pl-2 text-sm"
              placeholder="insira seu nome"
            />
            <input
              type="text"
              onChange={handleChangeSobrenome}
              className="text-zinc-700 m-0 h-8 pl-2 text-sm"
              placeholder="insira seu sobrenome"
            />
            <input
              type="text"
              onChange={handleChangeEmail}
              className="text-zinc-700 m-0 h-8 pl-2 text-sm"
              placeholder="insira seu e-mail"
            />

            <input
              type="submit"
              value="Enviar"
              onClick={sendMail}
              className="bg-lime-600 h-8 m-0 px-2 border-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
