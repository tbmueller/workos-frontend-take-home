import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Callout } from "@radix-ui/themes"
import { useLocation } from "react-router-dom"

export const NotFound = () => {
    const location = useLocation();
    return <>
        <Callout.Root color="red">
            <Callout.Icon>
                <ExclamationTriangleIcon />
            </Callout.Icon>
            <Callout.Text>
                Error: Route {location.pathname} not found.
            </Callout.Text>
        </Callout.Root>
    </>
}