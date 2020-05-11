import { EventEmitter } from "events";
import pubsub from "@utils/tasks";
import { URL } from "url";
import { doHeavyStuff } from "./helper";

const debug = require('debug')('terqueue');

class Sample extends EventEmitter {
  private taskId: string = "";

  constructor() {
    super();
  }

  register(task: string): Sample {
    pubsub.add(task, {
      date: new Date(),
      stages: this,
    });
    this.taskId = task;

    return this;
  }

  downloadSimulation(fileUrl: URL | string) {
    let downloadProgress: NodeJS.Timeout = null;
    this.once("cancel", (reason) => {
      debug(`Cancel reason ${reason}`);
    });

    this.once("end", () => {
      if (downloadProgress) {
        clearInterval(downloadProgress);
        pubsub.remove(this.taskId);
      }
    });

    this.once("start", () => {
      debug(`Starting download ${fileUrl}....`);
      let progress = 0;

      // Trigger the progress event every second
      downloadProgress = setInterval(async () => {
        progress += 10;
        this.emit(
          "data",
          `Download file ${fileUrl} chunk ${doHeavyStuff(
            Math.random()
          )} progress ${progress}%`
        );

        if (progress === 100) {
          this.emit("end");
        }
      }, 3000);
    });
  }

  tasks(): number {
    return pubsub.list();
  }

  get(task: string): TaskOutput {
    return pubsub.get(task);
  }

  delete(task: string): void {
    pubsub.remove(task);
  }
}

export default Sample;
