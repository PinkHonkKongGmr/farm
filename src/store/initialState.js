
const initialState = {
    gameObjects:
    {cellCount: 9,
     cellToRemove:false,
     cellToAdd: false,
     cellToRemoveInd: null,
     drugId:null,
     cell:null,   
     position:null},

    resurses:
   {money:1200},

    dragged:
   {chickens:0,
    rye:0,
    cow:0},

    generators:
    {eggs:0,
    milk:0,
    food:0,}
}    

export default initialState