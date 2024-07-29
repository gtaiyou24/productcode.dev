
export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Tag = {
  id: string;
  name: TagName;
  values: string[];
};

type TagName = 'Framework' | 'UseCase' | 'CSS' | 'DataBase' | 'Auth';


export type Product = {
  id: string;
  name: string;
  description?: string;
  featuredImage: Image;
  sourceUrl: string;
  demoUrl: string;
  tags: Tag[];
};