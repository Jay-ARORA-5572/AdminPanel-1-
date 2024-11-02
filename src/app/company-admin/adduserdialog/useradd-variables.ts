
export interface Userdata {
    
    name:string;
    username:string;
    role:string;
    aadharnumber:Number;
    rolekey:string;
    password:string;
    address:Address;
    contactdetail:Contact;
}

export interface Address {
    housenumber: string;
    zipcode: Number;
    landmark: string;
    country:"India";
    state:string;
    city:string
  }

  export interface Contact {
    mobnum:Number;
    emailid:string;
  }