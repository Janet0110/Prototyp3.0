import { MongoObservable } from "meteor-rxjs";

/*Initialisieren einer teams-Collection*/
export const Teams = new MongoObservable.Collection('teams');