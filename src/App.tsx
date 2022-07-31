import {SignUpPage} from "./pages/SignUpPage/SignUpPage";
import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <div className='App'>
              <Routes>
                  <Route path='/' element={<SignUpPage />}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
