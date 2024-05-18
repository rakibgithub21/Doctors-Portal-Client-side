import qoute from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Henry',
            location: 'California',
            reviews: 'Excellent service and friendly staff! My teeth feel so much healthier after my visit.',
            img: people1,
        },
        {
            _id: 2,
            name: 'Emily Clark',
            location: 'California',
            reviews: 'The dentist was very gentle and explained everything clearly. I felt at ease throughout the procedure.',
            img: people2,
        },
        {
            _id: 3,
            name: 'James Anderson',
            location: 'California',
            reviews: 'Great experience! The office is clean and modern, and the staff is very professional.',
            img: people3,
        }

    ]
    return (
        <section>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl text-primary font-medium'>Testimonial</h4>
                    <h2 className="text-2xl">What Our Patient Says</h2>
                    
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={qoute} alt="" />
                </figure>
            </div>
            <div className='grid gap-10 my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(rev => <Review
                        key={rev._id}
                        rev={rev}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;