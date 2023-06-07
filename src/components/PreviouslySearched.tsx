import React from 'react'

interface iPreviouslySearched {
    previouslySearched: string[]
    searchPhotos: (query: string) => void
}

const PreviouslySearched = ({ previouslySearched, searchPhotos }: iPreviouslySearched) => {
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
