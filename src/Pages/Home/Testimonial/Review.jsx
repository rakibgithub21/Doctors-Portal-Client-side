import React from 'react';

const Review = ({ rev }) => {
    const { name, img, reviews: userReview, location } = rev
    
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
               
                <p>{userReview}</p>
                <div className="flex items-center gap-5">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;