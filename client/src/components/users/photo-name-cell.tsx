import { useContext } from "react"
import { UserContext } from "./user-context"
import { Avatar, Text } from "@radix-ui/themes";
import { userName } from "./util";
import { CellPadding } from "../table/cell-padding";

export const PhotoNameCell = () => {
    const user = useContext(UserContext);

    if (user == null) {
        return null;
    }

    const avatarLetter = user.first == null ? "" : user.first.slice(0, 1);
    const name = userName(user);

    return (
        <CellPadding>
            <Avatar size="1" radius="full" src={user.photo} fallback={avatarLetter} />
            <Text size="2" align="center">
                {name}
            </Text>
        </CellPadding>
    );
}
