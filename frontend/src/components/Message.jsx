import { Alert } from "react-bootstrap";

const Message = ({variant, children}) => {
    // variant is if its danger then you want it to be red or if its okay then green
    
    //children is whatever you wrap it in, like if something says hello and you wrap that component in this then message will spit out hello
    return <Alert variant ={variant} > {children} </Alert>

};

Message.defaultProps={
    variant:'info',
};
export default Message