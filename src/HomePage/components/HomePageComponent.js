import "./HomePage.css";
import CategoryComponent from "./CategoryComponent";
import TitleSearchComponent from "./TitleSearchComponent";
import PlatformComponent from "./PlatformComponent";
import SortByComponent from "./SortByComponent";
import GamesListComponent from "./GamesListComponent";

function HomePageComponent() {
    
    return (
        <div>
            <CategoryComponent />
            <TitleSearchComponent />
            <SortByComponent />
            <PlatformComponent />
            <GamesListComponent/>
        </div>
    )
}


export default HomePageComponent;