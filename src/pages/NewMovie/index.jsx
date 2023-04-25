import { Header } from "../../components/Header"
import { Link } from "react-router-dom";
import { Container } from "./styles"
import { Form } from "./styles"
import { Title_rate } from "./styles";
import { Input } from "../../components/Input"
import { Textarea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { FiArrowLeft } from "react-icons/fi";
import { Content } from "./styles";
import { Footer } from "./styles";
import { ButtonBlack } from "../../components/ButtonBlack";

export function NewMovie(){
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <a>
            <FiArrowLeft />
             Voltar
           </a>


          <Content>
          <h1>Novo filme</h1>
     
              <Title_rate>
                <Input placeholder="Título" />
                <Input placeholder="Sua nota (de 0 a 5)" />
              </Title_rate>
  
                <Textarea placeholder="Observações" />

            <Section title="Marcadores">
              <div className="tags">
                <NoteItem value="React"/>
                <NoteItem isNew placeholder="Novo marcador"/>
              </div>
          </Section>

          <Footer>
            <ButtonBlack title="Excluir filme"></ButtonBlack>
            <Button title="Salvar"></Button>
          </Footer>
            </Content>

        </Form>
      </main>
    </Container>
  )
}