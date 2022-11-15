import {Component} from 'react'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

class Gallery extends Component {
  state = {
    selectedImageId: 0,
  }
  /* takes id from index.js/thumbnail using onClickThumbnail */

  updateSelectedImageId = id => {
    this.setState({selectedImageId: id})
  }

  renderSelectedImage = () => {
    const {photosData} = this.props
    const {selectedImageId} = this.state
    const {imageUrl, imageAltText} = photosData[selectedImageId]
    return <img src={imageUrl} className="image" alt={imageAltText} />
  }
  /* main render application  */

  render() {
    const {photosData} = this.props
    const {selectedImageId} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {this.renderSelectedImage()}
          <ThumbnailItem
            photosData={photosData}
            selectedImageId={selectedImageId}
            onClickUpdateId={this.updateSelectedImageId}
            key={photosData.id}
          />
        </div>
      </div>
    )
  }
}

export default Gallery
