import React from 'react'
import './styles/App.css'
import { connect } from 'react-redux'
import { updateQuery, searchPhotos } from './store/actions/search'

import List from './components/List'

const App = ({ query, images, updateQuery, searchPhotos }) => {
    return (
        <div className='App'>
            <h1>Unsplash API Portal // Find something beautiful.</h1>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    searchPhotos()
                }}>
                <input
                    type='text'
                    placeholder='Search Unsplash'
                    value={query}
                    onChange={e => updateQuery(e.target.value)}
                />
            </form>
            <h3>{query}</h3>
            <List images={images} />
        </div>
    )
}

const mapStateToProps = state => ({
    query: state.search.searchQuery,
    images: state.search.images,
})

const mapDispatchToProps = dispatch => ({
    updateQuery: queryString => dispatch(updateQuery(queryString)),
    searchPhotos: () => dispatch(searchPhotos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
