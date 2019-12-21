export interface IQuote {
  author: string;
  text: string;
}

export class Quotes {
  private quotes: IQuote[] = [
    {
      author: 'Steve Jobs',
      text:
        "You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.",
    },
    {
      author: 'Bill Gates',
      text: 'Your most unhappy customers are your greatest source of learning.',
    },
    {
      author: 'Albert Einstein',
      text: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
    },
    {
      author: 'Thomas Edison',
      text:
        'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    },
    {
      author: 'Pablo Picasso',
      text: 'Every child is an artist. The problem is how to remain an artist once we grow up.',
    },
    {
      author: 'Pablo Picasso',
      text: 'Computers are useless. They can only give you answers.',
    },
    {
      author: 'Leonardo da Vinci',
      text: 'Simplicity is the ultimate sophistication.',
    },
    {
      author: 'Confucius',
      text:
        'Give a man a fish and he will eat for a day. Teach a man to fish and he will eat for a lifetime.',
    },
    {
      author: 'Dr. Seuss',
      text: "Don't cry because it's over, smile because it happened.",
    },
  ];

  public getRandomQuote = () => {
    const min = 0;
    const max = this.quotes.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    return this.quotes[index];
  };
}
