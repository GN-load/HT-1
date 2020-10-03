const obj = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
    steve: 67,
    zoe: 77,
    lora: 80
};
const func = (a) => {
    const arr = Object.values(a)
   const x = arr.reduce((res, elem) => res += elem, 0);
   console.log(x)
};
func(obj)