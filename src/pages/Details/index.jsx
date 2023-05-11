import { Container, MovieInfo, NameRate, Author, Tags, Description, Footer } from "./styles";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from "../../assets/avatar_placeholder.png"
import { ButtonBlack } from "../../components/ButtonBlack";
import { useNavigate } from "react-router-dom";


export function MoviePreview(){
  const [data, setData] = useState(null)
  const { user } = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const params = useParams()

  async function handleDeleteMovie(id){
    const confirm = window.confirm("Deseja realmente excluir o filme")

    if(confirm){
      await api.delete(`/movies/${id}`)
      navigate(-1)
      alert("Filme deletado com sucesso.")
    }
    
  }
  useEffect(() => {
    async function fetchMovieDetails(){
      try {
        const response = await api.get(`/movies/${params.id}`)
        console.log("front")
        setData(response.data)

      } catch (error) {
        if (error.response) {
          navigate("/")
          alert(error.response.data.message)
        } 
      }
    }
    fetchMovieDetails()
  }, [])

  return (
      <Container>
        <Header />
        

        <a href="/">
          <FiArrowLeft />
             Voltar
         </a>
         
          {
            data &&

            <main>


              <MovieInfo>
                  <NameRate>
                      <h1>{data.title}</h1>
                      <Stars rate={data.rating}/>
                  </NameRate>

                    <Author>
                        <img 
                        src={avatarUrl}
                        alt={`Avatar de ${user.name}`}
                        />
                      <p>{`Por ${user.name}`}</p>
                          <FiClock />
                      <p>{data.created_at}</p>
                      </Author>

                      <Tags>
                        { 
                        data.tags && data.tags.map(tag => (
                          <Tag 
                            key={tag.id}
                            title={tag.name}
                          />
                        ))
                            }
                      </Tags>

                      <Description>
                        <p>{data.description}</p>
                      </Description>

                </MovieInfo>

                <Footer>
                      <ButtonBlack 
                        title="Excluir filme"
                        onClick={() => handleDeleteMovie(params.id)}
                      />
                </Footer>
            </main>
          }
    
      </Container>
  )
}