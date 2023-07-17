import React from 'react'
import TextField from '@mui/material/TextField'
import '../styles/Form.css'

interface iForm {
    query: string
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
            }}
        >
            <TextField
                fullWidth
                label='find something beautiful'
                value={query}
                onChange={e => updateQuery(e.target.value)}
            />
        </form>
    )
}

export default Form
