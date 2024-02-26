const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, 
// feel free to comment out all the others.
// However, do NOT edit the grading tests for any reason and make sure 
// to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  it("constructor sets position and default values for mode and generatorWatts", function() {
      let testPosition = new Rover(4321);
      expect(testPosition.position).toBe(4321);
    });
  
  }); 


describe("Rover class", function() {
  it("response returned by receiveMessage contains the name of the message", function() {
    let testReceiveMessage = new Rover(4321);
    let message = new Message('TA power');
    let response = testReceiveMessage.receiveMessage(message);
    expect(response.message).toBe('TA power');
  });

});

describe("Rover class", function() {
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let testReceiveMessage = new Rover(4321);
    let commands = [
      new Command(4321),
      new Command(100)
    ]
    let message = new Message('TA power', commands);
    let response = testReceiveMessage.receiveMessage(message);
    expect((response.results).length).toBe(2);
  });

});

describe("Rover class", function() {
  it("responds correctly to the status check command", function() {
  // test 10
  });

});

describe("Rover class", function() {
  it("responds correctly to the mode change command", function() {
  // test 11
  });

});

describe("Rover class", function() {
it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
  // test 12
  });

});

describe("Rover class", function() {
  it("responds with the position for the move command", function() {
  // test 13
  });

});
