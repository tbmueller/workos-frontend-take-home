import { User } from "../../types/entities";



export const userJoinDate = (user: NonNullable<User>): string => (user.createdAt == null ? "" : Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(user.createdAt)));

export const userName = (user: NonNullable<User>): string => {
    if (user.last == null) {
        if (user.first == null) {
            return user.id;
        }

        return user.first;
    }

    return `${user.first} ${user.last}`;
};