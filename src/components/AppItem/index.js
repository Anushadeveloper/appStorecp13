// Write your code here
import './index.css'

const AppItem = props => {
  const {AppItemDetails} = props
  const {appName, imageUrl} = AppItemDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
