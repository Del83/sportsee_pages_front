import propTypes from 'prop-types';
import "./ProfilUser.css";

/**
 * @param {string} name user name 
 * @return {JSX} Profile react component  
 */
function ProfilUser ( { name } ) {
    return (
        <div className="profil-user">
            <h1>Bonjour <span className="profil-user-name">{name}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
        </div>
    )
}

ProfilUser.propTypes = {
    name: propTypes.string,
}

export default ProfilUser;