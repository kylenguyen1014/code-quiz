import React, { ReactElement } from 'react'
import { IGrid, Side, TypeGrid } from '../../shared/interfaces/Grid'
import './GridItem.css';
import {ReactComponent as DoubleQuotes} from '../../images/quotes.svg';
import logo from '../../images/logo.png';

interface Props {
    grid : IGrid
}

function GridItem({grid}: Props): ReactElement {

    const getGrid = () => {
        if (grid.type === TypeGrid.IMAGE) {
            return (
                <img src={grid.image} alt='' />
                )
            }
            if (grid.type === TypeGrid.TEXT) {
                return (
                <div className='GridItem-inner text-block'>
                    <div />
                    <div className={grid.justifySide === Side.RIGHT ? 'right' : ''}>
                        <DoubleQuotes className='GridItem-double-quotes'/>
                        <div className='GridItem-quotes'>{grid.quote}</div>
                        <div className='GridItem-name'>{grid.name}</div>
                    </div>
                </div>
            )
        }
        return (
            <div className='GridItem-inner invitation-block'>
                <div>
                    <h3>Join Our Team</h3>
                    <p>Think you've got what it takes?</p>
                </div>
                <img src={logo} alt='logo' />
            </div>
        )
    }
    return (
        <div className='GridItem-root'>
            {getGrid()}
        </div>
    )
}

export default GridItem
