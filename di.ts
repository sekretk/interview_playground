class Logger {
    log(...arr: Array<unknown>) {
        console.log(...arr);
    }
}

//Loget Console! Logger for Backendlogger!

class Consumer {

    _logger: Logger;

    constructor(logger: ILogger) {
        this._logger = logger
    }

    doStuff() {
        this._logger.log('Im doing smth');
    }
}