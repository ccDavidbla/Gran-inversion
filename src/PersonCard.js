const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    return (
        <div className="person-card">
            <h2>{firstName} {lastName}</h2>
            <p>Edad: {age}</p>
            <p>Color de cabello: {hairColor}</p>
        </div>
    );
};

export default PersonCard;
