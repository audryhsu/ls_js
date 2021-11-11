function star(n) {
  let center = Math.floor(n / 2);
  let left = 0;
  let right = n - 1;
  while (left < center) {
    console.log(`${' '.repeat(left)}*${' '.repeat(center - left - 1)}*${' '.repeat(right - center - 1)}*`);
    left++;
    right--;
  }
  console.log('*'.repeat(n));
  left--;
  right++;
  while (right < n) {
    console.log(`${' '.repeat(left)}*${' '.repeat(center - left - 1)}*${' '.repeat(right - center - 1)}*`);
    left--;
    right++;
  }
}


star(9);
