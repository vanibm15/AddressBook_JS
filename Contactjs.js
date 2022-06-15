const nameRegex = new RegExp ('^[A-Z]{1}[a-z]{3,}$');
const addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-Z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp('^\\d{2}(\\s{1}\\d{10})$');
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[-.+ _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw new Error ("First Name : '" + firstName + "' is Invalid!");
    }

    get lastName() {
        return this._lastName;
    }
    
    set lastName(lastName) {
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw new Error ("LAST NAME is Incorrect ");
    }

    get address() {
        return this._address;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    get email() {
        return this._email;
    }

    

    set address(address) {
        if (addressRegex.test(address))
            this._address = address;
        else
            throw new Error( "ADDRESS is Incorrect");
    }

    set city(city) {
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw new Error("CITY is Incorrect");
    }

    set state(state) {
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw new Error("STATE is Incorrect");
    }

    set zip(zip) {
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw new Error ("ZIP is Incorrect");
    }

    set phoneNumber(phoneNumber) {
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw new Error ("PHONE NUMBER is Incorrect");
    }

    set email(email) {
        if (emailRegex.test(email))
            this._email = email;
        else
            throw new Error ("EMAIL ADDRESS is Incorrect");
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}

let addressBookArray = new Array();
try {
    addressBookArray.push(new Contact("Vani", "Bman", "balajiNagar", "Banglore", "Karnatka", 580016, "91 1254567890","vani@gmail.com"));
} catch (e) {
    console.error(e);
}

try {
    addressBookArray.push(new Contact("Raju", "Nagose","NarendraNagar", "Pune", 'Maharatra', 585588, "91 7654561230", "raj@gmail.com"));
} catch (e) {
    console.log(e);
}
console.log(addressBookArray);