const player = document.getElementById('defaultPlayer');

let currentPlayer = 'circle';

const addCross = (event) => {
  event.target.classList.add('cell__icon--cross');
  event.target.disabled = true;
};

const addCircle = (event) => {
  event.target.classList.add('cell__icon--circle');
  event.target.disabled = true;
};

const handleClick = (event) => {
  if (currentPlayer === 'circle') {
    addCircle(event);
    currentPlayer = 'cross';
    player.src = 'imgs/cross.svg';
    player.alt = 'cross';
  } else {
    addCross(event);
    currentPlayer = 'circle';
    player.src = 'imgs/circle.svg';
    player.alt = 'circle';
  }
};

// assigning eventListener to buttons in the 1st row

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', handleClick);


const confirmAction = (message) => confirm(message);

document
  .querySelector(".buttons__restart")
  .addEventListener("click", (event) => {
    if (!confirmAction("Jste si jisti, že chcete restartovat hru?")) {
      event.preventDefault();
    }
  });
document
  .querySelector(".buttons__home")
  .addEventListener("click", (event) => {
    if (
      !confirmAction(
        "Opravdu chceš odejít?"
      )
    ) {
      event.preventDefault();
    }
  });