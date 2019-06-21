// Good morning ladies and gents, do we have a treat for you today.
// For our bonus round morning challenge, I present to you, Conway's Game of Life!
// The rules are simple. You are presented with 2d array, containing 1's and 0's.
// 1's represent live cells, 0's represent dead cells.
// Your task is to find what the next generation of the 2d array looks like based on the following rules:
//     If a living cell has fewer than 2 neighbours, it dies.
//     If a living cell has 2 or 3 neighbours, it continues to live.
//     If a living cell has greater than 3 neighbours, it dies.
//     If a dead cell has exactly 3 neighbours, it comes to life.
// Good luck and have fun!

//KEY: 
// Game: Game
// Row: The Current Row 

function horizontalNeighbours(game, row, )

function conwaysGameOfLife(game) {

}


let assert = require('assert');

describe("Conway's Game Of Life", function() {
    context('Testing One Generation', function() {
        it('Should correctly return the next generation of the game', function() {
            let game = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 1, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [0, 0, 1, 0, 0]
            ];
            assert.deepEqual(conwaysGameOfLife(game), [
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0]
            ]);
        });
    });
});



//KEY
// array/game = the array
// row = the row currently being used
// i = the index of the row within the array
// value = the actual value being used
// j = the index of the value within the row

function horizontalNeighbours(row, value, i) {
    counter = 0;
    let valueIndex = i;
    if (valueIndex != 0) {
        if (row[valueIndex - 1] == 1) {
            counter += 1;
        }
    }

    if (valueIndex != row.length - 1)
        if (row[valueIndex + 1] == 1) {
            counter += 1;
        }
    return counter;
}

function verticalNeighbours(array, row, value, i, j) {
    counter = 0;
    console.log(array);
    console.log(row);
    console.log(value);
    console.log(j);
    let valueIndex = row[j];
    // Checking if  its the top of the 2d array, and if not, increment the counter if theres a 1 in the spot above it
    if (array[row] != 0) {
        if (array[i][j] == 1) {
            counter += 1;
        }
    }
    if (array[row] != array.length - 1) {
        if (array[row + 1][value] == 1) {
            counter += 1;
        }
    }
    return counter;
}

function neighbours(array, row, value, i, j) {
    const neighbourValue =
        horizontalNeighbours(row, value, i) +
        verticalNeighbours(array, row, value, i, j);
    return neighbourValue;
}

function conwaysGameOfLife(game) {
    let returnArray = [];
    for (let i = 0; i < game.length; i++) {
        let row = game[i];
        let returnRow = [];
        for (let j = 0; j < row.length; j++) {
            let value = row[j];
            let neighbourValue = neighbours(game, row, value, i, j);
            if (value == 1) {
                if (neighbourValue > 2 || neighbourValue < 3) {
                    returnRow.push(0);
                }
            }
            if (value == 1) {
                if (3 >= neighbourValue >= 2) {
                    returnRow.push(1);
                }
            }
            if (value == 0) {
                if (neighbourValue == 3) {
                    returnRow.push(1);
                }
            }
            returnArray.push(returnRow);
        }
    }
    return returnArray;
}