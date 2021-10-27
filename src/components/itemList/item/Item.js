const Item = (nombre, descripcion, precio) => {
    return (
        <div className="item">
            <h2>Componente Item</h2>
            <h3>{nombre}</h3>
            <h4>{descripcion}</h4>
            <h5>{precio}</h5>
        </div>
    )
}

export default Item
