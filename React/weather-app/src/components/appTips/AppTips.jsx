import enjoy from '@images/enjoy.svg';
import './appTips.scss';

const AppTips = () => {
    return (
        <aside class="weather__tips">
            <div class="weather__tips-cover">
                <h3 class="weather__tips-title">Weather Tips</h3>
                <div class="weather__tips-body">
                    <img src={enjoy} alt="enjoy" />
                    <p>Enjoy the weather today!</p>
                </div>
            </div>
        </aside>
    )
}

export default AppTips;