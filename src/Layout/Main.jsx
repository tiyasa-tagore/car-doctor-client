
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navabr from '../Pages/Shared/Navbar/Navabr';

const Main = () => {
    return (
        <div>
            <Navabr></Navabr>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;