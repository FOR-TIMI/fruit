function choice(items){
    return items[Math.floor(Math.random() * items.length)];
}


function remove(items,item){
    if(items.includes(item)){
        return items.find((stuff, index) => stuff === item ? items.splice(index,1) : undefined );
    }
    return undefined;
}

export {choice, remove};