import React from 'react'

const List = ({ images }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {images.length ? (
            images.map((image, idx) => (
                <img
                    key={idx}
                    src={image.urls.regular}
                    alt={image.alt_description}
                    style={{ boxShadow: 'grey 1px 1px 2px', width: '100%', maxWidth: '70vw', margin: 'auto' }}
                />
            ))
        ) : (
            <div>Enter a search above, and hit enter to begin.</div>
        )}
    </div>
)

export default List
