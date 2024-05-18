

const InfoCard = ({ card }) => {
    console.log(card);
    const{ name,description,icon,bgClass} = card;
    return (
        <div className={`card card-side  shadow-xl p-4 ${bgClass}`}>
            <figure><img src={icon} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;