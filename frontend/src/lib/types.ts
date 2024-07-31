
export type Image = {
  url: string;
  altText?: string;
  width?: number;
  height?: number;
};

export type Tag = {
  name: TagName;
  values: string[];
};

type TagName = 'フレームワーク' | 'プログラミング言語' | 'カテゴリ' | 'CSS' | 'データベース' | 'CMS' | '認証' | '分析';


export type Product = {
  id: string;
  name: string;
  description?: string;
  featuredImage: Image;
  sourceUrl: string;
  demoUrl: string;
  tags: Tag[];
};

export type FilterListItem = {
  handle: string;
  name: TagName;
  options: string[];
};