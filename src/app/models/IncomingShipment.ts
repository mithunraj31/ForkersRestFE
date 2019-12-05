import { ShipmentProduct } from './ShipmentProduct';
import { User } from './User';

export interface IncomingShipment {
    incomingShipmentId: number;
    shipmentNo: string;
    arrivalDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
    products?: ShipmentProduct[];
    user:User
}