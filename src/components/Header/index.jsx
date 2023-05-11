import { Input } from "../Input";
import { ButtonText } from "../ButtonText"
import { Container, Profile } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.png"
import { useState, useEffect } from "react";
import { useSearch } from "../../hooks/search";

export function Header(){
  const [search, setSearch] = useState("")
  const { fetchMovies } = useSearch()

  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  useEffect(() => {
    fetchMovies(search)
  }, [search])


  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
       placeholder="Pesquisar pelo título"
       onChange={e => setSearch(e.target.value)}
     />

      <Profile>

        <div>
          <a href="/profile">{user.name}</a>

          <ButtonText 
            title="sair" 
            onClick={handleSignOut}
          />

        </div>
        <img
          src={avatarUrl}
          alt="Foto do usuário"
        />
      </Profile>

    </Container>
  )
}