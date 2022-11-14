import styled from "styled-components";

export const StyledFavorites = styled.div`
  display: flex;
  gap: 32px;
  margin-left: 32px;

  .favorite-div {
    display: flex;
    flex-direction: column;

    margin-bottom: 200px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  img {
    border-radius: 50%;
  }

  .favorite-titles {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
