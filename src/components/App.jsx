
//import
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        {/* //functional -rendering */}
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={exampleVideoData[0]} />
      </div>
      <div className="col-md-5">
        {/* props <= videos */}
        <VideoList videos={exampleVideoData}/>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;



//=> move it to index.js
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );