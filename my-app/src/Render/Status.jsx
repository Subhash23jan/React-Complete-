

function UserStatus({ isOnline }) {

    const online=<h1>User is online</h1>
    
    return (
        <div>
            {
                (() => {
                    if (isOnline) return online; 
                })()
            }
       </div>
    );
    
}
export default UserStatus;