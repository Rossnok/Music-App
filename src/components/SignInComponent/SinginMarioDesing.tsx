import Image from 'next/image'
import styles from './styles/SignMarioDesing.module.css'
import RoundedInput from '../common/RoundedInput'
import { SignInValidationSchema } from './SignInValidationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'

export default function SinginMarioDesing() {
    const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
        resolver: yupResolver(SignInValidationSchema)
    })

    const onBlur = (field: []) => {
        trigger(field)
    }


    return (
        <div className={styles.main_container}>
            <div className={styles.background_image}>
                <Image
                    alt='sing_in_background'
                    src={'/images/sign_in_background.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={styles.sing_in_container}>
                <div className={styles.sign_in_form}>
                    <span className={styles.title_text}>RossMusic</span>
                    <span className={styles.text_info}>Iniciar sesion</span>
                    <div className={styles.inputs_container}>
                        <RoundedInput
                            register={register}
                            error={errors.userName ? errors.userName : ''}
                            field='userName'
                            type='text'
                            onBlur={onBlur}
                            placeholder='Usuario'
                            $width='50%'
                            border_style='1px solid gray'
                            $color='black'
                            $border='2em'
                        />
                        <RoundedInput
                            register={register}
                            error={errors.userName ? errors.userName : ''}
                            field='userName'
                            type='text'
                            onBlur={onBlur}
                            placeholder='Contraseña'
                            $width='50%'
                            border_style='1px solid gray'
                            $color='black'
                            $border='2em'
                        />
                        <Button className={styles.send_btn} variant="contained">Ingresar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
