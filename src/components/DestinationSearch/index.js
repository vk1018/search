import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserInput = event => this.setState({searchInput: event.target.value})

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const filterSearchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="heading">Destination Search</h1>

          <div className="input-con">
            <input
              type="search"
              className="search-input"
              onChange={this.searchUserInput}
              placeholder="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
          <ul className="items-con">
            {filterSearchResult.map(eachItem => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
