import React from 'react'
import './styles/App.css'
import { connect } from 'react-redux'
import { updateQuery, searchPhotos } from './store/actions/search'

import List from './components/List'
import Form from './components/Form'
import PreviouslySearched from './components/PreviouslySearched'

const App = ({ query, images, previouslySearched, updateQuery, searchPhotos }) => {
    return (
        <div className='App'>
            <h1>Unsplash API Portal // Find something beautiful.</h1>
            <Form query={query} searchPhotos={searchPhotos} updateQuery={updateQuery} />
            <PreviouslySearched previouslySearched={previouslySearched} searchPhotos={searchPhotos} />
            <List images={images} />
        </div>
    )
}

const mapStateToProps = state => ({
    query: state.search.query,
    images: state.search.images,
    previouslySearched: state.search.previouslySearched,
})

const mapDispatchToProps = dispatch => ({
    updateQuery: queryString => dispatch(updateQuery(queryString)),
    searchPhotos: query => dispatch(searchPhotos(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
