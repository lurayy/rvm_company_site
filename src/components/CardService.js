import Image from 'next/image';

const CardService = ({ id, icon, title, description }) => {
    return (
        <div className="card" id={id}>
            <Image className='image' src={icon} alt="Service-icon" />

            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div >
    )
}

export default CardService;