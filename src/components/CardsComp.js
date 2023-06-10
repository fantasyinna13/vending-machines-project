import React from 'react';
import coffeeBag from '../assets/coffee-bag2.png';
import { Container } from 'react-bootstrap';
import tools from '../assets/tools.png';
import coffeeBeans from '../assets/coffee-beans2.png';

 function CardsComp() {
  return (
    <section className='someSection'>
   <div class="someCard">
    <div className='imageDiv'>
    <img src={coffeeBag}/>
    </div>
    <div className='headingDiv'>
        <h2>Ново зареждане</h2>
    </div>
   </div>
   <div class="someCard">
    <div className='imageDiv'>
    <img src={tools}/>
    </div>
    <div className='headingDiv'>
        <h2>Ремонт</h2>
    </div>
    </div>
    <div class="someCard">
    <div className='imageDiv'>
    <img src={coffeeBeans}/>
    </div>
    <div className='headingDiv'>
        <h2>Важна информация</h2>
    </div>
    </div>

        </section>
  )
}
export default CardsComp;
