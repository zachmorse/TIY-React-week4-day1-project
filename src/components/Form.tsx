import React from 'react'
import '../styles/Form.css'

interface iForm {
    query: string;
    searchPhotos: (query: string) => void
    updateQuery: (query: string) => void
}

const Form = ({ query, searchPhotos, updateQuery }: iForm) => {
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
