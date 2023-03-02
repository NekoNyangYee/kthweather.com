import { forecastType } from "../types/Type"
import styled from "styled-components"

const NowWeather = styled.h1`
    font-size: 22px;
`;

const MoreWeather = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    overflow: scroll;
`;

const WeatherList = styled.div`
    width: auto;
    height: auto;
    margin: 10px;
    text-align: center;
`;

type Props = {
    data: forecastType
}

const Degree = ({ temp }: { temp: number }): JSX.Element => (
    <>
        {temp}
        <sup>o</sup>
    </>
)

const getSunTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000)
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()

    if (hours.length <= 1) hours = `0${hours}`
    if (minutes.length <= 1) minutes = `0${minutes}`

    return `${hours} : ${minutes}`
}

export const Forecast = ({ data }: Props): JSX.Element => {
    const today = data.list[0]
    return (
        <div>
            <h2>{data.name}</h2>
            <h2>({data.country})</h2>
            <NowWeather>
                <Degree temp={Math.round(today.main.temp)} />
            </NowWeather>
            <img src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} />
            <p>{today.weather[0].description}</p>
            <p>{today.weather[0].main}</p>
            <p>최고온도: <Degree temp={Math.ceil(today.main.temp_max)} /></p>
            <p>최저온도: <Degree temp={Math.floor(today.main.temp_min)} /></p>
            <MoreWeather>
                {data.list.map((itm, i) => (
                    <WeatherList key={i}>
                        <p>{i === 0 ? '지금' : new Date(itm.dt * 1000).getHours()}시</p>
                        <img src={`http://openweathermap.org/img/wn/${itm.weather[0].icon}@2x.png`} />
                        <Degree temp={Math.round(itm.main.temp)} />
                    </WeatherList>
                ))
                }</MoreWeather>
            <p>{getSunTime(data.sunrise)}</p>
            <p>{getSunTime(data.sunset)}</p>
        </div >
    )
}
