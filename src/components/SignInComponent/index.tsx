import React from 'react'
import { Stack } from '@mui/material'
import styles from './styles/singInComponent.module.css'
import RoundedInput from '../common/RoundedInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInValidationSchema } from './SignInValidationSchema'
import { Typography } from '@mui/material'

export default function SignInComponent() {
    const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
        resolver: yupResolver(SignInValidationSchema)
    })

    const onBlur = (field: []) => {
        trigger(field)
    }

    return (
        <Stack width={'100%'} height={'100vh'} bgcolor={'#121211'} alignItems={'center'} justifyContent={'center'}>
            <div className={styles.sign_in_container}>
                <div className={styles.title_container}>
                    <h1 className={styles.rainbow_text}>RossMusic</h1>
                    <Typography className={styles.rainbow_text}>Iniciar Session</Typography>
                </div>
                <RoundedInput
                    onBlur={onBlur}
                    register={register}
                    field='userName'
                    placeholder='User name'
                    type='text'
                    key={'userName'}
                    error={errors.userName ? errors.userName : ""}
                />
                <RoundedInput
                    onBlur={onBlur}
                    register={register}
                    field='password'
                    placeholder='Password'
                    type='password'
                    key={'password'}
                    error={errors.password ? errors.password : ""}
                />
            </div>
        </Stack>
    )
}
