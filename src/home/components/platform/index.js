
/*Container component for platform view */

import { useSelector, useDispatch } from "react-redux";
import { updatePlatform } from "../../actions/filters";
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
        updatePlatform = {(platform)=>dispatch(updatePlatform(platform))}
        />
    );
}


export default PlatformComponent;