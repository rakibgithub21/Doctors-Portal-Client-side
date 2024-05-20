import { useState } from 'react';
import chair from '../../../../assets/images/chair.png'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns'


const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    console.log(selectedDate);
    return (
        <div className="container px-6 py-16 mx-auto">
            <div  className="items-center lg:flex">
                <div className="w-full lg:w-1/2 p-8 ">
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                    <p className='ml-5 text-lg'>You Have Selected Date: <span className='font-bold'>{format(selectedDate, 'PP')}</span></p>
                </div>
                <div className="flex items-center justify-center p-8 w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src={chair}  />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;