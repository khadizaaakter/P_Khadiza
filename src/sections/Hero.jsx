
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
                            text="See my Work"
                        />
                    </div>
                    {/* find me */}
                    <div className="mt-4 px-5 md:px-2 text-start mb-15">
                {/* <h3 className="text-white-50 font-semibold mb-6 uppercase tracking-widest">
                    Find Me
                </h3> */}

                <div className="grid grid-cols-5 gap-1 max-w-sm">
                    <a
                        href="https://github.com/khadizaaakter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md w-14 h-14 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src="/images/logos/git.png"
                            alt="GitHub"
                            className="w-8 h-8"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/yourusername/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md w-14 h-14 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src="/images/logos/linkedin.png"
                            alt="LinkedIn"
                            className="w-8 h-8"
                        />
                    </a>

                    <a
                        href="https://www.facebook.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md w-14 h-14 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src="/images/logos/github (1).png"
                            alt="Facebook"
                            className="w-8 h-8"
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
            <AnimatedCounter />
            {/* find me */}

        </section>
    )
}

export default Hero