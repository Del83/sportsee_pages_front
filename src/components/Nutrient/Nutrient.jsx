import React, {Suspense} from 'react'
import propTypes from 'prop-types';
import caloriesLogo from "../../assets/calories.svg"
import proteinesLogo from "../../assets/proteines.svg"
import glucidesLogo from "../../assets/glucides.svg"
import lipidesLogo from "../../assets/lipides.svg"
import "./Nutrient.css";

/**
 * Create an activity bar chart
 * @param {String} categorie Nutrient categories
 * @param {Number} value Nutrient value
 * @returns {JSX} Component react nutrient card
 */
const NutrientCard = ( { categorie, value } ) => {
        let nutrientCardCat = { title: '', icon: '',  unit: '', color: '' }
        switch (categorie) {
            case 'calorieCount':
                nutrientCardCat = {
                    title: 'Calories',
                    icon: caloriesLogo,
                    unit: 'kCal',
                    color: 'red'
                }
            break
            case 'proteinCount':
                nutrientCardCat = {
                    title: 'Protéines',
                    icon: proteinesLogo,
                    unit: 'g',
                    color: 'blue'
                }
            break
            case 'carbohydrateCount':
                nutrientCardCat = {
                    title: 'Glucides',
                    icon: glucidesLogo,
                    unit: 'g',
                    color: 'yellow'
                }
            break
            case 'lipidCount':
                nutrientCardCat = {
                    title: 'Lipides',
                    icon: lipidesLogo,
                    unit: 'g',
                    color: 'pink'
                }
            break
            default: break
    }
        
    return (
        <div className="nutrient-card">
            <Suspense fallback={<div>Chargement...</div>}>
            <div className={`nutrient-icon nutrient-${nutrientCardCat.color}`}>
                <img src={nutrientCardCat.icon} alt={nutrientCardCat.title} />
            </div>
            <div className="nutrient-ctn">
                <h2 className="nutrient-value">{ value < 999 ? value : (value / 1000).toFixed(3).replace(".",",")}{nutrientCardCat.unit}</h2>
                <p className="nutrient-cat">{nutrientCardCat.title}</p>
            </div>
            </Suspense>
        </div>
    )
}

NutrientCard.propTypes = {
    categorie: propTypes.string,
    value: propTypes.number,
}

export default NutrientCard;