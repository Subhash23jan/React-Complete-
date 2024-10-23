

function Demo(props) {
    console.log(props);
    return (
        <ul>
            {
                props.items.map((item, index) => {
                    return <li>
                        { index }  Name : {item}
                    </li>
                })
            }
        </ul>
    );
}

export default Demo;