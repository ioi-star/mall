import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    // console.log(item)

    const navigate = useNavigate();
    const showD = () => {
        navigate(`/products/${item.id}`)
    }
    
    return (
        <div className='box' onClick={showD}>
            <img src={item.img} alt={item.title}/>
            <h3>{item.title}</h3>
            <p className='new'>{item?.new == true ? "★ 신제품 ★" : ""}</p>
            <h4>{item.price}원</h4>
            <p>사이즈</p>
            <ul className='size'>
                {
                    item.size.map((size,idx)=>(
                        <li key={idx}>{size}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductCard