
import './App.css';
import Banner from './Components/Bannder/Banner';
import Blog from './Components/Blog/Blog';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Gallery from './Components/Gallery/Gallery';
import NotFound from './Components/NotFound/NotFound';
import Resgistration from './Components/Registration/Resgistration';
import Services from './Components/Services/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import SingleService from './SingleService/SingleService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
       
      <AuthProvider>
          <Router>
            <Header></Header>
              <Switch>

                <Route exact path="/">
                    <Banner></Banner>
                    <Services></Services>
                </Route>

                <Route exact path="/home">
                    <Banner></Banner>
                    <Services></Services>
                </Route>

                <Route exact path="/gallery">
                  <Gallery></Gallery>
                </Route>

                <Route exact path="/doctor">
                  <Doctors></Doctors>
                </Route>

                <Route exact path="/blog">
                  <Blog></Blog>
                </Route>
                
                <Route exact path="/login">
                      
                    <Login></Login>
                    
                </Route>
                <PrivateRoute exact path="/service/:id">
                      
                    <SingleService/>
                    
                </PrivateRoute>
                
                <Route exact path="/registration">
                  <Resgistration></Resgistration>
                </Route>

                <Route exact path="*">
                  <NotFound></NotFound>
                </Route>

              </Switch>
          <Footer></Footer>
          </Router>
      </AuthProvider>
       
    </div>
  );
}

export default App;
