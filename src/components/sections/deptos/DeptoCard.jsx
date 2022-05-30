const DeptoCard = ({ imagen, titulo, descripcion }) => {
    return(
    <div className="ed-grid lg-grid-7 s-pxy-1 s-border s-radius s-shadow-bottom s-mb-2 s-center">
        <div className="s-mb-1 lg-cols-4 s-center">
            <img src={imagen} alt="Imagen del departamento" />
        </div>
        <div className="lg-cols-3">
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <div className="button">Ver</div>
        </div>
    </div>
    )
}

export default DeptoCard;