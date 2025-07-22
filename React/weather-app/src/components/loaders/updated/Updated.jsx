import done from '@images/done.svg';
import './updated.scss';
const Updated = () => {
    return (
        <>
            <div className="weather__loader-done">
                <img src={done} alt="updated" />
                <span>updated</span>
            </div>
        </>
    )
}

export default Updated;