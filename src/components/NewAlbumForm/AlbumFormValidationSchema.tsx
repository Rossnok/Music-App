import * as yup from 'yup';

export const AlbumFormValidationSchema = yup.object().shape({
    name: yup.string().required().nonNullable(),
    publication: yup.string().required().nonNullable(),
    traks: yup.number().nonNullable().positive().min(1).max(20).required(),
    genre: yup.string().nonNullable().required(),
    recordCompany: yup.string().nonNullable().required(),
    email: yup.string().email().required().nonNullable(),
    userName: yup.string().nonNullable().required()
})