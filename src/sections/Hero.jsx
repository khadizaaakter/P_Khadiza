
// import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GlowCard from "../components/GlowCard";
const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    })

    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.png' alt='background' />
            </div>

            <div className='hero-layout'>
                {/*Left hero content*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h2>Transforming
                                <span className="slide">
                                    <span className="wrapper">
                                        {
                                            words.map((word) => (
                                                <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                    <img
                                                        src={word.imgPath}
                                                        alt={word.text}
                                                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1  rounded-full bg-white-50" />
                                                    <span>
                                                        {word.text}
                                                    </span>
                                                </span>
                                            ))
                                        }
                                    </span>
                                </span>
                            </h2>
                            <h1>into results</h1>
                            <h1>that deliver value</h1>
                        </div>
                        <p className="text-white-50 md:text-lg relative z-10 pointer-events-none">
                            Hi, I'm Khadiza — a Laravel
                            developer who enjoys building websites.
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="Download CV"
                        />
                    </div>
                    {/* find me */}
                    <div className="relative z-10 mt-6 text-start mb-10">
                        <div className="grid grid-cols-3 gap-2 w-full max-w-[220px] sm:max-w-[240px]">
                            <a
                                href="https://github.com/khadizaaakter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-purple-500/50"
                            >
                                <img
                                    src="/images/logos/github (1).png"
                                    alt="GitHub"
                                    className="w-6 h-6"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/yourusername/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-purple-500/50"
                            >
                                <img
                                    src="/images/logos/linkedin.png"
                                    alt="LinkedIn"
                                    className="w-6 h-6"
                                />
                            </a>

                            <a
                                href="https://www.facebook.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-purple-500/50"
                            >
                                <img
                                    src="/images/logos/git.png"
                                    alt="Facebook"
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>
                </header>
                {/*Right:3D model*/}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            {/* <AnimatedCounter /> */}


        </section>
    )
}

export default Hero