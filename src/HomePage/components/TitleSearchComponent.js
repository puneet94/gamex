
import { useSelector, useDispatch } from "react-redux";
const TitleSearchComponent = () => {
    const dispatch = useDispatch();
    const title = useSelector(state=>state.filters.title)
    return (
        <div>
            <input type="text" value={title} onChange={(e) => {

                dispatch({ type: "UPDATE_TITLE", payload: { title: e.target.value } })

            }}
            />
        </div>
    )
}



export default TitleSearchComponent;




