import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { updateQuery, searchPhotos, retrieveMorePhotos } from './store/actions/search'
import { updateColumns } from './store/actions/list'

import List from './components/List'
import Form from './components/Form'
import PreviouslySearched from './components/PreviouslySearched'
import './styles/App.css'

interface iApp {
    query: string
    images: object[]
    previouslySearched: string[]
    updateQuery: (query: string) => void
    searchPhotos: (query: string) => void
    isInitialSearch: boolean
    retrieveMorePhotos: (searchTerm: string) => void
    updateColumns: (number: number) => void
    columns: number
}

const App = ({
    query,
    images,
    previouslySearched,
    updateQuery,
    searchPhotos,
    isInitialSearch,
    retrieveMorePhotos,
    updateColumns,
    columns,
}: iApp): JSX.Element => {
    const singleColumn = useMediaQuery({ query: '(max-width: 800px)' })
    const doubleColumn = useMediaQuery({ query: '(max-width: 1050px)' })

    useEffect(() => {
        const columns = singleColumn ? 1 : doubleColumn ? 2 : 3
        updateColumns(columns)
    }, [singleColumn, doubleColumn])

    return (
        <div className='App'>
            <h1>Unsplash API Portal // Find something beautiful.</h1>
            <Form query={query} searchPhotos={searchPhotos} updateQuery={updateQuery} />
            <PreviouslySearched previouslySearched={previouslySearched} searchPhotos={searchPhotos} />
            {isInitialSearch ? (
                <div>Enter a search term above, and hit enter to begin.</div>
            ) : (
                <List images={images} columns={columns} />
            )}
            {images.length ? (
                <div
                    style={{ margin: '2rem' }}
                    onClick={() => {
                        retrieveMorePhotos(previouslySearched[previouslySearched.length - 1])
                    }}>
                    load more
                </div>
            ) : null}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    query: state.search.query,
    images: state.search.images,
    previouslySearched: state.search.previouslySearched,
    isInitialSearch: state.search.isInitialSearch,
    columns: state.list.columns,
})

const mapDispatchToProps = (dispatch: any) => ({
    updateQuery: (queryString: string) => dispatch(updateQuery(queryString)),
    searchPhotos: (query: string) => dispatch(searchPhotos(query)),
    retrieveMorePhotos: (query: string) => dispatch(retrieveMorePhotos(query)),
    updateColumns: (payload: number) => dispatch(updateColumns(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
