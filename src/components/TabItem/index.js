import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTab} = props
  const {displayText, tabId} = tabDetails
  const activeButtonClassname = isActive ? 'active-tab-btn' : ''
  const tabChange = () => {
    onClickTab(tabId)
  }
  return (
    <li>
      <button
        onClick={tabChange}
        type="button"
        className={`tab-button ${activeButtonClassname}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
