import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import Chat from './routes/Chat.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
