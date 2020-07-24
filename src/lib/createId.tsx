let id = 0;
const createId = () => {
    id += 1;
    return id;
};
export {createId};


// let id = 0
// class Id {
//     value:number
//     constructor() {
//         id += 1
//         this.value = id
//     }
// }
//
// export {Id}