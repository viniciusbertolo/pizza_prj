import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Impedit nulla neque officiis? Optio assumenda, repellat distinctio modi 
            maiores voluptatum sapiente possimus impedit nam excepturi ab corporis, 
            voluptatibus voluptatem blanditiis minus?
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza)=>(
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>

    </div>
  )
}

export default PizzaList