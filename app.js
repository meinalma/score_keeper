var player_one_btn = document.querySelector("#player-1-button");
var player_two_btn = document.querySelector("#player-2-button");
var player_one_score = document.querySelector("#player-1-score");
var player_two_score = document.querySelector("#player-2-score");
var reset_btn = document.querySelector("#reset-button");
var playing_to_display = document.querySelector("#playing-to-display");
var numInput = document.querySelector("#playing-to");
var winningScore;

var gameOver = false;

var score_one = 0;
var score_two = 0;

player_one_btn.addEventListener("click", function(){
  if(!gameOver) {
    score_one++;
    if(score_one === winningScore) {
      player_one_score.classList.add("green");
      gameOver = true;
    }
    player_one_score.textContent = score_one;
  }
});

player_two_btn.addEventListener("click", function(){
  if(!gameOver) {
    score_two++;
    if(score_two === winningScore) {
      player_two_score.classList.add("green");
      gameOver = true;
    }
    player_two_score.textContent = score_two;
  }
});

//reset
reset_btn.addEventListener("click", function(){
  reset();
});

function reset(){
  score_one = 0;
  score_two = 0;
  document.querySelector("#player-1-score").innerHTML = score_one;
  document.querySelector("#player-2-score").innerHTML = score_one;
  player_one_score.classList.remove("green");
  player_two_score.classList.remove("green");
  gameOver = false;
}

numInput.addEventListener("change", function(){
  playing_to_display.textContent = this.value;
  winningScore = Number(numInput.value);
  reset();
});
