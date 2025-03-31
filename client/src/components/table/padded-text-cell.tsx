import { Text } from "@radix-ui/themes";
import { ReactNode } from "react";
import { PaddedCell } from "./padded-cell";

export const PaddedTextCell = ({ children }: { children: ReactNode}) => (
    <PaddedCell>
        <Text size="2">
            {children}
        </Text>
    </PaddedCell>
);