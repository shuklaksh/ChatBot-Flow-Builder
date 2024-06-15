import './App.css'
import Navbar from "./components/navbar/Navbar";
import ChatFlow from './components/chatflow/ChatFlow';

function App() {

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="h-full w-full">
        <ChatFlow />
      </div> 
    </div>
  )
}

export default App
