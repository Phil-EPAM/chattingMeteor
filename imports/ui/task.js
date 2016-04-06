import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/tasks.js';
 
import './task.html';


Template.task.helpers({
	isOwner() {
		return this.owner === Meteor.userId();
	}
});

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.updateCheck', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
  	//there is a trick, this.private is falsy. opposite of falsy is true!
  'click .toggle-private'() {
  	Meteor.call('tasks.setPrivate', this._id, !this.private)
  }
});