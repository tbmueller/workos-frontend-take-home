import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Users } from './users'
import { Roles } from './roles'
import { NotFound } from './not-found'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/users" />}></Route>
        <Route path="/users" element={<Users/>} />
        <Route path="/roles" element={<Roles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
