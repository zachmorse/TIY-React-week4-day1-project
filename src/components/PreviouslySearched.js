import React from 'react'

const PreviouslySearched = ({ previouslySearched, searchPhotos }) => {
    return previouslySearched.length >= 1 ? (
        <div>
            {previouslySearched.map((x, idx) => (
                <div key={idx} onClick={() => searchPhotos(x)}>
                    {x}
                </div>
            ))}
        </div>
    ) : null
}

export default PreviouslySearched
