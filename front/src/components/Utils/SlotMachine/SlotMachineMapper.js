export function consoleToSlotImg(consoleName) {
  switch (consoleName){
    case 'Game Boy Color':
    return 1;
    case 'NES':
    return 2;
    case 'SNES':
    return 3;
    case 'Master System':
    return 4;
    case 'Genesis':
    return 5;
    case 'Game Boy':
    return 6;
    default:
    return 0;
  }
}
