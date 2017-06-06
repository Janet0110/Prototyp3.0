/*Channel-Model*/
export interface Channel {
    name: string;
    privateChannel: boolean;
    owner: string;
    users: [{
        user: string
    }];
    teams: [{
        _id: string,
        teamName: string
    }]
}
