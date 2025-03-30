import './App.css'
import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Users } from './users'
import { Roles } from './roles'
import { NotFound } from './not-found'
import { Box, Container, Flex, Tabs } from '@radix-ui/themes'

function App() {
  const location = useLocation();

  return (
    // TODO: break this up a bit for readability
    <Flex direction="column" height="100%" gap="3">
      <Container py="7" px="2">
        <Container maxWidth="850px" maxHeight="820px">
          <Tabs.Root defaultValue={location.pathname}>
            <Flex asChild width="850px" gap="5">
              <>
                <Tabs.List color="purple">
                  <NavLink to="/users">
                    <Tabs.Trigger value="/users">Users</Tabs.Trigger>
                  </NavLink>
                  <NavLink to="/roles">
                    <Tabs.Trigger value="/roles">Roles</Tabs.Trigger>
                  </NavLink>
                </Tabs.List>
                {/* TODO: Re-examine this spacing */}
                <Box pt="3">
                  <Routes>
                      <Route index element={<Navigate to="/users" />}></Route>
                      <Route path="/users" element={<Users/>} />
                      <Route path="/roles" element={<Roles />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
                </Box>
              </>
            </Flex>
          </Tabs.Root>
        </Container>
      </Container>
    </Flex>
  )
}

export default App
