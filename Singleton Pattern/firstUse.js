// ==========================
// without singleton pattern
// ==========================

// import Logger from './logger.js';

// const logger = new Logger()

// export default function logFirstImplementation() {
//     logger.printLogCount()
//     logger.log('First file')
//     logger.printLogCount()
// }

// ==========================
// with singleton pattern
// ==========================

import singleInstanceLogger from './logger.js';

export default function logFirstImplementation() {
    singleInstanceLogger.printLogCount()
    singleInstanceLogger.log('First file')
    singleInstanceLogger.printLogCount()
}