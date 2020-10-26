import React from 'react'


const withCard = WrappedComponent => ({ name, width, hieght, picUrl, ...otherProps }) => {
    return (
        <div className='tc br3 pa3 ma2 dib bw2 shadow-5' style={{ background: '#0ccac4' }}>
            {(WrappedComponent !== undefined) ?
                <WrappedComponent {...otherProps} /> : null}
            <img alt='cards'
                style={{ width: `${width}px`, height: `${hieght}px` }}
                src={picUrl} />
            <div >
                <h2> {name} </h2>
            </div>
        </div>
    )
}

export default withCard