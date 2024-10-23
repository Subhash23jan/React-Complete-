import PropTypes from "prop-types";

function Student(args) {
    console.log(args);
    return (
        <div className="card">
            <h2>Name : {args.name}</h2>
            <p>
                Age :{args.age}
            </p>
            <p>
                IsStudent : {args.isStudent==="false"?"no":"yes"}
            </p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age : PropTypes.number
}

Student.defaultProps = {
    age:'18'
}

export default Student;