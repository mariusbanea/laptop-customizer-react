import React from 'react'

export default function FeatureItem(props) {

    return (

        <div className="feature__item" >
            <input
                id={props.item.name}
                type="radio"
                name={props.feature}
                className={props.featureClass}
                checked={props.featureClass.includes('feature__selected') ? true : false}
                onChange={e => props.handleUpdate(props.feature, props.item)}
            />

            <label htmlFor={props.item.name} className="feature__label"  >
                {props.item.name}
                ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.item.cost)})

            </label>
        </div>

    )

}
