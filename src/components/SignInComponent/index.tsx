import React from 'react'
import styles from './styles/singInComponent.module.css'
import RoundedInput from '../common/RoundedInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInValidationSchema } from './SignInValidationSchema'
import { Button, Stack, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '@/apollo/graphql/user/queries'
import Image from 'next/image'
//TODO terminar con el diseño del componente, arreglar el roundedInput para que pueda ser solo la linea inferior para el login

export default function SignInComponent() {
    const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
        resolver: yupResolver(SignInValidationSchema)
    })

    const { data, error, loading } = useQuery(GET_USERS)

    loading ? '' : console.log(data)

    const onBlur = (field: []) => {
        trigger(field)
    }

    return (
        <Stack direction={'row'} flexWrap={'nowrap'}>
            <Stack className={styles.sign_image_container} width={'45%'} height={'100vh'}>
                <Image
                    className={styles.img_contanier}
                    src={'/images/sign_in_image.jpg'}
                    alt='album image'
                    layout='fill'
                    objectFit='fill'
                />
            </Stack>
            <Stack className='singInFormContainer' alignItems={'center'} justifyContent={'center'} width={'55%'} height={'100vh'}>
                <div className={styles.form_container}>
                    <div className={styles.inputs_container}>
                        <RoundedInput
                            register={register}
                            error={errors.userName ? errors.userName : ''}
                            field='userName'
                            type='text'
                            onBlur={onBlur}
                            placeholder='Nombre de usuario...'
                            $width='100%'
                            label='Nombre de usuario'
                            border_style='1px solid gray'
                            $color='black'
                            $border='4px'
                        />
                        <RoundedInput
                            register={register}
                            error={errors.email ? errors.email : ''}
                            field='email'
                            type='text'
                            onBlur={onBlur}
                            placeholder='Correo electronico...'
                            $width='100%'
                            label='Correo electronico'
                            border_style='1px solid gray'
                            $color='black'
                            $border='4px'
                        />
                        <RoundedInput
                            register={register}
                            error={errors.password ? errors.password : ''}
                            field='password'
                            type='text'
                            onBlur={onBlur}
                            placeholder='Contraseña...'
                            $width='100%'
                            label='Contraseña'
                            border_style='1px solid gray'
                            $color='black'
                            $border='4px'
                        />
                    </div>
                </div>
            </Stack>
        </Stack>
    )
}
