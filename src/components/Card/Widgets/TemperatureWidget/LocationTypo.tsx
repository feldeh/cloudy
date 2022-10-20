import StyledLocationTypo from './LocationTypo.styled'

const LocationTypo = ({ data }: any) => {
  return <StyledLocationTypo>{data.city}</StyledLocationTypo>
}

export default LocationTypo
