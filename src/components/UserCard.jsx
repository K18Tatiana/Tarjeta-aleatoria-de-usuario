
const UserCard = ( {userData, randomColor} ) => {
    const { name, picture, email, phone, location } = userData
    document.body.style.backgroundColor = randomColor
    return (
        <div className="user-card">
            <h1 style={{color: randomColor}}>{name.title} {name.first} {name.last}</h1>
            <img src={picture.large} alt=""/>
            <ul style={{color: randomColor}}>
                <li><i className="fa-solid fa-envelope"></i>{email}</li>
                <li><i className="fa-solid fa-phone"></i>{phone}</li>
                <li><i className="fa-solid fa-location-dot"></i>{location.country} {location.state} {location.city}</li>
            </ul>
        </div>
    )
}

export default UserCard