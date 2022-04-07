let isOk = true;

export default function Promesa(time, task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOk) {
                resolve(task);
            }
            else {
                reject("error");
            }
    },time)})}
