import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"

const App = () => {
    const user = "Rocio"
    return (
        <>
            <Header/>
            <NavBar/>
            <ItemListContainer saludo={`Bienvenidas a Free Beauty by ${user}`}/>
            <Footer/>
        </>
    )
}

export default App





