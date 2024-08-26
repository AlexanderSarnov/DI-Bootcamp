let names = ['john', 'sarah', 23, 'Rudolf', 34]

for (let name of names) {
    if (typeof names[name] === 'string') {
        if (names[name][0] !== names[i][0].toUpperCase()) {
            names[name][0] = names[name][0].toUpperCase()
            console.log(name)
        }
    }
}
console.log(names);
