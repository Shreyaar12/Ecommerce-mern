import {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import { Form, Button } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'
import { useGetUserDetailsQuery, useUpdateUserMutation,   } from '../../slices/usersApiSlice'
const UserEditScreen = () => {
    const {id:userId} = useParams();
    const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  
  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserDetailsQuery(userId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateUserMutation();
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          await updateProduct({
            userId,
            name,
            email,
            isAdmin
          }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
          toast.success('User updated');
          refetch();
          navigate('/admin/userlist');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      };
      

    useEffect(() => {
        if (user) {
          setName(user.name);
          setIsAdmin(user.isAdmin);
          setEmail(user.email);
          
        }
      }, [user]);
  return (
<>
<Link to='/admin/userlist' className='btn btn-light my-3'>
    Go back
</Link>
<FormContainer>
    <h1>
        Edit User
    </h1>
    {loadingUpdate && <Loader />}
    {isLoading ? (

<Loader/>
):

error?(
    <Message variant='danger'>{error}</Message>
) :
(<Form onSubmit={submitHandler}>
    <Form.Group controlId ='name'>
        <Form.Label> Name</Form.Label>
        <Form.Control
        type='name'
        placeholder='Enter name'
        value={name}
        onChange ={(e)=> setName(e.target.value)}>
            
        </Form.Control>
            </Form.Group>

          


            <Form.Group controlId ='email'>
        <Form.Label> Email Address</Form.Label>
        <Form.Control
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange ={(e)=> setEmail(e.target.value)}>
            
        </Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>


            <Button
            type='submit'
            variant='primary'
            style={{marginTop: '1rem'}}>
                    Update
            </Button>
</Form>
)}
</FormContainer>
</>  )
}

export default UserEditScreen