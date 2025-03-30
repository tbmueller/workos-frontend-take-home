import './App.css'
import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Users } from './users'
import { Roles } from './roles'
import { NotFound } from './not-found'
import { Box, Container, Tabs } from '@radix-ui/themes'

function App() {
  const location = useLocation();

  return (
    <Container
      size={{
        initial: "2",
        lg: "4"
      }}
    >
      <Tabs.Root defaultValue={location.pathname}>
        <Tabs.List>
          <NavLink to="/users">
            <Tabs.Trigger value="/users">Users</Tabs.Trigger>
          </NavLink>
          <NavLink to="/roles">
            <Tabs.Trigger value="/roles">Roles</Tabs.Trigger>
          </NavLink>
        </Tabs.List>
        <Box pt="3">
          <Routes>
              <Route index element={<Navigate to="/users" />}></Route>
              <Route path="/users" element={<Users/>} />
              <Route path="/roles" element={<Roles />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Tabs.Root>
    </Container>
  )
}

export default App
