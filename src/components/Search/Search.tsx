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

  const handleOnChange: (args: any) => void = (searchData: ISearchData) => {
    setSearch(searchData)
    handleOnSearchChange(searchData)
    console.log('searchData: ', searchData)
  }

  const loadOptions: any = (inputValue: string) => {
    return fetch(
      `${GEO_API_PROXY_URL}?limit=2&minPopulation=250000&namePrefix=${inputValue}`
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
