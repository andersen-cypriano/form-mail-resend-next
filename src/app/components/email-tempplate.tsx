import * as React from "react";

interface EmailTemplateProps {
  name: string;
  sobrenome: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, sobrenome, email
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Nome: {name}</p>
    <p>Sobrenome: {sobrenome}</p>
    <p>Email: {email}</p>
  </div>
);

export default EmailTemplate;
