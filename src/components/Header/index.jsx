import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">

        <div>
          <span>Humberto Abreu</span>
          <a href="/">sair</a>
        </div>
        <img
          src="https://github.com/betobala.png"
          alt="Foto do usuário"
          />
      </Profile>

    </Container>
  )
}