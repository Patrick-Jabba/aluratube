import config from '../../../config.json';
import {StyledHeader} from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} alt="foto-do-perfil" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>

      </StyledHeader>
  );
}