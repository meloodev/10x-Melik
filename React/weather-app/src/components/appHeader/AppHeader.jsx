import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="weather">
            <div className="container">
                <div className="weather__header">
                    <div className="weather__header-top">
                        <h1>Weather App</h1>
                    </div>

                    <div className="weather__header__icons">
                        <div className="header__icon-cover menu">

                            <i role="button" aria-label="Open settings menu" className="fa-solid fa-ellipsis-vertical"></i>


                            <ul className="settings">
                                <li className="weather__settings">
                                    <button>settings</button>
                                </li>
                                <li className="weather__theme">
                                    <i className="fa-solid fa-chevron-left"></i>
                                    <button aria-haspopup="true">themes</button>
                                    <ul className="submenu">
                                        <li className="dark">
                                            <button>dark</button>
                                            <i className="fa-solid"></i>
                                        </li>
                                        <li className="light">
                                            <button>light</button>
                                            <i className="fa-solid fa-check"></i>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loader__cover"></div>
            <div className="loader"></div>
            <div className="err__message">
                <span>something went wrong</span>
            </div>
        </header>
    )
}

export default AppHeader;