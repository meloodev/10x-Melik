import enjoy from '@images/enjoy.svg';
import './appTips.scss';

const AppTips = () => {
    return (
        <aside className="weather__tips">
            <div className="weather__tips-cover">
                <h3 className="weather__tips-title">Weather Tips</h3>
                <div className="weather__tips-body">
                    <img src={enjoy} alt="enjoy" />
                    <p>Enjoy the weather today!</p>
                </div>
            </div>
        </aside>
    )
}

export default AppTips;