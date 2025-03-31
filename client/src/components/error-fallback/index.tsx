import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Callout } from "@radix-ui/themes"
import { FallbackProps } from "react-error-boundary"

export const ErrorFallback = ({ error }: FallbackProps) => {
    return <>
        <Callout.Root color="red">
            <Callout.Icon>
                <ExclamationTriangleIcon />
            </Callout.Icon>
            <Callout.Text>
                Error: {error.message}
            </Callout.Text>
        </Callout.Root>
    </>
}
