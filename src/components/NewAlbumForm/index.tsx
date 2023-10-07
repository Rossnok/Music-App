import React from 'react'
import { Stack, Typography } from '@mui/material'
import RoundedInput from '../common/RoundedInput'
import { AlbumFormValidationSchema } from './AlbumFormValidationSchema'
import { useForm, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles/newAlbumForm.module.css'
import Image from 'next/image';

export default function NewAlbumForm() {
  const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
    resolver: yupResolver(AlbumFormValidationSchema)
  });

  const onBlurName = () => {
    trigger('name');
  }

  return (
    <Stack width={'100%'} direction={'row'} overflow={'auto'}>
      <Stack width={'40%'} bgcolor={'#371287'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
        <Image
          className={styles.image}
          src={'/images/addAlbum.png'}
          alt='Register image'
          style={{
            width: '70%',
            height: 'auto',
          }}
          width={600}
          height={700}
        />
      </Stack>
      <Stack width={'60%'}>
        <div className={styles.form_container}>
          <Typography className={styles.rainbow_text}>Registrar Nuevo Album</Typography>
          <Stack direction={'row'} gap={1} width={'100%'} justifyContent={'center'}>
            <RoundedInput
              onBlur={onBlurName}
              register={register}
              error={errors?.name ? errors.name : ''}
              field='name'
              placeholder='Nombre de usuario'
              type='text'
              key={'name'}
            />
            <RoundedInput
              register={register}
              error={errors?.email ? errors.email : ''}
              field='email'
              placeholder='Email...'
              type='email'
              key={'email'}
            />
          </Stack>
          <Stack direction={'row'} gap={1} justifyContent={'center'}>
            <RoundedInput
              register={register}
              error={errors?.name ? errors.name : ''}
              field='name'
              placeholder='Nombre de usuario'
              type='text'
              key={'name'}
            />
            <RoundedInput
              register={register}
              error={errors?.email ? errors.email : ''}
              field='email'
              placeholder='Email...'
              type='email'
              key={'email'}
            />
          </Stack>
          <Stack direction={'row'} gap={1} justifyContent={'center'}>
            <RoundedInput
              register={register}
              error={errors?.name ? errors.name : ''}
              field='name'
              placeholder='Nombre de usuario'
              type='text'
              key={'name'}
            />
            <RoundedInput
              register={register}
              error={errors?.email ? errors.email : ''}
              field='email'
              placeholder='Email...'
              type='email'
              key={'email'}
            />
          </Stack>
          <Stack direction={'row'} gap={1} justifyContent={'center'}>
            <RoundedInput
              register={register}
              error={errors?.name ? errors.name : ''}
              field='name'
              placeholder='Nombre de usuario'
              type='text'
              key={'name'}
            />
            <RoundedInput
              register={register}
              error={errors?.email ? errors.email : ''}
              field='email'
              placeholder='Email...'
              type='email'
              key={'email'}
            />
          </Stack>
        </div>
      </Stack>
    </Stack>
  )
}
