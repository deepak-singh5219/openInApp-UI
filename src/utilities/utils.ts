import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    console.log("Hello"); // debug check
    return twMerge(clsx(inputs));
}
