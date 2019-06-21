import axios from './axios';
import moment from 'moment';

export async function loggedInUser() {
  const user = await axios.get('/user');
  return {
    type: 'LOGGED_IN_USER',
    user: user.data
  };
}

export function setUploaderVisible() {
  return {
    type: 'SET_UPLOADER_VISIBLE'
  };
}

export function setProfilePic(pic) {
  return {
    type: 'SET_PROFILE_PIC',
    pic
  };
}

export async function getMembers() {
  const members = await axios.get('/members');
  return {
    type: 'GET_MEMBERS',
    members: members.data
  };
}

export function chatMessages(messages) {
  return {
    type: 'CHAT_MESSAGES',
    messages
  };
}

export function chatMessage(message) {
  return {
    type: 'CHAT_MESSAGE',
    message
  };
}

export function setEventEditorVisible() {
  return {
    type: 'SET_EVENT_EDITOR_VISIBLE'
  };
}

export function closeEventEditor() {
  return {
    type: 'CLOSE_EVENT_EDITOR'
  };
}

export function displayDate(start, end) {
  return {
    type: 'DISPLAY_DATE',
    start,
    end
  };
}

export function addEvent(newEvent) {
  return {
    type: 'ADD_EVENT',
    newEvent
  };
}

export async function removeEvent(id) {
  return {
    type: 'REMOVE_EVENT',
    id
  };
}

export async function getStudioEvents() {
  const events = await axios.get('/get-events');
  for (let i = 0; i < events.data.length; i++) {
    events.data[i].start = moment(events.data[i].start).toDate();
    events.data[i].end = moment(events.data[i].end).toDate();
  }
  return {
    type: 'STUDIO_EVENTS',
    events: events.data
  };
}
