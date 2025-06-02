import React from 'react'
import TitleHeader from '../components/TitleHeader'

import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { techStackImgs } from "../constants";

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#skills",
                start: "top center",
            },
        });
    });

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-11 px-5 mb-10 mt-10 md:mt-9">
                <TitleHeader
                    title="Technology Stack Behind My Work"
                    sub="Preferred Tools & Technologies"
                />
                <div className="tech-grid">
                {techStackImgs.map((techStackIcon, index) => (
                        <div key={index} className="card-border tech-card 
                        w-36 h-32 overflow-hidden group rounded-lg ">
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={techStackIcon.imgPath} alt="" />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{techStackIcon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default TechStack