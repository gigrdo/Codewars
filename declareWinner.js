// declareWinner.js  
// 7kyu - Determine winner between two fighters  
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

/*
P: Two Fighter instances and a string with the name of the first attacker
R: Return the name of the fighter who wins the battle
E:
  declareWinner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
P:
  - Assign who attacks first based on name
  - Loop:
      - Subtract attacker's damage from defender's health
      - If defender's health <= 0, return attacker's name
      - Swap attacker and defender
*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = attacker === fighter1 ? fighter2 : fighter1;

  while (true) {
    defender.health -= attacker.damagePerAttack;
    if (defender.health <= 0) {
      return attacker.name;
    }
    [attacker, defender] = [defender, attacker];
  }
}

