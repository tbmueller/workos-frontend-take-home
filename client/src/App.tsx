import './App.css'
import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Users } from './components/users'
import { Roles } from './components/roles'
import { NotFound } from './components/not-found'
import { Box, Container, Flex, TabNav } from '@radix-ui/themes'

function App() {
  const { pathname } = useLocation();

  const sizing = {
    initial: "300px",
    xs: "425px",
    lg: "850px",
  };

  return (
    // TODO: break this up a bit for readability
    <Flex direction="column" height="100%" gap="3">
      <Container py="7" px="2">
        <Container maxWidth={sizing} maxHeight="820px">
          <Flex width={sizing} gap="5" direction="column">
            <TabNav.Root color="purple">
              <Box px="2">
                <TabNav.Link asChild href="/users" active={pathname === "/users"}>
                    <NavLink to="/users">Users</NavLink>
                </TabNav.Link>
              </Box>
              <Box px="2">
                <TabNav.Link asChild href="/roles" active={pathname === "/roles"}>
                  <NavLink to="/roles">Roles</NavLink>
                </TabNav.Link>
              </Box>
            </TabNav.Root>
            <Routes>
                <Route index element={<Navigate to="/users" />}></Route>
                <Route path="/users" element={<Users/>} />
                <Route path="/roles" element={<Roles />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </Flex>
        </Container>
      </Container>
    </Flex>
  )
}

export default App
