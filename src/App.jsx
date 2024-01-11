import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home/Home.jsx'
import ChatRoom from './pages/ChatRoom/ChatRoom.jsx'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout  />}>
      <Route index element={<Home />} />
      <Route path="ChatRoom" element={<ChatRoom />} />

  
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App