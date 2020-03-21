saveUser = () => {
  const user = document.getElementById('user').value;
  localStorage.setItem('user', user);
  return location.replace('./game.html');
}

setUser = () => {
  const username = document.getElementById('username');
  const user = localStorage.getItem('user') || 'N/A';
  username.innerText = user;
}

getRankings = () => {
  const rankings = localStorage.getItem('rankings');
  if (!rankings) {
    localStorage.setItem('rankings', JSON.stringify([]));
    return getRankings();
  }
  const array = JSON.parse(rankings);
  return array;
}

setRankings = ({ user, score}) => {
  const rankings = localStorage.getItem('rankings');
  const array = JSON.parse(rankings);
  const newRecord = { user, score  };
  array.push(newRecord)
  localStorage.setItem('rankings', JSON.stringify(array));
}

showRankings = () => {
  const element = document.getElementById('rankings-container');
  const rankings = getRankings();
  const sorted = rankings.sort((a, b) => b.score - a.score);
  sorted.forEach(ranking => {
    element.innerHTML += `<span id="rankings-user">${ranking.user}</span>: <span id="rankings-score">${ranking.score}</span> <br/> `;
  });
}