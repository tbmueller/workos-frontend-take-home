import { useContext } from "react";
import { Role, User } from "../../types/entities";
import { RolesContext } from "../roles/roles-context";

export const userJoinDate = (user: NonNullable<User>): string => (
    user.createdAt == null ? "" : Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(user.createdAt))
);

export const userName = (user: NonNullable<User>): string => {
    if (user.last == null) {
        if (user.first == null) {
            return user.id;
        }

        return user.first;
    }

    return `${user.first} ${user.last}`;
};

export const useUserRole = (user: NonNullable<User>): string => {
    const roles = useContext(RolesContext);
    const userRole = roles?.find((r: Role) => r.id === user.roleId);
    if (userRole == null) {
        return "";
    }

    return userRole.name;
}