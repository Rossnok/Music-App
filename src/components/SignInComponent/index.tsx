import React, { useState } from 'react'
import styles from './styles/singInComponent.module.css'
import RoundedInput from '../common/RoundedInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInValidationSchema } from './SignInValidationSchema'
import { Button, Stack } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '@/apollo/graphql/user/queries'
import Image from 'next/image'
//TODO terminar con el diseño del componente, arreglar el roundedInput para que pueda ser solo la linea inferior para el login

export default function SignInComponent() {
    const [isRegister, setIsRegister] = useState<boolean>(false)

    const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
        resolver: yupResolver(SignInValidationSchema)
    })

    const { data, error, loading } = useQuery(GET_USERS)

    loading ? '' : console.log(data)

    const onBlur = (field: []) => {
        trigger(field)
    }

    const onClickRegister = () => {
        setIsRegister(!isRegister)
    }

    return (
        <Stack direction={'row'} flexWrap={'nowrap'}>
            <Stack className={styles.sign_image_container} width={'40%'} height={'100vh'}>
                <Image
                    className={styles.img_contanier}
                    src={'/images/vinill_image.jpg'}
                    alt='album image'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                />
            </Stack>
            <Stack className='singInFormContainer' alignItems={'center'} justifyContent={'center'} width={'60%'} height={'100vh'}>
                <div className={styles.form_container}>
                    <span className={styles.sign_in_tittle}>Bienvenido a RossMusic</span>
                    <span className={styles.info_text}>¿Aun no eres parte de nuestra comunidad? <span onClick={onClickRegister} className={styles.sign_forgot_text}>Registrate</span></span>
                    <div className={styles.inputs_container}>
                        <RoundedInput
                            register={register}
                            error={errors.userName ? errors.userName : ''}
                            field='userName'
                            type='text'
                            onBlur={onBlur}
                            $width='80%'
                            label='Nombre de usuario'
                            border_style='1px solid gray'
                            $color='black'
                            $border='4px'
                        />
                        {isRegister &&
                            <RoundedInput
                                register={register}
                                error={errors.email ? errors.email : ''}
                                field='email'
                                type='text'
                                onBlur={onBlur}
                                $width='80%'                                
                                label='Correo electronico'
                                border_style='1px solid gray'
                                $color='black'
                                $border='4px'
                            />
                        }
                        <RoundedInput
                            register={register}
                            error={errors.password ? errors.password : ''}
                            field='password'
                            type='text'
                            onBlur={onBlur}
                            $width='80%'
                            label='Contraseña'
                            border_style='1px solid gray'
                            $color='black'
                            $border='4px'
                        />
                        <Button className={styles.send_btn} variant="contained">{isRegister ? 'Registrar' : 'Ingresar'}</Button>
                    </div>
                    <span className={styles.sign_forgot_text}>¿Olvidaste tu contraseña?</span>
                    <div className={styles.social_media}>
                        <span className={styles.info_text}>Siguenos en nuestras redes sociales</span>
                        <div className={styles.icons_container}>
                            <Image
                                alt='facebook icon'
                                src={'/images/socialmedia/instagram.png'}
                                width={40}
                                height={40}
                                style={{
                                    cursor: "pointer",
                                    transform: 'scale(110%)'
                                }}
                                quality={100}
                            />
                            <Image
                                alt='facebook icon'
                                src={'/images/socialmedia/facebook.png'}
                                width={40}
                                height={40}
                                style={{
                                    cursor: "pointer",
                                    transform: 'scale(110%)'
                                }}
                                quality={100}
                            />
                            <Image
                                alt='facebook icon'
                                src={'/images/socialmedia/whatsapp.png'}
                                width={40}
                                height={40}
                                style={{
                                    cursor: "pointer",
                                    transform: 'scale(110%)'
                                }}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </Stack>
        </Stack>
    )
}
