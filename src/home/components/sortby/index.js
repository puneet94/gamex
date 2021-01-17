
/*Container component for sortby view */

import { useSelector, useDispatch } from "react-redux";
import { updateSortBy } from "../../actions/filters";

import SortByView from "./SortByView";

const SortByContainer = () => {
    const sort_by = useSelector(state => state.filters.sort_by);
    const sortByList = [{ label: "--None--", name: "" }, { label: "Release Date", name: "release-date" },
    { label: "Alphabetical", name: "alphabetical" }, {
        label: "Relevance", name: "relevance"
    }];
    const dispatch = useDispatch();
    return (
        <SortByView sort_by={sort_by} sortByList={sortByList} 
        updateSortBy={(sort_by)=> dispatch(updateSortBy(sort_by))}/>
    );
}

export default SortByContainer;


