/* eslint-disable react/prop-types */


const BookingModal = ({treatment}) => {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{treatment?.name }</h3>
                    <form className="space-y-3">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
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