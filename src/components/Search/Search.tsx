import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_PROXY_URL } from '../../api'
import { ICity } from '../../interfaces/ICity'
import { ISearchData } from '../../interfaces/ISearchData'

type SearchProps = {
  handleOnSearchChange: (data: ISearchData) => void
}

const Search = ({ handleOnSearchChange }: SearchProps) => {
  const [search, setSearch] = useState<string | ISearchData>('')

  // retrieves searchData, the data that we select from AsyncPaginate component (onChange eventlistener)
  const handleOnChange: (args: any) => void = (searchData: ISearchData) => {
    setSearch(searchData)
    // pass the data from the input to the function props from the parent component
    handleOnSearchChange(searchData)
    console.log('searchData: ', searchData)
  }

  // loadOption will trigger when entering keys into the search bar
  const loadOptions: any = (inputValue: string) => {
    return fetch(
      `${GEO_API_PROXY_URL}?limit=2&minPopulation=600000&namePrefix=${inputValue}`
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city: ICity) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name.replace(/Arrondissement of /, '')}, ${
                city.countryCode
              }`,
            }
          }),
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={400}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
