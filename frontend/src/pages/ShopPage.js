import { useEffect } from 'react'
import Product from '../components/Product'
// import products from '../products'
import { Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/prouductActions";
import Message from '../components/Message'
import Loader from '../components/Loader' 

const ShopPage = () => {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList)
  
    //destructure data we want from the state (loading boolean, error, and products)
    const { loading, error, products } = productList
  
    //useEffect react hook, make GET request after HomePage component is rendered
    useEffect(() => {
        dispatch(listProducts())
      }, [dispatch]
    )


    return (
        <div>
            <h1 style={{backgroundColor: '#e63946', marginBottom: '30px'}} className='py-3'>RED WINE</h1>
            {loading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{error}</Message>
        ) : (
            <Row className="pl-3">
            {/* map all the product arrays contained in the products.js file and return in columns  */}
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                {/* pass in the products.map to Product component */}
                <Product products={product} />
              </Col>
            ))}
            ;
          </Row>
        )}
          <h1 style={{backgroundColor: '#f2cc8f',  marginBottom: '30px', marginTop: '30px'}} className='py-3'>WHITE WINE</h1>

          {loading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{error}</Message>
        ) : (
                <Row className='pl-4'>
                {/* map all the product arrays contained in the products.js file and return in columns  */}
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        {/* pass in the products.map to Product component */}
                        <Product products={product}/>
                    </Col>
                ))};
            </Row>
        )}

          <h1 style={{backgroundColor: '#e56b6f'}} className='py-3'> ROSE </h1>
          {loading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{error}</Message>
        ) : (
                <Row className='pl-4'>
                {/* map all the product arrays contained in the products.js file and return in columns  */}
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        {/* pass in the products.map to Product component */}
                        <Product products={product}/>
                    </Col>
                ))};
            </Row>
        )}

        </div>
    )
}

export default ShopPage
