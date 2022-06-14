// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat(Ralph){
    cats.pop(Ralph);
}

function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo);
}

const copyOfCats = ["Broom"];
function appendCat(){
    let copyOfCats = ([...cats, "Broom"]);
    return copyOfCats
}

const copyOfCats1 = ["Arnold"];
function prependCat(){
    let copyOfCats1 = (["Arnold", ...cats]);
    return copyOfCats1
}

function removeLastCat(){
    const cats1 = cats.slice(0, cats.length -1);
    return cats1;
}

function removeFirstCat(){
    const cats2 = cats.slice(1);
        return cats2;
}