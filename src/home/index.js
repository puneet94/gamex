/*
    *This component is where all the components related to home page are combines
    TODO: Remove styles from html
*/
import CategoryComponent from "./components/category";
import TitleSearchComponent from "./components/titleSearch";
import PlatformComponent from "./components/platform";
import SortByComponent from "./components/sortby";
import GamesListComponent from "./components/games/GamesListComponent";
import "./styles.css";
function HomePageComponent() {
    return (
        <div>
            <div>
                <TitleSearchComponent />

            </div>
            <div className="filtersBox">
                <div style={{ flex: 1 }}><PlatformComponent /></div>
                <div style={{ flex: 2 }}>
                    <CategoryComponent style={{ flex: 2 }} /></div>
                <div style={{ flex: 1 }}><SortByComponent />
                </div>
            </div>



            <GamesListComponent />
        </div>
    )
}


export default HomePageComponent;