import Splitleft from './components/Splitleft'
import Middlesec from './components/middlesection'
import Topnav from './components/Topnav'
import Myprojects from './components/myprojects'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">

<Topnav/>
<div className="full-cont">
<Splitleft/>

</div>

<Middlesec/>

<Myprojects/>


<Footer/>
    </div>
  );
}

export default App;
