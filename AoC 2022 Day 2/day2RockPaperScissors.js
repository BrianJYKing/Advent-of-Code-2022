// Opponent
// A = 1 - Rock
// B = 2 - Paper
// C = 3 - Scissors

// Me
// X = 1 - Rock
// Y = 2 - Paper
// Z = 3 - Scissors

// lose = 0
// draw = 3
// win = 6

// Read input from text file
const data = `B Z
A X
B Z
B Z
C Z
B Z
A Z
B X
C Y
C Y
A X
A X
A Z
B Z
A X
A Z
B X
C Y
A Y
A Y
C Y
B Y
C X
C Y
B Z
A X
A Y
B Y
A X
A Z
B X
B Y
B Z
B Z
B Z
C Y
B X
A X
C Y
B Z
B Z
C X
A Z
B Z
B Z
C X
C X
B X
B X
A X
B X
C Z
C Y
C Y
C Y
C X
B Z
B Y
C X
A X
C X
C Y
C Y
C Y
B X
B Y
A Z
B Z
A X
B Z
C Y
B Y
B Z
B X
C Y
B Y
A Y
A X
B Z
B Z
B Z
B Z
C X
A X
B Y
C Y
C Y
B Z
B Z
A Z
B Y
A X
A Z
B Z
A X
B X
B X
B X
B X
A X
A Z
B X
B Z
B X
B Z
B X
C Y
C Y
C X
B X
A Z
C Y
B Z
C Z
B X
B Z
B Z
C Z
C Y
B X
B X
C Y
A Y
A X
C Z
B X
B X
C X
C X
C Y
C X
C Y
C Y
C Y
B Z
B Z
A X
C Y
C Y
A Y
C Y
A Z
B Z
A Y
C Y
C Y
A X
B X
B Z
C Y
C Y
B Z
B X
C Y
B Y
A Z
A Z
C Y
B X
C Y
B Z
C Y
B Z
B Z
B X
C Y
C X
B Z
C Z
A Y
C Y
C Y
A Y
C X
A Y
B Z
B Y
C X
A Y
C Y
C X
C Y
C Y
B Z
A Y
B Z
A Y
B Z
B Z
B Z
C Y
A Y
A X
B Z
C Y
C Y
C Y
B X
B Z
C Y
C Y
C Y
B X
C X
B X
A X
B Z
B X
C Z
A X
A X
A X
C Y
C Y
B Z
A Z
C X
B X
C Y
A Y
A Z
A Z
A X
A X
C Y
B Z
A Z
B Z
B X
C Z
B X
B X
B Y
A Z
B Z
C Y
B X
C X
C X
A X
B Z
B X
A Y
B Z
A X
B X
B Z
A X
B Z
C Y
B Y
C Y
A Z
B X
B X
B X
B Z
B Z
B Z
A X
B X
B Z
B Z
A X
B X
C Z
B X
A Z
A Z
C Z
A Y
C Y
B X
B Z
A X
B Z
B X
C Y
C Y
B X
C Y
C X
C Y
B Z
A Z
C Y
A Z
B X
B Z
B Z
A X
A Y
A X
B Z
B Z
B Y
A Z
C Y
B Z
B X
B Z
A Y
C X
B Z
C Y
A Y
A X
A Z
C Y
C Z
A Y
B X
A X
B X
C Y
C Z
B Y
B Z
B Z
C Y
B Z
C Z
B Y
A Z
A Z
B Z
B X
B X
A Z
C Y
B X
B Z
A Y
C Y
B Z
C Y
B X
C Y
C Y
C Y
A Y
C Y
C X
A X
C Y
C Y
A X
C Y
C Z
B X
B X
C Y
A X
A Y
C Y
A X
C X
A Y
A Z
A X
B Z
B Z
C X
C Y
B X
A X
A Z
B X
B Z
A X
B Z
B Z
B Z
B X
B Z
B Z
A Y
C X
A X
B X
B Z
C Y
C Y
C Y
C Y
B Z
C Y
B Y
C Y
A Z
C Y
B Z
B X
B Z
B Z
B X
C Y
A Z
B X
B Z
B Z
B X
C Y
B X
C X
C X
A X
C Y
A X
B Y
C Y
B Z
B X
C Y
B Y
B X
B X
B Y
B X
A Z
B X
B X
B X
B Z
B Y
A X
B X
C Y
C Y
B Y
B X
A Y
C Z
B X
C Y
B X
C Y
A Z
B Y
A Z
B Z
A Y
A X
C Y
B X
B X
A X
B Y
A Z
B X
B Z
A X
C Z
B Y
A X
A X
A X
A X
B Y
C Z
C Y
B Y
C Y
B X
B Z
A X
C Y
A Y
A X
C Y
C Y
B X
B Y
A X
C Y
A Y
A Z
A X
A Y
C Y
A X
C Z
C Y
B Z
B Y
C Y
C Z
A X
A X
C X
B X
C X
B X
A Z
B Z
C Y
C Y
A Z
C Y
A X
C X
B Z
C X
C Z
B X
B X
C Y
B X
A Y
B X
B Z
C X
C Y
B X
B X
B Z
B X
C Y
B Z
C Y
C Y
A Z
C Y
C Y
C Y
B X
B X
A X
C Y
B X
B X
C Y
B Z
A X
B X
C Y
B Z
B Y
B Z
A X
B Y
B Z
C X
C Y
B Z
B Z
B Z
B Z
B Z
C X
B Z
C Y
C X
B Y
B X
B X
C Y
B X
B X
C Y
C Y
A X
C Y
C Z
A Z
C Y
C Y
C Z
A X
C Y
A Y
B X
C X
C Y
C Z
C Y
C Y
B X
A X
B Z
A Y
B Z
B Z
B X
B Z
A Z
B Y
B Y
C Y
A Y
C Y
B X
A X
C Z
B Z
B X
A Z
C Y
C Y
C X
A Z
C Y
C Y
A Y
B Y
B Y
B Z
B Z
B X
B X
B Z
B X
B X
B Z
A Y
A Y
C Y
C Y
B X
A Y
A X
C Y
A Z
C X
B Y
B Y
B Y
A Z
C Y
B Z
B Z
A Y
B Z
B Z
C Z
C X
C X
B X
C Y
B X
B X
C Y
A X
A Z
C X
B X
A X
B Z
A X
B X
A Y
B X
B Z
B X
B X
C Z
A Z
B Z
C Z
B X
B X
A X
B Z
B Z
B Z
B Z
B Z
B Z
B X
C Y
B Z
B X
B X
C Y
C Y
B Z
B Z
B X
A Y
A X
A Z
C Z
A X
B Z
B X
B Z
B X
C Y
A X
A Y
C Y
C Y
B X
B X
B X
B Z
B X
B Z
A Y
A X
C Y
A Z
C Y
A X
C Y
B Z
A Y
C Y
C Y
C Y
B Z
B Z
A Z
A X
B X
C Y
A X
B Y
C Y
B X
B Z
B Z
A Z
B Z
C Y
B Z
A X
C X
B Z
B X
A X
C Y
C Y
A Z
C Y
C Z
A Z
A Z
B X
B X
B Z
C Y
B Z
B Z
C Y
B X
B Y
B Z
C Y
A X
C Y
A Y
C Y
C Y
C Y
B X
B X
B Z
B Y
C Y
B Y
A Z
A Z
B X
A Z
C X
C Y
B Z
B X
B Z
B X
B Z
B Z
B X
B Z
B Z
C X
C Y
A Z
C Y
B Y
A X
B Z
B Y
A Z
A X
B X
C Y
B Z
C Y
B X
C Y
B Z
B Y
B X
A Z
B Y
C Y
B X
C Y
A X
B Y
B X
C Y
C X
B X
B X
C Y
C Y
B Z
A X
B X
B Z
A X
B X
A X
B X
B X
B Y
C Y
A X
C X
C Y
C X
B Y
A Z
A X
C Y
B X
B X
B Z
C Y
B Z
B X
B Z
B Y
B Y
B Z
B X
C Y
B Y
A X
C Y
B Z
B Z
C Y
A Z
C Y
B Y
C Y
B Y
B X
B Z
B X
C Y
B X
C Y
B Z
C Y
B Z
B X
B X
B Z
A X
C Y
A X
B X
C Y
B X
C Z
C Y
B Z
A Y
A Y
C Y
B Z
A Z
B Z
C Y
A Z
B X
A X
B X
C Y
B Z
A X
B X
A Y
B X
B Z
A Z
C Y
A Z
C X
A Z
B X
C Y
B Z
B Z
A X
B Y
C Z
B Z
A Z
C Y
B X
C Y
B X
C Y
B Y
B Z
C Y
B Z
C Y
C Y
B Y
B Y
C Y
C Y
A Y
B Y
B X
C Y
C Y
C X
C Y
C Y
B Z
B X
B X
C Y
C Y
A X
C Y
C Y
B X
A Y
B X
A X
B Y
B X
B Z
B X
C Y
B Z
A Z
B Z
C X
B Z
B Y
B Z
B Z
C Y
B X
B X
C Y
B Z
B Z
B Z
B Z
A X
C Y
A Z
A X
C X
B Z
B Y
A Y
B X
C Y
B X
C Y
C Z
A Z
C Y
C Y
C Y
B Z
B Y
A X
C Y
B X
B X
B Z
B X
C Y
C Y
A X
B Z
B Z
C Y
B Y
B Y
B Z
A X
B Z
A X
B Y
C X
A Z
B Z
B Z
B X
C Y
B Y
B Y
B X
C Y
B X
B Z
C Y
B Z
A X
A Z
B Y
C Y
B X
B Z
C Y
B X
B X
B Z
B Y
C X
B X
A X
B X
B Z
B Z
B Z
A Z
A Z
B X
C X
B X
B Y
C Z
C Y
B Y
A X
A Z
B Z
B X
B Z
B Z
A Y
A Z
C Y
C Y
C Y
A Y
B Z
C X
C Y
C Y
A Z
B Z
C Y
B Z
C Y
A X
C Y
C Y
B X
A X
B X
A X
A Z
A X
B Y
B X
A X
B Z
B Z
B X
A Z
B X
A X
B Z
B Z
B Z
A X
B X
C Y
C Y
B Z
A X
A X
B Z
C X
B Z
C Y
C Y
C Y
A Y
B X
C Z
C Y
B X
A Y
A Z
C X
B Y
B Z
C Y
B X
A Z
C Z
C Y
C Y
B Z
B X
B Z
A Z
C Y
B X
A X
C Y
C Y
B X
B Y
B X
B X
C Y
B Y
C Y
B Z
B X
A Y
A X
B Z
A Z
B Z
B Z
A Y
C Y
A X
B X
B X
A X
C Y
B Z
B Y
B Z
B Z
B X
C Y
C Y
C Z
B Y
B Y
B Z
B X
B Z
C Y
B X
A Z
C Y
B Z
B X
C Y
C Y
C Y
B Z
C Y
B Z
C Y
B Z
B Z
B Z
C Y
C Y
B Z
C Z
A Y
A Z
A Z
C Y
C Y
A Z
B X
B X
A X
B Z
B Z
A X
A Z
C Y
B X
A Z
B X
C Y
A Z
C Y
B Z
B X
B X
B Z
B X
C Y
C Z
C Z
B X
A X
A Y
B Y
B X
B X
A Y
A X
B X
C Y
C Y
B Z
B Z
A X
C Y
B Z
B X
B Z
C Y
B X
C Y
B Z
B Y
B Z
B X
B X
C Y
B Z
B Z
B Z
A X
B Z
B Z
B Z
A Y
A X
C Y
B Z
B X
A X
B Z
C Y
B X
B Z
C Z
C Y
C Y
B Y
B Y
C Y
A Y
B Y
A Y
C Y
A Z
B X
B Y
C Y
A X
B Z
C Y
A X
B X
C Y
B X
A Y
C Z
C X
C Z
B Z
C X
A Z
C X
B Z
B Z
B Z
A X
C Y
B X
A Y
C Y
B Z
A Y
A Z
B X
A Z
C Y
C Y
C Y
B Z
B Y
A X
C Y
C X
A Y
B Z
A X
A Z
C Y
A Z
B Z
B Z
C X
B X
C Y
A X
C Y
A Z
B Z
B Z
B X
C Y
C Y
C X
C Z
C Y
C X
C X
C Y
B X
C X
C Z
C Y
B Y
C X
A X
C Y
A X
C Z
C X
C Y
B X
A Z
B Z
B X
B Z
B X
C Y
B Y
B Z
B X
B Z
C Y
C Z
B X
B Y
C Y
C Y
C Y
C X
A Y
B X
C X
B X
B Y
B Z
C X
B Z
B Z
A X
A X
B Z
B Z
A Y
A Z
B Y
A X
B X
B X
C Y
A X
A Y
B X
B Z
C Z
B Z
B X
C Y
C Y
B Z
A Z
B X
A Y
A Y
C Y
B Z
B X
A X
B Y
A Y
B Z
B Z
B Z
B Y
C Z
A X
C X
B Y
A Y
B Z
C Y
A X
B Z
C Y
A X
B X
B Z
B X
B Z
B Z
C Y
A Z
B X
C Y
B Z
A Y
B X
C X
B X
B X
B Z
B X
B Z
B X
B Z
B Z
C Y
B Z
C Y
B X
B Z
B X
B Z
C Y
B X
C Y
A Z
A Z
B Z
B X
B Z
B X
C Y
A Y
A X
B Z
B X
B X
A Z
A X
C Z
A X
A X
C Z
C Y
B X
B X
B Z
A Z
B X
C Y
B X
B Z
C X
C Y
C Y
A Z
B X
B X
C Z
C Y
B X
A X
C X
B Z
B Z
B X
C Y
B Z
A X
B X
B Z
A Z
B X
A Y
B Z
B X
C Y
B Y
C Y
A Z
A X
C Y
A Z
A X
C Y
C Y
C Y
C Y
C Y
B X
C X
B Y
A Z
B Z
C Y
A X
B Z
C X
C Y
B X
A Y
B X
B Z
C Y
B X
A Y
B Z
C Y
B Z
A X
B X
C Y
A Y
B Z
B X
A Z
C Y
B Y
A Y
A Z
B Y
C Y
B Z
B Z
B Z
C X
C X
B Y
B Z
A X
C Y
C Y
A Y
A X
A X
C Y
A Y
B Z
B Z
B Z
B X
A X
B X
C Y
A Z
B X
A Y
A X
A X
B Z
B Z
C Y
B X
B Z
C Y
B Z
A Z
C Y
B X
B Z
C X
C Y
C Y
C Z
B Z
B X
A X
B Z
C Z
C Y
C Y
C Y
B Z
A Y
C Y
B X
C Y
C Y
B X
B X
C Y
C Y
B Z
B X
A Z
C Z
B Z
A X
B Y
B Z
A X
C Y
C Y
B Z
A Y
C Y
B Y
B Z
C Y
A X
C Y
C X
C Y
C Y
A Y
B Z
C Y
C Y
B X
C Y
B Z
B Z
C Z
B Z
C Y
B Z
B Z
C Y
A X
C Y
A Z
B X
C X
B X
C X
A Z
C Y
A X
A X
B Z
C Y
B Z
B X
A Y
B Z
C X
B Z
A Y
C Y
B X
A Z
B Z
B Z
B Z
B Z
B Z
C Y
C Y
C Y
B X
A Y
A Z
B Z
C Y
B Y
C X
B X
B Z
B X
C Y
A X
C Z
C Y
A X
B X
C Y
B X
A X
C Z
C Y
C Y
C Z
C Y
C Y
B X
C Y
A Y
B X
B Z
B Z
C Y
A X
B Z
B Z
C Y
B X
B Z
B Z
C Y
C X
B Z
B Z
A Z
B X
B Z
B Z
B X
B X
B X
A X
A Z
B Z
B Z
B X
B X
C Y
C Y
B X
A Y
C Y
B Z
C Z
B Y
B Z
C X
A X
B X
C Y
C Y
A Y
C X
B Z
B Z
B Z
B Z
A Z
A Y
A X
A Y
B Y
A Y
B Z
C Y
C X
C X
B Z
C Y
A X
B Y
B X
B X
B X
A Y
B Z
B X
B Z
B Z
B Z
A Z
C Y
C Y
C Y
B Z
C X
B Z
A X
A Y
B Z
C Z
B Z
A X
B Z
A X
B Z
A Z
A X
B Z
B Z
B Z
B X
A Z
B X
C Y
B Y
B X
A X
B Z
A Z
B Z
B Z
B Y
C X
B X
B Z
A X
B X
B Z
B X
C Y
C Z
A Y
B Y
A X
B Z
B Y
A Z
C X
C Y
B Z
A X
C Y
A Y
C Y
C X
A Y
B X
B X
B Z
C Y
B Y
A X
B Z
B X
A X
A X
B X
A X
B Z
B X
B Y
C Y
B Z
C Y
C X
B Z
B Z
B Z
C Y
A X
B Z
A Y
A X
C Y
B Z
C Y
C X
C Y
C Y
A X
B Z
A X
A X
B X
B Y
C Y
C Y
A X
B Z
C Y
C X
B Z
B Z
B Z
B X
A Y
B X
C Y
A X
C Y
B Z
C Y
C Y
A X
B Y
B Z
B Y
A Y
B Z
B Y
B Z
A Y
C Y
A Y
A X
A Z
A X
B X
C Y
C Y
B X
A Z
B X
B Z
B X
B X
B Z
C Y
B Z
B Z
B X
A Z
A Y
C Y
B Y
C Y
C Y
B Z
C Y
C Y
B Y
B Z
B X
C Y
B Z
B Z
A Y
A Y
B X
B X
C Y
B Z
B Z
B X
B X
C Y
A Z
B X
B X
A Z
B X
B Z
B X
B X
A X
C Y
C Y
C Y
B X
A Z
C Y
C Y
B Z
B X
B Z
B Z
B Z
B Y
A X
A Z
C Y
C Y
B X
B Y
C X
A Z
C X
C Y
C X
C Y
C Y
C X
A X
B Z
B X
B Z
C Y
A Y
B X
B Z
C X
B X
B Y
B Z
B Z
A Z
C X
B X
B X
B Y
B Z
C Y
C Y
C Y
A Z
B Z
A Z
B Z
B X
C Y
B X
B X
A Y
C Y
A X
B Z
C Y
B Z
B Z
B Z
B Y
C Y
A Z
B X
C Y
B Z
C X
B X
A X
B Z
B X
A Y
B Z
B Z
C X
B X
B X
B Z
B Z
B X
C Y
B Z
A Y
B X
C X
C Y
B Y
B Z
B X
C X
C Y
B X
B Z
B Z
B X
C Z
B Z
B X
C X
C X
B Z
B Z
C Y
B X
C Y
A Z
A Z
B Z
B X
A Z
B X
B Z
B Y
B Z
C Y
B Z
A Z
C X
B Z
B Z
C Y
A Z
C Y
C Y
C Y
A X
A Z
A Z
B Z
C X
A X
C Y
B X
B X
C Y
C X
A Z
B X
B Z
B X
B Y
C Y
A X
C Y
C Y
A X
C Y
B Z
B X
C Y
C Y
B X
C Y
C Y
C Y
A X
B Z
B X
B Z
B Y
A Z
B Z
C Y
B Z
A X
A Z
A Y
B Y
B Z
B Z
A X
B Y
A Z
B Z
B Z
A Y
C Y
B X
B Z
A X
B Z
B Z
A X
B Z
B Z
B X
A Z
B X
B Z
A Y
A Y
A X
C Y
B Z
A X
B Z
C Y
B Z
B X
C Y
C Y
C Y
B X
A Z
C Y
B Y
B Z
B Z
B Z
B X
C Y
C X
A X
B Z
A X
C Y
C Y
B X
B X
B Z
C Z
C Y
C Y
A Y
C Y
B Z
B X
B X
B Z
C Y
B Z
B X
B X
C Z
B X
C X
C Y
C Y
C X
C Y
C Y
B Z
B X
B X
C Y
C Y
C Y
B Y
A X
B Z
B Y
A Z
B Z
C X
B Y
B X
B Z
B X
A Z
A Z
C Y
C X
C Y
A Z
B Y
A Y
C Y
B Z
A Z
A Z
C Y
B Z
B X
B Z
C Z
C Y
C X
B Z
B X
A X
A Y
B Z
B X
A Y
B X
B X
C Y
B X
B Z
A Z
C Y
C Y
A Y
B Z
C Y
B Y
C Y
C Y
C Y
B Z
A Y
B Z
A X
B X
B Z
B Z
B Z
A X
C X
B X
C X
A Z
C Y
B X
B Z
B Y
C Y
C Y
B Y
B Y
C Y
C Y
A X
C Y
B Y
B X
B X
A Z
B X
C Y
B Z
A Z
C Y
C X
A Z
B Z
A Z
C Y
B Z
B X
C Y
B Z
B Z
B X
C Z
B X
B Z
B Y
B Y
B X
B Z
C Y
B Z
B Z
B X
B Z
B Z
B Z
C X
B X
C Y
B Z
C X
C Y
C X
C X
B Y
B Z
A X
C X
B Z
A Z
A X
B Z
B Z
B Z
C Y
B X
B X
C Y
B X
C Y
B Z
B Y
B X
B Y
A X
B Z
A X
C X
C X
B Z
C Y
A Y
B X
B X
C Y
C Y
C Y
C Y
B Z
B Z
C Y
B Z
B X
B X
B Z
B X
B X
B Z
B Y
C Z
C X
C Y
B X
B X
A X
B X
C Y
A Z
B Z
B X
C Y
B Z
B Z
B Z
B Z
B Z
B Z
A Y
C Y
C X
C Y
C Y
A X
B X
B Z
B Y
B Z
C Y
B Y
A Y
A Z
B Z
B Y
C Z
B Z
C Y
B Z
C Y
B Z
B Z
C Y
C Z
A X
C Y
C Y
A Z
A X
C Y
B Z
C X
C Y
B Z
B Z
B Z
C Z
B Y
B Z
B Z
C Y
C Y
A Y
B Y
B X
B X
B Z
B Y
A Z
A X
A Y
C Y
B Z
C Z
A Y
B X
B Y
C Y
C X
C Y
B X
B X
C X
C Y
B Z
C Y
C Y
C Z
B Z
B X
A X
C X
C Y
B Z
B X
B Z
B Z
B Z
C Y
A X
C X
B Y
B X
A X
A Y
B X
C Y
B X
C Z
C X
B X
A Z
B Z
B X
B Z
A Y
C X
A Z
B Y
B Z
C X
C Z
B X
B Z
B X
B Z
B Z
C X
B X
B X
A Z
C Y
B X
C Y
B Z
B Z
C X
C Y
B Z
A X
B Z
C Y
B X
A X
C Y
A X
A X
C Y`;

/*
const tournamentRound = (group) => 
    group
        .split(" ");                           // split numbers within each group according to line break

*/

// Part 1
// Array of rounds
const rounds = data.split("\n");

//const roundsColumnSplit = rounds.map(tournamentRound);
//console.log(roundsColumnSplit);

let points = 0;     // variable to store points
for (let i = 0; i < rounds.length; i++)
{
    // opponent puts rock
    if (rounds[i] === 'A X')
    {
        points += 4;    // draw and rock
    }
    else if (rounds[i] === 'A Y')
    {
        points += 8;    // win and paper
    }
    else if (rounds[i] === 'A Z')
    {
        points += 3;    // lose and scissors
    }
    // opponent puts paper
    else if (rounds[i] === 'B X')
    {
        points += 1;    // lose and rock
    }
    else if (rounds[i] === 'B Y')
    {
        points += 5;    // draw and paper
    }
    else if (rounds[i] === 'B Z')
    {
        points += 9;    // win and scissors
    }
    // opponent puts scissors
    else if (rounds[i] === 'C X')
    {
        points += 7;    // win and rock
    }
    else if (rounds[i] === 'C Y')
    {
        points += 2;    // lose and paper
    }
    else if (rounds[i] === 'C Z')
    {
        points += 6;    // draw and scissors
    }
}

/**
var points = 0;     // variable to store points
for (let i = 0; i < rounds.length; i++)
{
    if (roundsColumnSplit[i][0] == "A")         // opponent puts rock
    {
        if (roundsColumnSplit[i][1] == "X")
        {
            points += 4;    // draw and rock
        }
        else if (roundsColumnSplit[i][1] == "Y")
        {
            points += 8;    // win and paper
        }
        else if (roundsColumnSplit[i][1] == "Z")
        {
            points += 3;    // lose and scissors
        }
    }
    else if (roundsColumnSplit[i][0] == "B")    // opponent puts paper
    {
        if (roundsColumnSplit[i][1] == "X")
        {
            points += 1;    // lose and rock
        }
        else if (roundsColumnSplit[i][1] == "Y")
        {
            points += 5;    // draw and paper
        }
        else if (roundsColumnSplit[i][1] == "Z")
        {
            points += 9;    // win and scissors
        }
    }
    else                                         // opponent puts scissors
    {
        if (roundsColumnSplit[i][1] == "X")
        {
            points += 7;    // win and rock
        }
        else if (roundsColumnSplit[i][1] == "Y")
        {
            points += 2;    // lose and paper
        }
        else if (roundsColumnSplit[i][1] == "Z")
        {
            points += 6;    // draw and scissors
        }
    }
}
*/

console.log(points);

// Part 2
// X = lose 0
// Y = draw 3
// Z = win  6

// A = Rock     1
// B = Paper    2
// C = Scissors 3

let totalPoints = 0;
for (let i = 0; i < rounds.length; i++)
{
    // opponent puts rock
    if (rounds[i] === 'A X')
    {
        totalPoints += 3;
    }
    else if (rounds[i] === 'A Y')
    {
        totalPoints += 4;
    }
    else if (rounds[i] === 'A Z')
    {
        totalPoints += 8;
    }
    // opponent puts paper
    else if (rounds[i] === 'B X')
    {
        totalPoints += 1;
    }
    else if (rounds[i] === 'B Y')
    {
        totalPoints += 5;
    }
    else if (rounds[i] === 'B Z')
    {
        totalPoints += 9;
    }
    // opponent puts scissors
    else if (rounds[i] === 'C X')
    {
        totalPoints += 2;
    }
    else if (rounds[i] === 'C Y')
    {
        totalPoints += 6;
    }
    else if (rounds[i] === 'C Z')
    {
        totalPoints += 7;
    }
}

console.log(totalPoints);