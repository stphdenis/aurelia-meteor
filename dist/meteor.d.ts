export declare enum StatusEnum {
    connected = 0,
    connecting = 1,
    failed = 2,
    waiting = 3,
    offline = 4,
}
export declare class Meteor {
    isClient: boolean;
    isCordova: boolean;
    isServer: boolean;
    release: string;
    status: StatusEnum;
    statusString: string;
    connected: boolean;
    retryCount: number;
    userId: string;
    address: string;
    verified: boolean;
    username: string;
    createdAt: number;
    constructor();
}
