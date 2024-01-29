import React, { useEffect, useRef } from 'react'
import styles from './styles/MessageDialog.module.css'
import { Button } from '@mui/base'
import Image from 'next/image'
import useMessageModalLogic from './MessageModalLogic'

type Props = {
    message: string,
    signInError?: any
    iconUri: string,
    isOpen: boolean,
    resetErrorState: any,
    onClose?: () => void,
    onClickOk?: () => void,    
}

export default function SignInMessageModal({ message, iconUri , isOpen, signInError,onClose, onClickOk, resetErrorState }: Props) {
    const {
        errorManager,
        errorMessage
    } = useMessageModalLogic()
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
            resetErrorState(undefined)
        }
    }, [isOpen])
    
    useEffect(()=> {
        if(signInError) {
            errorManager(signInError)
            
        }else{
            console.log('no error')
        }
    })

    const dialog: JSX.Element | null = isOpen ? (
        <dialog ref={dialogRef} className={styles.dialog_container}>
            <div className={styles.dialog_content}>
                <Image
                    alt='message icon'
                    src={iconUri}
                    width={80}
                    height={80}
                />
                {!signInError &&
                    <div>{message}</div>
                }
                { signInError &&
                   <div>{errorMessage}</div>
                }
            </div>
            <div className={styles.ok_button_container}>
                <Button className={styles.ok_button} onClick={onClickOk}>Aceptar</Button>
            </div>
        </dialog>
    ) : null

    return dialog
}
