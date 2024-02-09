import { signOut } from "next-auth/react"

export default function useNavBarLogic() {
  const onClickSingOut = () => {
      signOut()//TODO agregar la comprobacion si la session existe
  }
  
  return {
    onClickSingOut
  } 
  
}
