import './updating.scss';
import cloudy from '@images/cloudy.svg';

const Updating = () => {
    return (
        <>
            <div className="weather__loader-udating">
                <img src={cloudy} alt="loading" />
                <span>updating...</span>
            </div>
        </>
    )
}

export default Updating;