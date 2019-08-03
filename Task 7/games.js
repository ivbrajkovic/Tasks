const matches = [
    {
        homeTeam: 'France',
        awayTeam: 'Croatia',
        score: '2:1',
        date: '18.01.2019'
    },
    {
        homeTeam: 'England',
        awayTeam: 'Spain',
        score: '3:1',
        date: '18.01.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'Croatia',
        score: '0:0',
        date: '12.01.2019'
    },
    {
        homeTeam: 'France',
        awayTeam: 'England',
        score: '0:1',
        date: '12.01.2019'
    },
    {
        homeTeam: 'England',
        awayTeam: 'Croatia',
        score: null,
        date: '03.02.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'France',
        score: null,
        date: '03.02.2019'
    }
];

//let obj = { team: '', points: 0 };

/**
 * Check game for winner
 *
 * @param {object} match single object
 * @returns {integer} - 0 draw, 1 home team won, 2 away team won
 */
function getPpoints(match) {
    // If score is null, do not record
    if (match.score === null) return null;

    // Parse result to integers
    let [a, b] = match.score.split(':').map(x => parseInt(x));
    //console.log(`${a}:${b}`);

    // Check for match winner
    if (a == b) return 0;
    else if (a > b) return 1;
    else if (a < b) return 2;
}

/**
 * Get sum points by teams
 *
 * @param {object} matches all matches
 * @returns {array} aray of summed points, named by teams
 */
function getSumPointsByTeams(matches) {
    let arr = [];

    matches.forEach(match => {
        if (!arr[match.homeTeam]) arr[match.homeTeam] = 0;
        if (!arr[match.awayTeam]) arr[match.awayTeam] = 0;

        let res = getPpoints(match);
        switch (res) {
            case 0:
                arr[match.homeTeam] += 1;
                arr[match.awayTeam] += 1;
                break;

            case 1:
                arr[match.homeTeam] += 3;
                break;

            case 2:
                arr[match.awayTeam] += 3;
                break;
        }
    });

    return arr;
}

/**
 * Print all team matches sorted by points
 *
 * @param {object} matches all matches
 */
function getRankings(matches) {
    let summed = getSumPointsByTeams(matches);
    //console.log('summed: ', summed);
    // summed:  [ France: 3, Croatia: 1, England: 6, Spain: 1 ]

    let entries = Object.entries(summed);
    //console.log('entries: ', entries);
    // entries:  [ [ 'France', 3 ], [ 'Croatia', 1 ], [ 'England', 6 ], [ 'Spain', 1 ] ]

    // Sort entryes, first by points, if points are equal than sort by team name
    let sorted = entries.sort((a, b) => {
        // Compare team score
        let res = a[1] - b[1];

        if (res == 0) {
            // If draw then sort by team name
            if (a[0] < b[0]) {
                return -1;
            }
            if (a[0] > b[0]) {
                return 1;
            }
            return 0;
        } else if (res < 0) return 1;
        else return -1;
    });
    //console.log('sorted: ', sorted);
    // sorted:  [ [ 'England', 6 ], [ 'France', 3 ], [ 'Croatia', 1 ], [ 'Spain', 1 ] ]

    // Map sorted list to an array of objects
    return (resList = sorted.map(x => {
        return {
            team: x[0],
            points: x[1]
        };
    }));
}

const footbalRankings = getRankings(matches);
console.log(footbalRankings);
// [
//     { team: 'England', points: 6 },
//     { team: 'France', points: 3 },
//     { team: 'Croatia', points: 1 },
//     { team: 'Spain', points: 1 }
// ]

// Display ranking on page
const ul = document.getElementById('ranking');
footbalRankings.forEach(element => {
    ul.innerHTML += `<li>${element.team}, ponts: ${element.points}</li>`;
});
