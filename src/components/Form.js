import React from 'react'
import '../styles/Form.css'

const Form = ({ query, searchPhotos, updateQuery }) => {
    return (
        <form
            className='form'
            onSubmit={e => {
                e.preventDefault()
                searchPhotos(query)
            }}>
            <input
                type='text'
                id='search'
                placeholder='Search Unsplash'
                value={query}
                onChange={e => updateQuery(e.target.value)}
            />
        </form>
    )
}

export default Form
