import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'
import { Container, Content, TopContent, NewMovie } from './styles'


export function Home(){
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
        <Note data={{
          title: 'Interstellar',
          rate: '3',
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de ',
          tags: [
            {id: '1', name: 'Ficção Cientifica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Família'}
          ]
          
            }}/>
        <Note data={{
          title: 'Interstellar',
          rate: '3',
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de ',
          tags: [
            {id: '1', name: 'Ficção Cientifica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Família'}
          ]
          
            }}/>  
        <Note data={{
          title: 'Interstellar',
          rate: '3',
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de ',
          tags: [
            {id: '1', name: 'Ficção Cientifica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Família'}
          ]
          
            }}/> 
            
            
      </Content>
      
  
     
    </Container>
  )
}