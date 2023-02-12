import { motion } from "framer-motion";
import { useInView as useInViewObserver } from "react-intersection-observer";

import Image from 'next/image';
import data from "../data/heroSection.json";
import hero from '../public/hero.svg';

const Hero = () => {
    const [contentRef, inView] = useInViewObserver({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <section className="hero-section">
            <div className="container-hero">
                <motion.div
                    className="content-hero"
                    initial={{ x: "100%" }}
                    animate={{ x: 0, opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                >
                    <div className="left-side">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                    <motion.div
                        className="right-side"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image src={hero} alt='hero' fill />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}


export default Hero;