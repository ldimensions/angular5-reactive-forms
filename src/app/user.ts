export class User {
    id: Number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    username: string;
    password: {
        pwd: string;
        confirmPwd: string;
    }

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
