import { Text } from "@radix-ui/themes";
import { ReactNode } from "react";
import { SimpleCell } from "./simple-text-cell copy";

export const SimpleTextCell = ({ children }: { children: ReactNode}) => (
    <SimpleCell>
        <Text size="2">
            {children}
        </Text>
    </SimpleCell>
);