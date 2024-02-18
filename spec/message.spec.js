const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
      expect(function() { new Message();}).toThrow(new Error('Message name required.'));
    });
  
  });

  describe("Message class", function() {

    it("constructor sets name", function() {
      let testMessageName = new Message("Hi there!");
      expect(testMessageName.name).toBe("Hi there!");
    });
  
  });

  describe("Message class", function() {

    it("contains a commands array passed into the constructor as the 2nd argument", function() {
      let testMessageCommands = new Message("Hi there!", ["Take a coffee break!", "Take a lunch break!", "Knock off for the day, it's late!"]);
      expect(testMessageCommands.commands[2]).toBe("Knock off for the day, it's late!");
    });
  
  }); 