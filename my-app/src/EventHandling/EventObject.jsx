
function EventObject() {
    const handleClick = (event) => {
       // email = event.target.value;
        console.log(event.type);
        console.log(event.target.value);
    }
    var email="put email"
    return (
        <input type="text" placeholder="Type somehting"
            onMouseEnter={handleClick}
             />
    );
}

export default EventObject;