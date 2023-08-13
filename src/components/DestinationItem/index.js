import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem

  return (
    <li className="item-con">
      <img className="img" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
