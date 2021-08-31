import React, { ReactElement } from 'react'
import { IGrid, TypeGrid } from '../../shared/interfaces/Grid'
import './GridItem.css';

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
                <div>
                    <p>{grid.quote.toUpperCase()}</p>
                </div>
            )
        }
        return (
            <div>
                <p>Join Our Team</p>
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
