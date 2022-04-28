import './App.css';
import JumbotronComp from './Components/Styling-components/Jumbotron';
import NavbarComp from './Components/Styling-components/Navbar';
import ContentComp from './Components/Styling-components/Content';
import TableComp from './Components/Styling-components/Table';
import TableComp2 from './Components/Styling-components/Table2';
import TableComp3 from './Components/Styling-components/Table3';
import FooterComp from './Components/Styling-components/Footer';
import ListComp from './Components/Styling-components/List';
import Validasi from './Components/Form-validation/Validation';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <JumbotronComp />
      <ContentComp />
      <ListComp />
      <TableComp />
      <TableComp2 />
      <TableComp3 />
      <Validasi />
      <FooterComp />
    </div>
  );
}

export default App;
