import Univ from '../Image/University.gif'
import High from '../Image/High_School.png'
import Orange from '../Image/Orange_temp.jpg'
import {useState, useEffect} from 'react'

const Skills = () => {
    const [index, setIndex] = useState(0);
    const cards = [
        {id: "1", image: Orange},
        {id: "2", image: Univ},
        {id: "3", image: High}
    ];

    const mod = (n, m) => {
        let result = n%m;
        return result >=0 ? result : result + m;
    }

    return(
        <section className='skills' id='Skills'>
            <div className='slide'>
                {cards.map((item, i) => {
                    const left = mod(index - 1, cards.length);
                    const right = mod(index + 1, cards.length);

                    let className = "";

                    if(i === index){
                        className = "card card--front";
                    }else if(i === right){
                        className = "card card--right";
                    }else if(i === left){
                        className = "card card--left";
                    }else{
                        className = "card"
                    }
                    return <img key={item.id} src={item.image} className={className} alt="No Image"/>;
                })}
            </div>
        </section>
    )
}

export default Skills;