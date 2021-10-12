function itemsWithinBudget(budget, items) {
    let budgetItem = [];
    for (let item in items) {
        if (item.price <= budget) {
            budgetItem.push(item.name);
        }
    }
    return budgetItem;
}


const itemsWithinBudget = (budget, items) => {
    return items.filter(item => item.price <= budget).map(item => item.name);
}

const items1 = [{name: 'iPhone', price: 700},
                      {name: 'laptop', price: 2000},
                      {name: 'guitar', price: 300},
                      {name: 'camera', price: 1200}
                    ]
    const items2 = [ {name: 'online classes', price: 1000},
                        {name: 'omakase bento box', price: 100},
                        {name: 'medicine', price: 50}
                    ]
    
    console.log(itemsWithinBudget(1000, items1)) // prints ['iPhone', 'guitar'] 
    console.log(itemsWithinBudget(200, items2)) // prints ['omakase bento box', 'medicine']