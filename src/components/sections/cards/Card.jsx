const Card = ({ imagen, titulo, descripcion }) => {
    return(
            <article className="s-shadow-bottom">
                {/* <!--Contenedor de la imagen--> */}
                <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
                    <img src={ imagen } alt="Imagen card" />
                </div>
                {/* <!--Contenido--> */}
                <div className="s-bg-white s-pxy-2">
                    <h3 className="s-center">{ titulo }</h3>
                    <p className="s-center s-mb-0">{ descripcion }</p>
                </div>
                <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
                {/* <!--Boton--> */}
                    <div className="button s-to-center">Saber más</div>
                </footer>
            </article>
    )
}

export default Card;