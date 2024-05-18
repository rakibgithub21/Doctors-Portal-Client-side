import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatments help strengthen teeth and prevent cavities by making the enamel more resistant to acid attacks from plaque bacteria and sugars in the mouth.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Cavity fillings restore damaged teeth by filling the holes caused by tooth decay, preventing further decay and restoring the tooth’s normal function and shape.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening treatments enhance the brightness of your smile by removing stains and discoloration from the tooth surface, providing a more attractive and confident smile.',
            img: whitening
        }

    ]
    return (
        <div className="my-10">
            <div className="text-center space-y-2">
                <h3 className="text-2xl text-primary font-bold">Our Services</h3>
                <h2 className="text-4xl ">Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;