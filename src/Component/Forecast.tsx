import styled from "styled-components";

const NowWeather = styled.h1`
    font-size: 52px;
    margin: 0;
`;

const TimeWeather = styled.div`
    background: ${({ theme }: { theme: any }) => theme.boxColor}; 
    border-radius: 21px;
    margin: 12px;
`;

const MoreWeatherTitle = styled.div`
    font-weight: bold;
    padding: 11px;
    color: #8A8A8A;
    @media screen and (max-height: 850px) {
        font-size: 14px;
    }
`;

const WeatherList = styled.div`
    width: auto;
    height: auto;
    margin: 10px;
    text-align: center;
    @media screen and (orientation: landscape) {
        width: 18vh;
    }
`;

const ListIcon = styled.img`
    width: 9vh;
    @media screen and (max-width: 480px) {
        width: 8vh;
    }
    @media screen and (max-width: 850px) {
        width: 7vh;
    }
    @media screen and (max-width: 1250px) {
        width: 17vh;
    }
`;

const WeatherCountry = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 0;
`;

const PresentWeather = styled.div`
    width: 30vm;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 12px 12px;
    @media screen and (orientation: landscape) {
        font-size: 15px;
     }
`;

const NowWeatherIcon = styled.img`
    width: 125px;
`;

const SunInfo = styled.div`
    width: 50%;
    height: auto;
    margin: 10px;
    padding: 15px;
    background: ${({ theme }: { theme: any }) => theme.boxColor};
    border-radius: 21px;
    overflow: hidden;
`;

const BoxContainer = styled.div`
    display: flex;
`;

const SunTime = styled.h1`
    margin: 0;
    font-size: 28px;
    text-align: left;
    @media screen and (max-width: 480px) {
        font-size: 27px;
     }
`;

const WindIcon = styled.img`
    position: relative;
    width: 42px;
    margin: 10px;
    @media screen and (max-width: 850px) {
        top: 10%;
    }
`;

const BoxTitle = styled.p`
    margin-top: 0;
    text-align: left;
    font-weight: bold;
    color: #8A8A8A;
`;

const WeatherTime = styled.p`
    margin: 0;
    font-weight: bold;
`;

const FeelLike = styled.img`
    width: 28px;
`;

const SunImg = styled.img`
    width: 10vh;
    margin: auto;
    padding: 12px;
    display: block;
    @media screen and (max-width: 850px) {
        width: 8vh;
    }
`;

const MoreWeather = styled.div`
    width: auto;
    height: auto;
    display: flex;
    overflow-x: scroll;
`;

const InfoContainer = styled.div`
    padding: 12px;
    height: auto;
    margin: 12px 12px 10vh 12px;
    border-radius: 12px;
    background: ${({ theme }: { theme: any }) => theme.boxColor};
    @media screen and (max-width: 450px) {
        font-size: 13px;
    }
`;

const InfoLeft = styled.div`
    float: right;
    color: #8A8A8A;
    @media screen and (max-height: 850px) {
        font-size: 14px;
    }
`;

const InfoRight = styled.div`
    color: #8A8A8A;
    @media screen and (max-height: 850px) {
        font-size: 14px;
    }
`;

const LinkWeb = styled.a`
    text-decoration: none;
    color: #8A8A8A;
`;

const WeatherSubContainer = styled.div`
    margin: 12px;
    @media screen and (max-height: 850px) {
        font-size: 14px;
    }
`;

const ForecastSubContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ForecastInfo = styled.div`
    margin: 7px 0 7px 0;
    padding: 7px;
    @media screen and (max-height: 850px) {
        font-size: 14px;
    }
`;

const NowForecastInfo = styled.p`
    background: ${({ theme }: { theme: any }) => theme.boxColor};
    font-weight: bold;
    padding: 15px;
    margin: 10px;
    border-radius: 15px;
    text-align: center;
`;

export const Forecast = ({ data }: any): JSX.Element => {

    const today = data.list[0]
    const Degree = ({ temp }: { temp: number }): JSX.Element => (
        <>
            {temp}
            <sup>°</sup>
        </>
    )

    const getSunTime = (timestamp: number): string => {
        const date = new Date(timestamp * 1000);
        let meridiem: string = '오전';
        let hours: number | string = date.getHours();
        let minutes: number | string = date.getMinutes();

        if (hours > 12) {
            meridiem = '오후';
            hours = hours - 12
        }
        minutes < 10 ? minutes = `0${minutes}` : minutes = `${minutes}`

        return `${meridiem} ${hours}:${minutes}`;
    }

    const NowDays = () => {
        const date = new Date();
        let meridiem: string = '오전';
        let hours: number = date.getHours();
        let minutes: number | string = date.getMinutes();
        let nowMonth: number = date.getMonth();
        let nowDate: number = date.getDate();

        if (hours > 12) {
            meridiem = '오후';
            hours -= 12
        }

        if (minutes < 10) {
            minutes = `0${minutes}`
        }

        return `${nowMonth + 1}월 ${nowDate}일 ${meridiem} ${hours}:${minutes}`;
    }

    const feelLike = () => {
        if (Math.round(today.main.feels_like) < 4) {
            return '바깥이 춥기에 옷은 따뜻하게 입고 나가는 것이 좋아요.'
        } else if (Math.round(today.main.feels_like) < 8) {
            return '가을 같은 날씨이나 아직 긴 옷이나 따뜻한 옷을 입어야 할 때에요.'
        } else if (Math.round(today.main.feels_like) < 11) {
            return '날씨가 점차 풀리면서 바람이 불 때에요.'
        }
        else if (Math.round(today.main.feels_like) < 16) {
            return '봄 같은 날씨이나 바람으로 인해 선선할 수 있어요.'
        }
        else if (Math.round(today.main.feels_like) < 19) {
            return '살짝 더워졌어요. 얇은 긴팔을 추천드려요'
        }
        else if (Math.round(today.main.feels_like) < 22) {
            return '많이 더워졌어요. 탈진 방지를 위해 가끔씩 수분 보충을 해주세요'
        }
        else if (Math.round(today.main.feels_like) < 27) {
            return '외출 시 반팔과 선크림은 필수에요. 수분 보충도 필수로 해주세요.'
        }
    }

    const getDay = () => {
        const date = new Date();
        const day: number | string = date.getDay().toString();
        const returnDay = day === '0' ? '(일)' : day === '1' ? '(월)' : day === '2' ? '(화)' : day === '3' ? '(수)' : day === '4' ? '(목)' : day === '5' ? '(금)' : '(토)'

        return returnDay
    }
    return (
        <>
            <PresentWeather>
                <NowWeather>
                    <Degree temp={Math.round(today.main.temp)} />
                    <WeatherCountry>{data.name}, ({data.country})</WeatherCountry>
                </NowWeather>
                <NowWeatherIcon src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} />
            </PresentWeather>
            <WeatherSubContainer>
                <p>{today.weather[0].description} ({today.weather[0].main})</p>
                <p>최고: <Degree temp={Math.ceil(today.main.temp_max)} /> | 최저: <Degree temp={Math.floor(today.main.temp_min)} /></p>
            </WeatherSubContainer>
            <NowForecastInfo>{data.name}의 현재 날씨는 {today.weather[0].description}입니다.</NowForecastInfo>
            <TimeWeather>
                <MoreWeatherTitle>시간별 일기예보</MoreWeatherTitle>
                <MoreWeather>
                    {data.list.map((itm: any, i: any) => (
                        <WeatherList key={i}>
                            <WeatherTime>{i === 0 ? '지금' : `${new Date(itm.dt * 1000).getHours()}시`}</WeatherTime>
                            <ListIcon src={`http://openweathermap.org/img/wn/${itm.weather[0].icon}@2x.png`} />
                            <Degree temp={Math.round(itm.main.temp)} />
                        </WeatherList>
                    ))
                    }
                </MoreWeather>
            </TimeWeather>
            <BoxContainer>
                <SunInfo>
                    <BoxTitle>일출</BoxTitle>
                    <SunTime>{getSunTime(data.sunrise)}</SunTime>
                    <SunImg src="./img/sunrise.svg" />
                </SunInfo>
                <SunInfo>
                    <BoxTitle>일몰</BoxTitle>
                    <SunTime>{getSunTime(data.sunset)}</SunTime>
                    <SunImg src="./img/sunset.svg" />
                </SunInfo>
            </BoxContainer>
            <BoxContainer>
                <SunInfo>
                    <BoxTitle>풍속</BoxTitle>
                    <SunTime>{today.wind.speed}m/s</SunTime>
                    <WindIcon src="./img/wind.svg" />
                </SunInfo>
                <SunInfo>
                    <BoxTitle>체감온도</BoxTitle>
                    <ForecastSubContainer>
                        <SunTime>{Math.round(today.main.feels_like)}°</SunTime>
                        <FeelLike src="./img/feellike.svg" />
                    </ForecastSubContainer>
                    <ForecastInfo>{feelLike()}</ForecastInfo>
                </SunInfo>
            </BoxContainer>
            <BoxContainer>
                <SunInfo>
                    <BoxTitle>습도</BoxTitle>
                    <SunTime>{today.main.humidity} %</SunTime>
                    <WindIcon src="./img/Humidity.svg" />
                </SunInfo>
                <SunInfo>
                    <BoxTitle>기압</BoxTitle>
                    <SunTime>{today.main.pressure} hPa</SunTime>
                    <WindIcon src="./img/pressure.svg" />
                </SunInfo>
            </BoxContainer>
            <InfoContainer>
                <InfoLeft>
                    {NowDays()} | {getDay()} 업데이트
                </InfoLeft>
                <InfoRight>
                    <LinkWeb href="https://openweathermap.org/">제공: OpenWeather</LinkWeb>
                </InfoRight>
            </InfoContainer>

        </>
    )

}
