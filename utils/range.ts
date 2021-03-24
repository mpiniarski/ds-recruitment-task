const range = (start: number, end: number) => [...Array(start + end).keys()].slice(start);

export default range;
