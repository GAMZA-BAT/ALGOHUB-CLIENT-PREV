import getUserInfo from "@/api/user/getUserInfo";
import User from "@/type/user";

export const ANONYMOUS_AUTH_TOKEN = 'anonymous';

const dummyUser: User = {
    email: '',
    nickname: '',
    bjNickname: '',
    profileImage: '',
}
export class AuthManager {
    private static instance: AuthManager;
    private user: User | null = null;
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
        if (this.token !== ANONYMOUS_AUTH_TOKEN) {
            try {
            this.user = await getUserInfo();
            } catch (e) {
                this.token = ANONYMOUS_AUTH_TOKEN;
            }
        }
    }

    public isAnonymous(): boolean {
        return this.token === ANONYMOUS_AUTH_TOKEN;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string) {
        this.token = token;
        localStorage.setItem('token', token);
    }
    
    public clearToken() {
        this.token = ANONYMOUS_AUTH_TOKEN;
        localStorage.removeItem('token');
    }

    public setUser(user: User) {
        this.user = user;
    }

    public getUser(): User {
        if (!this.user) {
            return dummyUser;
        }
        return this.user;
    }
}