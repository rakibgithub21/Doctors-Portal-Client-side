import chair from '../../../../assets/images/chair.png'
import background from '../../../../assets/images/bg.png'

const Banner = () => {
    return (


        <div className="container px-6 py-16 mx-auto">
            <div style={{background:`url(${background} )`,backgroundSize:'cover'}} className="items-center lg:flex">
                <div className="w-full lg:w-1/2 p-8">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Your New Smile Starts Here</h1>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get Started</button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-8 w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src={chair} />
                </div>
            </div>
        </div>
    );
};

export default Banner;