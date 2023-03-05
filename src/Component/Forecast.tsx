import styled from "styled-components";

const NowWeather = styled.h1`
    font-size: 52px;
    margin: 0;
`;

const MoreWeather = styled.div`
    width: auto;
    height: auto;
    display: flex;
    overflow-x: scroll;
    background: ${({ theme }: { theme: any }) => theme.boxColor};
    border-radius: 21px;
    margin: 12px;
`;

const WeatherList = styled.div`
    width: auto;
    height: auto;
    margin: 10px;
    text-align: center;
    @media screen and (max-width: 480px) {
       width: 7vh;
    }
`;

const ListIcon = styled.img`
    @media screen and (max-width: 480px) {
        width: 7vh;
    }
`;

const WeatherCountry = styled.div`
    font-size: 29px;
    font-weight: bold;
`;

const PresentWeather = styled.div`
    height: auto;
    margin: 0;
    padding: 20px;
`;

const NowWeatherIcon = styled.img`
    position: relative;
    bottom: 50px;
    float: right;
    width: 120px;
`;

const SunInfo = styled.div`
    width: 50%;
    height: auto;
    margin: 15px;
    padding: 15px;
    background: ${({ theme }: { theme: any }) => theme.boxColor};
    border-radius: 21px;
    overflow: hidden;
    text-align: center;
`;

const BoxContainer = styled.div`
    display: flex;
`;

const SunTime = styled.h1`
    margin: 12px;
    font-size: 29px;
`;

const WindIcon = styled.img`
    width: 52px;
`;

const BoxTitle = styled.p`
    margin-top: 0;
`;

const Degree = ({ temp }: { temp: number }): JSX.Element => (
    <>
        {temp}
        <sup>°</sup>
    </>
)

const getSunTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000)
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()

    if (hours.length <= 1) hours = `0${hours}`
    if (minutes.length <= 1) minutes = `0${minutes}`

    return `${hours}:${minutes}`
}

const NowDays = () => {
    const date = new Date();
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()

    if (hours.length <= 1) hours = `0${hours}`
    if (minutes.length <= 1) minutes = `0${minutes}`


    return `${hours}:${minutes}`
}

const getDay = () => {
    const date = new Date();
    const day: number | string = date.getDay().toString();
    const returnDay = day === '0' ? '일요일' : day === '1' ? '월요일' : day === '2' ? '화요일' : day === '3' ? '수요일' : day === '4' ? '목요일' : day === '5' ? '금요일' : '토요일'

    return returnDay
}

export const Forecast = ({ data }: any): JSX.Element => {
    const today = data.list[0]
    return (
        <>
            <PresentWeather>
                <NowWeather>
                    <Degree temp={Math.round(today.main.temp)} />
                </NowWeather>
                <WeatherCountry>
                    <span>{data.name}, ({data.country})</span>
                </WeatherCountry>
                <NowWeatherIcon src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} />
                <p>{today.weather[0].description}</p>
                <p>{today.weather[0].main}</p>
                <span>최고: <Degree temp={Math.ceil(today.main.temp_max)} /> 최저: <Degree temp={Math.floor(today.main.temp_min)} /></span>
                <p>{getDay()}, {NowDays()}(KST 기준)</p>
            </PresentWeather>
            <MoreWeather>
                {data.list.map((itm: any, i: any) => (
                    <WeatherList key={i}>
                        <p>{i === 0 ? '지금' : `${new Date(itm.dt * 1000).getHours()}시`}</p>
                        <ListIcon src={`http://openweathermap.org/img/wn/${itm.weather[0].icon}@2x.png`} />
                        <Degree temp={Math.round(itm.main.temp)} />
                    </WeatherList>
                ))
                }
            </MoreWeather>
            <BoxContainer>
                <SunInfo>
                    <BoxTitle>일출</BoxTitle>
                    <SunTime>{getSunTime(data.sunrise)}</SunTime>
                    <img src="./img/sunrise.svg" />
                </SunInfo>
                <SunInfo>
                    <BoxTitle>일몰</BoxTitle>
                    <SunTime>{getSunTime(data.sunset)}</SunTime>
                    <img src="./img/sunset.svg" />
                </SunInfo>
            </BoxContainer>
            <BoxContainer>
                <SunInfo>
                    <BoxTitle>풍속</BoxTitle>
                    <SunTime>{today.wind.speed}m/s</SunTime>
                    <WindIcon src="./img/wind.svg" />
                </SunInfo>
                <SunInfo>
                    <p>{Math.round(today.main.feels_like)}</p>
                </SunInfo>
            </BoxContainer>
            <p>{`${today.main.humidity}`} %</p>
        </>
    )

}
