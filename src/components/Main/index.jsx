import React from 'react';
import avatar1 from "../../assets/images/avatar1.svg";
import avatar2 from "../../assets/images/avatar2.svg";
import avatar3 from "../../assets/images/avatar3.svg";
import avatar4 from "../../assets/images/avatar4.svg";
import story from "../../assets/images/story.svg";
import "./style.scss"

const Main = () => {
    return (
        <main className='stories'>
            <div className='story mobile'>
                <div className="story__card">
                    <div className="story__item">
                        <img src={avatar1} alt="avatar img" />
                    </div>
                    <p>Ventajas</p>
                </div>
            
                <div className="story__card">
                    <div className="story__item">
                        <img src={avatar2} alt="avatar img" />
                    </div>
                    <p>Enfoque</p>
                </div>
            
                <div className="story__card">
                    <div className="story__item">
                        <img src={avatar3} alt="avatar img" />
                    </div>
                    <p>Los cursos</p>
                </div>

                <div className="story__card">
                    <div className="story__item">
                        <img src={avatar4} alt="avatar img" />
                    </div>
                    <p>El órden</p>
                </div>
            </div>
            <div className="hero mobile">
                <h1 className="hero__title">
                Condimen tum vel amet ut amet, sodales nulla
                </h1>
                    <button className='hero__btn'>
                        <a href="#">Know the courses</a>
                    </button>
                    <p className='hero__info'>A catalog with more than 180 courses</p>
            </div>

            <div className='main__stories'>
                <div className="main__hero">
                    <h1 className="main__hero__title">Condimentum vel amet ut amet, sodales nulla</h1>
                    <button className='hero__btn'>
                        <a href="#">Know the courses</a>
                    </button>
                    <p className='hero__info'>✌️ A catalog with more than 180 courses</p>                   
                </div>
                <div className="main__story">
                        <img src={story} alt="stories" />
                </div>
            </div>
            
        </main>
    );
};

export default Main;