import { AuthDtoDomain } from "./auth-dto.domain";

export class NotificationDtoDomain {
    id: number;
    name: String;
    creationDate: Date;
    expiryDate: Date;
    type: String;
    isValidForFilter: boolean;
    auth: AuthDtoDomain;
}