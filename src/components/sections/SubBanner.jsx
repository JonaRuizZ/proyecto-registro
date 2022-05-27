import { Link } from "react-router-dom";

const SubBanner = () => {
    return(
        <div className="main-banner img-container dark-color">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img 
                    className="main-banner__img" 
                    src="https://imgclasificados2.emol.com/Proyectos/imagenes/proyecto/PR_FOTO_5083_Fachada.jpg" 
                    alt="banner" 
                    />
                <div className="main-banner__data s-center">
                    <p className="s-mb-0 t2">El departamento de tus sueños</p>
                    <p>Hacemos el proyecto de tu vida.</p>
                    <Link className="button first-color" to="/galeria">Galería de imágenes</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SubBanner;