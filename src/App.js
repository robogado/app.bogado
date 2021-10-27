import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"
import ItemList from "./components/itemList/ItemList"


function App() {
    const user = "Rocio"
    return (
        <>
            <Header />
            <NavBar />
            <ItemListContainer saludo={`Bienvenidas a Free Beauty by ${user}`} />
            <ItemList />
            <Footer />
        </>
    )
}

export default App





