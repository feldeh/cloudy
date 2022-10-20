import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_PROXY_URL } from '../../api'

const Search = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState<string | null>(null)

  // retrieves searchData, the data that we select from AsyncPaginate component (onChange eventlistener)
  const handleOnChange = (searchData: string) => {
    setSearch(searchData)
    onSearchChange(searchData)
    console.log('searchData')
    console.log(searchData)
  }

  // loadOption will trigger when entering keys into the search bar
  const loadOptions = (inputValue: string) => {
    return fetch(
      `${GEO_API_PROXY_URL}?limit=2&minPopulation=600000&namePrefix=${inputValue}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('response.data')
        console.log(response.data)
        return {
          options: response.data.map((city: any) => {
            console.log('city')
            console.log(city)
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          }),
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={1000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
