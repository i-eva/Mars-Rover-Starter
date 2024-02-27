// const Command = require('../command.js');
// const Message = require('../message.js');

class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      let commandResults = [];
      if (message.commands !== undefined) {
         for (let i = 0; i < (message.commands).length; i++) {
            let cmd = message.commands[i];
            if (cmd.commandType === 'STATUS_CHECK') {
               commandResults.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}});
            } else if (cmd.commandType === 'MODE_CHANGE') {
               commandResults.push({completed: true});
               this.mode = cmd.value;
            } else if (cmd.commandType === 'MOVE') {
                  if (this.mode === 'NORMAL') {
                     this.position = cmd.value;
                     commandResults.push({completed: true}); 
                     } else if (this.mode === 'LOW_POWER') {
                        commandResults.push({completed: false}); 
                  }
            }
         }
      }
      let received = {
         message: message.name,
         results: commandResults
      }
      return received;
   }
}

module.exports = Rover;