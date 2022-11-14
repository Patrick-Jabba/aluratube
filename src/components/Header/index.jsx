import config from '../../../config.json';
import {StyledBanner, StyledHeader} from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className='user-info'>
        <img className='profile-pic' src={`https://github.com/${config.github}.png`} alt="foto-do-perfil" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
      </StyledHeader>
  );
}