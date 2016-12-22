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

    return eastChamps.length;

}

console.log(winningTeams(champions));
