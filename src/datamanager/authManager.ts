const ANONYMOUS_AUTH_TOKEN = 'anonymous';

export class AuthManager {
    private static instance: AuthManager;
    private constructor() {
    }
    private token: string = ANONYMOUS_AUTH_TOKEN;

    public static getInstance(): AuthManager {
        if (!AuthManager.instance) {
            AuthManager.instance = new AuthManager();
        }
        return AuthManager.instance;
    }

    public async init(){
        if (!AuthManager.instance) {
            throw new Error('AuthManager is not instantiated');
        }
        this.token = localStorage.getItem('token') ?? ANONYMOUS_AUTH_TOKEN;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string) {
        this.token = token;
        localStorage.setItem('token', token);
    }


}