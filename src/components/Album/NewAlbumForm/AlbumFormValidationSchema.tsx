import * as yup from 'yup';

export const AlbumFormValidationSchema = yup.object().shape({
    name: yup.string().required('Se requiere el nombre del album').nonNullable(),
    year: yup.number().required('Se requiere el año de lanzamiento').integer('Debe ser un numero entero')
          .typeError('Debe ser un numero').nonNullable(),
    traks: yup.number().typeError('Tiene que ser un numero').integer('debe ser un numero entero').nonNullable().positive('El numero debe ser positivo')
           .min(1, 'El numero tiene que ser mayor a 0').max(20, 'El numero debe ser menor a 21').required('Se requiere el numero de pistas'),
    genres: yup.string().nonNullable().required('Genero(s) requerido'),
    recordCompany: yup.string().nonNullable().required('Se requiere el nombre de la discografica'),
    email: yup.string().email('Correo no valido').required('Se requiere un correo electronico').nonNullable(),
    userName: yup.string().nonNullable().required('Nombre de usuario requerido')
})