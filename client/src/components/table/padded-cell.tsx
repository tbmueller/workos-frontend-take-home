import { Table } from "@radix-ui/themes";
import { ReactNode } from "react";
import { CellPadding } from "./cell-padding";

export const PaddedCell = ({ children }: { children: ReactNode}) => (
    <Table.Cell>
        <CellPadding>
            {children}
        </CellPadding>
    </Table.Cell>
);