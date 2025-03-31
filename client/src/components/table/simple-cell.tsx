import { Table } from "@radix-ui/themes";
import { ReactNode } from "react";
import { CellContents } from "./cell-contents";

export const SimpleCell = ({ children }: { children: ReactNode}) => (
    <Table.Cell>
        <CellContents>
            {children}
        </CellContents>
    </Table.Cell>
);