import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";


// eslint-disable-next-line react/prop-types
const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className="my-10 ">

            <p className="text-center mb-10 text-secondary font-bold">Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    appointmentOptions.map(appointment => <AppointmentOption
                        key={appointment._id}
                        appointment={appointment}
                    >
                        
                    </AppointmentOption>)
}
            </div>
        </section>
    );
};

export default AvailableAppointments;