import React from 'react'
import styles from './MenuItem.module.css'

const MenuItem = ()=>{

const itemNames=['Pizza','Biryani','Cake','Dosa','Sandwitch']

    return <div>
<ul>
    {
        itemNames.map((x,idx)=> <a href={`./index.html#${x}`} key={idx} className={styles.MenuItem}> <li>{x}</li> </a>)
    }
</ul>
    </div>
}

export default MenuItem;

