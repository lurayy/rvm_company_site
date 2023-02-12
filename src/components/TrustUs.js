import Image from 'next/image';
import data from '../data/trustUsSection.json';
import trustus1 from '../public/trustus1.png';
import trustus2 from '../public/trustus2.png';

const TrustUs = () => {
    return (
        <section className="trustus">
            <div className="header-trustus">
                <h2>{data.title}</h2>
            </div>

            <div className="container-trustus">
                <div className="content-trustus">

                    <Image src={trustus1} alt="Trust Us" width={320} height={400} />
                    <h3>{data.number}</h3>
                    <Image src={trustus2} alt="Trust Us" width={320} height={400} />

                </div>
            </div>

        </section>
    )
};

export default TrustUs;