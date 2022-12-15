import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  render() {
    const {eachHistory, onDelete} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory
    const deleteHistory = () => {
      onDelete(id)
    }

    return (
      <li className="history-item-container">
        <div className="details">
          <p className="time">{timeAccessed}</p>
          <div className="domain-details">
            <img src={logoUrl} className="icon" alt="domain logo" />
            <p className="title">{title}</p>
            <p className="history-url">{domainUrl}</p>
          </div>
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={deleteHistory}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default HistoryItem
