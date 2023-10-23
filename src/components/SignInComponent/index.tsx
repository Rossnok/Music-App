import React from 'react'
import styles from './styles/singInComponent.module.css'
import RoundedInput from '../common/RoundedInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInValidationSchema } from './SignInValidationSchema'
import { Typography } from '@mui/material'

//TODO terminar con el diseño del componente, arreglar el roundedInput para que pueda ser solo la linea inferior para el login

export default function SignInComponent() {
    const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
        resolver: yupResolver(SignInValidationSchema)
    })

    const onBlur = (field: []) => {
        trigger(field)
    }

    return (
        <div className={styles.sign_in_layout}>
            <div className={styles.sign_in_container}>
                <div className={styles.tittle_container}>
                    <Typography variant='h5' className={styles.rainbow_text}>Sing In or Sign Up</Typography>
                </div>
                <RoundedInput
                    onBlur={onBlur}
                    register={register}
                    field='userName'
                    type='text'
                    key={'userName'}
                    error={errors.userName ? errors.userName : ""}
                    $background='var(--tolopea-100)'
                    $width='80%'
                    $color='var(--tolopea-600)'
                    $height='32px'
                    label='Nombre de usuario'
                    $border='.5em'
                />
                <RoundedInput
                    onBlur={onBlur}
                    register={register}
                    field='password'
                    type='password'
                    key={'password'}
                    error={errors.password ? errors.password : ""}
                    $width='80%'
                    $background='var(--tolopea-100)'
                    $color='var( --tolopea-600)'
                    $height='32px'
                    label='Password'
                    $border='.5em'
                />
            </div>
        </div>
    )
}
