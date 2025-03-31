import { Text } from "@radix-ui/themes";
import { ReactNode } from "react";
import { SimpleCell } from "./simple-cell";

export const SimpleTextCell = ({ children }: { children: ReactNode}) => (
    <SimpleCell>
        <Text size="2">
            {children}
        </Text>
    </SimpleCell>
);