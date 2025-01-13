class Logger {
    log(...arr: Array<unknown>) {
        console.log(...arr);
    }
}

class Consumer {

    _logger: Logger;

    constructor(logger: Logger) {
        this._logger = logger
    }

    doStuff() {
        this._logger.log('Im doing smth');
    }
}