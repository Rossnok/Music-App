import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import RoundedInput from '../common/RoundedInput'
import { AlbumFormValidationSchema } from './AlbumFormValidationSchema'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles/newAlbumForm.module.css'
import Image from 'next/image';

export default function NewAlbumForm() {
  const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
    resolver: yupResolver(AlbumFormValidationSchema)
  });

  const handleSubmitForm = (data: any) => {
    console.log(data);
  }

  const onBlur = (field: []) => {
    trigger(field)
    console.log('out of name input')
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
        <form action="">
          <div className={styles.form_container}>
            <Typography className={styles.rainbow_text}>Registrar Nuevo Album</Typography>
            <Stack direction={'row'} gap={1} width={'100%'} justifyContent={'center'}>
              <RoundedInput
                onBlur={onBlur}
                register={register}
                error={errors?.name ? errors.name : ''}
                field='name'
                placeholder='Nombre del album...'
                type='text'
                key={'name'}
              />
              <RoundedInput
                onBlur={onBlur}
                register={register}
                error={errors?.year ? errors.year : ''}
                field='year'
                placeholder='year...'
                type='text'
                key={'year'}
              />
            </Stack>
            <Stack direction={'row'} gap={1} justifyContent={'center'}>
              <RoundedInput
                onBlur={onBlur}
                register={register}
                error={errors?.traks ? errors.traks : ''}
                field='traks'
                placeholder='Numero de pistas...'
                type='text'
                key={'traks'}
              />
              <RoundedInput
                onBlur={onBlur}
                register={register}
                error={errors?.genres ? errors.genres : ''}
                field='genres'
                placeholder='Generos...'
                type='text'
                key={'genres'}
              />
            </Stack>
            <Stack direction={'row'} gap={1} justifyContent={'center'}>
              <RoundedInput
                onBlur={onBlur}
                register={register}
                error={errors?.recordCompany ? errors.recordCompany : ''}
                field='recordCompany'
                placeholder='Discografica...'
                type='text'
                key={'recordCompany'}
              />
              <RoundedInput
                onBlur={onBlur}
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
                onBlur={onBlur}
                register={register}
                error={errors?.userName ? errors.userName : ''}
                field='userName'
                placeholder='Nombre de usuario...'
                type='text'
                key={'userName'}
              />
              <RoundedInput
                onBlur={onBlur}
                register={register}
                error={errors?.email ? errors.email : ''}
                field='email'
                placeholder='Nombre de usuario...'
                type='email'
                key={'email'}
              />
            </Stack>
            <Button className={styles.send_btn} onClick={handleSubmit(handleSubmitForm)}>Registrar Nuevo Album</Button>
          </div>
        </form>
      </Stack>
    </Stack>
  )
}
