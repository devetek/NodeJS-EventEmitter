class Tasks implements TaskInterface {
    private queue: Object[] = [];
  
    add(task: string, data: TaskInput):  void {
      if (task && !this.isExist(task)) {
        this.queue.push({
          [task]: {
            ...data
          }
        });
      }
    }

    list(): number {
      return this.queue.length;
    }
  
    get(task: string): TaskOutput | null {
      let selectedIndex: number = 0;
      let selectedTask: string = '';

      const selected = this.queue.filter((item, index) => {
        const key = Object.keys(item);
  
        if (key[0] === task) {
          selectedIndex = index;
          selectedTask = task;
          return item;
        }
      });
  
      return selected.length ? {
        index: selectedIndex,
        id: task,
        data: selected[0][task],
      } : null;
    }
  
    remove(task: string): void {
      const selectedTask = this.get(task);
      
      this.queue.splice(selectedTask.index, 1);
    }
  
    isExist(task: string): boolean {
      const selectTask = this.get(task);
  
      if (selectTask) {
        return true;
      }
  
      return false;
    }
  }

export default new Tasks();