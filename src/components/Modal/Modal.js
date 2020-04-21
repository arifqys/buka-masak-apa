import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {GiFlamer} from 'react-icons/gi'

import styles from './Modal.module.css'

const StyledPopup = styled(Popup)`
  &-content {
    width: 60% !important;
    max-height: 650px;
    overflow-y: auto;
    border-radius: 10px;
  }
`

const Modal = (props) => (
    <StyledPopup trigger={props.trigger} modal>
        <div className={styles.modal}>
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
    </StyledPopup>
)

export default Modal