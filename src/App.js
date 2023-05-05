import React from 'react'
import './styles/App.css'
import { connect } from 'react-redux'
import { updateQuery, searchPhotos, retrieveMorePhotos } from './store/actions/search'

import List from './components/List'
import Form from './components/Form'
import PreviouslySearched from './components/PreviouslySearched'

const App = ({ query, images, previouslySearched, updateQuery, searchPhotos, isInitialSearch, retrieveMorePhotos }) => {
    return (
        <div className='App'>
            <h1>Unsplash API Portal // Find something beautiful.</h1>
            <Form query={query} searchPhotos={searchPhotos} updateQuery={updateQuery} />
            <PreviouslySearched previouslySearched={previouslySearched} searchPhotos={searchPhotos} />
            {isInitialSearch ? <div>Enter a search term above, and hit enter to begin.</div> : <List images={images} />}
            {images.length ? (
                <div
                    onClick={() => {
                        console.log('search?', previouslySearched)
                        retrieveMorePhotos(previouslySearched[previouslySearched.length - 1])
                    }}>
                    load more
                </div>
            ) : null}
        </div>
    )
}

const mapStateToProps = state => ({
    query: state.search.query,
    images: state.search.images,
    previouslySearched: state.search.previouslySearched,
    isInitialSearch: state.search.isInitialSearch,
})

const mapDispatchToProps = dispatch => ({
    updateQuery: queryString => dispatch(updateQuery(queryString)),
    searchPhotos: query => dispatch(searchPhotos(query)),
    retrieveMorePhotos: query => dispatch(retrieveMorePhotos(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
