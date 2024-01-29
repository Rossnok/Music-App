import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInValidationSchema } from './SignInValidationSchema'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '@/apollo/graphql/user/mutations'
import { signIn } from 'next-auth/react'
import bcrypt from 'bcryptjs'
import { useRouter } from 'next/router'

export default function useSignInLogic() {

    const [isRegister, setIsRegister] = useState<boolean>(false)
    const [registerForm, setRegisterForm] = useState<boolean>(false)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [signInError, setSignInError] = useState<any>()

    const router = useRouter()


    const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
        resolver: yupResolver(SignInValidationSchema)
    })

    const [addUser, { data: userData, loading: addUserLoading, error: addUserError }] = useMutation(ADD_USER, {
        onError(error: any, clientOptions) {
            setSignInError({errorcode:error.graphQLErrors[0].extensions.exception!.code, errorkeypattern: error.graphQLErrors[0].extensions.exception!.keyPattern})
        },
    })

    const onRegisterUser = async () => {
        const encriptedPassword = await bcrypt.hash(getValues('password'), 12)

        addUser({
            variables: {
                userName: getValues('userName'),
                password: encriptedPassword,
                email: getValues('email')
            }
        })

       
        setValue('userName', '')
        setValue('password', '')
        setValue('email', '')

        setIsRegister(!isRegister)

        if (openDialog == false) {
            setOpenDialog(!openDialog)
        } else {
            setOpenDialog(false)
        }
    }

    const userSignIn = async () => {
        const res = await signIn('credentials', {
            username: getValues('userName'),
            password: getValues('password'),
            redirect: false
        });

        if (!res?.ok && res?.error != null) {
            setSignInError(res.error)
        } else {
            router.push('/')
        }
    }

    const onBlur = (field: []) => {
        trigger(field)
    }

    const onClickRegister = () => {
        setRegisterForm(!registerForm)
    }

    const onCloseAceptDialog = () => {
        setOpenDialog(!openDialog)
    }

    return {
        onBlur,
        onRegisterUser,
        onClickRegister,
        isRegister,
        register,
        errors,
        registerForm,
        openDialog,
        onCloseAceptDialog,
        userSignIn,
        signInError,
        setSignInError
    }
}