const numberArray = [
    "value1",   //0
    "value2",   //1
    "value3",    //2
    [           //3
        "sub-value1", //0
        "sub-value2", //1
        "sub-value3" //2
    ],
    
    [           //4
        "sub-valueA", //0
        "sub-valueB", //1
        "sub-valueC" //2
    ],

    {          //5
        name: "Gisele",     //name
        gender: "Female"    //gender
    }
];

console.log(numberArray[5]['name']);
