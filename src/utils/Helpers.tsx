export const capitaliseFirstLetter = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

/* TUNE */

const A = 440; // STANDARD FOR A440
const SEMITONE = 69; //STANDARD MIDI FOR A440
export const noteStrings = ['C', 'C#', 'D', 'D#', 'E', 'F', 'G', 'G#', 'A', 'B']; // i used # instead of ♯

export const getNote = (freq: number) => {
  const note = 12 * (Math.log(freq / A) / Math.log(2));
  return Math.round(note) + SEMITONE; // as long as u fall within the range, thats your note (bigger basket)
};

export const getStandardFrequency = (note: any) => {
  return A * Math.pow(2, (note - SEMITONE) / 12); // somehow is the reverse, but this gets a more specific no.
};

export const getCents = (frequency: number, note: any) => {
  return Math.floor((1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2));
};

/* TRANSPOSE */

const chordFamilyChart = [
  { key: 'A', value: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'] },
  { key: 'B', value: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'] },
  { key: 'C', value: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'] },
  { key: 'D', value: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'] },
  { key: 'E', value: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'] },
  { key: 'F', value: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'] },
  { key: 'G', value: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'] },
];
