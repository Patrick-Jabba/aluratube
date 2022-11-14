import { StyledTimeline } from "./styles";

export default function TimeLine({searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlists);
  //Statement
  // REACT prefere Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                 return video.title.includes(searchValue) 
              }).map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} alt="Imagem do video" />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

// da lista de nomes para componente REACT