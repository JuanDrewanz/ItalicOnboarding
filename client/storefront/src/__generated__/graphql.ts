/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Categories = {
  __typename?: 'Categories';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  loginUser?: Maybe<User>;
  registerUser?: Maybe<User>;
};


export type MutationLoginUserArgs = {
  user?: InputMaybe<UserLoginData>;
};


export type MutationRegisterUserArgs = {
  user?: InputMaybe<UserRegisterData>;
};

export type Products = {
  __typename?: 'Products';
  avg_rating?: Maybe<Scalars['Float']>;
  category?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageurl?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  reviews_count?: Maybe<Scalars['Int']>;
  specifications?: Maybe<Specifications>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Maybe<Categories>>>;
  getProductById?: Maybe<Products>;
  getProducts?: Maybe<Array<Maybe<Products>>>;
  getProductsByCat?: Maybe<Array<Maybe<Products>>>;
  searchProduct?: Maybe<Array<Maybe<Products>>>;
  user?: Maybe<User>;
};


export type QueryGetProductByIdArgs = {
  prodId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProductsByCatArgs = {
  catId?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchProductArgs = {
  title?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Specifications = {
  __typename?: 'Specifications';
  color?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_banned?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserLoginData = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserRegisterData = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};
