import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInValidationSchema } from './SignInValidationSchema'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_USER } from '@/apollo/graphql/user/mutations'

export default function useSignInLogic() {

    const [isRegister, setIsRegister] = useState<boolean>(false)

    const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
        resolver: yupResolver(SignInValidationSchema)
    })

    const [addUser, { data: userData, loading: addUserLoading, error: addUserError }] = useMutation(ADD_USER)

    const onSubmitUser = async () => {
        addUser({
            variables: {
                userName: getValues('userName'),
                password: getValues('password'),
                email: getValues('email')
            }
        })
    }

    const onBlur = (field: []) => {
        trigger(field)
    }

    const onClickRegister = () => {
        setIsRegister(!isRegister)
    }
  return {
        onBlur,
        onSubmitUser,
        onClickRegister,
        isRegister,
        register,
        errors,
  }
}