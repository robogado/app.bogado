import ItemCount from "./components/itemCount/ItemCount"

const ItemListContainer = ({saludo}) => {
    return (
        <div>
            <h2>{saludo}</h2>
            <ItemCount stock="10"/>
        </div>

    )
}

export default ItemListContainer

