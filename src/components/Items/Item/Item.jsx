import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../../components/ItemCount';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const Item = (props) => {

    const navigate = useNavigate()
    const onAdd = (quantityToAdd) => {
        if (quantityToAdd <= 0){
            alert(`No hay productos para agregar`);
        }else{
            alert(`Agregaste ${quantityToAdd} unidades al carrito`);
            navigate("/cart")
        }
    }

    return (
        <div className="col-lg-4 pb-5">
            <div className="product">
                <Link to={`/category/${props.category}`}><span className="category">{props.category}</span></Link>
                <img src={props.img} className="img-fluid" alt="Producto"/>
                <h3 className="mb-3">{props.name}</h3>
                <p className="price mb-3">S/ {props.price}</p>
                <p>{props.description}</p>
                <ItemCount initial={0} stock={props.stock} onAdd={onAdd} />
                <Link to={`/item/${props.id}`}><Button variant="info">Ver detalle</Button></Link>
            </div>
        </div>
    )
}

export default Item