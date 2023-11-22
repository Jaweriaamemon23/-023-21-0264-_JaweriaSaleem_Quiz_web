import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar, { Navbar } from './Components/Navbar';
import Crousal from './Components/Welcome';
import SecurityUpdate from './Components/Securityupdate';
import Statistics from './Components/Statistics';


function App() {
  return (
    <>
    <NavigationBar/>
<Crousal/>
<Statistics/>
<SecurityUpdate/>

    </>
    );
}

export default App;
