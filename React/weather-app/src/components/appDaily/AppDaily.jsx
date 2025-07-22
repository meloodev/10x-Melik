import './appDaily.scss';

const AppDaily = () => {
    return (
        <section class="weather__daily">
            <div class="weather__daily-header">
                <h3 class="weather__daily-history">
                    <span class="weather__days">7</span>
                    <span>- Day Forecast</span>
                </h3>
                <span class="weather__overview">Weekly Overview</span>
            </div>
            <div class="weather__daily-items"></div>
        </section>
    )
}

export default AppDaily;