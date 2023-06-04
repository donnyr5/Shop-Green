import AddItem from "../components/AddItem";

const PostItem = (props) => {
    return (
        <div
                style={{
                    display: 'flex',
                    justifyContent: 'Center',
                    alignItems: 'Left',
                }}
            >
                <AddItem email={props.email}/>
            </div>
    )
}

export default PostItem;