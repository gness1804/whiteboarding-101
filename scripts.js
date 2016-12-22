//whiteboarding with hockey teams!

const champions = [
  {
    year: 2006,
    team: 'Carolina Hurricanes',
    conference: 'Eastern',
  },
  {
    year: 2007,
    team: 'Anaheim Ducks',
    conference: 'Western',
  },
  {
    year: 2008,
    team: 'Detroit Red Wings',
    conference: 'Western',
  },
  {
    year: 2009,
    team: 'Pittsburgh Penguins',
    conference: 'Eastern',
  },
  {
    year: 2010,
    team: 'Chicago Blackhawks',
    conference: 'Western',
  },
  {
    year: 2011,
    team: 'Boston Bruins',
    conference: 'Eastern',
  },
  {
    year: 2012,
    team: 'Los Angeles Kings',
    conference: 'Western',
  },
  {
    year: 2013,
    team: 'Chicago Blackhawks',
    conference: 'Western',
  },
  {
    year: 2014,
    team: 'Los Angeles Kings',
    conference: 'Western',
  },
  {
    year: 2015,
    team: 'Chicago Blackhawks',
    conference: 'Eastern',
  },
  {
    year: 2016,
    team: 'Pittsburgh Penguins',
    conference: 'Eastern',
  },
]

// #1: Return a string stating how many NHL teams representing the Eastern Conference have won the Stanley Cup since 2006
const winningTeams = (champions) => {

  let eastChamps = champions.filter((team) => {
      return team.conference === 'Eastern';
    })

    return `The Eastern conference team has won the Stanley Cup ${eastChamps.length} times since 2004.`;

}

console.log(winningTeams(champions));

//#2: How many times did the opposite conference win the year after a given conference won? (i.e. Western conference won the year after Eastern or vice-versa)

const changesOfTheGuard = (champions) => {
  let counter = 0;
  for (let i = 0; i < champions.length; i++) {
    if (champions[i + 1]) {
      if (champions[i].conference !== champions[i +1].conference) {
        counter++;
      }
    }
  }
  return `There have been ${counter} changes of the guard in the Stanley Cup finals since 2004.`;
}

//can you figure out a cleaner way to solve the above?

console.log(changesOfTheGuard(champions));
