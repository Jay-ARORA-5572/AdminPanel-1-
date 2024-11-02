// Register Instructor
export interface instructorAdd {
    username:string;
    firstname: string;
    lastname: string;
    rolekey:string;  // institute id 
    role:string;
    password:string;
    confirmpassword:string;
    about: string;
    salary:string;
    contactdetail:Contactdetail;
    address:Address
}

// Chapter create for course
export interface Contactdetail {
    emailid: string;
    mobnum: string
}

export interface Address {
    address1:string;
    address2:string;
    pincode:Number;
    city:string;
    state:string
  }

