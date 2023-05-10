export const wait = (ms: number) => new Promise((res) => { setTimeout(() => res(true), ms); });

export default wait;
