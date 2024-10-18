
//import styles from './Button.module.css'

// function Button() {
//     return (
//         <button className={styles.button}>
//             click here
//         </button>
//     );
// }
function Button() {
    const styles = {
        color: "blue",
        borderRadius: "10px",
        border:"1px solid red",
    }

    return (
        <button style={styles}>
            click here
        </button>
    );
}

export default Button;