import * as crypto from 'crypto';

export const doHeavyStuff = (item: any): string => {
    const localArray = [];
    for (let i = 0; i < 1000; i ++) {
      localArray.push(crypto.createHmac('sha256', 'secret').update(new Array(10000).fill(item).join('.')).digest('hex'));
    }
  
    return crypto.createHmac('sha256', 'secret').update(new Array(10000).fill(item).join('.')).digest('hex');
  }