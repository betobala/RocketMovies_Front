import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'
import { Container, Content, TopContent, NewMovie } from './styles'
import { useSearch } from '../../hooks/search'
import { useNavigate } from 'react-router-dom'


export function Home(){
  const { movies } = useSearch()
  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  return(
    <Container>

      <Header />


      <TopContent>
        <h1>Meus Filmes</h1>
        <NewMovie to="/new">
          <Button title="Adicionar filme" icon={FiPlus}/>
        </NewMovie>

      </TopContent>

      <Content>
        {
          movies.map(movie => (
            <Movie
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetails(movie.id)}
            />
          ))
        }

      </Content>
      
  
     
    </Container>
  )
}