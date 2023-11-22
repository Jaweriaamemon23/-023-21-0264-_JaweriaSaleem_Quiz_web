import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar, { Navbar } from './Components/Navbar';
import Crousal from './Components/Welcome';
import SecurityUpdate from './Components/Securityupdate';
import Statistics from './Components/Statistics';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <NavigationBar/>
<Crousal/>
<Statistics/>
<SecurityUpdate/>
<Footer/>
    </>
    );
}

export default App;
