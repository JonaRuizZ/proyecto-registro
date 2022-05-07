const Logo = ({ logoImg, alternative }) => {
    return(
        <div className="ed-item s-center s-pt-2">
            <img 
                className="s-mb-2"
                src={ logoImg } 
                alt={ alternative }
            />
      </div>
    )
}

export default Logo;