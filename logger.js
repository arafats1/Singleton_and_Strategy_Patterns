// Logger classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Logger = /** @class */ (function () {
    function Logger(user) {
        Logger.userDetails = user;
    }
    Logger.logIn = function (user) {
        if (Logger.loggedInuser != null) {
            return Logger.loggedInuser;
        }
        Logger.loggedInuser = new Logger(user);
    };
    Logger.getLoggedInUser = function () {
        return Logger.userDetails;
    };
    Logger.logOut = function () {
        Logger.loggedInuser = null;
    };
    Logger.userDetails = {};
    return Logger;
}());
var inputDataFromKeyboard = /** @class */ (function () {
    function inputDataFromKeyboard() {
    }
    inputDataFromKeyboard.prototype.inputData = function () {
        return "Data from keyboard";
    };
    return inputDataFromKeyboard;
}());
var inMemoryy = /** @class */ (function () {
    function inMemoryy() {
        this.memory = [];
    }
    inMemoryy.prototype.storeData = function (data) {
        console.log("Data has been stored in memory");
        if (!this.memory.push(data)) {
            throw new Error("Data could not be stored");
        }
        return data;
    };
    inMemoryy.prototype.retrieveData = function (basis) {
        console.log("Data has been retrieved from memory");
        return this.memory;
    };
    return inMemoryy;
}());
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.processData = function (data) {
        console.log("Data has been processed by the CPU");
        return data;
    };
    return CPU;
}());
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.displayData = function (data) {
        console.log(data);
    };
    return Monitor;
}());
var Errors = /** @class */ (function () {
    function Errors() {
    }
    Errors.prototype.handleError = function (error) {
        console.log("Error: " + error);
    };
    return Errors;
}());
var Computer = /** @class */ (function () {
    //Methods
    function Computer(inputDevice, memory, processor, errors, displayDevice) {
        this.inputDevice = inputDevice;
        this.memory = memory;
        this.processor = processor;
        this.errors = errors;
        this.displayDevice = displayDevice;
    }
    Computer.prototype.input = function () {
        return this.inputDevice.inputData();
    };
    Computer.prototype.store = function (data) {
        //Delegate the responsibility to another class
        return this.memory.storeData(data);
    };
    Computer.prototype.retrieve = function (data) {
        return this.memory.retrieveData(data);
    };
    Computer.prototype.process = function (data) {
        this.processor.processData(data);
    };
    Computer.prototype.handleError = function (error) {
        this.errors.handleError(error);
    };
    Computer.prototype.display = function (data) {
        this.displayDevice.displayData(data);
    };
    //Setters and Getters
    Computer.prototype.setInputDevice = function (inputDevice) {
        this.inputDevice = inputDevice;
    };
    Computer.prototype.getInputDevice = function () {
        return this.inputDevice;
    };
    //Setter and getter for memory
    Computer.prototype.setMemory = function (memory) {
        this.memory = memory;
    };
    return Computer;
}());
var ChargeableComputer = /** @class */ (function (_super) {
    __extends(ChargeableComputer, _super);
    function ChargeableComputer(inputDevice, memory, processor, errors, displayDevice) {
        return _super.call(this, inputDevice, memory, processor, errors, displayDevice) || this;
        // this.charger = chargerPc;
    }
    ChargeableComputer.prototype.chargerPc = function () {
        console.log("Charging...");
    };
    return ChargeableComputer;
}(Computer));
//Liskov Substitution Principle states that a class should be substitutable for its subclasses
function TestComputer(computer) {
    computer.input();
    computer.store("This Data from keyboard");
    computer.retrieve("This Data from memory");
    computer.process("Data from memory");
    computer.display("Processed data from memory");
    computer.handleError("Error");
}
function ChargeComputer(computer) {
    computer.input();
    computer.store("This Data from keyboard");
    computer.retrieve("This Data from memory");
    computer.process("Data from memory");
    computer.display("Processed data from memory");
    computer.handleError("Error");
    computer.chargerPc();
}
// let computer1 = new Computer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// TestComputer(computer1);
// let computer2 = new ChargeableComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// ChargeComputer(computer2);
// Logger.logIn({name: "John", password: '12345'});
// console.log(Logger.getLoggedInUser());
// Logger.logOut();
// Logger.logIn({name: "Arafat", password: '12345'});
// console.log(Logger.getLoggedInUser());
// Logger.logIn({name: "Brisa", password: '12345'});
// console.log(Logger.getLoggedInUser());
var SecureComputer = /** @class */ (function (_super) {
    __extends(SecureComputer, _super);
    function SecureComputer(inputDevice, memory, processor, errors, displayDevice) {
        return _super.call(this, inputDevice, memory, processor, errors, displayDevice) || this;
        // this.logger = logger;
    }
    SecureComputer.prototype.setLogger = function (logger) {
        this.logger = logger;
    };
    SecureComputer.prototype.getLogger = function () {
        return this.logger;
    };
    return SecureComputer;
}(Computer));
// function SecureComp(computer:SecureComputer){
//     computer.input();
//     computer.store('Data is being stored');
//     computer.retrieve('Data is being retrieved');
//     computer.process('Data processing happening');
//     computer.display('Displaying on monitor');
//     computer.handleError('');
//     computer.setLogger(Logger.logIn({name: "John", password: '12345'}));
//     console.log(computer.getLogger());
//     computer.setLogger(Logger.getLoggedInUser());
//     console.log(computer.getLogger());
//     // computer.setLogger(Logger.logOut());
//     // console.log(computer.getLogger());
// }
var computer3 = new SecureComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// SecureComp(computer3);
computer3.setLogger({ name: 'Nina', password: '12345' });
console.log(computer3.getLogger());
// let secureComputer = new SecureComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// secureComputer.setLogger(new Logger({name: "John", password: '12345'}));
// console.log(secureComputer.getLogger());
