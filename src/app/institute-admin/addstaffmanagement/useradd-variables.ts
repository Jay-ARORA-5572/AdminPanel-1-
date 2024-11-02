
export interface Userdata {
    ins_id:string;
    name:string;
    role:string;
    aadharnumber:Number;
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