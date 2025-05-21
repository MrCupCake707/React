import React, { useEffect } from 'react';
import { Product } from './components/Product';
import { products } from './data/products';

function App() {
  useEffect(()=> {},[])
  return(
    <div className='container'>
      {products.map(product => <Product product={product} key={product.id}/>)}
    </div>
  )
}
export default App