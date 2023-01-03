import React, { useState } from 'react'
import { Card, Button} from 'react-bootstrap';
import { phonesData } from "./Product.data"

const Product = () => {
    const [items, setItems] = useState(phonesData);

    const decrement = (id)=>
    {
        const newItems = items.map((item)=>
        item.id === id && item.qty>1 ?{...item,qty:item.qty-1}:item
        );
        setItems(newItems)
    };
    const increment = (id)=>
    {
        const newItems = items.map((item)=>
        item.id === id ?{...item,qty:item.qty+1}:item
        );
        setItems(newItems)
    };
  return (
    <div>
        <h1>Products</h1> 
        {items.map((item)=>(
            <div className='d-inline-flex' key={item.id}>
            <Card 
            className='shadow p-3 m-2 bg-body rounded' 
            style={{ width: '15rem',height: "30rem" }}>
            <Card.Img  
             style={{ height: "15rem" }}
            className='p-2' 
            variant="top" src={require(`./assets/${item.image}.jpeg`)} />
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <Card.Text>
                {item.desc}
              </Card.Text>
              <h4>Price ₹:{item.price}</h4>
              <div>
                  <p>Qty:
                  <Button onClick={()=>decrement(item.id)}
                  className='m-1'>-</Button>
                  {item.qty}
                  <Button onClick={()=>increment(item.id)}
                  className='m-1'>+</Button>
                  </p>
              </div>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
          </div>
        ))}
    
  
    </div>
  )
}

export default Product