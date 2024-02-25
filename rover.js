// const Command = require('../command.js');
// const Message = require('../message.js');

class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      let received = {
         message: message.name,
      }
      return received;
   }
}

module.exports = Rover;