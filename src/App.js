import { useContext, useState } from "react";
import LeftBar from "./components/LeftBar";
import { ThemeContext} from "./context/themeContext";
import DashBoard from "./components/DashBoard";
import Account from "./components/Account";
import Drive from "./components/Drive";
import Statistics from "./components/Statistics";

function App() {

  const [activeComponent, setActiveComponent] = useState('DashBoard')

  console.log(activeComponent)

  const renderCurrentCompoent = () => {
    switch (activeComponent.toLowerCase()) {
        case "":
        case "dashboard":
            return <DashBoard />;
        case "drive":
            return <Drive />;
        case "statistics":
            return <Statistics />;
        case "account":
            return <Account />;
        default:
            return null;
    }
};


  return (
    <div className="App">
      <LeftBar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
      <div className="rightBlock" activeComponent={activeComponent}>
        {renderCurrentCompoent()}
      </div>
    </div>
  );
}

export default App;
