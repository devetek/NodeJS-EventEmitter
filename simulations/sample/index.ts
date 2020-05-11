import DownloadManager from "./download";

const manager3Gp = new DownloadManager();
const managerMp4 = new DownloadManager();

manager3Gp
  .register("3gp")
  .downloadSimulation("https://www.terpusat.com/files/video/3gp.zip");
const taskEvent3GP = manager3Gp.get("3gp");
taskEvent3GP.data.stages.emit("start");

setTimeout(() => {
  managerMp4.register("mp4").downloadSimulation("https://www.terpusat.com/files/video/mp4.zip");
  const taskEventMp4 = managerMp4.get("mp4");

  taskEventMp4.data.stages.emit("start");

  taskEventMp4.data.stages.on("data", (data) => {
    console.log(`[MP4-STAGE]`, data);
  });
}, 10000);

(async function () {
  taskEvent3GP.data.stages.on("data", (data) => {
    console.log(`[3GP-STAGE]`, data);
  });

  setInterval(() => {
    const checkEvent = managerMp4.tasks();

    console.log(`Total Queue: ${checkEvent}`);
  }, 500);
})();
