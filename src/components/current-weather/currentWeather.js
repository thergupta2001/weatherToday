import './currentWeather.css';

const CurrentWeather = ({data}) => {
    return(
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-descp'>{data.weather[0].description}</p>
                </div>
            </div>
            <div className='bottom'>
                <p className='temp'>{data.main.temp}</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details:</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like </span>
                        <span className='parameter-value'>{data.main.feels_like}</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind: </span>
                        <span className='parameter-value'>{data.wind.speed}</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity </span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather