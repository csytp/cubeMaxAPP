const path = require("path");
const Max = require("max-api");
const io = require("socket.io-client");
// cambiare per collegarsi
const ioClient = io.connect("http://192.168.8.102:5173");
//const ioClient = io.connect("ws://localhost:5173");

ioClient.on("seq-num", (msg) => {
  Max.outlet(msg);
  Max.post(msg);
});

// To device
Max.addHandler("toDevice", (mess) => {
  ioClient.emit("toDevice", mess);
});

// Pink Noise
Max.addHandler("pink", (mess) => {
  ioClient.emit("pink", mess);
});

// Sine
Max.addHandler("sine", (mess) => {
  ioClient.emit("sine", mess);
});

// Saw
Max.addHandler("saw", (mess) => {
  ioClient.emit("saw", mess);
});
Max.addHandler("pink2", (mess) => {
  ioClient.emit("pink2", mess);
});

// Sine
Max.addHandler("sine2", (mess) => {
  ioClient.emit("sine2", mess);
});

// Saw
Max.addHandler("saw2", (mess) => {
  ioClient.emit("saw2", mess);
});

// audioPlayer
Max.addHandler("audioPlayer", (mess) => {
  ioClient.emit("audioPlayer", mess);
});

//
Max.addHandler("initRGB", (mess) => {
  ioClient.emit("initRGB", mess);
});

//
Max.addHandler("strobe", (mess) => {
  ioClient.emit("strobe", mess);
});

//
Max.addHandler("metro", (mess) => {
  ioClient.emit("metro", mess);
});


Max.addHandler("chgScn", (mess) => {
  ioClient.emit("chgScn", mess);
});