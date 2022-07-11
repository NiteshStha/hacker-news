export interface HackerNewsUrl {
  base: string;
  topStories: string;
}

export const url: HackerNewsUrl = {
  base: 'https://hacker-news.firebaseio.com/v0/',
  topStories: 'https://hacker-news.firebaseio.com/v0/topstories.json',
};
