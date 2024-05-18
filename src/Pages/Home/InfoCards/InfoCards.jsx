import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardDate = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'We are open from 9:00 AM to 5:00 PM every day.',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Find us at multiple locations across the city.',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Reach out to us at any time for assistance.',
            icon: phone,
            bgClass: 'bg-primary'
        }

    ]
    return (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardDate.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;