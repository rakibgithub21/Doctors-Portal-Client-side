/* eslint-disable react/prop-types */

import { format } from "date-fns";


const BookingModal = ({ treatment, selectedDate }) => {
    
    const { namem,slots } = treatment; //treatment is appointment options just different name

    const date = format(selectedDate, 'PP')

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        console.log(name,email,slot,phone,date);

    }
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg my-4">{name }</h3>
                    <form onSubmit={handleBooking} className="space-y-3">
                        <input type="text" readOnly value={date} className="input input-bordered w-full " />
                        <select name="slot" className="select select-bordered w-full ">
                            
                            {
                                slots.map(slot => <option
                                    value={slot}
                                    key={slot}
                                >{slot}</option>)
                            }
                            {/* <option>Han Solo</option>
                            <option>Greedo</option> */}
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full " />
                        <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered w-full " />
                        <input type="submit" className="btn w-full btn-secondary text-white" value="Submit" />
                   </form>
                    <div className="modal-action">
                        <label htmlFor="booking_modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;