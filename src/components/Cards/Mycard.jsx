import React from 'react'
import styles from './Card.module.css'

const Mycard = ({foodItems})=>{
   
    console.log(foodItems)
    return (
    <div className={styles.cardContainer} >
{
    foodItems.map(x=> 
    <div className={styles.card} id={x.name} key={x.name}>
    <img src={x.imgLink} alt ={x.name} className={styles.imge}/>
    <h3 className={styles.itmeName}>{x.name} </h3>


    </div>
    )
}
    </div>);
}
export default Mycard;
