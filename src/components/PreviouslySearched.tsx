import React from 'react'
import Chip from '@mui/material/Chip'
import ClearIcon from '@mui/icons-material/Clear'
import '../styles/PreviouslySearched.css'

interface iPreviouslySearched {
    previouslySearched: string[]
    searchPhotos: (query: string) => void
    removePreviousQuery: (query: string) => void
}

const PreviouslySearched = ({ previouslySearched, searchPhotos, removePreviousQuery }: iPreviouslySearched) => {
    return previouslySearched.length >= 1 ? (
        <div className='previouslySearchedContainer'>
            {previouslySearched.map((searchTerm, idx) => (
                <Chip
                    label={searchTerm}
                    key={idx}
                    variant='outlined'
                    onClick={() => searchPhotos(searchTerm)}
                    onDelete={() => removePreviousQuery(searchTerm)}
                    deleteIcon={<ClearIcon />}
                />
            ))}
        </div>
    ) : null
}

export default PreviouslySearched
