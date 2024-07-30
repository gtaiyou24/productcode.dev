
export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Tag = {
  name: TagName;
  values: string[];
};

type TagName = 'Framework' | 'Use Case' | 'CSS' | 'Database' | 'CMS' | 'Authentication' | 'Analytics';


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
  name: string;
  options: string[];
};