/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const AppointmentOption = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment
    
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body text-center space-y-1">
                <h2 className="  text-primary text-2xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day' }</p>
                <p>{slots.length} {slots.length > 1 ?"spaces" : "space" } available</p>
                <div className="card-actions justify-center">
                    {/* <button className="btn btn-primary text-white" onClick={() => document.getElementById('booking_modal').showModal()}>Book Appointment</button> */}
                    <label onClick={() => setTreatment(appointment)} htmlFor="booking_modal" className="btn">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;