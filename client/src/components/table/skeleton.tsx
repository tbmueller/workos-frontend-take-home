import { Flex } from "@radix-ui/themes";
import { memo } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Skeleton as RadixSkeleton } from "@radix-ui/themes";

const ROWS = 11;

export const Skeleton = memo(() => {
    const rows = new Array(ROWS).fill(null).map(() => <RadixSkeleton width="100%" key={uuidv4()} minHeight="44px" />);
    return (
        <Flex gap="2" direction="column">
            {rows}
        </Flex>
    );
});