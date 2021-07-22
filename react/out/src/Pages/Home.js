
import Cla from '../Components/Classes/Cla'
import Obj from '../Components/Classes/Obj'
import { Container, Row, Col } from 'react-bootstrap'
import Navbarss from '../Components/Navbars/Navbarss'
import Courl from '../Components/Couroslas/Courl'
import Cardds from '../Components/Cards/Cardds'
import img1 from '../Pages/1.jpg'
import img2 from '../Pages/2.jpg'
import img3 from '../Pages/3.jpg'



function Home() {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbarss />
                    </Col>

                </Row>
                <br />
                <Row>
                    <Col>
                        <Courl />
                    </Col>

                </Row>
                <br />
                <Row>
                    <Col>
                        <Cardds img={img1}/>
                    </Col>
                    <Col>
                        <Cardds img={img2}/>
                    </Col>
                    <Col>
                        <Cardds img={img3}/>
                    </Col>
                    <Col>
                        <Cardds img={img1}/>
                    </Col>
                    <Col>
                        <Cardds />
                    </Col>
                </Row>





            </Container>




            {/* <Obj/>
<Cla /> */}

        </div>


    )
}
export default Home;