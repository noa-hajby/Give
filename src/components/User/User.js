const User = ({ volunteer }) => {
    console.log("volunteer:",volunteer)
    return (

        <tr>
            <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
            <td>{volunteer.name}</td>
            <td>{volunteer.numDayOfWeek}</td>
            <td>{volunteer.phoneConnect}</td>
            <td>{volunteer.dayOfWeekFevorite}</td>
        </tr>
    )
};

export default User;
