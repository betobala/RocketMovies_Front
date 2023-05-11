import { Header } from "../../components/Header"
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles"
import { Form } from "./styles"
import { Title_rate } from "./styles";
import { Input } from "../../components/Input"
import { Textarea } from "../../components/TextArea"
import { MovieItem } from "../../components/MovieItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { FiArrowLeft } from "react-icons/fi";
import { Content } from "./styles";
import { Footer } from "./styles";
import { ButtonBlack } from "../../components/ButtonBlack";
import { api } from "../../services/api";
import { useState } from "react";

export function NewMovie(){
  const navigate = useNavigate()

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState()
  const [description, setDescription] = useState("")

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie(){
    if(!title){
      return alert("Digite o título do filme.")
    }
    console.log(tags)
    if(!rating){
      return alert("Digite a nota do filme.")
    }
    if(rating <= 0 || rating > 5){
      return alert(("A nota precisa ser um valor de 1 à 5"))
    }
    if(!description){
      return alert("Digite as observações do filme.")
    }
    if(newTag){
      return alert("Você deixou um marcador no campo, mas não clicou em adcionar. Clique para adcionar ou deixe o campo vazio.")
    }
    if(tags.length <=0){
      return alert("Adcione um marcador.")
    }

    await api.post("/movies", {
      title,
      rating,
      description,
      tags,
    })
    .then(() => {
      alert("Filme cadastrado com sucesso.")
      navigate(-1)
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Nao foi possivel cadastrar")
      }
    });

  }

    return (
    <Container>
      <Header />

      <main>
        <Form>
          <Link to="/">
            <FiArrowLeft />
             Voltar
           </Link>


          <Content>
          <h1>Novo filme</h1>
     
              <Title_rate>
                <Input
                 placeholder="Título"
                 onChange={e => setTitle(e.target.value)}
               />
                <Input
                 placeholder="Sua nota (de 0 a 5)"
                 onChange={e => setRating(e.target.value)}
                />
              </Title_rate>
  
                <Textarea
                 placeholder="Observações"
                 onChange={e => setDescription(e.target.value)}
                />

            <Section title="Marcadores">
              <div className="tags">
                {
                tags.map((tag, index) => (

                  <MovieItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />

                ))
              }
                <MovieItem 
                  isNew 
                  placeholder="Novo marcador"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
          </Section>

          <Footer>
            <Button
             title="Salvar"
             onClick={handleNewMovie}
           />
          </Footer>
            </Content>

        </Form>
      </main>
    </Container>
  )
}