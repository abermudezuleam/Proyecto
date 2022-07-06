import React from 'react';
import './Home.css';
import NavigationBar from '../../commons/NavigationBar';

const SocialMedia = ({ icon }) => {
    return (
        <div>
            <img src={icon} />
        </div>
    )
};

const Home = () => {

    let ac = localStorage.getItem('account')
    let account = JSON.parse(ac)

    return (
        <>
            <div className='HomeContainer'>
                <div className='HomeContent'>
                    <NavigationBar text='Menu' />
                    <div className='HomeBody'>
                        <h3 className='HomeGreeting'> Hola! </h3>
                        <label className='HomeLabel'> 
                            Todo esta bien, {account.firstName}? 
                        </label>
                        <label className='HomeLabel'> 
                            Espero que les guste mi pequeña aplicación 
                        </label>
                        <label className='HomeLabel'> 
                            Recuerda. Si cierra sesión, su cuenta
                            desaparecerá y tendrás que volver a crearlo.
                        </label>
                        <div>
                            <SocialMedia />
                        </div>
                    </div>
                    <div className='Home' />
                </div>
            </div>
        </>
    )
};

export default Home;