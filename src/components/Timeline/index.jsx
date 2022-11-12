import { StyledTimeline } from "./styles";

export default function TimeLine(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);
  //Statement
  // REACT prefere Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log("teste345", playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
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