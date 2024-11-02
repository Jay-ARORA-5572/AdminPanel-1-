export interface Branch {
    branchName: string;
    city:string;
    username:string;
    password:string
    contact:string;
      // icon:string;
      location: Address;
    }

    
    export interface Address {
        baseaddress: string;
        pincode: string;
        landmark: string;
    }
    
