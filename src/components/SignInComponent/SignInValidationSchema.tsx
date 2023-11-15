import * as yup from 'yup'

export const SignInValidationSchema = yup.object().shape({
    userName: yup.string().nonNullable().required('Se requiere nombre de usuario'),
    password: yup.string().nonNullable().required('Se requiere contraseña'),
    email: yup.string().nonNullable().required('Se requiere correo electronico')
})