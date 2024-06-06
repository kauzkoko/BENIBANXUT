import { SerialPort } from "serialport";

const port = new SerialPort({ path: "/dev/cu.usbmodem401101", baudRate: 9600 });

port.on("error", function (err) {
  console.log("Error: ", err.message);
});

export default defineEventHandler(async (event) => {
  console.log(event);
  port.write("main screen turn on", function (err) {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });

  return {
    send: "success",
  };
});
