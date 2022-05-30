import Card from "./Card";

const CardContainer = () => {
    return(
        <div className="ed-grid s-grid-1 m-grid-3">
            <Card
                imagen="https://il-abogados.pe/wp-content/uploads/2022/03/8SGEeaXTpx6Z5rS5acecaJJcDU2LrgPAub7r1yiN.jpg" 
                titulo="Reglamento"
                descripcion="Para respetar los derechos de unos y otros, existe un reglamento de copropiedad que regula diferentes aspectos de la vida en comunidad."
            />
            <Card 
                imagen="https://thumbs.dreamstime.com/b/construcci%C3%B3n-de-sistemas-seguridad-entrada-por-condominio-en-bangkok-tailandia-162824789.jpg" 
                titulo="Sistemas de seguridad"
                descripcion="El condominio cuenta con cámaras de seguridad para tu seguridad y la de tu familia, esto con el fin de mantener evidencias y con ello combatir la delincuencia"
            />
            <Card 
                imagen="https://assets-global.website-files.com/5a43f26a7b791a0001995f0f/5e1dd2ebe6f09d49cb87b378_DSC02880.jpg" 
                titulo="Áreas comunes"
                descripcion="En el condominio ofrecemos la mantención de las áreas comunes, junto con todas las áreas verdes, como parque, plazas, quinchos, piscinas."
            />
        </div>
    )
}

export default CardContainer;