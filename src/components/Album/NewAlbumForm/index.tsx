import React, { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import RoundedInput from '../../common/RoundedInput'
import { AlbumFormValidationSchema } from './AlbumFormValidationSchema'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles/newAlbumForm.module.css'
import Image from 'next/image';
import AlbumSendConfirmation from '../AlbumSendConfirmation/indext';

export default function NewAlbumForm() {
  const { register, trigger, handleSubmit, formState: { errors, isSubmitSuccessful }, setValue, watch, getValues } = useForm({
    resolver: yupResolver(AlbumFormValidationSchema)
  });

  const [apiState, setApiState] = useState<Boolean>()
  const [modalState, setModalState] = useState<Boolean>()

  const handleOnCloseModal = () => {
    setModalState(false)
  }

  const handleSubmitForm = async (data: any) => {
    try {
      setApiState(true)
      const res = await fetch('/api/send/route', {
        method: 'POST'
      })

      const dataFetch = await res.json()
      setApiState(false)
      setModalState(true)
    } catch (error) {
      console.log(error)
    }
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
        <div className={styles.form_container}>
          <Typography className={styles.rainbow_text}>Registrar Nuevo Album</Typography>
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
            placeholder='Año de lanzamiento...'
            type='text'
            key={'year'}
          />
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
          <RoundedInput
            onBlur={onBlur}
            register={register}
            error={errors?.userName ? errors.userName : ''}
            field='userName'
            placeholder='Nombre de usuario...'
            type='text'
            key={'userName'}
          />
          <Button className={styles.send_btn} variant="contained" disabled={apiState ? true : false} onClick={handleSubmit(handleSubmitForm)}>Registrar Nuevo Album</Button>
        </div>
        {modalState &&
          <AlbumSendConfirmation handleClose={handleOnCloseModal} isOpen={modalState? true: false}/>
        }
      </Stack>
    </Stack>
  )
}
