import { Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

export const CellPadding = ({ children }: { children: ReactNode }) => {
    return <Flex gap="2" px="3" direction={{
        initial: "column",
        md: "row",
        lg: "row"
    }}
        align="center"
    >
        {children}
    </Flex>;
}