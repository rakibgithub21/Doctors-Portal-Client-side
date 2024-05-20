/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const AppointmentOption = ({ appointment }) => {
    const { name, slots } = appointment
    
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body text-center space-y-1">
                <h2 className="  text-primary text-2xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day' }</p>
                <p>{slots.length} {slots.length > 1 ?"spaces" : "space" } available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;