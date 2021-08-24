import React,{Component} from 'react'
import './ItemBox.css';
import ratthi from '../components/images/ratthi.jpg'

function ItemBox(props) {
    return (
        <div className="box" align="center">
            <h2>{props.title}</h2>
            <img className="image" src={ratthi} alt="" />
            <h2>{props.price}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Fuga ad laudantium facere reprehenderit cum? Repudiandae,
                  molestias dolorum! Facere iusto necessitatibus.</p>
        </div>
    );
}

export default ItemBox
