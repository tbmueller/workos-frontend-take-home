export interface User {
    id: string;
    createdAt: string;
    updatedAt: string;
    first: string;
    last: string;
    roleId: string;
    photo?: string;
}

export interface Role {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    description?: string;
    isDefault: boolean;
}
