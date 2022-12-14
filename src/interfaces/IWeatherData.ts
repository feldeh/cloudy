interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

interface ICurrent {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  weather: IWeather[]
}

interface IWeatherData {
  city: string
  lat: number
  lon: number
  timezone: string
  current: {
    [key: string]: ICurrent
  }
}

export default IWeatherData
