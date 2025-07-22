import search from '@images/search.svg';
import './modal.scss';
const Modal = () => {
    return (
        <>
            <div className="modal" role="dialog" aria-modal="true">
                <div className="container">
                    <div className="modal__inner">
                        <div className="modal__header">
                            <div className="modal__input">
                                <label htmlFor="loc" aria-label="Search">
                                    <img src={search} alt="search-icon" />
                                </label>
                                <input id="loc" type="search" placeholder="Please enter your location" />
                            </div>
                            <div className="modal__save-box">
                                <button className="modal__save">Save</button>
                                <button className="modal__cancel">Cancel</button>
                            </div>
                        </div>
                        <div className="modal__temperature">
                            <div className="celsius">
                                <input type="radio" name="radio" id="cels" defaultChecked={true} />
                                <label htmlFor="cels">°C</label>
                            </div>
                            <span>/</span>
                            <div className="fahrenheit">
                                <input type="radio" name="radio" id="fahren" />
                                <label htmlFor="fahren">°F</label>
                            </div>
                        </div>
                        <div className="modal__history">
                            <div className="modal__history-header">
                                <span>Search history</span>

                                <button className="modal__trash-btn" aria-label="Clear search history">
                                    <i className="fa-solid fa-trash"></i>
                                </button>

                            </div>
                            <div className="modal__history-cities">
                                {/* <!-- ///// --> */}
                            </div>
                        </div>

                        <div className="modal__popular">
                            <div className="modal__popular-title">Popular cities</div>
                            <div className="modal__popular-inner">
                                <span>Batumi</span>
                                <span>Ajara</span>
                                <span>Tbilisi</span>
                                <span>Kutaisi</span>
                                <span>Rustavi</span>
                                <span>Zugdidi</span>
                                <span>Poti</span>
                                <span>Gori</span>
                                <span>Senaki</span>
                                <span>Bakuriani</span>
                                <span>Borjomi</span>
                                <span>Kvareli</span>
                                <span>Martvili</span>
                                <span>Tskaltubo</span>
                                <span>Dmanisi</span>
                                <span>Mestia</span>
                                <span>Tetri Tsqaro</span>
                                <span>Ambrolauri</span>
                                <span>Gudauri</span>
                                <span>Dusheti</span>
                                <span>Tokyo</span>
                                <span>New York</span>
                                <span>London</span>
                                <span>Paris</span>
                                <span>Istanbul</span>
                                <span>Dubai</span>
                                <span>Hong Kong</span>
                                <span>Bangkok</span>
                                <span>Singapore</span>
                                <span>Rome</span>
                                <span>Erevan</span>
                                <span>Barcelona</span>
                                <span>Seoul</span>
                                <span>Los Angeles</span>
                                <span>Moscow</span>
                                <span>Beijing</span>
                                <span>Berlin</span>
                                <span>Mumbai</span>
                                <span>San Francisco</span>
                                <span>Shanghai</span>
                                <span>Sydney</span>
                                <span>Georgia</span>
                                <span>Amsterdam</span>
                                <span>Mexico City</span>
                                <span>Buenos Aires</span>
                                <span>Cape Town</span>
                                <span>Vancouver</span>
                                <span>Toronto</span>
                                <span>Madrid</span>
                                <span>Lisbon</span>
                                <span>Prague</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;