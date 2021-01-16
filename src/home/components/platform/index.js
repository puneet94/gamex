import { useSelector, useDispatch } from "react-redux";
import PlatformView from "./PlatformView";

const PlatformComponent = () => {
    const dispatch = useDispatch();
    const platform = useSelector(state => state.filters.platform);

    const platformList = [{ label: "All", name: "" }, { label: "PC", name: "pc" },
    { label: "Browser", name: "browser" }];
    
    return (
        <PlatformView 
        platformList={platformList}
        platform={platform}
        onPlatformChange = {(value)=>dispatch({ type: "UPDATE_PLATFORM", payload: { platform: value } })}
        />
    );
}


export default PlatformComponent;