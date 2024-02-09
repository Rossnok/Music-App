import GenreCardView from "@/components/common/GenreCardView";

export default function Test() {
  return (   
      <div style={{position: 'relative', width: '40%', height: '150px', display: 'flex'}}>
        <GenreCardView
          src="/images/backgroundImages/Pop_genre.jpg"
          name="Pop"
        />
      </div>
  )
}
