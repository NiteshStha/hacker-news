export interface HackerNewsUrl {
  base: string;
  topStories: string;
  getUrl: (url: string) => string;
}

export const HnUrl: HackerNewsUrl = {
  base: 'https://hacker-news.firebaseio.com/v0/',
  topStories: 'https://hacker-news.firebaseio.com/v0/topstories.json',

  getUrl: function (url: string): string {
    return `${this.base}/${url}`;
  },
};
