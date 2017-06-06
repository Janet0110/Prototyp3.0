import { MongoObservable } from "meteor-rxjs";

/*Initialisieren einer Channel-Collection*/
export const Channels = new MongoObservable.Collection('channels');