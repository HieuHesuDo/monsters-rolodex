import React from 'react';
import './card-list.style.css'
import {Card} from '../card/card.component'


export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => ( //Cardlist lấy monsters ra từ props
            <Card key={monster.id} monster={monster}/>  //Truyền từng monsters vào Card component
        ))} 
    </div>
)

