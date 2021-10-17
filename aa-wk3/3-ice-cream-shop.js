function iceCreamShop(flavors, favorite) {
    if (flavors.length === 0) {
        return false;
    }

    if (flavors.pop() === favorite) return true;

    return iceCreamShop(flavors, favorite);

}