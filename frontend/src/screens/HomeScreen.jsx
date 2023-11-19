import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const {pageNumber}= useParams();
  const { data, isLoading, error } = useGetProductsQuery({pageNumber});

  return (
    <>
      {isLoading ? (
<Loader />      ) : error ? (
        <Message variant='danger'>{error?.data.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
          //  {/* column is responsive in react bootstrap so on small screen 1 col 12 stack on medium screen 2 cols 6 stack and so on */}

           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};


export default HomeScreen;