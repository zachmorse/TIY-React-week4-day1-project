import React from 'react'

const PreviouslySearched = ({ previouslySearched, searchPhotos }) => {
    return (
        <div>
            {previouslySearched.length >= 1
                ? previouslySearched.map((x, idx) => (
                      <div key={idx} onClick={() => searchPhotos(x)}>
                          {x}
                      </div>
                  ))
                : null}
        </div>
    )
}

export default PreviouslySearched
