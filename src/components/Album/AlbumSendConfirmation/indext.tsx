import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material'
import styles from './styles/albumSendConfirmation.module.css'

type AlbumConfirmationProps = {
    isOpen: boolean
    handleClose: () => void
}

export default function AlbumSendConfirmation({ isOpen, handleClose }: AlbumConfirmationProps) {
    return (
        <Stack width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Registro Completado"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Gracias por tu contribucion a RossMusic, continua con tu navegacion normalmente
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
        </Stack>
    )
}
