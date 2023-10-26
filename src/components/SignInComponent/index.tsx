import React from 'react'
import styles from './styles/singInComponent.module.css'
import RoundedInput from '../common/RoundedInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInValidationSchema } from './SignInValidationSchema'
import { Button, Stack, Typography } from '@mui/material'

//TODO terminar con el diseño del componente, arreglar el roundedInput para que pueda ser solo la linea inferior para el login

export default function SignInComponent() {
    const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
        resolver: yupResolver(SignInValidationSchema)
    })

    const onBlur = (field: []) => {
        trigger(field)
    }

    return (
        <>
            <div className={styles.sign_in_layout}>
                <div className={styles.glass_filter} >

                </div>
            </div>
            <div className={styles.sign_in_container}>
                <div className={styles.sign_in_component}>
                    <div className={styles.tittle_container}>
                        <Typography variant='h5' className={styles.rainbow_text}>Sing In or Sign Up</Typography>
                    </div>
                    <Stack gap={1}>
                        <RoundedInput
                            register={register}
                            error={errors.userName ? errors.userName : ''}
                            field='userName'
                            type='text'
                            onBlur={onBlur}
                            placeholder='UserName'
                            $width='85%'
                        />
                        <RoundedInput
                            register={register}
                            error={errors.password ? errors.password : ''}
                            field='password'
                            type='password'
                            onBlur={onBlur}
                            placeholder='Password'
                            $width='85%'
                        />
                    </Stack>
                    <Button variant='contained' className={styles.send_button}>Ingresar</Button>
                </div>
            </div>
        </>
    )
}
