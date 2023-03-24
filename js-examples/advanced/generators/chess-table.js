
chessTable = ({
    columns: Array(8).fill().map((element, index) => String.fromCharCode('A'.charCodeAt(0) + index)),
    rows: Array(8).fill().map((element, index) => String.fromCharCode('1'.charCodeAt(0) + index)),
    [Symbol.iterator]: function* () {
        for (let i = 0; i < this.columns.length; i++) {
            for (let j = 0; j < this.rows.length; j++) {
                yield [this.columns[i]+this.rows[j], null]
            }
        }
    }
})

let table = [...chessTable]


console.log(table[63])