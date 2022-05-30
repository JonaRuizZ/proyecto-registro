const Card = ({ imagen, titulo, descripcion }) => {
    return(
            <article class="s-shadow-bottom">
                {/* <!--Contenedor de la imagen--> */}
                <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
                    <img src={ imagen } alt="Imagen card" />
                </div>
                {/* <!--Contenido--> */}
                <div class="s-bg-white s-pxy-2">
                    <h3 className="s-center">{ titulo }</h3>
                    <p class="s-center s-mb-0">{ descripcion }</p>
                </div>
                <footer class="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
                {/* <!--Boton--> */}
                    <div class="button s-to-center">Saber más</div>
                </footer>
            </article>
    )
}

export default Card;