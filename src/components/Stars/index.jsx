import { Container } from "./styles"
import Star from "../../assets/star.svg"
import EmptyStar from "../../assets/empty-star.svg"

export function Stars({ rate }){
  return (
    <Container>
      <img  src={ 1 <= rate ? Star : EmptyStar }></img>
      <img  src={ 2 <= rate ? Star : EmptyStar }></img>
      <img  src={ 3 <= rate ? Star : EmptyStar }></img>
      <img  src={ 4 <= rate ? Star : EmptyStar }></img>
      <img  src={ 5 <= rate ? Star : EmptyStar }></img>

    </Container>
  )
}