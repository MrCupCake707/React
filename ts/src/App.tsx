import { useCallback, useContext, useState } from 'react'
import { CreateProduct } from './components/CreateProduct'
import { ErrorMessege } from './components/ErrorMessege'
import { Loader } from './components/Loader'
import { Modal } from './components/Modal'
import { Product } from './components/Product'
import { useProduct } from './hooks/products'
import { IProduct } from './models'
import { ModalContext } from './context/ModalContext'


function App() 
{
  const {loading, error, products, addProduct}= useProduct()
  const {modal,open, close} =useContext(ModalContext)

  const createHandler = (product: IProduct)=>{
    close()
    addProduct(product)
  }
  return(
    <div className='container'>
      {loading && <Loader/>}
      {error && <ErrorMessege error={error}/>}
      {products.map(product => <Product product={product} key={product.id}/>)}
      
      {modal && <Modal title='Create new product' onClose={close}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
      <button 
      className='fixed button-5 righe-5 rouded-full bg-red-500 text-white text-2xl px-4 py-2'
      onClick={open}
      >+</button>
    </div>
  )
}
export default App