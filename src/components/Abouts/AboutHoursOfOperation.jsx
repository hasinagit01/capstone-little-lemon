import React from 'react';
import { RiTimeFill } from 'react-icons/ri';

const AboutHoursOfOperation = () => {
    return (
        <section className='section'>
            <div className='container grid-container'>
                <h2>Hours of Operation</h2>
                <div className='aboutTiming'>
                    <div>
                        <h3>Sunday - Thursday</h3>
                        <p className='about-us-timing'>
                            <span><RiTimeFill /></span>
                            <span className='about-timing'>
                                11:00 am - 09:00 pm
                            </span>
                        </p>
                    </div>
                    <div>
                        <h3>Friday - Saturday</h3>
                        <p className='about-us-timing'>
                            <span><RiTimeFill /></span>
                            <span className='about-timing'>
                                11:00 am - 10:00 pm
                            </span>
                        </p>
                    </div>
                </div>
                <h3>Closed on Major Holidays</h3>
            </div>
        </section>
    )
}

export default AboutHoursOfOperation