import { useState, useEffect } from 'react'

const DisplayArea = ({ container, direction, justify }) => {


    let containerStyles = {
        display: container,
        flexDirection: direction,
        justifyContent: justify
    }

    let colHeight = null

    useEffect(() => {
        if (container == 'column' || container == 'column-reverse') {
            colHeight = '100vh'
            console.log('yes', container)
        } else {
            colHeight = null
            console.log('no', container)
        }
        containerStyles = {
        display: container,
        flexDirection: direction,
        justifyContent: justify,
        height: colHeight
    }
    }, [container, direction, justify])
    
    return (
        <div className="display-container" style={containerStyles}>
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
    )
}

export default DisplayArea