

function pad (n: number): string {
  return `${n}`.padStart(2, '0');
}

export function humanReadable(seconds:number):string {
  const minutes = Math.floor(seconds / 60)
  const hours =  Math.floor(minutes / 60)
  return `${pad(Math.floor(hours))}:${pad(minutes % 60)}:${pad(seconds % 60)}`
}