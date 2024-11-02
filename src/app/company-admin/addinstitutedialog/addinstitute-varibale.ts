export interface Institution {
  institutionname: string;
    // icon:string;
      location: Address;
      contact: Contact;
  }
  
  export interface Address {
    baseAddress: string;
    landmark: string;
    zipcode: string;
  }
  
  export interface Contact {
    mobnum: number;
    emailid: string;
  }