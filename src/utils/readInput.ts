import fs from 'node:fs';
import path from 'node:path';

export function readInput(filePath: string): string {
  return fs.readFileSync(filePath, 'utf8');
}

export function resolvePath(...paths: string[]): string {
  return path.resolve(...paths);
}
