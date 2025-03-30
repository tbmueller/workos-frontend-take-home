import { useContext } from "react"
import { UserContext } from "./user-context"
import { Avatar } from "@radix-ui/themes";
import { User } from "../../types/entities";

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

const userName = (user: NonNullable<User>): string => {
    if (user.last == null) {
        if (user.first == null) {
            return user.id;
        }

        return user.first;
    }

    return `${user.first} ${user.last}`;
};