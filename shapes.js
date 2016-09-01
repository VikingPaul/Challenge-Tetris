var shapes = function(position, piece) {
  if (position == 0) {
    switch (piece) {
    case 1:
      height1 = 4
      width1 = 1
      break;
    case 2:
      x1 = x1-2
      height1 = 1
      width1 = 1

      y2 = y2-1
      x2 = x2+1
      height2 = 3
      width2 = 1
      break;
    case 3:
      x1 = x1-1
      y1 = y1-2
      height1 = 3
      width1 = 1

      x2 = x2+2
      y2 = y2-1
      height2 = 1
      width2 = 1
      break;
    case 4:
      y1 = y1-2
      height1 = 2
      width1 = 1

      height2 = 2
      width2 = 1
      break;
    case 5:
      y1 = y1+1
      height1 = 2
      width1 = 1

      y2 = y2-1
      height2 = 2
      width2 = 1
      break;
    case 6:
      y1 = y1-1
      height1 = 3
      width1 = 1

      y2 = y2-1
      height2 = 1
      width2 = 1
      break;
    case 7:
      height1 = 2
      width1 = 1

      x2 = x2+1
      y2 = y2-1
      height2 = 2
      width2 = 1
      break;
    }
  } else if (position == 1) {
    switch (piece) {
    case 1:
      height1 = 1
      width1 = 4
      break;
    case 2:
      height1 = 1
      width1 = 3

      x2 = x2-1
      y2 = y2+1
      height2 = 1
      width2 = 1
      break;
    case 3:
      height1 = 1
      width1 = 1

      x2 = x2-1
      y2 = y2+1
      height2 = 1
      width2 = 3
      break;
    case 4:
      y1 = y1+2
      height1 = 1
      width1 = 2

      height2 = 1
      width2 = 2
      break;
    case 5:
      height1 = 1
      width1 = 2

      y2 = y2+2
      height2 = 1
      width2 = 2
      break;
    case 6:
      y1 = y1+1
      height1 = 1
      width1 = 3

      y2 = y2-1
      height2 = 1
      width2 = 1
      break;
    case 7:
      height1 = 1
      width1 = 2

      x2 = x2-1
      y2 = y2+1
      height2 = 1
      width2 = 2
      break;
    }
  } else if (position == 2) {
    switch (piece) {
    case 1:
      height1 = 4
      width1 = 1
      break;
    case 2:
      x1 = x1+1
      y1 = y1-1
      height1 = 3
      width1 = 1

      x2 = x2+2
      height2 = 1
      width2 = 1
      break;
    case 3:
      x1 = x1+1
      height1 = 3
      width1 = 1

      y2 = y2+1
      height2 = 1
      width2 = 1
      break;
    case 4:
      y1 = y1-2
      height1 = 2
      width1 = 1

      height2 = 2
      width2 = 1
      break;
    case 5:
      height1 = 2
      width1 = 1

      y2 = y2-2
      height2 = 2
      width2 = 1
      break;
    case 6:
      height1 = 1
      width1 = 1

      height2 = 3
      width2 = 1
      break;
    case 7:
      height1 = 2
      width1 = 1

      x2 = x2+1
      y2 = y2-1
      height2 = 2
      width2 = 1
      break;
    }
  } else if (position == 3) {
    switch (piece) {
    case 1:
      height1 = 1
      width1 = 4
      break;
    case 2:
      x1 = x1+1
      height1 = 1
      width1 = 1

      x2 = x2-2
      y2 = y2-1
      height2 = 1
      width2 = 3
      break;
    case 3:
      x1 = x1+1
      y1 = y1+2
      height1 = 1
      width1 = 1

      y2 = y2-1
      height2 = 1
      width2 = 3
      break;
    case 4:
      y1 = y1+2
      height1 = 1
      width1 = 2

      height2 = 1
      width2 = 2
      break;
    case 5:
      height1 = 1
      width1 = 2

      y2 = y2+2
      height2 = 1
      width2 = 2
      break;
    case 6:
      height1 = 1
      width1 = 3

      y2 = y2+2
      height2 = 1
      width2 = 1
      break;
    case 7:
      height1 = 1
      width1 = 2

      x2 = x2-1
      y2 = y2+1
      height2 = 1
      width2 = 2
      break;
    }
  } else {
    console.log("ERROR",position)
  }
}