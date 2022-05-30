import DeptoCard from "./DeptoCard";

const DeptoContainer = () => {
    return(
    <div className="ed-grid s-grid-1 m-grid-2 lg-grid-3">
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2020/12/PL1D_CN.png" 
            titulo="1D+1B (a)"
            descripcion="Departamentos tipo E35, E36 y E36a"
        />
        <DeptoCard 
            imagen="http://condominionatales.cl/wp-content/uploads/2020/12/PL1DT2V8_CN.png" 
            titulo="1D+1B (b)"
            descripcion="Departamentos tipo S35, S36, S35a, S35b, S36b "
        />
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2020/12/PL2DM_CN.png" 
            titulo="2D+2B mariposa (a)"
            descripcion="Departamentos tipo M53, M53a, M54 y M55"
        />
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2020/12/PL2DMS_CN.png" 
            titulo="2D+2B mariposa (b)"
            descripcion="Departamentos tipo S57"
        />
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2020/12/PL2D_CN.png" 
            titulo="2D+2B"
            descripcion="Departamentos tipo 68"
        />
        <DeptoCard 
            imagen="http://condominionatales.cl/wp-content/uploads/2020/12/PL2DS_CN.png" 
            titulo="2D+1B"
            descripcion="Departamentos tipo S47"
        />
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2021/09/PL2DCM_CNV2.png" 
            titulo="2D+2B+Estar o Tercer Dormitorio (a)"
            descripcion="Departamentos de dos niveles tipo D59 y D61"
        />
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2021/09/PL2DCMT2_CN3.png" 
            titulo="2D+2B+Estar o Tercer Dormitorio (b)"
            descripcion="Deptos. de dos niveles tipo D80, D87, D89, D86, D86a y D86b"
        />
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2021/10/PL2D2BMV2_TDE.png" 
            titulo="2D+2B+Estar o Tercer Dormitorio (c)"
            descripcion="Departamentos de dos niveles tipo D61b (sólo etapa II)"
        />
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2021/10/PL2D2BM_TDE.png" 
            titulo="2D+2B+Estar o Tercer Dormitorio"
            descripcion="Departamentos tipo 61a, 61c (sólo etapa II)"
        />
        <DeptoCard
            imagen="http://condominionatales.cl/wp-content/uploads/2021/11/PL2D2BMV3e_TDE.png" 
            titulo="2D+2B+Estar o Tercer Dormitorio (e)"
            descripcion="Departamentos tipo D64, D62 y D57 (sólo etapa II)"
        />
    </div>
    )
}

export default DeptoContainer;