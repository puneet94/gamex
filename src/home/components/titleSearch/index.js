
import { useSelector, useDispatch } from "react-redux";
import TitleSearchView from "./TitleSearchView";
const TitleSearchComponent = () => {
    const dispatch = useDispatch();
    const title = useSelector(state=>state.filters.title);
    return (
        <TitleSearchView 
        title={title}
        titleUpdate={(title)=>{
            dispatch({ type: "UPDATE_TITLE", payload: { title } 
        })}}/>
    )
}

export default TitleSearchComponent;




