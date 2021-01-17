var queen = {
    pos: {
      x: 0,
      y: 4,
    },
  };
  
  var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ];

  var flag = false;

  let p = document.getElementById("message");
  let p1 = document.getElementById("current");
  p1.innerHTML =
    "Queen's current position =>" + board[queen.pos.x][queen.pos.y];
  
  function move(numberOfSteps, direction) {
    let tempx;
    let tempy;
  
    switch (direction) {
      case "E":
        tempx = queen.pos.y + numberOfSteps;
        if (tempx >= 8 || tempx < 0) {
          flag = true;
        } else {
          queen.pos.y = tempx;
        }
        break;
      case "W":
        tempx = queen.pos.y - numberOfSteps;
        if (tempx >= 8 || tempx < 0) {
          flag = true;
        } else {
          queen.pos.y = tempx;
        }
        break;
      case "S":
        tempx = queen.pos.x + numberOfSteps;
        if (tempx >= 8 || tempx < 0) {
          flag = true;
        } else {
          queen.pos.x = tempx;
        }
        break;
      case "N":
        tempx = queen.pos.x - numberOfSteps;
        if (tempx >= 8 || tempx < 0) {
          flag = true;
        } else {
          queen.pos.x = tempx;
        }
        break;
      case "SE":
        tempx = queen.pos.x + numberOfSteps;
        tempy = queen.pos.y + numberOfSteps;
        if ((tempx >= 8 || tempx < 0) || (tempy >= 8 || tempy < 0)) {
          flag = true;
        } else {
          queen.pos.x = tempx;
          queen.pos.y = tempy;
        }
        break;
      case "NW":
        tempx = queen.pos.x - numberOfSteps;
        tempy = queen.pos.y - numberOfSteps;
        if ((tempx >= 8 || tempx < 0) || (tempy >= 8 || tempy < 0)) {
          flag = true;
        } else {
          queen.pos.x = tempx;
          queen.pos.y = tempy;
        }
        break;
      case "SW":
        tempx = queen.pos.x + numberOfSteps;
        tempy = queen.pos.y - numberOfSteps;
        if ((tempx >= 8 || tempx < 0) || (tempy >= 8 || tempy < 0)) {
          flag = true;
        } else {
          queen.pos.x = tempx;
          queen.pos.y = tempy;
        }
        break;
      case "NE":
        tempx = queen.pos.x - numberOfSteps;
        tempy = queen.pos.y + numberOfSteps;
        if ((tempx >= 8 || tempx < 0) || (tempy >= 8 || tempy < 0)) {
          flag = true;
        } else {
          queen.pos.x = tempx;
          queen.pos.y = tempy;
        }
        break;
    }
  }
  
  function play() {
    p.innerHTML = "";
    let value = document.getElementById("position").value;
    var input = value.split(" ");
    input.forEach((num) => {
      let number = Number(num.slice(num.length - 1));
      let direction = num.slice(0, num.length - 1);
      move(number, direction);
    });
    p.innerHTML = "";
    if (flag == false) {
        p1.innerHTML =
            "Queen's current position =>" + board[queen.pos.x][queen.pos.y];
        p.innerHTML = "";
    } else if (flag == true){
        p.innerHTML = "Out of boundary";
        p1.innerHTML = "Queen's current position =>" + board[queen.pos.x][queen.pos.y];
        flag = false;
    }
  }
  function reset() {
      queen.pos.x = 0;
      queen.pos.y = 4;
      document.getElementById("position").value = "";
      p1.innerHTML = "Queen's current position =>" + board[queen.pos.x][queen.pos.y];
  }