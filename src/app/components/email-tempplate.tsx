import * as React from "react";

interface EmailTemplateProps {
  name: string;
  empresa: string;
  email: string;
  cnpj: string;
  endereco: string;
  complemento: string | undefined;
  telefone: string;
  cidade: string;
  estado: string;
  cep: string;
  mensagem: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  empresa,
  email,
  cnpj,
  endereco,
  complemento,
  telefone,
  cidade,
  estado,
  cep,
  mensagem,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Nome: {name}</p>
    <p>Empresa: {empresa}</p>
    <p>Email: {email}</p>
    <p>CNPJ: {cnpj}</p>
    <p>Endereço: {endereco}</p>
    <p>Complemento: {complemento}</p>
    <p>Telefone: {telefone}</p>
    <p>Cidade: {cidade}</p>
    <p>Estado: {estado}</p>
    <p>CEP: {cep}</p>
    <p>Mensagem: {mensagem}</p>
  </div>
);

export default EmailTemplate;
