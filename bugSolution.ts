function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20); // Correct usage

//Or

function add(a: number | string, b: number | string): number | string {
  if(typeof a === 'string' || typeof b === 'string'){
    return String(a) + String(b);
  }
  return a + b;
}

let result2 = add("10", 20); // Correct usage with string and number