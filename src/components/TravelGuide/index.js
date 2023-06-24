import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  BgContainer,
  Title,
  Line,
  LoadingContainer,
  PackagesContainer,
  PackageItem,
  Image,
  PackageName,
  PackageDescription,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'IN_Progress',
  initial: 'INITIAL',
}

class TravelGuide extends Component {
  state = {apiStatus: apiStatusConstants.initial, packagesList: []}

  componentDidMount = () => {
    this.getPackageDetails()
  }

  getPackageDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const modifiedData = data.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({
        packagesList: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoadingContainer>
  )

  renderSuccessView = () => {
    const {packagesList} = this.state

    return (
      <PackagesContainer>
        {packagesList.map(eachPackage => (
          <PackageItem key={eachPackage.id}>
            <Image src={eachPackage.imageUrl} alt={eachPackage.name} />
            <PackageName>{eachPackage.name}</PackageName>
            <PackageDescription>{eachPackage.description}</PackageDescription>
          </PackageItem>
        ))}
      </PackagesContainer>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <BgContainer>
        <Title>Travel Guide</Title>
        <Line />
        {this.renderApiStatus()}
      </BgContainer>
    )
  }
}

export default TravelGuide
