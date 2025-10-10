//Users ID

//Open House Item
//Address & Date
//Group Sub Item
//Group Name, Contact, Realtor, Realtor Contact Items
//Group Response Status

export interface Ledger {
    id: string;
    address: string;
    date: Date;
    contact: GroupContact[];
    realtor: RealtorContact[];
    responseStatus: ResponseStatus;
}

type ResponseStatus = 'Offer Pending' | 'Offer Submitted' | 'Not Interested' | 'Response Pending';


/*
 * Check to see if group contact exists
 * create the group contact
 * check to see if realtor contact exists
 * create it
 */


// TODO: Turn this into a model
type GroupContact = {
    email: string;
    phone: string;
    name: string;
}

// TODO: Turn this into a model
type RealtorContact = {
    email: string;
    phone: string;
    name: string;
}

// export interface User {
//     id: string;
//     email: string;
//     password: string;
//     createdAt: Date;
// }
//
// export interface UserDTO {
//     email: string;
//     password: string;
// }