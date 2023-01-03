import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,actions,comedy,trending,adventure} from './Components/Constants/urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Trending' url={trending} isSmall />
      <RowPost title='Action Movies' url={actions} isSmall />
      <RowPost title='Comedy Movies' url={comedy} isSmall />
      <RowPost title='Adventure Movies' url={adventure} isSmall />
      
    </div>
  );
}

export default App;
