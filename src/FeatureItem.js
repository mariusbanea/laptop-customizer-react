import React from 'react'

export default function FeatureItem(props) {

    return (

        <div className="feature__item">
            <input
                type="radio"
                id={props.key}
                name={props.feature}
                className={props.featureClass}
                checked={props.item.name}
                onClick={e => props.handleUpdate(props.feature, props.item)}
            />
            <label htmlFor={props.key} className="feature__label">
                {props.item.name}
                ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.item.cost)})
            </label>
        </div>

    )

}
