import { RouterProvider } from "react-router-dom"
import { myRouter } from "./Router"
import './index.css'

function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
