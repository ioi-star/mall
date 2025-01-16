import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const data = async () => {
    try {
      const response = await axios.get(`https://my-json-server.typicode.com/ioi-star/mall/products?q=${id}`);
      setProduct(response.data)
    } catch (error) {
      console.error('에러')
    }
  }

  useEffect(() => {
    data()
  }, [id])

  console.log(product)

  return (
    <div className='productdtail'>
      <img src={product?.img} alt={product?.title} />
      <div className="title">
        <h3>{product?.title}</h3>
        <p className='new'>{product?.new ? "★ 신제품 ★" : ""}</p>
        <h4>{product?.price}원</h4>
        <div className='size'>
          <p>사이즈</p>
          <ul>
            {product?.size.map((size, idx) => (
              <li key={idx}>{size}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail