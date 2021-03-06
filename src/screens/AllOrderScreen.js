// import { useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { Form, Button, Row, Col, Table } from "react-bootstrap";
// import {LinkContainer} from "react-router-bootstrap"
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import { listMyOrders } from "../actions/orderActions";

// const AllOrderScreen = ({ history }) => {
//     const dispatch = useDispatch();

//     const userDetails = useSelector((state) => state.userDetails);
//     const { loading, error, user } = userDetails;

//     const userLogin = useSelector((state) => state.userLogin);
//     const { userInfo } = userLogin;

//     const orderListMy = useSelector((state) => state.orderListMy);
//     const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

//     useEffect(() => {
//         if (!userInfo) {
//           history.push("/login");
//         } else {
//           if (!user.name) {
//             dispatch(listMyOrders());
//           } 
//         }
//       }, [userInfo]);

//     return <Row>
//         <Col md={12}>
//         <h2 style={{marginTop: '30px', display: 'block'}}>My Orders</h2>
//         {loadingOrders ? (
//             <Loader />
//         ) : errorOrders ? (
//             <Message variat="danger">{errorOrders}</Message>
//         ) : (
//             <Table striped bordered hover responsive className="table-sm">
//             <thead>
//                 <tr>
//                 <th>ID</th>
//                 <th>DATE</th>
//                 <th>TOTAL</th>
//                 <th>PAID</th>
//                 <th>DELIVERED</th>
//                 <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {orders.map((order) => (
//                 <tr key={order._id}>
//                     <td>{order._id}</td>
//                     <td>{order.createdAt}</td>
//                     <td>{order.totalPrice}</td>
//                     <td>
//                     {order.isPaid ? (
//                         <i class="fas fa-check"  style={{ color:'green' }}></i>
//                     ) : (
//                         <i className="fas fa-times" style={{ color:'red' }}></i>
//                     )}
//                     </td>

//                     <td>
//                     {order.isDelivered ? (
//                         order.deliveredAt
//                     ) : (
//                         <i className="fas fa-times" style={{ color: 'red' }}></i>
//                     )}
//                     </td>
//                     <td>
//                     <LinkContainer to={`/order/${order._id}`}>
//                         < Button variant='light'>Details</Button>
//                     </LinkContainer>
//                     </td>
//                 </tr>
//                 ))}
//             </tbody>
//             </Table>
//         )}
//         </Col>
//     </Row>
// }

// export default AllOrderScreen