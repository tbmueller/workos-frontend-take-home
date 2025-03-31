import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

export const EmptyState = () => (
    <Callout.Root color="yellow">
        <Callout.Icon>
            <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
            No users found.
        </Callout.Text>
    </Callout.Root>
)