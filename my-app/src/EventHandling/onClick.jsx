

function EventHandler() {
    function handleClick({message="THe button has clicked"}) {
        console.log(message);
    }
    return (
        <div>
            <button onClick={()=>handleClick({message:"new one"})}>
                click Here
            </button>
        </div>
    );
}
export default EventHandler;