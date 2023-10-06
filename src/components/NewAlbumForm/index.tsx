import React from 'react'
import { Stack } from '@mui/material'
import RoundedInput from '../common/RoundedInput'
import { AlbumFormValidationSchema } from './AlbumFormValidationSchema'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function NewAlbumForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
    resolver: yupResolver(AlbumFormValidationSchema)
  });

  return (
    <Stack>
      <RoundedInput
        error={errors?.name ? errors.name : ''}
        field='name'
        placeholder='Nombre de usuario'
        type='text'
        key={'name'}
      />
    </Stack>
  )
}
