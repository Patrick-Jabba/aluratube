import { StyledFavorites } from "./styles";

export function Footer(props) {
  const favorites = Object.keys(props.favorites);
  return (
    <StyledFavorites>
      <div className="favorite-div">
        <h2>Favoritos: </h2>
      </div>
      {favorites.map((itemFavorito) => {
        const favoriteContent = props.favorites[itemFavorito];
        console.log("🔥", favoriteContent);
        return (
          <div>
            <div>
              <a target="_blank" href={favoriteContent.url}>
                <img src={favoriteContent.thumb} alt="favorite image" />
              </a>
            </div>
            <div>
              <span className="favorite-titles">{favoriteContent.title}</span>
            </div>
          </div>
        );
      })}
    </StyledFavorites>
  );
}
