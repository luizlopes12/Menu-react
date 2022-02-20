import Header from "./header/Header";
import {GlobalStyle} from './global/GlobalStyle'
import {
        BrowserRouter as Router,
        Routes,
        Route
        } from 'react-router-dom'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Router basename={process.env.PUBLIC_URL}>
      <Routes>
      
        <Route path="/" element={<Header/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
