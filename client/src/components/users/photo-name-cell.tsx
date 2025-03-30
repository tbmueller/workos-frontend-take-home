import { useContext } from "react"
import { UserContext } from "./user-context"
import { Avatar } from "@radix-ui/themes";
import { userName } from "./util";

export const PhotoNameCell = () => {
    const user = useContext(UserContext);

    if (user == null) {
        return null;
    }

    const avatarLetter = user.first == null ? "" : user.first.slice(0, 1);
    const name = userName(user);

    return (
        <>
            <Avatar src={user.photo} fallback={avatarLetter} />
            {name}
        </>
    );
}
