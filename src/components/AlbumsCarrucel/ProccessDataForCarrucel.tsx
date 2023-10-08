import data from "./data"
import CarrucelCard from "./CarrucelCard"
import {Stack} from '@mui/material'

const { albumsData } = data() 

export const proccessData = ( ) => {
  /*  var proccesedData = albumsData.map((album, index) => {
       if (index % 3 === 0 || index === 0) {
         return (
           <Stack key={index} direction={'row'} width={'fit-content'} gap={3} flexWrap={'wrap'}>
             <CarrucelCard
               name={album.nombre ? album.nombre : ''}
               publication={album.publicacion ? album.publicacion : ''}
               traks={album.pistas ? album.pistas : ''}
               discografic={album.discografica ? album.discografica : ''}
               genre={album.genero ? album.genero : ''}
               src={album.src ? album.src : ''}
             />
             {albumsData[(index + 1)].nombre &&
               <CarrucelCard
                 name={albumsData[(index + 1)].nombre ? albumsData[(index + 1)].nombre : ''}
                 publication={albumsData[(index + 1)].publicacion ? albumsData[(index + 1)].publicacion : ''}
                 traks={albumsData[(index + 1)].pistas ? albumsData[(index + 1)].pistas : ''}
                 discografic={albumsData[(index + 1)].discografica ? albumsData[(index + 1)].discografica : ''}
                 genre={albumsData[(index + 1)].genero ? albumsData[(index + 1)].genero : ''}
                 src={albumsData[(index + 1)].src ? albumsData[(index + 1)].src : ''}
               />
             }
             {albumsData[index + 2] &&
               <CarrucelCard
                 name={albumsData[(index + 2)].nombre ? albumsData[(index + 2)].nombre : ''}
                 publication={albumsData[(index + 2)].publicacion ? albumsData[(index + 2)].publicacion : ''}
                 traks={albumsData[(index + 2)].pistas ? albumsData[(index + 2)].pistas : ''}
                 discografic={albumsData[(index + 2)].discografica ? albumsData[(index + 2)].discografica : ''}
                 genre={albumsData[(index + 2)].genero ? albumsData[(index + 2)].genero : ''}
                 src={albumsData[(index + 2)].src ? albumsData[(index + 2)].src : ''}
               />
             }
           </Stack>
         )
       }
     })

     var filteredArray = []

     for( let element in proccesedData){
       proccesedData[parseInt(element)] !== undefined ? filteredArray.push(proccesedData[parseInt(element)]) : ''
     }

     return( filteredArray)*/
 }  