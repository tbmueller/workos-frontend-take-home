import { Role } from "../../types/entities";

export const lastUpdatedTime = (role: Role): string => (
    role.updatedAt == null ? "" : Intl.DateTimeFormat("en-US", { timeStyle: "long" }).format(new Date(role.updatedAt))
);

export const defaultString = (role: Role): string => (
    role.isDefault ? "✅" : ""
);
