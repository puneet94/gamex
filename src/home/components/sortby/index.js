
import { useSelector, useDispatch } from "react-redux";

import SortByView from "./SortByView";

const SortByContainer = () => {
    const sort_by = useSelector(state => state.filters.sort_by);
    const sortByList = [{ label: "--None--", name: "" }, { label: "Release Date", name: "release-date" },
    { label: "Alphabetical", name: "alphabetical" }, {
        label: "Relevance", name: "relevance"
    }];
    const dispatch = useDispatch();
    return (
        <SortByView sort_by={sort_by} sortByList={sortByList} sortByChange={(value)=> dispatch({ type: "UPDATE_SORT_BY", payload: { sort_by: value } })}/>
    );
}

export default SortByContainer;


