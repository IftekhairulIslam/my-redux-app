import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

enum VIEWS {
  POSTS = "POSTS",
  TODOS = "TODOS",
}
type ViewType = VIEWS.POSTS | VIEWS.TODOS;

function App() {
  const [currentView, setCurrentView] = useState<ViewType>(VIEWS.POSTS);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={() => handleViewChange(VIEWS.POSTS)}>Posts</button>
          <button onClick={() => handleViewChange(VIEWS.TODOS)}>Todos</button>
        </div>
        <h1>{currentView}</h1>
      </div>
      <div>
        {currentView === VIEWS.POSTS && <Posts />}
        {/* {currentView === VIEWS.TODOS && <Todos />} */}
      </div>
    </div>
  );
}

export default App;
