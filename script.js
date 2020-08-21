const box = new Array(25);
function checkEnd(part) {
  if ((box[0] == part && box[1] == part && box[2] == part && box[3] == part && box[4] == part)
    || (box[5] == part && box[6] == part && box[7] == part && box[8] == part && box[9] == part)
    || (box[10] == part && box[11] == part && box[12] == part && box[13] == part && box[14] == part)
    || (box[15] == part && box[16] == part && box[17] == part && box[18] == part && box[19] == part)
    || (box[20] == part && box[21] == part && box[22] == part && box[23] == part && box[24] == part)

    || (box[0] == part && box[5] == part && box[10] == part && box[15] == part && box[20] == part)
    || (box[1] == part && box[6] == part && box[11] == part && box[16] == part && box[21] == part)
    || (box[2] == part && box[7] == part && box[12] == part && box[17] == part && box[22] == part)
    || (box[3] == part && box[8] == part && box[13] == part && box[18] == part && box[23] == part)
    || (box[4] == part && box[9] == part && box[14] == part && box[19] == part && box[24] == part)

    || (box[0] == part && box[6] == part && box[12] == part && box[18] == part && box[24] == part)
    || (box[4] == part && box[8] == part && box[12] == part && box[16] == part && box[20] == part)) return true;
}

function noWinner() {
  if (box[0] && box[1] && box[2] && box[3] && box[4] && box[5] && box[6] && box[7] && box[8] && box[9] && box[10] && box[11] && box[12]
    && box[13] && box[14] && box[15] && box[16] && box[17] && box[18] && box[19] && box[20] && box[21] && box[22] && box[23] && box[24]) return true;
}


function move(id, role) {
  if (box[id]) return false;
  box[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  noWinner() ? restart("Так себе раунд(") : checkEnd('player') ? restart("Вы победили!") : !checkEnd('ai') ? (role == 'player') ? ai() : null : restart("Победил ИИ!")
}

function ai() {
  const id = Math.floor(Math.random() * 25);
  box[id] ? ai() : move(id, 'ai');
}

function restart(text) {
  alert(text);
  location.reload();
}
