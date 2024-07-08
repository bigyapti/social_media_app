export interface UserItem {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface PostItem {
  userId: string;
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

export interface CommentItem {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PhotosItem {
  id: number;
  author: number;
  width: string;
  height: string;
  url: string;
  download_url: string;
}
