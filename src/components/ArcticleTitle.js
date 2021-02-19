
function ActicleTitle(props) {
    if(props.title) {
        return (
            <h3 className="redered_title">{props.title}</h3>
        )
    }
    return null
}




export default ActicleTitle;