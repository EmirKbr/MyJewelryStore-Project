import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/main.css';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col, Container, DropdownMenu, DropdownItem, Badge,} from 'reactstrap';
import group2 from "./assets/images/Group 2.jpg"
import group3 from "./assets/images/Group 3.jpg"

function App() {
  const [data] = useState([
    { title: 'Engagement Ring 1', price: '$101.00 USD', img: 'Rectangle 1.jpg' },
    { title: 'Engagement Ring 2', price: '$102.00 USD', img: 'Rectangle 2.jpg' },
    { title: 'Engagement Ring 3', price: '$103.00 USD', img: 'Rectangle 3.jpg' },
    { title: 'Engagement Ring 4', price: '$104.00 USD', img: 'Rectangle 4.jpg' },
    { title: 'Engagement Ring 5', price: '$105.00 USD', img: 'Rectangle 1-1.jpg' },
    { title: 'Engagement Ring 6', price: '$106.00 USD', img: 'Rectangle 2-1.jpg' },
    { title: 'Engagement Ring 7', price: '$107.00 USD', img: 'Rectangle 3-1.jpg' },
    { title: 'Engagement Ring 8', price: '$108.00 USD', img: 'Rectangle 4-1.jpg' },
    { title: 'Pendants 1', price: '$109.00 USD', img: 'Rectangle 1-2.jpg' },
    { title: 'Pendants 2', price: '$110.00 USD', img: 'Rectangle 2-2.jpg' },
    { title: 'Pendants 3', price: '$111.00 USD', img: 'Rectangle 3-2.jpg' },
    { title: 'Pendants 4', price: '$112.00 USD', img: 'Rectangle 4-2.jpg' },
    { title: 'Pendants 5', price: '$113.00 USD', img: 'Rectangle 5.jpg' },
    { title: 'Pendants 6', price: '$114.00 USD', img: 'Rectangle 6.jpg' },
    { title: 'Pendants 7', price: '$115.00 USD', img: 'Rectangle 7.jpg' },
    { title: 'Pendants 8', price: '$116.00 USD', img: 'Rectangle 8.jpg' },
    { title: 'Bridal Set 1', price: '$117.00 USD', img: 'Rectangle 9.jpg' },
    { title: 'Bridal Set 2', price: '$118.00 USD', img: 'Rectangle 10.jpg' },
    { title: 'Bridal Set 3', price: '$119.00 USD', img: 'Rectangle 11.jpg' },
    { title: 'Bridal Set 4', price: '$120.00 USD', img: 'Rectangle 12.jpg' },
  ]);

  const [showSearch, setShowSearch] = useState(false)
  const [showBasket, setShowBasket] = useState(false)
  const searchInput = useRef(null)

  const rowSize = Math.ceil(data.length / 4);

  useEffect(() => {
    if (showSearch)
      searchInput.current.focus()
  }, [showSearch]);

  return (
    <div className="d-flex flex-column">
      <Container className="d-flex flex-row justify-content-between align-items-center mt-5">
        <Col>
          <h4>MY JEWELRY STORE</h4>
        </Col>
        <Col className='d-flex justify-content-end align-items-center header-buttons'>
          <div className="search mx-2">
            {
              showSearch && <div className='search-wrapper'><input ref={searchInput} type="search" placeholder="Search..."></input></div>
            }
            <button onClick={() => {
              setShowSearch(!showSearch);              
            }}>
              <img
                alt='search'
                src={group3}
              />
            </button>
          </div>
          <button onClick={() => {
            setShowBasket(!showBasket); 
          }}>
            <img
              alt='cart'
              src={group2}

            />
          </button>
          {
            showBasket &&
            <DropdownMenu right>
              <DropdownItem toggle={false}>
                <Badge style={{ marginRight:'10px' }} color='danger'>X</Badge>
                Engagement Ring 1
              </DropdownItem>
              <DropdownItem  toggle={false}>
                <Badge style={{ marginRight:'10px' }} color='danger'>X</Badge>
                Bridal Set 4
              </DropdownItem>
              <DropdownItem divider /> 
              <DropdownItem  toggle={false}>$221.00</DropdownItem> 
            </DropdownMenu>
          }
        </Col>
      </Container>
      <Container>
        {
          Array.apply(null, Array(rowSize)).map((_, rowIndex) => {
            const startIndex = rowIndex * 4;
            const endIndex = startIndex + 4;
            return <Row className="mt-5">{
              data.filter((__, index) => index >= startIndex && index < endIndex).map((item) => {
                return <Col xs="12" sm="6" md="3" className='d-flex'>
                  <Card
                    className='mx-auto'
                  >
                    <div className='zoom-in-out-box'>
                      <img
                        alt={item.title}
                        src={require('./assets/images/' + item.img)}
                      />
                    </div>
                    <CardBody className='d-flex flex-column justify-content-start'>
                      <CardTitle tag="p" >
                        {item.title}
                      </CardTitle>
                      <CardSubtitle
                        tag="p"
                      >
                        {item.price}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              })
            }
            </Row>
          })
        }
      </Container>
      <Container className='d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
        <p className='footer-header'>We Contribute to the Global Reforestation</p>
        <p className='footer-subtitle'>We plant a tree for each order together with One Tree Planted, A non-profit Organization<br></br>
          which proceeds the global reforestation act simultaneously in North America, Latin America,<br></br>
          Asia, Africa, Europe and the Pacific in 47+ Countries.</p>
      </Container>
    </div>
  );
}

export default App;
