import React from 'react'

const Form = ({ query, searchPhotos, updateQuery }) => (
    <form
        onSubmit={e => {
            e.preventDefault()
            searchPhotos()
        }}>
        <input type='text' placeholder='Search Unsplash' value={query} onChange={e => updateQuery(e.target.value)} />
    </form>
)

export default Form
