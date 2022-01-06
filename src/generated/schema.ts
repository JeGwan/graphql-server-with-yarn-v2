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

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  withStatics?: InputMaybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  arrNullable?: Maybe<Array<Scalars['String']>>;
  bothNonNull: Array<Scalars['String']>;
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['String'];
  itemAndArrNullable?: Maybe<Array<Maybe<Scalars['String']>>>;
  itemNullabel: Array<Maybe<Scalars['String']>>;
  lastName: Scalars['String'];
};
