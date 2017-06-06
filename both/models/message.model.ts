/*Message-Model*/
export interface Message {
    text: string;
    user: string;
    team: string;
    channel: string;
    date: Date;
}
