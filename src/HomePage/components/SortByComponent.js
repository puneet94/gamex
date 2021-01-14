
import { useSelector, useDispatch } from "react-redux";


const SortByComponent = () => {
    const sort_by = useSelector(state => state.filters.sort_by);
    const sortyByList = [{ label: "--None--", name: "" }, { label: "Release Date", name: "release-date" },
    { label: "Alphabetical", name: "alphabetical" }, {
        label: "Relevance", name: "relevance"
    }];
    const dispatch = useDispatch();
    return (
        <div>
            <select
                value={sort_by}
                onChange={e => {

                    dispatch({ type: "UPDATE_SORT_BY", payload: { sort_by: e.target.value } })

                }}
                className="" >
                {
                    sortyByList.map((sortObject) => <option value={sortObject.name} key={sortObject.name}>{sortObject.label}</option>)
                }
            </select >
        </div>
    )
}

export default SortByComponent;


