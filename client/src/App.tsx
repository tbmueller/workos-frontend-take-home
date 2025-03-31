import { Navigate, Route, Routes } from 'react-router-dom'
import { Users } from './components/users'
import { Roles } from './components/roles'
import { NotFound } from './components/not-found'
import { Container, Flex, TabNav } from '@radix-ui/themes'
import { use } from 'react'
import { RolesContext } from './components/roles/roles-context'
import { RoutedTabNavLink } from './components/routed-tab-nav-link'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/error-fallback'
import { fetchRoles } from './queries/fetch-roles'

const rolesPromise = fetchRoles();

function App() {

  const sizing = {
    initial: "300px",
    xs: "425px",
    lg: "850px",
  };

  const { data: roles } = use(rolesPromise);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Flex direction="column" height="100%" gap="3">
        <Container py="7" px="2">
          <Container maxWidth={sizing} maxHeight="820px">
            <Flex width={sizing} gap="5" direction="column">
              <TabNav.Root>
                <RoutedTabNavLink href="/users" text="Users" />
                <RoutedTabNavLink href="/roles" text="Roles" />
              </TabNav.Root>
              <RolesContext value={roles}>
                <Routes>
                    <Route index element={<Navigate to="/users" />}></Route>
                    <Route path="/users" element={<Users/>} />
                    <Route path="/roles" element={<Roles />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
              </RolesContext>
            </Flex>
          </Container>
        </Container>
      </Flex>
    </ErrorBoundary>
  )
}

export default App
