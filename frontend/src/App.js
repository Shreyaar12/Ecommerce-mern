import React from 'react'
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      {/* py 3 is padding on the y axis on top and bottom  */}
      <Container>
      <HomeScreen />
      </Container>


    </main>

    </>
  )
}

export default App