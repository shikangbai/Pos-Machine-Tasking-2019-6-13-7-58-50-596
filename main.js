const db=[ {"id": "0001", "name" : "Coca Cola", "price": 3},
{"id": "0002", "name" : "Diet Coke", "price": 4},
{"id": "0003", "name" : "Pepsi-Cola", "price": 5},
{"id": "0004", "name" : "Mountain Dew", "price": 6},
{"id": "0005", "name" : "Dr Pepper", "price": 7},
{"id": "0006", "name" : "Sprite", "price": 8},
{"id": "0007", "name" : "Diet Pepsi", "price": 9},
{"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
{"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
{"id": "0010", "name" : "Fanta", "price": 12}
]

function countProducts(codes) {
    var map=new Map();
    for(let index=0;index<codes.length;index++){
        var code=codes[index];
        if(!map.has(code)){
            map.set(code,{
                code:code,
                count:1
            })
        }else{
            var item=map.get(code);
            item.count++;
            map.set(code,item);
        }
    }
    var items=[];
    map.forEach(function(item){
        items.push(item);
    })
  return items
}
function fetchProduct(code){
    for(let index=0;index<db.length;index++){
        console.log(db[index])
        if(db[index].id===code){
            return{
                price:db[index].price,
                name:db[index].name
            }
        }
}
}
function generateReceiptItems(codes){
    var counterCodes=countProducts(codes);
    var receipItems=[];
    counterCodes.forEach(function(item){
        var product=fetchProduct(item.code);
        receipItems.push({
            name:product.name,
            price:product.price,
            count:item.count
        })
    })
    return receipItems;
}
function countTotalPrice(receipItems){
    var total=0;
    receipItems.forEach(function(item){
        total=total+item.price*item.count;
    });
    return total;
}

function assemble(assembleInput,num){
    let str = "Receipts"+"\n"+"----------------"+"\n";
    assembleInput.forEach(function(item){
    str += item.name + "\t"+item.count+"\t"+item.price+"\n";
    })
    return str+"----------------"+"\n"+num;
    }

function generateReceipts(codes) {
        let reciptItems = generateReceiptItems(codes);
        let price = countTotalPrice(reciptItems);
        let result = assemble(reciptItems, price);
        return result;
      }
     
      module.exports = {
       db,
        countProducts,
        fetchProduct,
        generateReceiptItems,
        countTotalPrice,
        assemble,
        generateReceipts
      };