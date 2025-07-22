import './appDaily.scss';

const AppDaily = () => {
    return (
        <section className="weather__daily">
            <div className="weather__daily-header">
                <h3 className="weather__daily-history">
                    <span className="weather__days">7</span>
                    <span>- Day Forecast</span>
                </h3>
                <span className="weather__overview">Weekly Overview</span>
            </div>
            <div className="weather__daily-items"></div>
        </section>
    )
}

export default AppDaily;