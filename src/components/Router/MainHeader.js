import { Outlet } from 'react-router-dom'
import Navbar from '../AddNewSections';

const Home= () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
       
    )
}
export default Home;