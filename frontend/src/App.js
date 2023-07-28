import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VideoList} />
        <Route path="/video/:videoId" component={VideoDetail} />
      </Switch>
    </Router>
  );
}

export default App;
