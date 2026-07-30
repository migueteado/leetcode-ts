function minimumPushes(word: string): number {
  // There are only 8 keys available to distribute the chars at word
  const availableKeys = 8;
  // Count char occurrences
  const charMap: Record<string, number> = {};
  for (let i = 0; i < word.length; i++) {
    const curr = charMap[word[i]] ? charMap[word[i]] : 0;
    charMap[word[i]] = curr + 1;
  }

  // Sort by most occurrences
  const array: { char: string; occurrences: number }[] = [];
  for (const [key, value] of Object.entries(charMap)) {
    array.push({ char: key, occurrences: value });
  }
  array.sort((a, b) => b.occurrences - a.occurrences);

  // Sum typing cost by char
  let output = 0;
  let cost;
  for (let i = 0; i < array.length; i++) {
    cost = i === 0 ? 1 : Math.floor(1 + i / availableKeys);
    output += cost * array[i].occurrences;
  }

  return output;
}
