import data from "../data/servicesSection.jsx";
import CardService from './CardService';

const Services = () => {
    return (
        <section className="services" >
            <div className="header-services">
                <h2>{data.title}</h2>
            </div>
            <div className="container-services">
                <div className="grid-services">
                    {data.blocks.map(service =>
                        <CardService
                            key={service.id}
                            id={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Services;