import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full bg-zinc-800 flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full bg-zinc-800 h-full flex flex-col">
      <Navbar/>
      <Paste/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="w-full bg-zinc-800 h-full flex flex-col">
      <Navbar/>
      <ViewPaste/>
    </div>,
    }
  ]
)

function App() {

  return (

    <RouterProvider router={router}/>
  )
}

export default App
