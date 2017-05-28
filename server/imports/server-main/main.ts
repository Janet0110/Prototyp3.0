import {Channels} from "../../../both/collections/channel.collection";
import {Teams} from "../../../both/collections/team.collection";
import {Messages} from "../../../both/collections/messages.collection";


export class Main {


  start(): void {
    this.initFakeData();
  }

    initFakeData(): void {

    // if (Meteor.users.find().count() === 0) {
    //   Accounts.createUser({
    //     email: 'JanetRahn@msn.com',
    //     password: "testtest",
    //     username: "Janet0110"
    //   });
    //   Accounts.createUser({
    //     email: 'Admin@msn.com',
    //     password: "testtest",
    //     username: "Admin"
    //   });
    }

    // var aUser = Meteor.users.findOne({username: 'Janet0110'});
    //
    // if (Teams.find({}).cursor.count() === 0) {
    //     console.log("no Teams");
    //     Teams.insert({
    //       name: "JanetsTeam",
    //       owner: aUser._id,
    //       users: [{
    //         user: aUser._id
    //       }]
    //     })
    // }
    //
    //   var team = Teams.findOne({name: 'JanetsTeam'});
    //   var teamId = team._id;
    //   Meteor.users.update({_id: aUser._id}, {
    //     $set: {
    //       teams: [
    //         {
    //           teamId: teamId,
    //         },
    //       ]
    //     }
    //   });
    //
    //   Channels.insert({
    //     name: "general",
    //     privateChannel: false,
    //     owner: aUser._id,
    //     users: [{
    //       user: aUser._id
    //     }],
    //     team: {
    //       _id: teamId,
    //       teamName: team.name
    //     }});
    //
    //   Channels.insert({
    //     name: "testPublic",
    //     privateChannel: false,
    //     owner: aUser._id,
    //     users: [{
    //       user: aUser._id
    //     }],
    //     team: {
    //       _id: teamId,
    //       teamName: team.name
    //     }});
    //
    //   var channel = Channels.findOne({name: 'general'});
    //
    //   if (Messages.find({}).cursor.count() === 0) {
    //     var messages = ["Dies ist die erste Nachricht", "Dies ist die zweite Nachricht", "Dies ist die dritte Nachricht"];
    //     messages.forEach(function (message) {
    //       Messages.insert({
    //         text: message,
    //         date: new Date(),
    //         user: aUser._id,
    //         team: teamId,
    //         channel: channel._id
    //       })
    //     })
    //   }

      //   var messages = ["Dies ist die erste Nachricht", "Dies ist die zweite Nachricht", "Dies ist die dritte Nachricht"];
      //
      //   messages.forEach(function (message) {
      //     Messages.insert({
      //       text: message,
      //       date: new Date(),
      //       user: aUser._id,
      //       team: teamId,
      //       channel: channelId
      //     })
      //   })
      // }
    // }
}
