import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak'
})
export class LineBreakPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    // नई लाइनों के अनुसार टेक्स्ट को स्प्लिट करें और प्रत्येक को <li> में कनवर्ट करें
    return value.split('\n').map(line => `<li>${line}</li>`).join('');
  }

}
