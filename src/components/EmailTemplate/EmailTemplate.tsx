type EmailTemplateProps = {
  userName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({userName}) => {
  return (
    <h1>Gracias por tu aporte {userName}, sigue disfrutando de Rossmusic</h1>
  )
}