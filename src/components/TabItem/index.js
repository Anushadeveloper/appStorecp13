// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, onActiveTab} = props
  const {tabId, displayText} = tabDetails
  const classTab = onActiveTab ? 'tab-style' : ''

  const onClickButton = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tabItem">
      <button onClick={onClickButton} type="button" className="button">
        <h1 className={`${classTab}`}>{displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem
