class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}jyoti`
    }

    set password(value){
        this._password = value
    }
}

const jyoti = new User("jyoti@a.ai", "abc")
console.log(jyoti.email);
