import './appTemp.scss';
import location from '@images/location.svg';
import cloudy from '@images/cloudy.svg';
import done from '@images/done.svg';
import feels from '@images/feels.svg';
import rain from '@images/rain.png';

const AppTemp = () => {
    return (
        <section className="weather__temp">
            <div className="weather__cover">
                <div className="weather__city">
                    <img src={location} alt="location"/>
                    <h2>New York</h2>
                </div>

                <div className="weather__forecast">
                    <div className="weather__forecast-temp">
                        <div className="weather__loader">
                            <div className="weather__loader-udating">
                                <img src={cloudy} alt="loading"/>
                                <span>updating...</span>
                            </div>
                            <div className="weather__loader-done">
                                <img src={done} alt="updated"/>
                                <span>updated</span>
                            </div>
                        </div>
                        <h2>22</h2>
                    </div>
                    <span>°</span>
                </div>

                <div className="weather__info">
                    <span className="weather__sky">Cloudy</span>
                    <div className="weather__feels">
                        <img src={feels} alt="feels"/>
                        <span>Feels like <span className="weather__feels-temp">24</span>°</span>
                    </div>
                </div>
            </div>
            <div className="weather__status">
                <img src={cloudy} alt="weather-icon"/>
                <time datetime="2025-06-28">Sat, Jun 28</time>
            </div>

            <div className="weather__feels-rain">
                <img src={rain} alt="feels"/>
                <span>Rain:</span>
                <span className="daily-rain">No</span>
                <span className="rain-chance">(100%)</span>
            </div>
        </section>
    )
}

export default AppTemp;