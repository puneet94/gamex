import CategoryComponent from "./components/category";
import TitleSearchComponent from "./components/titleSearch";
import PlatformComponent from "./components/platform";
import SortByComponent from "./components/sortby";
import GamesListComponent from "./components/games/GamesListComponent";

function HomePageComponent() {
    return (
        <div>
            <div>
                <TitleSearchComponent />

            </div>
            <div style={{marginTop:"50px", marginBottom:"50px", display: "flex", flexDirection: "row" }}>
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