export declare function isTokenExpire(token: any): boolean;
export declare function makeLogin(username: any, password: any): Promise<{
    username: string | undefined;
    token: string | undefined;
} | {
    error: {
        title: string;
        type: string;
        description: any;
    };
}>;
