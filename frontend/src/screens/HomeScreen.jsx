import { Row, Col } from "react-bootstrap";
import products from "../products";
import React from 'react'
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
    <h1> Latest Product</h1>
 <Row>
    {products.map((product)=> (
        <Col key={product} sm={12} md={6} lg={4} xl={3}>
{/* column is responsive in react bootstrap so on small screen 1 col 12 stack on medium screen 2 cols 6 stack and so on */}
<Product product={product} />
        </Col>
    )
    
    
    
    
    )}
    
    
    </Row>    
    
    
    </>
  );
};

export default HomeScreen;