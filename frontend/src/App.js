import React from 'react'
import Header from './components/Header';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      {/* py 3 is padding on the y axis on top and bottom  */}
      <Container>
      <h1>Welcome to my ecomm</h1>

      </Container>


    </main>

    </>
  )
}

export default App