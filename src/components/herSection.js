import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image1 from '../assets/images/img1.jpeg'

const HerSection = () => {
  return (
    <div
      className='heroSection'
      style={{ backgroundColor: 'black', color: 'white', padding: '50px 0' }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet. Et velit eius eos nesciunt doloribus
              aut natus ipsa in error omnis. Id ducimus voluptatem sed nobis
              velit aut nemo eius et inventore quia cum corporis assumenda. In
              voluptatem voluptas et laborum nobis aut provident quasi aut culpa
              autem qui dolore itaque quo explicabo odio quo excepturi
              voluptatem. Id laborum neque sit laboriosam Quis sit doloremque
              ratione sit consequatur voluptatem nam recusandae quas et quas
              fugiat.
            </p>
          </Col>

          <Col md={6}>
            <img src={Image1} alt='bakery' className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HerSection
