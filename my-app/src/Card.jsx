
const imgLink = "https://media.licdn.com/dms/image/v2/D5603AQGmkhHhJ6AMyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720973115447?e=1734566400&v=beta&t=IQm07iCOBAA9vh-FU30Y0vQjsA8I8dsVwjtMAFVPjzE";

function Card() {
    return (
        <div className="card">
            <img className="card-image" alt="Profile Pic" src={imgLink}></img>
            <h1> Open to Work</h1>
            <h2>Subhash</h2>
            <p>I love coding and cricket</p>
        </div>
    );
}

export default Card;
