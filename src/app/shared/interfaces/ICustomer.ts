export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    orderTotal?: number;
    latitude?: number;
    longitude?: number;
}