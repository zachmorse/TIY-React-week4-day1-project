import React from 'react'

const Form = ({ query, searchPhotos, updateQuery }) => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                searchPhotos(query)
            }}>
            <input
                type='text'
                placeholder='Search Unsplash'
                value={query}
                onChange={e => updateQuery(e.target.value)}
            />
        </form>
    )
}

export default Form
