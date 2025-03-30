import { useContext } from "react"
import { UserContext } from "./user-context"
import { Avatar, Flex } from "@radix-ui/themes";
import { userName } from "./util";

export const PhotoNameCell = () => {
    const user = useContext(UserContext);

    if (user == null) {
        return null;
    }

    const avatarLetter = user.first == null ? "" : user.first.slice(0, 1);
    const name = userName(user);

    return (
        <Flex gap="2" px="3">
            <Avatar width="5" height="5" radius="full" src={user.photo} fallback={avatarLetter} />
            {name}
        </Flex>
    );
}
