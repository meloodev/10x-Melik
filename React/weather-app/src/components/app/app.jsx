import AppHeader from "../appHeader/appHeader";

import AppTemp from "../appTemp/AppTemp";
import AppDaily from "../appDaily/AppDaily";

import AppDetails from "../appDetails/AppDetails";
import AppTips from "../appTips/AppTips";

import './app.scss';

const App = () => {
    return (
        <>
            <AppHeader />
            <main>
                <div className="container">
                    <div className="container__inner">
                        <div className="container__left">
                            <AppTemp />
                            <AppDaily />
                        </div>
                        <div className="container__right">
                            <AppDetails />
                            <AppTips />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App;

