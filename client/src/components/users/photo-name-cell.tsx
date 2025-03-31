import { useContext } from "react"
import { UserContext } from "./contexts/user-context"
import { Avatar, Text } from "@radix-ui/themes";
import { userName } from "./util";
import { CellContents } from "../table/cell-contents";

export const PhotoNameCell = () => {
    const user = useContext(UserContext);

    if (user == null) {
        return null;
    }

    const avatarLetter = user.first == null ? "" : user.first.slice(0, 1);
    const name = userName(user);

    return (
        <CellContents>
            <Avatar size="1" radius="full" src={user.photo} fallback={avatarLetter} />
            <Text size="2" align="center">
                {name}
            </Text>
        </CellContents>
    );
}
