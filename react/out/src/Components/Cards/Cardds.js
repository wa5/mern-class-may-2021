import React from 'react'
import {Card,Button} from 'react-bootstrap'
import img from '../Classes/1.jpg'

function Cardds(props) {
    console.log("heloooo",props)
    return (
        <div>

            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="sucess">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Cardds
