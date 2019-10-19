// ==========================
// without singleton pattern
// ==========================

// export default class Logger {
//     constructor() {
//         this.logs = [];
//     }
  
//     log(message) {
//         this.logs.push(message);
//         console.log(`Logger: ${message}`);
//     }
  
//     printLogCount() {
//         console.log(`${this.logs.length} Logs`);
//     }
// }

// =======================
// with singleton pattern
// =======================

// the entire idea of singleton pattern is to use a single instance of the class

class Logger {
    constructor() {
        // to make sure that we only ever create one single instance with constructor
        if (Logger.instance == null) {
            this.logs = [];
            Logger.instance = this;
        }

        return Logger.instance; 
    }
  
    log(message) {
        this.logs.push(message);
        console.log(`Logger: ${message}`);
    }
  
    printLogCount() {
        console.log(`${this.logs.length} Logs`);
    }
}

const singleInstanceLogger = new Logger();

// to make sure nobody can "mess" with this we will use Object.freeze method
// which prevents this object from being changed in any way
// no new methods or variables can be added on to it or removed from it      
Object.freeze(singleInstanceLogger);

export default singleInstanceLogger;