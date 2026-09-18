function UserCard (props) {
    return (
        <div classname = "card">
            <h3>{props.name}</h3>
            <p>{props.jabatan}</p>
        </div>
    )
}

export default UserCard;