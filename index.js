const gridSection = document.querySelector('.gridSection');

const MORTY_IMG = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg';
const GREEN_DOT_IMG = './images/greenDot.png';
const RED_DOT_IMG = './images/redDot.png';

/* Declaring some characters and adding them to chars[] */
const chars = [];
const glenn = {
  firstSeenIn: 'Pilot',
  lastKnownLoc: 'Interdimensional Customs',
  name: 'Glenn',
  race: 'Alien',
  status: 'Dead',
};
const patGueterman = {
  firstSeenIn: 'The Wedding Squanchers',
  lastKnownLoc: 'Planet Squanch',
  name: 'Pat Gueterman',
  race: 'Robot',
  status: 'Dead',
};
const scrotian = {
  firstSeenIn: 'Mortynight Run',
  lastKnownLoc: 'Signus 5 Expanse',
  name: 'Scrotian',
  race: 'Animal',
  status: 'Alive',
};
const uncleSteve = {
  firstSeenIn: 'Total Rickall',
  lastKnownLoc: 'Earth (Replacemen Dimension)',
  name: 'Uncle Steve',
  race: 'Alien',
  status: 'Dead',
};
const runningBird = {
  firstSeenIn: 'The Old Man and the Seat',
  lastKnownLoc: 'Earth (Replacemen Dimension)',
  name: 'Running Bird',
  race: 'Human',
  status: 'Alive',
};
const leah = {
  firstSeenIn: 'Never Ricking Morty',
  lastKnownLoc: 'Story Train',
  name: 'Leah',
  race: 'Unknown',
  status: 'Alive',
};
chars.push(glenn, patGueterman, scrotian, uncleSteve, runningBird, leah);

/* for loop that will go through chars[] and will create each char div inside */
for (let i = 0; i < chars.length; i++) {
  const char = chars[i];

  const newCharDiv = gridSection.appendChild(document.createElement('div'));
  newCharDiv.className = 'charDiv';

  const newCharImg = newCharDiv.appendChild(document.createElement('img'));
  newCharImg.className = 'charImg';
  newCharImg.src = MORTY_IMG;

  const newCharInfoSection = newCharDiv.appendChild(
    document.createElement('section')
  );
  newCharInfoSection.className = 'charInfoSection';

  const newCharBasicInfoDiv = newCharInfoSection.appendChild(
    document.createElement('div')
  );
  newCharBasicInfoDiv.className = 'charBasicInfoDiv';

  const newCharName = newCharBasicInfoDiv.appendChild(
    document.createElement('h2')
  );
  newCharName.className = 'charName';
  newCharName.innerText = char.name;

  const newCharStatusDiv = newCharBasicInfoDiv.appendChild(
    document.createElement('div')
  );
  newCharStatusDiv.className = 'charStatusDiv';

  const newCharStatusImg = newCharStatusDiv.appendChild(
    document.createElement('img')
  );
  newCharStatusImg.className = 'charStatusImg';
  if (char.status === 'Alive') {
    newCharStatusImg.src = GREEN_DOT_IMG;
    newCharStatusImg.alt = 'Alive';
  } else {
    newCharStatusImg.src = RED_DOT_IMG;
    newCharStatusImg.alt = 'Dead';
  }

  const newCharStatusText = newCharStatusDiv.appendChild(
    document.createElement('p')
  );
  newCharStatusText.className = 'charStatusP';
  newCharStatusText.innerText = `${char.status} - ${char.race}`;

  const newCharLastKnownLocationDiv = newCharInfoSection.appendChild(
    document.createElement('div')
  );
  newCharLastKnownLocationDiv.className = 'charSubInfoDiv';

  const newCharLKLSubtitle = newCharLastKnownLocationDiv.appendChild(
    document.createElement('p')
  );
  newCharLKLSubtitle.className = 'charInfoSubtitle';
  newCharLKLSubtitle.innerText = 'Last known location:';

  const newCharLKL = newCharLastKnownLocationDiv.appendChild(
    document.createElement('p')
  );
  newCharLKL.className = 'charSubInfo';
  newCharLKL.innerText = char.lastKnownLoc;

  const newCharFirstSeenInDiv = newCharInfoSection.appendChild(
    document.createElement('div')
  );
  newCharFirstSeenInDiv.className = 'charSubInfoDiv';

  const newCharFSSubtitle = newCharFirstSeenInDiv.appendChild(
    document.createElement('p')
  );
  newCharFSSubtitle.className = 'charInfoSubtitle';
  newCharFSSubtitle.innerText = 'First seen in:';

  const newCharFS = newCharFirstSeenInDiv.appendChild(
    document.createElement('p')
  );
  newCharFS.className = 'charSubInfo';
  newCharFS.innerText = char.firstSeenIn;
}
