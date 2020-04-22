import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {GiFlamer} from 'react-icons/gi'

import styles from './Modal.module.css'

const StyledPopup = styled(Popup)`
  &-content {
    overflow-y: auto;
    max-height: 90% !important;
    border-radius: 10px;
  }
  @media (max-width: 500px) {
    &-content {
        width: 90% !important;
        max-height: 80% !important;
    }
  }
`

const Modal = (props) => (
    <StyledPopup trigger={props.trigger} modal>
        {close => (
            <div className={styles.modal}>
                <span className={styles.close} onClick={close}>
                &times;
                </span>
                <div>
                    <h2>{props.data.recipe.label}</h2>
                    <span className={styles.label} style={{backgroundColor: '#00c851'}}><AiOutlineClockCircle /> {props.data.recipe.totalTime} minutes</span>
                    <span className={styles.label} style={{backgroundColor: '#ff3547'}}><GiFlamer /> {Math.round(props.data.recipe.calories)} calories</span>
                    <img src={props.data.recipe.image} alt={props.data.recipe.label} />
                </div>
                <div>
                    <h3>Ingredients</h3>
                    <ul>
                    {props.data.recipe.ingredientLines.map((item) => (
                        <li key={Math.random()}>{item}</li>
                    ))}
                    </ul>
                </div>
                <div className={styles.button}>
                    <a href={props.data.recipe.url} target="_blank" rel="noopener noreferrer">Full Recipe</a>
                </div>
            </div>
        )}
    </StyledPopup>
)

export default Modal