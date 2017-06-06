import { MongoObservable } from "meteor-rxjs";
/*Initialisieren einer Messages-Collection*/
export const Messages = new MongoObservable.Collection('messages');
