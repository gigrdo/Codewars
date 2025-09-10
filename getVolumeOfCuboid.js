// getVolumeOfCuboid.js  
// 8kyu - Calculate the volume of a cuboid using a static method  
// https://www.codewars.com/kata/58261acb22be6e2ed800003a

/*
P: Three positive numbers: length, width, height
R: Return the volume of a cuboid: length * width * height
E:
  Kata.getVolumeOfCuboid(1, 2, 2) => 4
  Kata.getVolumeOfCuboid(6.3, 2, 5) => 63
P:
  - Multiply the three parameters together
  - Use a static method inside a class
*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

