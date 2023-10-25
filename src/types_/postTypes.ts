export type PostType = {
  [x: string]: string | number | Date;
  id: number;
  title: string;
  img: string;
  };
  
export type PostFormType = Omit<PostType, 'img'>;  
