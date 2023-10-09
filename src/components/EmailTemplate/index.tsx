interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <>
    <h1>Gracias por tu aporte a RossMusic, tu contribución ayuda con el crecimiento de este proyecto</h1>
  </>
);
