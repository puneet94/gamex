import CategoryComponent from "./components/category";
import TitleSearchComponent from "./components/titleSearch";
import PlatformComponent from "./components/platform";
import SortByComponent from "./components/sortby";
import GamesListComponent from "./components/games/GamesListComponent";

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