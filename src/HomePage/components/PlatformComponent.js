import { useSelector, useDispatch } from "react-redux";

const PlatformComponent = () => {
    const dispatch = useDispatch();
    const platform = useSelector(state => state.filters.platform);
    const platformList = [{ label: "All", name: "" }, { label: "PC", name: "pc" },
    { label: "Browser", name: "browser" }];
    return (<div>
        <select
            value={platform}
            onChange={e => {

                dispatch({ type: "UPDATE_PLATFORM", payload: { platform: e.target.value } })
            }}
            className="" >
            {
                platformList.map((platformObject) => <option value={platformObject.name} key={platformObject.name}>{platformObject.label}</option>)
            }
        </select >
    </div>);
}


export default PlatformComponent;