'use strict';

const app = require('../app-data');
const display = require('../display');

// Creates Files
const uploadNode = (success, failure, data) => {
  // console.log(data);
  $.ajax({
      method: 'POST',
      url: app.server.api + '/create-file',
      dataType: 'json',
      processData: false,
      contentType: false,
      data,
      headers: {
        Authorization: 'Token token=' + app.currentUser.token
      },
    }).done(success)
    .fail(failure);
};

const getAllNodes = function(success, failure) {
  $.ajax({
      url: app.server.api + '/nodes',
      headers: {
        Authorization: 'Token token=' + app.currentUser.token,
      },
    }).done((data) => {
      display.displayAllNodes(data);
    })
    .fail(failure);
};

// Retrieve home directory upon log in
const getDirectory = function(success, failure, id) {
  $.ajax({
      url: app.server.api + '/nodes/' + id,
      headers: {
        Authorization: 'Token token=' + app.currentUser.token,
      },
    }).done(success)
    .fail(failure);
};


const editNode = function(success, failure, data, nodeId) {
  console.log(data);
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/nodes/' + nodeId,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
    data: data,
  })
  .done(success)
   .fail(failure);
};

const deleteNode = function(success, failure, nodeId) {
  console.log(nodeId);
  $.ajax({
    method: "DELETE",
    url: app.server.api + '/nodes/' + nodeId,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
};

const createFolder = (success, failure, data) => {
  $.ajax({
      method: 'POST',
      url: app.server.api + '/create-folder',
      dataType: 'json',
      processData: false,
      data,
      headers: {
        Authorization: 'Token token=' + app.currentUser.token
      },
    }).done(success)
    .fail(failure);
};


module.exports = {
  uploadNode,
  getAllNodes,
  getDirectory,
  editNode,
  deleteNode,
  createFolder
};
