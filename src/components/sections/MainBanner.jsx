const MainBanner = () => {
    return(
        <section className="main-banner grey-600 l-section s-py-4">
        {/*   <!-- Separación del contenido en columnas --> */}
            <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
            {/*     <!-- Contenido de la columna 1 --> */}
                <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
                    <h1>Bienvenido a la página "Condominio virtual"</h1>
                    <p>El condominio considera variadas áreas comunes donde destacan dos quinchos, juego para niños, dos salas multiuso, zona de ejercicios y un lounge, para que la gente joven pueda disfrutar de un momento agradable..</p>
                {/*       <!-- Botones --> */}
                    <div className="s-main-center">
                        <a className="button blue-500 s-mr-2 s-mb-2 m-mb-0" href="#">Áreas de servicios</a>
                        <a className="button blue-500 s-mb-2 m-mb-0" href="#">Acerca de nosotros</a>
                    </div>
                </div>
            {/*     <!-- Contenido de la columna 2 --> */}
                <div>
                    <div className="img-container s-ratio-16-9">
                        <img className="s-radius-1" src="https://usatusubsidio.com/wp-content/uploads/QUINTA-DE-QUILLOTA_Mesa-de-trabajo-1-copia.jpg" alt="banner Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner;