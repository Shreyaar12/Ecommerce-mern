import{ Link, useNavigate} from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button , Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {FaTrash } from 'react-icons/fa'
import Message from '../components/Message'

const CartScreen = () => {
const navigate = useNavigate();
const dispatch =useDispatch();
const cart= useSelector((state)=> state.cart);
// isse redux se state aa jaegi
const {cartItems}= cart;
    return (
        <div> 
<Row>
    <Col md={8}>
        <h1 style={{marginBottom: '20px'}}>
            Shopping Cart
        </h1>
    {cartItems.length===0? (
        <Message>
            Your cart is empty <Link to="/"> Go back</Link>
        </Message>
    )
:
(
    <ListGroup variant ='flush'>
     {cartItems.map((item)=>(
        <ListGroup.Item key={item._id}>
           <Row>
            <Col md={2}> 

<Image src={item.image} alt={item.name} fluid rounded/>


            </Col>
            <Col md={3}> 
            <Link to ={`/product/${item._id}`}>{item.name}</Link>
</Col>
<Col md={2}> ${item.price}</Col>
<Col md={2}>

<Form.Control as ='select' value={item.qty} 
                        onChange ={(e)=> {}}
                      >
                         {[...Array(item.countInStock).keys()].map((x)=>(
<option key={x+1} value={x+1}>
    {x+1}
</option>

                         ))}
                        </Form.Control>
</Col>

<Col md={2}>
    <Button type="button" variant ="light">
        <FaTrash/>
    </Button>
</Col>
            </Row> 
        </ListGroup.Item>
     )
     )}

    </ListGroup>
)}
    </Col>
    </Row>



        </div>
    )
}
export default CartScreen;