// Write your code here.
import './index.css'

const BannerCardItems = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button-element">
          show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItems
