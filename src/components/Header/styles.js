import styled from "styled-components";

export const StyledHeader = styled.div`
  .banner {
    width: 100%;
    background-position: cover;
    background-repeat: no-repeat;
    height: 400px;
  }

  .profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info{
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 2px;
  }
`;

export const StyledBanner = styled.div`
  background-image: url(${({bg}) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 230px;
  
`