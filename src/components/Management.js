
import { motion } from "framer-motion";
import { useInView as useInViewObserver } from "react-intersection-observer";
import data from '../data/managementSection.json';

const Management = () => {
    const [contentRef, inView] = useInViewObserver({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <section className="management">
            <div className="container-management">
                <motion.div
                    className="content-management"
                    ref={contentRef}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                >
                    {data.blocks.map(data => (
                        <motion.div
                            className="item"
                            key={data.id}
                            initial={{ x: "100%" }}
                            animate={inView ? { x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <div className="left-side">
                                {/* <Image src={data.image} alt="Mockup" width={550} height={350} /> */}
                            </div>
                            <div className="right-side">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Management;
