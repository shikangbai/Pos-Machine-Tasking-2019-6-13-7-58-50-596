const {countProducts,fetchProduct,generateReceiptItems,countTotalPrice,assemble} = require('../main');


const countedCodes=countProducts(['0003','0003','0001']);
const code='0001';
const product=fetchProduct(code);
var codes=generateReceiptItems(['0003','0003','0001'])
console.log("generateReceiptItems:",codes);

it('should printreceip',()=>{
    var countToatolPriceInput=
    [
        {name:'Pepsi-Cola',price:5,count:2},
        {name:'Coca Cola',price:3,count:1}
    
    ]
    var toatolPrice = countTotalPrice(countToatolPriceInput);
    console.log(toatolPrice);
    })
    
    
    it('打小票',()=>{
    var assembleInput=
    [
        {name:'Pepsi-Cola',price:5,count:2},
        {name:'Coca Cola',price:3,count:1}
    ]
    
    var text = assemble(assembleInput,13);
    console.log(text);
    })

