import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "app_state" */
export type App_State = {
  __typename?: 'app_state';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  meta: Scalars['jsonb'];
  session_id: Scalars['String'];
  user_id: Scalars['uuid'];
};


/** columns and relationships of "app_state" */
export type App_StateMetaArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "app_state" */
export type App_State_Aggregate = {
  __typename?: 'app_state_aggregate';
  aggregate?: Maybe<App_State_Aggregate_Fields>;
  nodes: Array<App_State>;
};

/** aggregate fields of "app_state" */
export type App_State_Aggregate_Fields = {
  __typename?: 'app_state_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_State_Max_Fields>;
  min?: Maybe<App_State_Min_Fields>;
};


/** aggregate fields of "app_state" */
export type App_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_State_Append_Input = {
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "app_state". All fields are combined with a logical 'AND'. */
export type App_State_Bool_Exp = {
  _and?: InputMaybe<Array<App_State_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<App_State_Bool_Exp>;
  _or?: InputMaybe<Array<App_State_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  session_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_state" */
export type App_State_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'app_state__id_uindex';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_State_Delete_At_Path_Input = {
  meta?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_State_Delete_Elem_Input = {
  meta?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_State_Delete_Key_Input = {
  meta?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "app_state" */
export type App_State_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  session_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type App_State_Max_Fields = {
  __typename?: 'app_state_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  session_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type App_State_Min_Fields = {
  __typename?: 'app_state_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  session_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "app_state" */
export type App_State_Mutation_Response = {
  __typename?: 'app_state_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_State>;
};

/** on_conflict condition type for table "app_state" */
export type App_State_On_Conflict = {
  constraint: App_State_Constraint;
  update_columns?: Array<App_State_Update_Column>;
  where?: InputMaybe<App_State_Bool_Exp>;
};

/** Ordering options when selecting data from "app_state". */
export type App_State_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_State_Prepend_Input = {
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "app_state" */
export type App_State_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'meta'
  /** column name */
  | 'session_id'
  /** column name */
  | 'user_id';

/** input type for updating data in table "app_state" */
export type App_State_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  session_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "app_state" */
export type App_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_State_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  session_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "app_state" */
export type App_State_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'meta'
  /** column name */
  | 'session_id'
  /** column name */
  | 'user_id';

export type App_State_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<App_State_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<App_State_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<App_State_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<App_State_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<App_State_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_State_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_State_Bool_Exp;
};

/** columns and relationships of "blueprint" */
export type Blueprint = {
  __typename?: 'blueprint';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  ai_gen: Scalars['Boolean'];
  dataframe_id: Scalars['uuid'];
  display_format: Scalars['String'];
  display_name: Scalars['String'];
  horizontal_align: Scalars['String'];
  index: Scalars['Int'];
  is_processing: Scalars['Boolean'];
  overflow: Scalars['String'];
  selected: Scalars['Boolean'];
  shown: Scalars['Boolean'];
  slug: Scalars['String'];
  sticky_left: Scalars['Boolean'];
  sticky_right: Scalars['Boolean'];
  system: Scalars['Boolean'];
  type: Scalars['String'];
  vertical_align: Scalars['String'];
  width: Scalars['Int'];
};

/** aggregated selection of "blueprint" */
export type Blueprint_Aggregate = {
  __typename?: 'blueprint_aggregate';
  aggregate?: Maybe<Blueprint_Aggregate_Fields>;
  nodes: Array<Blueprint>;
};

export type Blueprint_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Blueprint_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Blueprint_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Blueprint_Aggregate_Bool_Exp_Count>;
};

export type Blueprint_Aggregate_Bool_Exp_Bool_And = {
  arguments: Blueprint_Select_Column_Blueprint_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Blueprint_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Blueprint_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Blueprint_Select_Column_Blueprint_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Blueprint_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Blueprint_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Blueprint_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Blueprint_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "blueprint" */
export type Blueprint_Aggregate_Fields = {
  __typename?: 'blueprint_aggregate_fields';
  avg?: Maybe<Blueprint_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Blueprint_Max_Fields>;
  min?: Maybe<Blueprint_Min_Fields>;
  stddev?: Maybe<Blueprint_Stddev_Fields>;
  stddev_pop?: Maybe<Blueprint_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blueprint_Stddev_Samp_Fields>;
  sum?: Maybe<Blueprint_Sum_Fields>;
  var_pop?: Maybe<Blueprint_Var_Pop_Fields>;
  var_samp?: Maybe<Blueprint_Var_Samp_Fields>;
  variance?: Maybe<Blueprint_Variance_Fields>;
};


/** aggregate fields of "blueprint" */
export type Blueprint_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blueprint_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blueprint" */
export type Blueprint_Aggregate_Order_By = {
  avg?: InputMaybe<Blueprint_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blueprint_Max_Order_By>;
  min?: InputMaybe<Blueprint_Min_Order_By>;
  stddev?: InputMaybe<Blueprint_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Blueprint_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Blueprint_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Blueprint_Sum_Order_By>;
  var_pop?: InputMaybe<Blueprint_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Blueprint_Var_Samp_Order_By>;
  variance?: InputMaybe<Blueprint_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "blueprint" */
export type Blueprint_Arr_Rel_Insert_Input = {
  data: Array<Blueprint_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Blueprint_On_Conflict>;
};

/** aggregate avg on columns */
export type Blueprint_Avg_Fields = {
  __typename?: 'blueprint_avg_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blueprint" */
export type Blueprint_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blueprint". All fields are combined with a logical 'AND'. */
export type Blueprint_Bool_Exp = {
  _and?: InputMaybe<Array<Blueprint_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Blueprint_Bool_Exp>;
  _or?: InputMaybe<Array<Blueprint_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  ai_gen?: InputMaybe<Boolean_Comparison_Exp>;
  dataframe_id?: InputMaybe<Uuid_Comparison_Exp>;
  display_format?: InputMaybe<String_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  horizontal_align?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  is_processing?: InputMaybe<Boolean_Comparison_Exp>;
  overflow?: InputMaybe<String_Comparison_Exp>;
  selected?: InputMaybe<Boolean_Comparison_Exp>;
  shown?: InputMaybe<Boolean_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  sticky_left?: InputMaybe<Boolean_Comparison_Exp>;
  sticky_right?: InputMaybe<Boolean_Comparison_Exp>;
  system?: InputMaybe<Boolean_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  vertical_align?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "blueprint" */
export type Blueprint_Constraint =
  /** unique or primary key constraint on columns "slug", "dataframe_id" */
  | 'blueprint__dataframe_id_slug_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'blueprint__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'blueprint_pk';

/** input type for incrementing numeric columns in table "blueprint" */
export type Blueprint_Inc_Input = {
  index?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "blueprint" */
export type Blueprint_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_gen?: InputMaybe<Scalars['Boolean']>;
  dataframe_id?: InputMaybe<Scalars['uuid']>;
  display_format?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  horizontal_align?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  is_processing?: InputMaybe<Scalars['Boolean']>;
  overflow?: InputMaybe<Scalars['String']>;
  selected?: InputMaybe<Scalars['Boolean']>;
  shown?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  sticky_left?: InputMaybe<Scalars['Boolean']>;
  sticky_right?: InputMaybe<Scalars['Boolean']>;
  system?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  vertical_align?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Blueprint_Max_Fields = {
  __typename?: 'blueprint_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  dataframe_id?: Maybe<Scalars['uuid']>;
  display_format?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  horizontal_align?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  overflow?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vertical_align?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "blueprint" */
export type Blueprint_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  dataframe_id?: InputMaybe<Order_By>;
  display_format?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  horizontal_align?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  overflow?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vertical_align?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Blueprint_Min_Fields = {
  __typename?: 'blueprint_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  dataframe_id?: Maybe<Scalars['uuid']>;
  display_format?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  horizontal_align?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  overflow?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vertical_align?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "blueprint" */
export type Blueprint_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  dataframe_id?: InputMaybe<Order_By>;
  display_format?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  horizontal_align?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  overflow?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vertical_align?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "blueprint" */
export type Blueprint_Mutation_Response = {
  __typename?: 'blueprint_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Blueprint>;
};

/** on_conflict condition type for table "blueprint" */
export type Blueprint_On_Conflict = {
  constraint: Blueprint_Constraint;
  update_columns?: Array<Blueprint_Update_Column>;
  where?: InputMaybe<Blueprint_Bool_Exp>;
};

/** Ordering options when selecting data from "blueprint". */
export type Blueprint_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  ai_gen?: InputMaybe<Order_By>;
  dataframe_id?: InputMaybe<Order_By>;
  display_format?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  horizontal_align?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  is_processing?: InputMaybe<Order_By>;
  overflow?: InputMaybe<Order_By>;
  selected?: InputMaybe<Order_By>;
  shown?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sticky_left?: InputMaybe<Order_By>;
  sticky_right?: InputMaybe<Order_By>;
  system?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vertical_align?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: blueprint */
export type Blueprint_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "blueprint" */
export type Blueprint_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_gen'
  /** column name */
  | 'dataframe_id'
  /** column name */
  | 'display_format'
  /** column name */
  | 'display_name'
  /** column name */
  | 'horizontal_align'
  /** column name */
  | 'index'
  /** column name */
  | 'is_processing'
  /** column name */
  | 'overflow'
  /** column name */
  | 'selected'
  /** column name */
  | 'shown'
  /** column name */
  | 'slug'
  /** column name */
  | 'sticky_left'
  /** column name */
  | 'sticky_right'
  /** column name */
  | 'system'
  /** column name */
  | 'type'
  /** column name */
  | 'vertical_align'
  /** column name */
  | 'width';

/** select "blueprint_aggregate_bool_exp_bool_and_arguments_columns" columns of table "blueprint" */
export type Blueprint_Select_Column_Blueprint_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'ai_gen'
  /** column name */
  | 'is_processing'
  /** column name */
  | 'selected'
  /** column name */
  | 'shown'
  /** column name */
  | 'sticky_left'
  /** column name */
  | 'sticky_right'
  /** column name */
  | 'system';

/** select "blueprint_aggregate_bool_exp_bool_or_arguments_columns" columns of table "blueprint" */
export type Blueprint_Select_Column_Blueprint_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'ai_gen'
  /** column name */
  | 'is_processing'
  /** column name */
  | 'selected'
  /** column name */
  | 'shown'
  /** column name */
  | 'sticky_left'
  /** column name */
  | 'sticky_right'
  /** column name */
  | 'system';

/** input type for updating data in table "blueprint" */
export type Blueprint_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_gen?: InputMaybe<Scalars['Boolean']>;
  dataframe_id?: InputMaybe<Scalars['uuid']>;
  display_format?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  horizontal_align?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  is_processing?: InputMaybe<Scalars['Boolean']>;
  overflow?: InputMaybe<Scalars['String']>;
  selected?: InputMaybe<Scalars['Boolean']>;
  shown?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  sticky_left?: InputMaybe<Scalars['Boolean']>;
  sticky_right?: InputMaybe<Scalars['Boolean']>;
  system?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  vertical_align?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Blueprint_Stddev_Fields = {
  __typename?: 'blueprint_stddev_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blueprint" */
export type Blueprint_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blueprint_Stddev_Pop_Fields = {
  __typename?: 'blueprint_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blueprint" */
export type Blueprint_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blueprint_Stddev_Samp_Fields = {
  __typename?: 'blueprint_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blueprint" */
export type Blueprint_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "blueprint" */
export type Blueprint_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blueprint_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blueprint_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_gen?: InputMaybe<Scalars['Boolean']>;
  dataframe_id?: InputMaybe<Scalars['uuid']>;
  display_format?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  horizontal_align?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  is_processing?: InputMaybe<Scalars['Boolean']>;
  overflow?: InputMaybe<Scalars['String']>;
  selected?: InputMaybe<Scalars['Boolean']>;
  shown?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  sticky_left?: InputMaybe<Scalars['Boolean']>;
  sticky_right?: InputMaybe<Scalars['Boolean']>;
  system?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  vertical_align?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Blueprint_Sum_Fields = {
  __typename?: 'blueprint_sum_fields';
  index?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blueprint" */
export type Blueprint_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** update columns of table "blueprint" */
export type Blueprint_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_gen'
  /** column name */
  | 'dataframe_id'
  /** column name */
  | 'display_format'
  /** column name */
  | 'display_name'
  /** column name */
  | 'horizontal_align'
  /** column name */
  | 'index'
  /** column name */
  | 'is_processing'
  /** column name */
  | 'overflow'
  /** column name */
  | 'selected'
  /** column name */
  | 'shown'
  /** column name */
  | 'slug'
  /** column name */
  | 'sticky_left'
  /** column name */
  | 'sticky_right'
  /** column name */
  | 'system'
  /** column name */
  | 'type'
  /** column name */
  | 'vertical_align'
  /** column name */
  | 'width';

export type Blueprint_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Blueprint_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blueprint_Set_Input>;
  /** filter the rows which have to be updated */
  where: Blueprint_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Blueprint_Var_Pop_Fields = {
  __typename?: 'blueprint_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blueprint" */
export type Blueprint_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blueprint_Var_Samp_Fields = {
  __typename?: 'blueprint_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blueprint" */
export type Blueprint_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Blueprint_Variance_Fields = {
  __typename?: 'blueprint_variance_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blueprint" */
export type Blueprint_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "dataframe" */
export type Dataframe = {
  __typename?: 'dataframe';
  _blueprint?: Maybe<Scalars['jsonb']>;
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamp'];
  analysis_column?: Maybe<Scalars['String']>;
  /** fetch data from the table: "blueprint" */
  blueprint: Array<Blueprint>;
  /** fetch aggregated fields from the table: "blueprint" */
  blueprint_aggregate: Blueprint_Aggregate;
  bp_version: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['jsonb']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  table_name?: Maybe<Scalars['String']>;
  workspace_id: Scalars['uuid'];
};


/** columns and relationships of "dataframe" */
export type Dataframe_BlueprintArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "dataframe" */
export type DataframeBlueprintArgs = {
  distinct_on?: InputMaybe<Array<Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blueprint_Order_By>>;
  where?: InputMaybe<Blueprint_Bool_Exp>;
};


/** columns and relationships of "dataframe" */
export type DataframeBlueprint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blueprint_Order_By>>;
  where?: InputMaybe<Blueprint_Bool_Exp>;
};


/** columns and relationships of "dataframe" */
export type DataframeMetaArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "dataframe" */
export type Dataframe_Aggregate = {
  __typename?: 'dataframe_aggregate';
  aggregate?: Maybe<Dataframe_Aggregate_Fields>;
  nodes: Array<Dataframe>;
};

/** aggregate fields of "dataframe" */
export type Dataframe_Aggregate_Fields = {
  __typename?: 'dataframe_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Dataframe_Max_Fields>;
  min?: Maybe<Dataframe_Min_Fields>;
};


/** aggregate fields of "dataframe" */
export type Dataframe_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dataframe_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Dataframe_Append_Input = {
  _blueprint?: InputMaybe<Scalars['jsonb']>;
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "dataframe". All fields are combined with a logical 'AND'. */
export type Dataframe_Bool_Exp = {
  _and?: InputMaybe<Array<Dataframe_Bool_Exp>>;
  _blueprint?: InputMaybe<Jsonb_Comparison_Exp>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Dataframe_Bool_Exp>;
  _or?: InputMaybe<Array<Dataframe_Bool_Exp>>;
  _up?: InputMaybe<Timestamp_Comparison_Exp>;
  analysis_column?: InputMaybe<String_Comparison_Exp>;
  blueprint?: InputMaybe<Blueprint_Bool_Exp>;
  blueprint_aggregate?: InputMaybe<Blueprint_Aggregate_Bool_Exp>;
  bp_version?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  table_name?: InputMaybe<String_Comparison_Exp>;
  workspace_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "dataframe" */
export type Dataframe_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'dataset_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Dataframe_Delete_At_Path_Input = {
  _blueprint?: InputMaybe<Array<Scalars['String']>>;
  meta?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Dataframe_Delete_Elem_Input = {
  _blueprint?: InputMaybe<Scalars['Int']>;
  meta?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Dataframe_Delete_Key_Input = {
  _blueprint?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "dataframe" */
export type Dataframe_Insert_Input = {
  _blueprint?: InputMaybe<Scalars['jsonb']>;
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  analysis_column?: InputMaybe<Scalars['String']>;
  blueprint?: InputMaybe<Blueprint_Arr_Rel_Insert_Input>;
  bp_version?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Dataframe_Max_Fields = {
  __typename?: 'dataframe_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamp']>;
  analysis_column?: Maybe<Scalars['String']>;
  bp_version?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  table_name?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Dataframe_Min_Fields = {
  __typename?: 'dataframe_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamp']>;
  analysis_column?: Maybe<Scalars['String']>;
  bp_version?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  table_name?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "dataframe" */
export type Dataframe_Mutation_Response = {
  __typename?: 'dataframe_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Dataframe>;
};

/** on_conflict condition type for table "dataframe" */
export type Dataframe_On_Conflict = {
  constraint: Dataframe_Constraint;
  update_columns?: Array<Dataframe_Update_Column>;
  where?: InputMaybe<Dataframe_Bool_Exp>;
};

/** Ordering options when selecting data from "dataframe". */
export type Dataframe_Order_By = {
  _blueprint?: InputMaybe<Order_By>;
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  analysis_column?: InputMaybe<Order_By>;
  blueprint_aggregate?: InputMaybe<Blueprint_Aggregate_Order_By>;
  bp_version?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: dataframe */
export type Dataframe_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Dataframe_Prepend_Input = {
  _blueprint?: InputMaybe<Scalars['jsonb']>;
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "dataframe" */
export type Dataframe_Select_Column =
  /** column name */
  | '_blueprint'
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'analysis_column'
  /** column name */
  | 'bp_version'
  /** column name */
  | 'icon'
  /** column name */
  | 'meta'
  /** column name */
  | 'name'
  /** column name */
  | 'slug'
  /** column name */
  | 'table_name'
  /** column name */
  | 'workspace_id';

/** input type for updating data in table "dataframe" */
export type Dataframe_Set_Input = {
  _blueprint?: InputMaybe<Scalars['jsonb']>;
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  analysis_column?: InputMaybe<Scalars['String']>;
  bp_version?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "dataframe" */
export type Dataframe_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dataframe_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dataframe_Stream_Cursor_Value_Input = {
  _blueprint?: InputMaybe<Scalars['jsonb']>;
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  analysis_column?: InputMaybe<Scalars['String']>;
  bp_version?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "dataframe" */
export type Dataframe_Update_Column =
  /** column name */
  | '_blueprint'
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'analysis_column'
  /** column name */
  | 'bp_version'
  /** column name */
  | 'icon'
  /** column name */
  | 'meta'
  /** column name */
  | 'name'
  /** column name */
  | 'slug'
  /** column name */
  | 'table_name'
  /** column name */
  | 'workspace_id';

export type Dataframe_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Dataframe_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Dataframe_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Dataframe_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Dataframe_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Dataframe_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Dataframe_Set_Input>;
  /** filter the rows which have to be updated */
  where: Dataframe_Bool_Exp;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "history" */
export type History = {
  __typename?: 'history';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  dataframe_id?: Maybe<Scalars['String']>;
  initiator_id: Scalars['uuid'];
  initiator_type: Scalars['String'];
  item: Scalars['jsonb'];
  job_id?: Maybe<Scalars['uuid']>;
  type: Scalars['String'];
  version?: Maybe<Scalars['String']>;
  workspace_id: Scalars['uuid'];
};


/** columns and relationships of "history" */
export type HistoryItemArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "history" */
export type History_Aggregate = {
  __typename?: 'history_aggregate';
  aggregate?: Maybe<History_Aggregate_Fields>;
  nodes: Array<History>;
};

/** aggregate fields of "history" */
export type History_Aggregate_Fields = {
  __typename?: 'history_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<History_Max_Fields>;
  min?: Maybe<History_Min_Fields>;
};


/** aggregate fields of "history" */
export type History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type History_Append_Input = {
  item?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "history". All fields are combined with a logical 'AND'. */
export type History_Bool_Exp = {
  _and?: InputMaybe<Array<History_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<History_Bool_Exp>;
  _or?: InputMaybe<Array<History_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  dataframe_id?: InputMaybe<String_Comparison_Exp>;
  initiator_id?: InputMaybe<Uuid_Comparison_Exp>;
  initiator_type?: InputMaybe<String_Comparison_Exp>;
  item?: InputMaybe<Jsonb_Comparison_Exp>;
  job_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
  workspace_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "history" */
export type History_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'history_pk'
  /** unique or primary key constraint on columns "_id" */
  | 'queries_id_uindex';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type History_Delete_At_Path_Input = {
  item?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type History_Delete_Elem_Input = {
  item?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type History_Delete_Key_Input = {
  item?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "history" */
export type History_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  dataframe_id?: InputMaybe<Scalars['String']>;
  initiator_id?: InputMaybe<Scalars['uuid']>;
  initiator_type?: InputMaybe<Scalars['String']>;
  item?: InputMaybe<Scalars['jsonb']>;
  job_id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type History_Max_Fields = {
  __typename?: 'history_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  dataframe_id?: Maybe<Scalars['String']>;
  initiator_id?: Maybe<Scalars['uuid']>;
  initiator_type?: Maybe<Scalars['String']>;
  job_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type History_Min_Fields = {
  __typename?: 'history_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  dataframe_id?: Maybe<Scalars['String']>;
  initiator_id?: Maybe<Scalars['uuid']>;
  initiator_type?: Maybe<Scalars['String']>;
  job_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "history" */
export type History_Mutation_Response = {
  __typename?: 'history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<History>;
};

/** on_conflict condition type for table "history" */
export type History_On_Conflict = {
  constraint: History_Constraint;
  update_columns?: Array<History_Update_Column>;
  where?: InputMaybe<History_Bool_Exp>;
};

/** Ordering options when selecting data from "history". */
export type History_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  dataframe_id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  initiator_type?: InputMaybe<Order_By>;
  item?: InputMaybe<Order_By>;
  job_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: history */
export type History_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type History_Prepend_Input = {
  item?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "history" */
export type History_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'dataframe_id'
  /** column name */
  | 'initiator_id'
  /** column name */
  | 'initiator_type'
  /** column name */
  | 'item'
  /** column name */
  | 'job_id'
  /** column name */
  | 'type'
  /** column name */
  | 'version'
  /** column name */
  | 'workspace_id';

/** input type for updating data in table "history" */
export type History_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  dataframe_id?: InputMaybe<Scalars['String']>;
  initiator_id?: InputMaybe<Scalars['uuid']>;
  initiator_type?: InputMaybe<Scalars['String']>;
  item?: InputMaybe<Scalars['jsonb']>;
  job_id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "history" */
export type History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type History_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  dataframe_id?: InputMaybe<Scalars['String']>;
  initiator_id?: InputMaybe<Scalars['uuid']>;
  initiator_type?: InputMaybe<Scalars['String']>;
  item?: InputMaybe<Scalars['jsonb']>;
  job_id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "history" */
export type History_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'dataframe_id'
  /** column name */
  | 'initiator_id'
  /** column name */
  | 'initiator_type'
  /** column name */
  | 'item'
  /** column name */
  | 'job_id'
  /** column name */
  | 'type'
  /** column name */
  | 'version'
  /** column name */
  | 'workspace_id';

export type History_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<History_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<History_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<History_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<History_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<History_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<History_Set_Input>;
  /** filter the rows which have to be updated */
  where: History_Bool_Exp;
};

/** columns and relationships of "invite" */
export type Invite = {
  __typename?: 'invite';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  accepted: Scalars['Boolean'];
  email: Scalars['String'];
  inviter: Scalars['uuid'];
  last_reminder?: Maybe<Scalars['timestamptz']>;
  num_reminders: Scalars['Int'];
  promo_name?: Maybe<Scalars['String']>;
  workspace_id: Scalars['uuid'];
};

/** aggregated selection of "invite" */
export type Invite_Aggregate = {
  __typename?: 'invite_aggregate';
  aggregate?: Maybe<Invite_Aggregate_Fields>;
  nodes: Array<Invite>;
};

/** aggregate fields of "invite" */
export type Invite_Aggregate_Fields = {
  __typename?: 'invite_aggregate_fields';
  avg?: Maybe<Invite_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Invite_Max_Fields>;
  min?: Maybe<Invite_Min_Fields>;
  stddev?: Maybe<Invite_Stddev_Fields>;
  stddev_pop?: Maybe<Invite_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Invite_Stddev_Samp_Fields>;
  sum?: Maybe<Invite_Sum_Fields>;
  var_pop?: Maybe<Invite_Var_Pop_Fields>;
  var_samp?: Maybe<Invite_Var_Samp_Fields>;
  variance?: Maybe<Invite_Variance_Fields>;
};


/** aggregate fields of "invite" */
export type Invite_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invite_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Invite_Avg_Fields = {
  __typename?: 'invite_avg_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "invite". All fields are combined with a logical 'AND'. */
export type Invite_Bool_Exp = {
  _and?: InputMaybe<Array<Invite_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Invite_Bool_Exp>;
  _or?: InputMaybe<Array<Invite_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  accepted?: InputMaybe<Boolean_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  inviter?: InputMaybe<Uuid_Comparison_Exp>;
  last_reminder?: InputMaybe<Timestamptz_Comparison_Exp>;
  num_reminders?: InputMaybe<Int_Comparison_Exp>;
  promo_name?: InputMaybe<String_Comparison_Exp>;
  workspace_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "invite" */
export type Invite_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'invitate__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'invite_pk';

/** input type for incrementing numeric columns in table "invite" */
export type Invite_Inc_Input = {
  num_reminders?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "invite" */
export type Invite_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  accepted?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  inviter?: InputMaybe<Scalars['uuid']>;
  last_reminder?: InputMaybe<Scalars['timestamptz']>;
  num_reminders?: InputMaybe<Scalars['Int']>;
  promo_name?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Invite_Max_Fields = {
  __typename?: 'invite_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  inviter?: Maybe<Scalars['uuid']>;
  last_reminder?: Maybe<Scalars['timestamptz']>;
  num_reminders?: Maybe<Scalars['Int']>;
  promo_name?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Invite_Min_Fields = {
  __typename?: 'invite_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  inviter?: Maybe<Scalars['uuid']>;
  last_reminder?: Maybe<Scalars['timestamptz']>;
  num_reminders?: Maybe<Scalars['Int']>;
  promo_name?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "invite" */
export type Invite_Mutation_Response = {
  __typename?: 'invite_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invite>;
};

/** on_conflict condition type for table "invite" */
export type Invite_On_Conflict = {
  constraint: Invite_Constraint;
  update_columns?: Array<Invite_Update_Column>;
  where?: InputMaybe<Invite_Bool_Exp>;
};

/** Ordering options when selecting data from "invite". */
export type Invite_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  accepted?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  inviter?: InputMaybe<Order_By>;
  last_reminder?: InputMaybe<Order_By>;
  num_reminders?: InputMaybe<Order_By>;
  promo_name?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: invite */
export type Invite_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "invite" */
export type Invite_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'accepted'
  /** column name */
  | 'email'
  /** column name */
  | 'inviter'
  /** column name */
  | 'last_reminder'
  /** column name */
  | 'num_reminders'
  /** column name */
  | 'promo_name'
  /** column name */
  | 'workspace_id';

/** input type for updating data in table "invite" */
export type Invite_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  accepted?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  inviter?: InputMaybe<Scalars['uuid']>;
  last_reminder?: InputMaybe<Scalars['timestamptz']>;
  num_reminders?: InputMaybe<Scalars['Int']>;
  promo_name?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Invite_Stddev_Fields = {
  __typename?: 'invite_stddev_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Invite_Stddev_Pop_Fields = {
  __typename?: 'invite_stddev_pop_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Invite_Stddev_Samp_Fields = {
  __typename?: 'invite_stddev_samp_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "invite" */
export type Invite_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Invite_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Invite_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  accepted?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  inviter?: InputMaybe<Scalars['uuid']>;
  last_reminder?: InputMaybe<Scalars['timestamptz']>;
  num_reminders?: InputMaybe<Scalars['Int']>;
  promo_name?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Invite_Sum_Fields = {
  __typename?: 'invite_sum_fields';
  num_reminders?: Maybe<Scalars['Int']>;
};

/** update columns of table "invite" */
export type Invite_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'accepted'
  /** column name */
  | 'email'
  /** column name */
  | 'inviter'
  /** column name */
  | 'last_reminder'
  /** column name */
  | 'num_reminders'
  /** column name */
  | 'promo_name'
  /** column name */
  | 'workspace_id';

export type Invite_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Invite_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Invite_Set_Input>;
  /** filter the rows which have to be updated */
  where: Invite_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Invite_Var_Pop_Fields = {
  __typename?: 'invite_var_pop_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Invite_Var_Samp_Fields = {
  __typename?: 'invite_var_samp_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Invite_Variance_Fields = {
  __typename?: 'invite_variance_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "login_activity" */
export type Login_Activity = {
  __typename?: 'login_activity';
  _cr?: Maybe<Scalars['timestamp']>;
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  auth0_id?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  connection?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  logins_count?: Maybe<Scalars['Int']>;
  meta?: Maybe<Scalars['jsonb']>;
  subdivision?: Maybe<Scalars['String']>;
  transaction_id: Scalars['String'];
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "login_activity" */
export type Login_ActivityMetaArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "login_activity" */
export type Login_Activity_Aggregate = {
  __typename?: 'login_activity_aggregate';
  aggregate?: Maybe<Login_Activity_Aggregate_Fields>;
  nodes: Array<Login_Activity>;
};

/** aggregate fields of "login_activity" */
export type Login_Activity_Aggregate_Fields = {
  __typename?: 'login_activity_aggregate_fields';
  avg?: Maybe<Login_Activity_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Login_Activity_Max_Fields>;
  min?: Maybe<Login_Activity_Min_Fields>;
  stddev?: Maybe<Login_Activity_Stddev_Fields>;
  stddev_pop?: Maybe<Login_Activity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Login_Activity_Stddev_Samp_Fields>;
  sum?: Maybe<Login_Activity_Sum_Fields>;
  var_pop?: Maybe<Login_Activity_Var_Pop_Fields>;
  var_samp?: Maybe<Login_Activity_Var_Samp_Fields>;
  variance?: Maybe<Login_Activity_Variance_Fields>;
};


/** aggregate fields of "login_activity" */
export type Login_Activity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Login_Activity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Login_Activity_Append_Input = {
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Login_Activity_Avg_Fields = {
  __typename?: 'login_activity_avg_fields';
  logins_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "login_activity". All fields are combined with a logical 'AND'. */
export type Login_Activity_Bool_Exp = {
  _and?: InputMaybe<Array<Login_Activity_Bool_Exp>>;
  _cr?: InputMaybe<Timestamp_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Login_Activity_Bool_Exp>;
  _or?: InputMaybe<Array<Login_Activity_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  auth0_id?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  client_id?: InputMaybe<String_Comparison_Exp>;
  connection?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  ip?: InputMaybe<String_Comparison_Exp>;
  logins_count?: InputMaybe<Int_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  subdivision?: InputMaybe<String_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
  user_agent?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "login_activity" */
export type Login_Activity_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'login_activity_id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'login_activity_pk'
  /** unique or primary key constraint on columns "transaction_id" */
  | 'login_activity_transaction_id_uindex';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Login_Activity_Delete_At_Path_Input = {
  meta?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Login_Activity_Delete_Elem_Input = {
  meta?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Login_Activity_Delete_Key_Input = {
  meta?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "login_activity" */
export type Login_Activity_Inc_Input = {
  logins_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "login_activity" */
export type Login_Activity_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  auth0_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  logins_count?: InputMaybe<Scalars['Int']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  subdivision?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['String']>;
  user_agent?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Login_Activity_Max_Fields = {
  __typename?: 'login_activity_max_fields';
  _cr?: Maybe<Scalars['timestamp']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  auth0_id?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  connection?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  logins_count?: Maybe<Scalars['Int']>;
  subdivision?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Login_Activity_Min_Fields = {
  __typename?: 'login_activity_min_fields';
  _cr?: Maybe<Scalars['timestamp']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  auth0_id?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  connection?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  logins_count?: Maybe<Scalars['Int']>;
  subdivision?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "login_activity" */
export type Login_Activity_Mutation_Response = {
  __typename?: 'login_activity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Login_Activity>;
};

/** on_conflict condition type for table "login_activity" */
export type Login_Activity_On_Conflict = {
  constraint: Login_Activity_Constraint;
  update_columns?: Array<Login_Activity_Update_Column>;
  where?: InputMaybe<Login_Activity_Bool_Exp>;
};

/** Ordering options when selecting data from "login_activity". */
export type Login_Activity_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  auth0_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  connection?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  logins_count?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  subdivision?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  user_agent?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: login_activity */
export type Login_Activity_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Login_Activity_Prepend_Input = {
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "login_activity" */
export type Login_Activity_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'auth0_id'
  /** column name */
  | 'city'
  /** column name */
  | 'client_id'
  /** column name */
  | 'connection'
  /** column name */
  | 'country'
  /** column name */
  | 'ip'
  /** column name */
  | 'logins_count'
  /** column name */
  | 'meta'
  /** column name */
  | 'subdivision'
  /** column name */
  | 'transaction_id'
  /** column name */
  | 'user_agent'
  /** column name */
  | 'user_id';

/** input type for updating data in table "login_activity" */
export type Login_Activity_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  auth0_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  logins_count?: InputMaybe<Scalars['Int']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  subdivision?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['String']>;
  user_agent?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Login_Activity_Stddev_Fields = {
  __typename?: 'login_activity_stddev_fields';
  logins_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Login_Activity_Stddev_Pop_Fields = {
  __typename?: 'login_activity_stddev_pop_fields';
  logins_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Login_Activity_Stddev_Samp_Fields = {
  __typename?: 'login_activity_stddev_samp_fields';
  logins_count?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "login_activity" */
export type Login_Activity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Login_Activity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Login_Activity_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  auth0_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  logins_count?: InputMaybe<Scalars['Int']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  subdivision?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['String']>;
  user_agent?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Login_Activity_Sum_Fields = {
  __typename?: 'login_activity_sum_fields';
  logins_count?: Maybe<Scalars['Int']>;
};

/** update columns of table "login_activity" */
export type Login_Activity_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'auth0_id'
  /** column name */
  | 'city'
  /** column name */
  | 'client_id'
  /** column name */
  | 'connection'
  /** column name */
  | 'country'
  /** column name */
  | 'ip'
  /** column name */
  | 'logins_count'
  /** column name */
  | 'meta'
  /** column name */
  | 'subdivision'
  /** column name */
  | 'transaction_id'
  /** column name */
  | 'user_agent'
  /** column name */
  | 'user_id';

export type Login_Activity_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Login_Activity_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Login_Activity_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Login_Activity_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Login_Activity_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Login_Activity_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Login_Activity_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Login_Activity_Set_Input>;
  /** filter the rows which have to be updated */
  where: Login_Activity_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Login_Activity_Var_Pop_Fields = {
  __typename?: 'login_activity_var_pop_fields';
  logins_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Login_Activity_Var_Samp_Fields = {
  __typename?: 'login_activity_var_samp_fields';
  logins_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Login_Activity_Variance_Fields = {
  __typename?: 'login_activity_variance_fields';
  logins_count?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "app_state" */
  delete_app_state?: Maybe<App_State_Mutation_Response>;
  /** delete data from the table: "blueprint" */
  delete_blueprint?: Maybe<Blueprint_Mutation_Response>;
  /** delete single row from the table: "blueprint" */
  delete_blueprint_by_pk?: Maybe<Blueprint>;
  /** delete data from the table: "dataframe" */
  delete_dataframe?: Maybe<Dataframe_Mutation_Response>;
  /** delete single row from the table: "dataframe" */
  delete_dataframe_by_pk?: Maybe<Dataframe>;
  /** delete data from the table: "history" */
  delete_history?: Maybe<History_Mutation_Response>;
  /** delete single row from the table: "history" */
  delete_history_by_pk?: Maybe<History>;
  /** delete data from the table: "invite" */
  delete_invite?: Maybe<Invite_Mutation_Response>;
  /** delete single row from the table: "invite" */
  delete_invite_by_pk?: Maybe<Invite>;
  /** delete data from the table: "login_activity" */
  delete_login_activity?: Maybe<Login_Activity_Mutation_Response>;
  /** delete single row from the table: "login_activity" */
  delete_login_activity_by_pk?: Maybe<Login_Activity>;
  /** delete data from the table: "pages" */
  delete_pages?: Maybe<Pages_Mutation_Response>;
  /** delete single row from the table: "pages" */
  delete_pages_by_pk?: Maybe<Pages>;
  /** delete data from the table: "tb_0d5fd0848814" */
  delete_tb_0d5fd0848814?: Maybe<Tb_0d5fd0848814_Mutation_Response>;
  /** delete single row from the table: "tb_0d5fd0848814" */
  delete_tb_0d5fd0848814_by_pk?: Maybe<Tb_0d5fd0848814>;
  /** delete data from the table: "tb_4d10c208adc8" */
  delete_tb_4d10c208adc8?: Maybe<Tb_4d10c208adc8_Mutation_Response>;
  /** delete single row from the table: "tb_4d10c208adc8" */
  delete_tb_4d10c208adc8_by_pk?: Maybe<Tb_4d10c208adc8>;
  /** delete data from the table: "tb_8a3e5ae9851e" */
  delete_tb_8a3e5ae9851e?: Maybe<Tb_8a3e5ae9851e_Mutation_Response>;
  /** delete single row from the table: "tb_8a3e5ae9851e" */
  delete_tb_8a3e5ae9851e_by_pk?: Maybe<Tb_8a3e5ae9851e>;
  /** delete data from the table: "tb_8c0d_techstars_companies" */
  delete_tb_8c0d_techstars_companies?: Maybe<Tb_8c0d_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_8c0d_techstars_companies" */
  delete_tb_8c0d_techstars_companies_by_pk?: Maybe<Tb_8c0d_Techstars_Companies>;
  /** delete data from the table: "tb_8f3a_techstars_companies" */
  delete_tb_8f3a_techstars_companies?: Maybe<Tb_8f3a_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_8f3a_techstars_companies" */
  delete_tb_8f3a_techstars_companies_by_pk?: Maybe<Tb_8f3a_Techstars_Companies>;
  /** delete data from the table: "tb_9ae55ff65521" */
  delete_tb_9ae55ff65521?: Maybe<Tb_9ae55ff65521_Mutation_Response>;
  /** delete single row from the table: "tb_9ae55ff65521" */
  delete_tb_9ae55ff65521_by_pk?: Maybe<Tb_9ae55ff65521>;
  /** delete data from the table: "tb_9b4e_techstars_companies" */
  delete_tb_9b4e_techstars_companies?: Maybe<Tb_9b4e_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_9b4e_techstars_companies" */
  delete_tb_9b4e_techstars_companies_by_pk?: Maybe<Tb_9b4e_Techstars_Companies>;
  /** delete data from the table: "tb_9bed8f8cd4fa" */
  delete_tb_9bed8f8cd4fa?: Maybe<Tb_9bed8f8cd4fa_Mutation_Response>;
  /** delete single row from the table: "tb_9bed8f8cd4fa" */
  delete_tb_9bed8f8cd4fa_by_pk?: Maybe<Tb_9bed8f8cd4fa>;
  /** delete data from the table: "tb_9cab_techstars_companies" */
  delete_tb_9cab_techstars_companies?: Maybe<Tb_9cab_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_9cab_techstars_companies" */
  delete_tb_9cab_techstars_companies_by_pk?: Maybe<Tb_9cab_Techstars_Companies>;
  /** delete data from the table: "tb_9d66_techstars_companies" */
  delete_tb_9d66_techstars_companies?: Maybe<Tb_9d66_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_9d66_techstars_companies" */
  delete_tb_9d66_techstars_companies_by_pk?: Maybe<Tb_9d66_Techstars_Companies>;
  /** delete data from the table: "tb_14a707ad0fcc" */
  delete_tb_14a707ad0fcc?: Maybe<Tb_14a707ad0fcc_Mutation_Response>;
  /** delete single row from the table: "tb_14a707ad0fcc" */
  delete_tb_14a707ad0fcc_by_pk?: Maybe<Tb_14a707ad0fcc>;
  /** delete data from the table: "tb_66e8f877ca5c" */
  delete_tb_66e8f877ca5c?: Maybe<Tb_66e8f877ca5c_Mutation_Response>;
  /** delete single row from the table: "tb_66e8f877ca5c" */
  delete_tb_66e8f877ca5c_by_pk?: Maybe<Tb_66e8f877ca5c>;
  /** delete data from the table: "tb_88fb_techstars_companies" */
  delete_tb_88fb_techstars_companies?: Maybe<Tb_88fb_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_88fb_techstars_companies" */
  delete_tb_88fb_techstars_companies_by_pk?: Maybe<Tb_88fb_Techstars_Companies>;
  /** delete data from the table: "tb_96fa_techstars_companies" */
  delete_tb_96fa_techstars_companies?: Maybe<Tb_96fa_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_96fa_techstars_companies" */
  delete_tb_96fa_techstars_companies_by_pk?: Maybe<Tb_96fa_Techstars_Companies>;
  /** delete data from the table: "tb_140d8afc9ce4" */
  delete_tb_140d8afc9ce4?: Maybe<Tb_140d8afc9ce4_Mutation_Response>;
  /** delete single row from the table: "tb_140d8afc9ce4" */
  delete_tb_140d8afc9ce4_by_pk?: Maybe<Tb_140d8afc9ce4>;
  /** delete data from the table: "tb_8536_techstars_companies" */
  delete_tb_8536_techstars_companies?: Maybe<Tb_8536_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_8536_techstars_companies" */
  delete_tb_8536_techstars_companies_by_pk?: Maybe<Tb_8536_Techstars_Companies>;
  /** delete data from the table: "tb_9066_techstars_companies" */
  delete_tb_9066_techstars_companies?: Maybe<Tb_9066_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_9066_techstars_companies" */
  delete_tb_9066_techstars_companies_by_pk?: Maybe<Tb_9066_Techstars_Companies>;
  /** delete data from the table: "tb_9459_techstars_companies" */
  delete_tb_9459_techstars_companies?: Maybe<Tb_9459_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_9459_techstars_companies" */
  delete_tb_9459_techstars_companies_by_pk?: Maybe<Tb_9459_Techstars_Companies>;
  /** delete data from the table: "tb_9701_techstars_companies" */
  delete_tb_9701_techstars_companies?: Maybe<Tb_9701_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_9701_techstars_companies" */
  delete_tb_9701_techstars_companies_by_pk?: Maybe<Tb_9701_Techstars_Companies>;
  /** delete data from the table: "tb_46723fcb5cf3" */
  delete_tb_46723fcb5cf3?: Maybe<Tb_46723fcb5cf3_Mutation_Response>;
  /** delete single row from the table: "tb_46723fcb5cf3" */
  delete_tb_46723fcb5cf3_by_pk?: Maybe<Tb_46723fcb5cf3>;
  /** delete data from the table: "tb_a5c1_techstars_companies" */
  delete_tb_a5c1_techstars_companies?: Maybe<Tb_A5c1_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_a5c1_techstars_companies" */
  delete_tb_a5c1_techstars_companies_by_pk?: Maybe<Tb_A5c1_Techstars_Companies>;
  /** delete data from the table: "tb_a7dc_techstars_companies" */
  delete_tb_a7dc_techstars_companies?: Maybe<Tb_A7dc_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_a7dc_techstars_companies" */
  delete_tb_a7dc_techstars_companies_by_pk?: Maybe<Tb_A7dc_Techstars_Companies>;
  /** delete data from the table: "tb_a332_techstars_companies" */
  delete_tb_a332_techstars_companies?: Maybe<Tb_A332_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_a332_techstars_companies" */
  delete_tb_a332_techstars_companies_by_pk?: Maybe<Tb_A332_Techstars_Companies>;
  /** delete data from the table: "tb_ac31_techstars_companies" */
  delete_tb_ac31_techstars_companies?: Maybe<Tb_Ac31_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_ac31_techstars_companies" */
  delete_tb_ac31_techstars_companies_by_pk?: Maybe<Tb_Ac31_Techstars_Companies>;
  /** delete data from the table: "tb_ae8e_techstars_companies" */
  delete_tb_ae8e_techstars_companies?: Maybe<Tb_Ae8e_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_ae8e_techstars_companies" */
  delete_tb_ae8e_techstars_companies_by_pk?: Maybe<Tb_Ae8e_Techstars_Companies>;
  /** delete data from the table: "tb_af27_techstars_companies" */
  delete_tb_af27_techstars_companies?: Maybe<Tb_Af27_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_af27_techstars_companies" */
  delete_tb_af27_techstars_companies_by_pk?: Maybe<Tb_Af27_Techstars_Companies>;
  /** delete data from the table: "tb_b02e_techstars_companies" */
  delete_tb_b02e_techstars_companies?: Maybe<Tb_B02e_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b02e_techstars_companies" */
  delete_tb_b02e_techstars_companies_by_pk?: Maybe<Tb_B02e_Techstars_Companies>;
  /** delete data from the table: "tb_b3a8_techstars_companies" */
  delete_tb_b3a8_techstars_companies?: Maybe<Tb_B3a8_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b3a8_techstars_companies" */
  delete_tb_b3a8_techstars_companies_by_pk?: Maybe<Tb_B3a8_Techstars_Companies>;
  /** delete data from the table: "tb_b4fc_techstars_companies" */
  delete_tb_b4fc_techstars_companies?: Maybe<Tb_B4fc_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b4fc_techstars_companies" */
  delete_tb_b4fc_techstars_companies_by_pk?: Maybe<Tb_B4fc_Techstars_Companies>;
  /** delete data from the table: "tb_b7e7_techstars_companies" */
  delete_tb_b7e7_techstars_companies?: Maybe<Tb_B7e7_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b7e7_techstars_companies" */
  delete_tb_b7e7_techstars_companies_by_pk?: Maybe<Tb_B7e7_Techstars_Companies>;
  /** delete data from the table: "tb_b9c9_techstars_companies" */
  delete_tb_b9c9_techstars_companies?: Maybe<Tb_B9c9_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b9c9_techstars_companies" */
  delete_tb_b9c9_techstars_companies_by_pk?: Maybe<Tb_B9c9_Techstars_Companies>;
  /** delete data from the table: "tb_b14c_techstars_companies" */
  delete_tb_b14c_techstars_companies?: Maybe<Tb_B14c_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b14c_techstars_companies" */
  delete_tb_b14c_techstars_companies_by_pk?: Maybe<Tb_B14c_Techstars_Companies>;
  /** delete data from the table: "tb_b80b_techstars_companies" */
  delete_tb_b80b_techstars_companies?: Maybe<Tb_B80b_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b80b_techstars_companies" */
  delete_tb_b80b_techstars_companies_by_pk?: Maybe<Tb_B80b_Techstars_Companies>;
  /** delete data from the table: "tb_b225_techstars_companies" */
  delete_tb_b225_techstars_companies?: Maybe<Tb_B225_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b225_techstars_companies" */
  delete_tb_b225_techstars_companies_by_pk?: Maybe<Tb_B225_Techstars_Companies>;
  /** delete data from the table: "tb_b739_techstars_companies" */
  delete_tb_b739_techstars_companies?: Maybe<Tb_B739_Techstars_Companies_Mutation_Response>;
  /** delete single row from the table: "tb_b739_techstars_companies" */
  delete_tb_b739_techstars_companies_by_pk?: Maybe<Tb_B739_Techstars_Companies>;
  /** delete data from the table: "tb_bd249159795e" */
  delete_tb_bd249159795e?: Maybe<Tb_Bd249159795e_Mutation_Response>;
  /** delete single row from the table: "tb_bd249159795e" */
  delete_tb_bd249159795e_by_pk?: Maybe<Tb_Bd249159795e>;
  /** delete data from the table: "tb_c57cdd28d7c0" */
  delete_tb_c57cdd28d7c0?: Maybe<Tb_C57cdd28d7c0_Mutation_Response>;
  /** delete single row from the table: "tb_c57cdd28d7c0" */
  delete_tb_c57cdd28d7c0_by_pk?: Maybe<Tb_C57cdd28d7c0>;
  /** delete data from the table: "tb_d0e828550903" */
  delete_tb_d0e828550903?: Maybe<Tb_D0e828550903_Mutation_Response>;
  /** delete single row from the table: "tb_d0e828550903" */
  delete_tb_d0e828550903_by_pk?: Maybe<Tb_D0e828550903>;
  /** delete data from the table: "tb_ff89301ef0f8" */
  delete_tb_ff89301ef0f8?: Maybe<Tb_Ff89301ef0f8_Mutation_Response>;
  /** delete single row from the table: "tb_ff89301ef0f8" */
  delete_tb_ff89301ef0f8_by_pk?: Maybe<Tb_Ff89301ef0f8>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "workspace" */
  delete_workspace?: Maybe<Workspace_Mutation_Response>;
  /** delete single row from the table: "workspace" */
  delete_workspace_by_pk?: Maybe<Workspace>;
  /** delete data from the table: "workspace_membership" */
  delete_workspace_membership?: Maybe<Workspace_Membership_Mutation_Response>;
  /** delete single row from the table: "workspace_membership" */
  delete_workspace_membership_by_pk?: Maybe<Workspace_Membership>;
  /** insert data into the table: "app_state" */
  insert_app_state?: Maybe<App_State_Mutation_Response>;
  /** insert a single row into the table: "app_state" */
  insert_app_state_one?: Maybe<App_State>;
  /** insert data into the table: "blueprint" */
  insert_blueprint?: Maybe<Blueprint_Mutation_Response>;
  /** insert a single row into the table: "blueprint" */
  insert_blueprint_one?: Maybe<Blueprint>;
  /** insert data into the table: "dataframe" */
  insert_dataframe?: Maybe<Dataframe_Mutation_Response>;
  /** insert a single row into the table: "dataframe" */
  insert_dataframe_one?: Maybe<Dataframe>;
  /** insert data into the table: "history" */
  insert_history?: Maybe<History_Mutation_Response>;
  /** insert a single row into the table: "history" */
  insert_history_one?: Maybe<History>;
  /** insert data into the table: "invite" */
  insert_invite?: Maybe<Invite_Mutation_Response>;
  /** insert a single row into the table: "invite" */
  insert_invite_one?: Maybe<Invite>;
  /** insert data into the table: "login_activity" */
  insert_login_activity?: Maybe<Login_Activity_Mutation_Response>;
  /** insert a single row into the table: "login_activity" */
  insert_login_activity_one?: Maybe<Login_Activity>;
  /** insert data into the table: "pages" */
  insert_pages?: Maybe<Pages_Mutation_Response>;
  /** insert a single row into the table: "pages" */
  insert_pages_one?: Maybe<Pages>;
  /** insert data into the table: "tb_0d5fd0848814" */
  insert_tb_0d5fd0848814?: Maybe<Tb_0d5fd0848814_Mutation_Response>;
  /** insert a single row into the table: "tb_0d5fd0848814" */
  insert_tb_0d5fd0848814_one?: Maybe<Tb_0d5fd0848814>;
  /** insert data into the table: "tb_4d10c208adc8" */
  insert_tb_4d10c208adc8?: Maybe<Tb_4d10c208adc8_Mutation_Response>;
  /** insert a single row into the table: "tb_4d10c208adc8" */
  insert_tb_4d10c208adc8_one?: Maybe<Tb_4d10c208adc8>;
  /** insert data into the table: "tb_8a3e5ae9851e" */
  insert_tb_8a3e5ae9851e?: Maybe<Tb_8a3e5ae9851e_Mutation_Response>;
  /** insert a single row into the table: "tb_8a3e5ae9851e" */
  insert_tb_8a3e5ae9851e_one?: Maybe<Tb_8a3e5ae9851e>;
  /** insert data into the table: "tb_8c0d_techstars_companies" */
  insert_tb_8c0d_techstars_companies?: Maybe<Tb_8c0d_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_8c0d_techstars_companies" */
  insert_tb_8c0d_techstars_companies_one?: Maybe<Tb_8c0d_Techstars_Companies>;
  /** insert data into the table: "tb_8f3a_techstars_companies" */
  insert_tb_8f3a_techstars_companies?: Maybe<Tb_8f3a_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_8f3a_techstars_companies" */
  insert_tb_8f3a_techstars_companies_one?: Maybe<Tb_8f3a_Techstars_Companies>;
  /** insert data into the table: "tb_9ae55ff65521" */
  insert_tb_9ae55ff65521?: Maybe<Tb_9ae55ff65521_Mutation_Response>;
  /** insert a single row into the table: "tb_9ae55ff65521" */
  insert_tb_9ae55ff65521_one?: Maybe<Tb_9ae55ff65521>;
  /** insert data into the table: "tb_9b4e_techstars_companies" */
  insert_tb_9b4e_techstars_companies?: Maybe<Tb_9b4e_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_9b4e_techstars_companies" */
  insert_tb_9b4e_techstars_companies_one?: Maybe<Tb_9b4e_Techstars_Companies>;
  /** insert data into the table: "tb_9bed8f8cd4fa" */
  insert_tb_9bed8f8cd4fa?: Maybe<Tb_9bed8f8cd4fa_Mutation_Response>;
  /** insert a single row into the table: "tb_9bed8f8cd4fa" */
  insert_tb_9bed8f8cd4fa_one?: Maybe<Tb_9bed8f8cd4fa>;
  /** insert data into the table: "tb_9cab_techstars_companies" */
  insert_tb_9cab_techstars_companies?: Maybe<Tb_9cab_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_9cab_techstars_companies" */
  insert_tb_9cab_techstars_companies_one?: Maybe<Tb_9cab_Techstars_Companies>;
  /** insert data into the table: "tb_9d66_techstars_companies" */
  insert_tb_9d66_techstars_companies?: Maybe<Tb_9d66_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_9d66_techstars_companies" */
  insert_tb_9d66_techstars_companies_one?: Maybe<Tb_9d66_Techstars_Companies>;
  /** insert data into the table: "tb_14a707ad0fcc" */
  insert_tb_14a707ad0fcc?: Maybe<Tb_14a707ad0fcc_Mutation_Response>;
  /** insert a single row into the table: "tb_14a707ad0fcc" */
  insert_tb_14a707ad0fcc_one?: Maybe<Tb_14a707ad0fcc>;
  /** insert data into the table: "tb_66e8f877ca5c" */
  insert_tb_66e8f877ca5c?: Maybe<Tb_66e8f877ca5c_Mutation_Response>;
  /** insert a single row into the table: "tb_66e8f877ca5c" */
  insert_tb_66e8f877ca5c_one?: Maybe<Tb_66e8f877ca5c>;
  /** insert data into the table: "tb_88fb_techstars_companies" */
  insert_tb_88fb_techstars_companies?: Maybe<Tb_88fb_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_88fb_techstars_companies" */
  insert_tb_88fb_techstars_companies_one?: Maybe<Tb_88fb_Techstars_Companies>;
  /** insert data into the table: "tb_96fa_techstars_companies" */
  insert_tb_96fa_techstars_companies?: Maybe<Tb_96fa_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_96fa_techstars_companies" */
  insert_tb_96fa_techstars_companies_one?: Maybe<Tb_96fa_Techstars_Companies>;
  /** insert data into the table: "tb_140d8afc9ce4" */
  insert_tb_140d8afc9ce4?: Maybe<Tb_140d8afc9ce4_Mutation_Response>;
  /** insert a single row into the table: "tb_140d8afc9ce4" */
  insert_tb_140d8afc9ce4_one?: Maybe<Tb_140d8afc9ce4>;
  /** insert data into the table: "tb_8536_techstars_companies" */
  insert_tb_8536_techstars_companies?: Maybe<Tb_8536_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_8536_techstars_companies" */
  insert_tb_8536_techstars_companies_one?: Maybe<Tb_8536_Techstars_Companies>;
  /** insert data into the table: "tb_9066_techstars_companies" */
  insert_tb_9066_techstars_companies?: Maybe<Tb_9066_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_9066_techstars_companies" */
  insert_tb_9066_techstars_companies_one?: Maybe<Tb_9066_Techstars_Companies>;
  /** insert data into the table: "tb_9459_techstars_companies" */
  insert_tb_9459_techstars_companies?: Maybe<Tb_9459_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_9459_techstars_companies" */
  insert_tb_9459_techstars_companies_one?: Maybe<Tb_9459_Techstars_Companies>;
  /** insert data into the table: "tb_9701_techstars_companies" */
  insert_tb_9701_techstars_companies?: Maybe<Tb_9701_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_9701_techstars_companies" */
  insert_tb_9701_techstars_companies_one?: Maybe<Tb_9701_Techstars_Companies>;
  /** insert data into the table: "tb_46723fcb5cf3" */
  insert_tb_46723fcb5cf3?: Maybe<Tb_46723fcb5cf3_Mutation_Response>;
  /** insert a single row into the table: "tb_46723fcb5cf3" */
  insert_tb_46723fcb5cf3_one?: Maybe<Tb_46723fcb5cf3>;
  /** insert data into the table: "tb_a5c1_techstars_companies" */
  insert_tb_a5c1_techstars_companies?: Maybe<Tb_A5c1_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_a5c1_techstars_companies" */
  insert_tb_a5c1_techstars_companies_one?: Maybe<Tb_A5c1_Techstars_Companies>;
  /** insert data into the table: "tb_a7dc_techstars_companies" */
  insert_tb_a7dc_techstars_companies?: Maybe<Tb_A7dc_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_a7dc_techstars_companies" */
  insert_tb_a7dc_techstars_companies_one?: Maybe<Tb_A7dc_Techstars_Companies>;
  /** insert data into the table: "tb_a332_techstars_companies" */
  insert_tb_a332_techstars_companies?: Maybe<Tb_A332_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_a332_techstars_companies" */
  insert_tb_a332_techstars_companies_one?: Maybe<Tb_A332_Techstars_Companies>;
  /** insert data into the table: "tb_ac31_techstars_companies" */
  insert_tb_ac31_techstars_companies?: Maybe<Tb_Ac31_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_ac31_techstars_companies" */
  insert_tb_ac31_techstars_companies_one?: Maybe<Tb_Ac31_Techstars_Companies>;
  /** insert data into the table: "tb_ae8e_techstars_companies" */
  insert_tb_ae8e_techstars_companies?: Maybe<Tb_Ae8e_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_ae8e_techstars_companies" */
  insert_tb_ae8e_techstars_companies_one?: Maybe<Tb_Ae8e_Techstars_Companies>;
  /** insert data into the table: "tb_af27_techstars_companies" */
  insert_tb_af27_techstars_companies?: Maybe<Tb_Af27_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_af27_techstars_companies" */
  insert_tb_af27_techstars_companies_one?: Maybe<Tb_Af27_Techstars_Companies>;
  /** insert data into the table: "tb_b02e_techstars_companies" */
  insert_tb_b02e_techstars_companies?: Maybe<Tb_B02e_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b02e_techstars_companies" */
  insert_tb_b02e_techstars_companies_one?: Maybe<Tb_B02e_Techstars_Companies>;
  /** insert data into the table: "tb_b3a8_techstars_companies" */
  insert_tb_b3a8_techstars_companies?: Maybe<Tb_B3a8_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b3a8_techstars_companies" */
  insert_tb_b3a8_techstars_companies_one?: Maybe<Tb_B3a8_Techstars_Companies>;
  /** insert data into the table: "tb_b4fc_techstars_companies" */
  insert_tb_b4fc_techstars_companies?: Maybe<Tb_B4fc_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b4fc_techstars_companies" */
  insert_tb_b4fc_techstars_companies_one?: Maybe<Tb_B4fc_Techstars_Companies>;
  /** insert data into the table: "tb_b7e7_techstars_companies" */
  insert_tb_b7e7_techstars_companies?: Maybe<Tb_B7e7_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b7e7_techstars_companies" */
  insert_tb_b7e7_techstars_companies_one?: Maybe<Tb_B7e7_Techstars_Companies>;
  /** insert data into the table: "tb_b9c9_techstars_companies" */
  insert_tb_b9c9_techstars_companies?: Maybe<Tb_B9c9_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b9c9_techstars_companies" */
  insert_tb_b9c9_techstars_companies_one?: Maybe<Tb_B9c9_Techstars_Companies>;
  /** insert data into the table: "tb_b14c_techstars_companies" */
  insert_tb_b14c_techstars_companies?: Maybe<Tb_B14c_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b14c_techstars_companies" */
  insert_tb_b14c_techstars_companies_one?: Maybe<Tb_B14c_Techstars_Companies>;
  /** insert data into the table: "tb_b80b_techstars_companies" */
  insert_tb_b80b_techstars_companies?: Maybe<Tb_B80b_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b80b_techstars_companies" */
  insert_tb_b80b_techstars_companies_one?: Maybe<Tb_B80b_Techstars_Companies>;
  /** insert data into the table: "tb_b225_techstars_companies" */
  insert_tb_b225_techstars_companies?: Maybe<Tb_B225_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b225_techstars_companies" */
  insert_tb_b225_techstars_companies_one?: Maybe<Tb_B225_Techstars_Companies>;
  /** insert data into the table: "tb_b739_techstars_companies" */
  insert_tb_b739_techstars_companies?: Maybe<Tb_B739_Techstars_Companies_Mutation_Response>;
  /** insert a single row into the table: "tb_b739_techstars_companies" */
  insert_tb_b739_techstars_companies_one?: Maybe<Tb_B739_Techstars_Companies>;
  /** insert data into the table: "tb_bd249159795e" */
  insert_tb_bd249159795e?: Maybe<Tb_Bd249159795e_Mutation_Response>;
  /** insert a single row into the table: "tb_bd249159795e" */
  insert_tb_bd249159795e_one?: Maybe<Tb_Bd249159795e>;
  /** insert data into the table: "tb_c57cdd28d7c0" */
  insert_tb_c57cdd28d7c0?: Maybe<Tb_C57cdd28d7c0_Mutation_Response>;
  /** insert a single row into the table: "tb_c57cdd28d7c0" */
  insert_tb_c57cdd28d7c0_one?: Maybe<Tb_C57cdd28d7c0>;
  /** insert data into the table: "tb_d0e828550903" */
  insert_tb_d0e828550903?: Maybe<Tb_D0e828550903_Mutation_Response>;
  /** insert a single row into the table: "tb_d0e828550903" */
  insert_tb_d0e828550903_one?: Maybe<Tb_D0e828550903>;
  /** insert data into the table: "tb_ff89301ef0f8" */
  insert_tb_ff89301ef0f8?: Maybe<Tb_Ff89301ef0f8_Mutation_Response>;
  /** insert a single row into the table: "tb_ff89301ef0f8" */
  insert_tb_ff89301ef0f8_one?: Maybe<Tb_Ff89301ef0f8>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "workspace" */
  insert_workspace?: Maybe<Workspace_Mutation_Response>;
  /** insert data into the table: "workspace_membership" */
  insert_workspace_membership?: Maybe<Workspace_Membership_Mutation_Response>;
  /** insert a single row into the table: "workspace_membership" */
  insert_workspace_membership_one?: Maybe<Workspace_Membership>;
  /** insert a single row into the table: "workspace" */
  insert_workspace_one?: Maybe<Workspace>;
  /** update data of the table: "app_state" */
  update_app_state?: Maybe<App_State_Mutation_Response>;
  /** update multiples rows of table: "app_state" */
  update_app_state_many?: Maybe<Array<Maybe<App_State_Mutation_Response>>>;
  /** update data of the table: "blueprint" */
  update_blueprint?: Maybe<Blueprint_Mutation_Response>;
  /** update single row of the table: "blueprint" */
  update_blueprint_by_pk?: Maybe<Blueprint>;
  /** update multiples rows of table: "blueprint" */
  update_blueprint_many?: Maybe<Array<Maybe<Blueprint_Mutation_Response>>>;
  /** update data of the table: "dataframe" */
  update_dataframe?: Maybe<Dataframe_Mutation_Response>;
  /** update single row of the table: "dataframe" */
  update_dataframe_by_pk?: Maybe<Dataframe>;
  /** update multiples rows of table: "dataframe" */
  update_dataframe_many?: Maybe<Array<Maybe<Dataframe_Mutation_Response>>>;
  /** update data of the table: "history" */
  update_history?: Maybe<History_Mutation_Response>;
  /** update single row of the table: "history" */
  update_history_by_pk?: Maybe<History>;
  /** update multiples rows of table: "history" */
  update_history_many?: Maybe<Array<Maybe<History_Mutation_Response>>>;
  /** update data of the table: "invite" */
  update_invite?: Maybe<Invite_Mutation_Response>;
  /** update single row of the table: "invite" */
  update_invite_by_pk?: Maybe<Invite>;
  /** update multiples rows of table: "invite" */
  update_invite_many?: Maybe<Array<Maybe<Invite_Mutation_Response>>>;
  /** update data of the table: "login_activity" */
  update_login_activity?: Maybe<Login_Activity_Mutation_Response>;
  /** update single row of the table: "login_activity" */
  update_login_activity_by_pk?: Maybe<Login_Activity>;
  /** update multiples rows of table: "login_activity" */
  update_login_activity_many?: Maybe<Array<Maybe<Login_Activity_Mutation_Response>>>;
  /** update data of the table: "pages" */
  update_pages?: Maybe<Pages_Mutation_Response>;
  /** update single row of the table: "pages" */
  update_pages_by_pk?: Maybe<Pages>;
  /** update multiples rows of table: "pages" */
  update_pages_many?: Maybe<Array<Maybe<Pages_Mutation_Response>>>;
  /** update data of the table: "tb_0d5fd0848814" */
  update_tb_0d5fd0848814?: Maybe<Tb_0d5fd0848814_Mutation_Response>;
  /** update single row of the table: "tb_0d5fd0848814" */
  update_tb_0d5fd0848814_by_pk?: Maybe<Tb_0d5fd0848814>;
  /** update multiples rows of table: "tb_0d5fd0848814" */
  update_tb_0d5fd0848814_many?: Maybe<Array<Maybe<Tb_0d5fd0848814_Mutation_Response>>>;
  /** update data of the table: "tb_4d10c208adc8" */
  update_tb_4d10c208adc8?: Maybe<Tb_4d10c208adc8_Mutation_Response>;
  /** update single row of the table: "tb_4d10c208adc8" */
  update_tb_4d10c208adc8_by_pk?: Maybe<Tb_4d10c208adc8>;
  /** update multiples rows of table: "tb_4d10c208adc8" */
  update_tb_4d10c208adc8_many?: Maybe<Array<Maybe<Tb_4d10c208adc8_Mutation_Response>>>;
  /** update data of the table: "tb_8a3e5ae9851e" */
  update_tb_8a3e5ae9851e?: Maybe<Tb_8a3e5ae9851e_Mutation_Response>;
  /** update single row of the table: "tb_8a3e5ae9851e" */
  update_tb_8a3e5ae9851e_by_pk?: Maybe<Tb_8a3e5ae9851e>;
  /** update multiples rows of table: "tb_8a3e5ae9851e" */
  update_tb_8a3e5ae9851e_many?: Maybe<Array<Maybe<Tb_8a3e5ae9851e_Mutation_Response>>>;
  /** update data of the table: "tb_8c0d_techstars_companies" */
  update_tb_8c0d_techstars_companies?: Maybe<Tb_8c0d_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_8c0d_techstars_companies" */
  update_tb_8c0d_techstars_companies_by_pk?: Maybe<Tb_8c0d_Techstars_Companies>;
  /** update multiples rows of table: "tb_8c0d_techstars_companies" */
  update_tb_8c0d_techstars_companies_many?: Maybe<Array<Maybe<Tb_8c0d_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_8f3a_techstars_companies" */
  update_tb_8f3a_techstars_companies?: Maybe<Tb_8f3a_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_8f3a_techstars_companies" */
  update_tb_8f3a_techstars_companies_by_pk?: Maybe<Tb_8f3a_Techstars_Companies>;
  /** update multiples rows of table: "tb_8f3a_techstars_companies" */
  update_tb_8f3a_techstars_companies_many?: Maybe<Array<Maybe<Tb_8f3a_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_9ae55ff65521" */
  update_tb_9ae55ff65521?: Maybe<Tb_9ae55ff65521_Mutation_Response>;
  /** update single row of the table: "tb_9ae55ff65521" */
  update_tb_9ae55ff65521_by_pk?: Maybe<Tb_9ae55ff65521>;
  /** update multiples rows of table: "tb_9ae55ff65521" */
  update_tb_9ae55ff65521_many?: Maybe<Array<Maybe<Tb_9ae55ff65521_Mutation_Response>>>;
  /** update data of the table: "tb_9b4e_techstars_companies" */
  update_tb_9b4e_techstars_companies?: Maybe<Tb_9b4e_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_9b4e_techstars_companies" */
  update_tb_9b4e_techstars_companies_by_pk?: Maybe<Tb_9b4e_Techstars_Companies>;
  /** update multiples rows of table: "tb_9b4e_techstars_companies" */
  update_tb_9b4e_techstars_companies_many?: Maybe<Array<Maybe<Tb_9b4e_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_9bed8f8cd4fa" */
  update_tb_9bed8f8cd4fa?: Maybe<Tb_9bed8f8cd4fa_Mutation_Response>;
  /** update single row of the table: "tb_9bed8f8cd4fa" */
  update_tb_9bed8f8cd4fa_by_pk?: Maybe<Tb_9bed8f8cd4fa>;
  /** update multiples rows of table: "tb_9bed8f8cd4fa" */
  update_tb_9bed8f8cd4fa_many?: Maybe<Array<Maybe<Tb_9bed8f8cd4fa_Mutation_Response>>>;
  /** update data of the table: "tb_9cab_techstars_companies" */
  update_tb_9cab_techstars_companies?: Maybe<Tb_9cab_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_9cab_techstars_companies" */
  update_tb_9cab_techstars_companies_by_pk?: Maybe<Tb_9cab_Techstars_Companies>;
  /** update multiples rows of table: "tb_9cab_techstars_companies" */
  update_tb_9cab_techstars_companies_many?: Maybe<Array<Maybe<Tb_9cab_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_9d66_techstars_companies" */
  update_tb_9d66_techstars_companies?: Maybe<Tb_9d66_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_9d66_techstars_companies" */
  update_tb_9d66_techstars_companies_by_pk?: Maybe<Tb_9d66_Techstars_Companies>;
  /** update multiples rows of table: "tb_9d66_techstars_companies" */
  update_tb_9d66_techstars_companies_many?: Maybe<Array<Maybe<Tb_9d66_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_14a707ad0fcc" */
  update_tb_14a707ad0fcc?: Maybe<Tb_14a707ad0fcc_Mutation_Response>;
  /** update single row of the table: "tb_14a707ad0fcc" */
  update_tb_14a707ad0fcc_by_pk?: Maybe<Tb_14a707ad0fcc>;
  /** update multiples rows of table: "tb_14a707ad0fcc" */
  update_tb_14a707ad0fcc_many?: Maybe<Array<Maybe<Tb_14a707ad0fcc_Mutation_Response>>>;
  /** update data of the table: "tb_66e8f877ca5c" */
  update_tb_66e8f877ca5c?: Maybe<Tb_66e8f877ca5c_Mutation_Response>;
  /** update single row of the table: "tb_66e8f877ca5c" */
  update_tb_66e8f877ca5c_by_pk?: Maybe<Tb_66e8f877ca5c>;
  /** update multiples rows of table: "tb_66e8f877ca5c" */
  update_tb_66e8f877ca5c_many?: Maybe<Array<Maybe<Tb_66e8f877ca5c_Mutation_Response>>>;
  /** update data of the table: "tb_88fb_techstars_companies" */
  update_tb_88fb_techstars_companies?: Maybe<Tb_88fb_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_88fb_techstars_companies" */
  update_tb_88fb_techstars_companies_by_pk?: Maybe<Tb_88fb_Techstars_Companies>;
  /** update multiples rows of table: "tb_88fb_techstars_companies" */
  update_tb_88fb_techstars_companies_many?: Maybe<Array<Maybe<Tb_88fb_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_96fa_techstars_companies" */
  update_tb_96fa_techstars_companies?: Maybe<Tb_96fa_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_96fa_techstars_companies" */
  update_tb_96fa_techstars_companies_by_pk?: Maybe<Tb_96fa_Techstars_Companies>;
  /** update multiples rows of table: "tb_96fa_techstars_companies" */
  update_tb_96fa_techstars_companies_many?: Maybe<Array<Maybe<Tb_96fa_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_140d8afc9ce4" */
  update_tb_140d8afc9ce4?: Maybe<Tb_140d8afc9ce4_Mutation_Response>;
  /** update single row of the table: "tb_140d8afc9ce4" */
  update_tb_140d8afc9ce4_by_pk?: Maybe<Tb_140d8afc9ce4>;
  /** update multiples rows of table: "tb_140d8afc9ce4" */
  update_tb_140d8afc9ce4_many?: Maybe<Array<Maybe<Tb_140d8afc9ce4_Mutation_Response>>>;
  /** update data of the table: "tb_8536_techstars_companies" */
  update_tb_8536_techstars_companies?: Maybe<Tb_8536_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_8536_techstars_companies" */
  update_tb_8536_techstars_companies_by_pk?: Maybe<Tb_8536_Techstars_Companies>;
  /** update multiples rows of table: "tb_8536_techstars_companies" */
  update_tb_8536_techstars_companies_many?: Maybe<Array<Maybe<Tb_8536_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_9066_techstars_companies" */
  update_tb_9066_techstars_companies?: Maybe<Tb_9066_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_9066_techstars_companies" */
  update_tb_9066_techstars_companies_by_pk?: Maybe<Tb_9066_Techstars_Companies>;
  /** update multiples rows of table: "tb_9066_techstars_companies" */
  update_tb_9066_techstars_companies_many?: Maybe<Array<Maybe<Tb_9066_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_9459_techstars_companies" */
  update_tb_9459_techstars_companies?: Maybe<Tb_9459_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_9459_techstars_companies" */
  update_tb_9459_techstars_companies_by_pk?: Maybe<Tb_9459_Techstars_Companies>;
  /** update multiples rows of table: "tb_9459_techstars_companies" */
  update_tb_9459_techstars_companies_many?: Maybe<Array<Maybe<Tb_9459_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_9701_techstars_companies" */
  update_tb_9701_techstars_companies?: Maybe<Tb_9701_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_9701_techstars_companies" */
  update_tb_9701_techstars_companies_by_pk?: Maybe<Tb_9701_Techstars_Companies>;
  /** update multiples rows of table: "tb_9701_techstars_companies" */
  update_tb_9701_techstars_companies_many?: Maybe<Array<Maybe<Tb_9701_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_46723fcb5cf3" */
  update_tb_46723fcb5cf3?: Maybe<Tb_46723fcb5cf3_Mutation_Response>;
  /** update single row of the table: "tb_46723fcb5cf3" */
  update_tb_46723fcb5cf3_by_pk?: Maybe<Tb_46723fcb5cf3>;
  /** update multiples rows of table: "tb_46723fcb5cf3" */
  update_tb_46723fcb5cf3_many?: Maybe<Array<Maybe<Tb_46723fcb5cf3_Mutation_Response>>>;
  /** update data of the table: "tb_a5c1_techstars_companies" */
  update_tb_a5c1_techstars_companies?: Maybe<Tb_A5c1_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_a5c1_techstars_companies" */
  update_tb_a5c1_techstars_companies_by_pk?: Maybe<Tb_A5c1_Techstars_Companies>;
  /** update multiples rows of table: "tb_a5c1_techstars_companies" */
  update_tb_a5c1_techstars_companies_many?: Maybe<Array<Maybe<Tb_A5c1_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_a7dc_techstars_companies" */
  update_tb_a7dc_techstars_companies?: Maybe<Tb_A7dc_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_a7dc_techstars_companies" */
  update_tb_a7dc_techstars_companies_by_pk?: Maybe<Tb_A7dc_Techstars_Companies>;
  /** update multiples rows of table: "tb_a7dc_techstars_companies" */
  update_tb_a7dc_techstars_companies_many?: Maybe<Array<Maybe<Tb_A7dc_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_a332_techstars_companies" */
  update_tb_a332_techstars_companies?: Maybe<Tb_A332_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_a332_techstars_companies" */
  update_tb_a332_techstars_companies_by_pk?: Maybe<Tb_A332_Techstars_Companies>;
  /** update multiples rows of table: "tb_a332_techstars_companies" */
  update_tb_a332_techstars_companies_many?: Maybe<Array<Maybe<Tb_A332_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_ac31_techstars_companies" */
  update_tb_ac31_techstars_companies?: Maybe<Tb_Ac31_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_ac31_techstars_companies" */
  update_tb_ac31_techstars_companies_by_pk?: Maybe<Tb_Ac31_Techstars_Companies>;
  /** update multiples rows of table: "tb_ac31_techstars_companies" */
  update_tb_ac31_techstars_companies_many?: Maybe<Array<Maybe<Tb_Ac31_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_ae8e_techstars_companies" */
  update_tb_ae8e_techstars_companies?: Maybe<Tb_Ae8e_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_ae8e_techstars_companies" */
  update_tb_ae8e_techstars_companies_by_pk?: Maybe<Tb_Ae8e_Techstars_Companies>;
  /** update multiples rows of table: "tb_ae8e_techstars_companies" */
  update_tb_ae8e_techstars_companies_many?: Maybe<Array<Maybe<Tb_Ae8e_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_af27_techstars_companies" */
  update_tb_af27_techstars_companies?: Maybe<Tb_Af27_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_af27_techstars_companies" */
  update_tb_af27_techstars_companies_by_pk?: Maybe<Tb_Af27_Techstars_Companies>;
  /** update multiples rows of table: "tb_af27_techstars_companies" */
  update_tb_af27_techstars_companies_many?: Maybe<Array<Maybe<Tb_Af27_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b02e_techstars_companies" */
  update_tb_b02e_techstars_companies?: Maybe<Tb_B02e_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b02e_techstars_companies" */
  update_tb_b02e_techstars_companies_by_pk?: Maybe<Tb_B02e_Techstars_Companies>;
  /** update multiples rows of table: "tb_b02e_techstars_companies" */
  update_tb_b02e_techstars_companies_many?: Maybe<Array<Maybe<Tb_B02e_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b3a8_techstars_companies" */
  update_tb_b3a8_techstars_companies?: Maybe<Tb_B3a8_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b3a8_techstars_companies" */
  update_tb_b3a8_techstars_companies_by_pk?: Maybe<Tb_B3a8_Techstars_Companies>;
  /** update multiples rows of table: "tb_b3a8_techstars_companies" */
  update_tb_b3a8_techstars_companies_many?: Maybe<Array<Maybe<Tb_B3a8_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b4fc_techstars_companies" */
  update_tb_b4fc_techstars_companies?: Maybe<Tb_B4fc_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b4fc_techstars_companies" */
  update_tb_b4fc_techstars_companies_by_pk?: Maybe<Tb_B4fc_Techstars_Companies>;
  /** update multiples rows of table: "tb_b4fc_techstars_companies" */
  update_tb_b4fc_techstars_companies_many?: Maybe<Array<Maybe<Tb_B4fc_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b7e7_techstars_companies" */
  update_tb_b7e7_techstars_companies?: Maybe<Tb_B7e7_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b7e7_techstars_companies" */
  update_tb_b7e7_techstars_companies_by_pk?: Maybe<Tb_B7e7_Techstars_Companies>;
  /** update multiples rows of table: "tb_b7e7_techstars_companies" */
  update_tb_b7e7_techstars_companies_many?: Maybe<Array<Maybe<Tb_B7e7_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b9c9_techstars_companies" */
  update_tb_b9c9_techstars_companies?: Maybe<Tb_B9c9_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b9c9_techstars_companies" */
  update_tb_b9c9_techstars_companies_by_pk?: Maybe<Tb_B9c9_Techstars_Companies>;
  /** update multiples rows of table: "tb_b9c9_techstars_companies" */
  update_tb_b9c9_techstars_companies_many?: Maybe<Array<Maybe<Tb_B9c9_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b14c_techstars_companies" */
  update_tb_b14c_techstars_companies?: Maybe<Tb_B14c_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b14c_techstars_companies" */
  update_tb_b14c_techstars_companies_by_pk?: Maybe<Tb_B14c_Techstars_Companies>;
  /** update multiples rows of table: "tb_b14c_techstars_companies" */
  update_tb_b14c_techstars_companies_many?: Maybe<Array<Maybe<Tb_B14c_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b80b_techstars_companies" */
  update_tb_b80b_techstars_companies?: Maybe<Tb_B80b_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b80b_techstars_companies" */
  update_tb_b80b_techstars_companies_by_pk?: Maybe<Tb_B80b_Techstars_Companies>;
  /** update multiples rows of table: "tb_b80b_techstars_companies" */
  update_tb_b80b_techstars_companies_many?: Maybe<Array<Maybe<Tb_B80b_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b225_techstars_companies" */
  update_tb_b225_techstars_companies?: Maybe<Tb_B225_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b225_techstars_companies" */
  update_tb_b225_techstars_companies_by_pk?: Maybe<Tb_B225_Techstars_Companies>;
  /** update multiples rows of table: "tb_b225_techstars_companies" */
  update_tb_b225_techstars_companies_many?: Maybe<Array<Maybe<Tb_B225_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_b739_techstars_companies" */
  update_tb_b739_techstars_companies?: Maybe<Tb_B739_Techstars_Companies_Mutation_Response>;
  /** update single row of the table: "tb_b739_techstars_companies" */
  update_tb_b739_techstars_companies_by_pk?: Maybe<Tb_B739_Techstars_Companies>;
  /** update multiples rows of table: "tb_b739_techstars_companies" */
  update_tb_b739_techstars_companies_many?: Maybe<Array<Maybe<Tb_B739_Techstars_Companies_Mutation_Response>>>;
  /** update data of the table: "tb_bd249159795e" */
  update_tb_bd249159795e?: Maybe<Tb_Bd249159795e_Mutation_Response>;
  /** update single row of the table: "tb_bd249159795e" */
  update_tb_bd249159795e_by_pk?: Maybe<Tb_Bd249159795e>;
  /** update multiples rows of table: "tb_bd249159795e" */
  update_tb_bd249159795e_many?: Maybe<Array<Maybe<Tb_Bd249159795e_Mutation_Response>>>;
  /** update data of the table: "tb_c57cdd28d7c0" */
  update_tb_c57cdd28d7c0?: Maybe<Tb_C57cdd28d7c0_Mutation_Response>;
  /** update single row of the table: "tb_c57cdd28d7c0" */
  update_tb_c57cdd28d7c0_by_pk?: Maybe<Tb_C57cdd28d7c0>;
  /** update multiples rows of table: "tb_c57cdd28d7c0" */
  update_tb_c57cdd28d7c0_many?: Maybe<Array<Maybe<Tb_C57cdd28d7c0_Mutation_Response>>>;
  /** update data of the table: "tb_d0e828550903" */
  update_tb_d0e828550903?: Maybe<Tb_D0e828550903_Mutation_Response>;
  /** update single row of the table: "tb_d0e828550903" */
  update_tb_d0e828550903_by_pk?: Maybe<Tb_D0e828550903>;
  /** update multiples rows of table: "tb_d0e828550903" */
  update_tb_d0e828550903_many?: Maybe<Array<Maybe<Tb_D0e828550903_Mutation_Response>>>;
  /** update data of the table: "tb_ff89301ef0f8" */
  update_tb_ff89301ef0f8?: Maybe<Tb_Ff89301ef0f8_Mutation_Response>;
  /** update single row of the table: "tb_ff89301ef0f8" */
  update_tb_ff89301ef0f8_by_pk?: Maybe<Tb_Ff89301ef0f8>;
  /** update multiples rows of table: "tb_ff89301ef0f8" */
  update_tb_ff89301ef0f8_many?: Maybe<Array<Maybe<Tb_Ff89301ef0f8_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "workspace" */
  update_workspace?: Maybe<Workspace_Mutation_Response>;
  /** update single row of the table: "workspace" */
  update_workspace_by_pk?: Maybe<Workspace>;
  /** update multiples rows of table: "workspace" */
  update_workspace_many?: Maybe<Array<Maybe<Workspace_Mutation_Response>>>;
  /** update data of the table: "workspace_membership" */
  update_workspace_membership?: Maybe<Workspace_Membership_Mutation_Response>;
  /** update single row of the table: "workspace_membership" */
  update_workspace_membership_by_pk?: Maybe<Workspace_Membership>;
  /** update multiples rows of table: "workspace_membership" */
  update_workspace_membership_many?: Maybe<Array<Maybe<Workspace_Membership_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_App_StateArgs = {
  where: App_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BlueprintArgs = {
  where: Blueprint_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blueprint_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DataframeArgs = {
  where: Dataframe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dataframe_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HistoryArgs = {
  where: History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_History_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_InviteArgs = {
  where: Invite_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invite_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Login_ActivityArgs = {
  where: Login_Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Login_Activity_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PagesArgs = {
  where: Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_0d5fd0848814Args = {
  where: Tb_0d5fd0848814_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_0d5fd0848814_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_4d10c208adc8Args = {
  where: Tb_4d10c208adc8_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_4d10c208adc8_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_8a3e5ae9851eArgs = {
  where: Tb_8a3e5ae9851e_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_8a3e5ae9851e_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_8c0d_Techstars_CompaniesArgs = {
  where: Tb_8c0d_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_8c0d_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_8f3a_Techstars_CompaniesArgs = {
  where: Tb_8f3a_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_8f3a_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_9ae55ff65521Args = {
  where: Tb_9ae55ff65521_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_9ae55ff65521_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_9b4e_Techstars_CompaniesArgs = {
  where: Tb_9b4e_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_9b4e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_9bed8f8cd4faArgs = {
  where: Tb_9bed8f8cd4fa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_9bed8f8cd4fa_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_9cab_Techstars_CompaniesArgs = {
  where: Tb_9cab_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_9cab_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_9d66_Techstars_CompaniesArgs = {
  where: Tb_9d66_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_9d66_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_14a707ad0fccArgs = {
  where: Tb_14a707ad0fcc_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_14a707ad0fcc_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_66e8f877ca5cArgs = {
  where: Tb_66e8f877ca5c_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_66e8f877ca5c_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_88fb_Techstars_CompaniesArgs = {
  where: Tb_88fb_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_88fb_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_96fa_Techstars_CompaniesArgs = {
  where: Tb_96fa_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_96fa_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_140d8afc9ce4Args = {
  where: Tb_140d8afc9ce4_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_140d8afc9ce4_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_8536_Techstars_CompaniesArgs = {
  where: Tb_8536_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_8536_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_9066_Techstars_CompaniesArgs = {
  where: Tb_9066_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_9066_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_9459_Techstars_CompaniesArgs = {
  where: Tb_9459_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_9459_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_9701_Techstars_CompaniesArgs = {
  where: Tb_9701_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_9701_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_46723fcb5cf3Args = {
  where: Tb_46723fcb5cf3_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_46723fcb5cf3_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_A5c1_Techstars_CompaniesArgs = {
  where: Tb_A5c1_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_A5c1_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_A7dc_Techstars_CompaniesArgs = {
  where: Tb_A7dc_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_A7dc_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_A332_Techstars_CompaniesArgs = {
  where: Tb_A332_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_A332_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_Ac31_Techstars_CompaniesArgs = {
  where: Tb_Ac31_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_Ac31_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_Ae8e_Techstars_CompaniesArgs = {
  where: Tb_Ae8e_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_Ae8e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_Af27_Techstars_CompaniesArgs = {
  where: Tb_Af27_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_Af27_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B02e_Techstars_CompaniesArgs = {
  where: Tb_B02e_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B02e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B3a8_Techstars_CompaniesArgs = {
  where: Tb_B3a8_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B3a8_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B4fc_Techstars_CompaniesArgs = {
  where: Tb_B4fc_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B4fc_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B7e7_Techstars_CompaniesArgs = {
  where: Tb_B7e7_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B7e7_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B9c9_Techstars_CompaniesArgs = {
  where: Tb_B9c9_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B9c9_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B14c_Techstars_CompaniesArgs = {
  where: Tb_B14c_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B14c_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B80b_Techstars_CompaniesArgs = {
  where: Tb_B80b_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B80b_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B225_Techstars_CompaniesArgs = {
  where: Tb_B225_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B225_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_B739_Techstars_CompaniesArgs = {
  where: Tb_B739_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_B739_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_Bd249159795eArgs = {
  where: Tb_Bd249159795e_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_Bd249159795e_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_C57cdd28d7c0Args = {
  where: Tb_C57cdd28d7c0_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_C57cdd28d7c0_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_D0e828550903Args = {
  where: Tb_D0e828550903_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_D0e828550903_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tb_Ff89301ef0f8Args = {
  where: Tb_Ff89301ef0f8_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_Ff89301ef0f8_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_WorkspaceArgs = {
  where: Workspace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workspace_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Workspace_MembershipArgs = {
  where: Workspace_Membership_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workspace_Membership_By_PkArgs = {
  _id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_App_StateArgs = {
  objects: Array<App_State_Insert_Input>;
  on_conflict?: InputMaybe<App_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_State_OneArgs = {
  object: App_State_Insert_Input;
  on_conflict?: InputMaybe<App_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlueprintArgs = {
  objects: Array<Blueprint_Insert_Input>;
  on_conflict?: InputMaybe<Blueprint_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blueprint_OneArgs = {
  object: Blueprint_Insert_Input;
  on_conflict?: InputMaybe<Blueprint_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DataframeArgs = {
  objects: Array<Dataframe_Insert_Input>;
  on_conflict?: InputMaybe<Dataframe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dataframe_OneArgs = {
  object: Dataframe_Insert_Input;
  on_conflict?: InputMaybe<Dataframe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HistoryArgs = {
  objects: Array<History_Insert_Input>;
  on_conflict?: InputMaybe<History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_History_OneArgs = {
  object: History_Insert_Input;
  on_conflict?: InputMaybe<History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InviteArgs = {
  objects: Array<Invite_Insert_Input>;
  on_conflict?: InputMaybe<Invite_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invite_OneArgs = {
  object: Invite_Insert_Input;
  on_conflict?: InputMaybe<Invite_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Login_ActivityArgs = {
  objects: Array<Login_Activity_Insert_Input>;
  on_conflict?: InputMaybe<Login_Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Login_Activity_OneArgs = {
  object: Login_Activity_Insert_Input;
  on_conflict?: InputMaybe<Login_Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PagesArgs = {
  objects: Array<Pages_Insert_Input>;
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pages_OneArgs = {
  object: Pages_Insert_Input;
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_0d5fd0848814Args = {
  objects: Array<Tb_0d5fd0848814_Insert_Input>;
  on_conflict?: InputMaybe<Tb_0d5fd0848814_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_0d5fd0848814_OneArgs = {
  object: Tb_0d5fd0848814_Insert_Input;
  on_conflict?: InputMaybe<Tb_0d5fd0848814_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_4d10c208adc8Args = {
  objects: Array<Tb_4d10c208adc8_Insert_Input>;
  on_conflict?: InputMaybe<Tb_4d10c208adc8_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_4d10c208adc8_OneArgs = {
  object: Tb_4d10c208adc8_Insert_Input;
  on_conflict?: InputMaybe<Tb_4d10c208adc8_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_8a3e5ae9851eArgs = {
  objects: Array<Tb_8a3e5ae9851e_Insert_Input>;
  on_conflict?: InputMaybe<Tb_8a3e5ae9851e_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_8a3e5ae9851e_OneArgs = {
  object: Tb_8a3e5ae9851e_Insert_Input;
  on_conflict?: InputMaybe<Tb_8a3e5ae9851e_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_8c0d_Techstars_CompaniesArgs = {
  objects: Array<Tb_8c0d_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_8c0d_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_8c0d_Techstars_Companies_OneArgs = {
  object: Tb_8c0d_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_8c0d_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_8f3a_Techstars_CompaniesArgs = {
  objects: Array<Tb_8f3a_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_8f3a_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_8f3a_Techstars_Companies_OneArgs = {
  object: Tb_8f3a_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_8f3a_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9ae55ff65521Args = {
  objects: Array<Tb_9ae55ff65521_Insert_Input>;
  on_conflict?: InputMaybe<Tb_9ae55ff65521_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9ae55ff65521_OneArgs = {
  object: Tb_9ae55ff65521_Insert_Input;
  on_conflict?: InputMaybe<Tb_9ae55ff65521_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9b4e_Techstars_CompaniesArgs = {
  objects: Array<Tb_9b4e_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_9b4e_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9b4e_Techstars_Companies_OneArgs = {
  object: Tb_9b4e_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_9b4e_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9bed8f8cd4faArgs = {
  objects: Array<Tb_9bed8f8cd4fa_Insert_Input>;
  on_conflict?: InputMaybe<Tb_9bed8f8cd4fa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9bed8f8cd4fa_OneArgs = {
  object: Tb_9bed8f8cd4fa_Insert_Input;
  on_conflict?: InputMaybe<Tb_9bed8f8cd4fa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9cab_Techstars_CompaniesArgs = {
  objects: Array<Tb_9cab_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_9cab_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9cab_Techstars_Companies_OneArgs = {
  object: Tb_9cab_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_9cab_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9d66_Techstars_CompaniesArgs = {
  objects: Array<Tb_9d66_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_9d66_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9d66_Techstars_Companies_OneArgs = {
  object: Tb_9d66_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_9d66_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_14a707ad0fccArgs = {
  objects: Array<Tb_14a707ad0fcc_Insert_Input>;
  on_conflict?: InputMaybe<Tb_14a707ad0fcc_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_14a707ad0fcc_OneArgs = {
  object: Tb_14a707ad0fcc_Insert_Input;
  on_conflict?: InputMaybe<Tb_14a707ad0fcc_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_66e8f877ca5cArgs = {
  objects: Array<Tb_66e8f877ca5c_Insert_Input>;
  on_conflict?: InputMaybe<Tb_66e8f877ca5c_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_66e8f877ca5c_OneArgs = {
  object: Tb_66e8f877ca5c_Insert_Input;
  on_conflict?: InputMaybe<Tb_66e8f877ca5c_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_88fb_Techstars_CompaniesArgs = {
  objects: Array<Tb_88fb_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_88fb_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_88fb_Techstars_Companies_OneArgs = {
  object: Tb_88fb_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_88fb_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_96fa_Techstars_CompaniesArgs = {
  objects: Array<Tb_96fa_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_96fa_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_96fa_Techstars_Companies_OneArgs = {
  object: Tb_96fa_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_96fa_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_140d8afc9ce4Args = {
  objects: Array<Tb_140d8afc9ce4_Insert_Input>;
  on_conflict?: InputMaybe<Tb_140d8afc9ce4_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_140d8afc9ce4_OneArgs = {
  object: Tb_140d8afc9ce4_Insert_Input;
  on_conflict?: InputMaybe<Tb_140d8afc9ce4_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_8536_Techstars_CompaniesArgs = {
  objects: Array<Tb_8536_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_8536_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_8536_Techstars_Companies_OneArgs = {
  object: Tb_8536_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_8536_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9066_Techstars_CompaniesArgs = {
  objects: Array<Tb_9066_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_9066_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9066_Techstars_Companies_OneArgs = {
  object: Tb_9066_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_9066_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9459_Techstars_CompaniesArgs = {
  objects: Array<Tb_9459_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_9459_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9459_Techstars_Companies_OneArgs = {
  object: Tb_9459_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_9459_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9701_Techstars_CompaniesArgs = {
  objects: Array<Tb_9701_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_9701_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_9701_Techstars_Companies_OneArgs = {
  object: Tb_9701_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_9701_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_46723fcb5cf3Args = {
  objects: Array<Tb_46723fcb5cf3_Insert_Input>;
  on_conflict?: InputMaybe<Tb_46723fcb5cf3_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_46723fcb5cf3_OneArgs = {
  object: Tb_46723fcb5cf3_Insert_Input;
  on_conflict?: InputMaybe<Tb_46723fcb5cf3_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_A5c1_Techstars_CompaniesArgs = {
  objects: Array<Tb_A5c1_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_A5c1_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_A5c1_Techstars_Companies_OneArgs = {
  object: Tb_A5c1_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_A5c1_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_A7dc_Techstars_CompaniesArgs = {
  objects: Array<Tb_A7dc_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_A7dc_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_A7dc_Techstars_Companies_OneArgs = {
  object: Tb_A7dc_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_A7dc_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_A332_Techstars_CompaniesArgs = {
  objects: Array<Tb_A332_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_A332_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_A332_Techstars_Companies_OneArgs = {
  object: Tb_A332_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_A332_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Ac31_Techstars_CompaniesArgs = {
  objects: Array<Tb_Ac31_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_Ac31_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Ac31_Techstars_Companies_OneArgs = {
  object: Tb_Ac31_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_Ac31_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Ae8e_Techstars_CompaniesArgs = {
  objects: Array<Tb_Ae8e_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_Ae8e_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Ae8e_Techstars_Companies_OneArgs = {
  object: Tb_Ae8e_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_Ae8e_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Af27_Techstars_CompaniesArgs = {
  objects: Array<Tb_Af27_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_Af27_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Af27_Techstars_Companies_OneArgs = {
  object: Tb_Af27_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_Af27_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B02e_Techstars_CompaniesArgs = {
  objects: Array<Tb_B02e_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B02e_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B02e_Techstars_Companies_OneArgs = {
  object: Tb_B02e_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B02e_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B3a8_Techstars_CompaniesArgs = {
  objects: Array<Tb_B3a8_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B3a8_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B3a8_Techstars_Companies_OneArgs = {
  object: Tb_B3a8_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B3a8_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B4fc_Techstars_CompaniesArgs = {
  objects: Array<Tb_B4fc_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B4fc_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B4fc_Techstars_Companies_OneArgs = {
  object: Tb_B4fc_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B4fc_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B7e7_Techstars_CompaniesArgs = {
  objects: Array<Tb_B7e7_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B7e7_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B7e7_Techstars_Companies_OneArgs = {
  object: Tb_B7e7_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B7e7_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B9c9_Techstars_CompaniesArgs = {
  objects: Array<Tb_B9c9_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B9c9_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B9c9_Techstars_Companies_OneArgs = {
  object: Tb_B9c9_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B9c9_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B14c_Techstars_CompaniesArgs = {
  objects: Array<Tb_B14c_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B14c_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B14c_Techstars_Companies_OneArgs = {
  object: Tb_B14c_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B14c_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B80b_Techstars_CompaniesArgs = {
  objects: Array<Tb_B80b_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B80b_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B80b_Techstars_Companies_OneArgs = {
  object: Tb_B80b_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B80b_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B225_Techstars_CompaniesArgs = {
  objects: Array<Tb_B225_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B225_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B225_Techstars_Companies_OneArgs = {
  object: Tb_B225_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B225_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B739_Techstars_CompaniesArgs = {
  objects: Array<Tb_B739_Techstars_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Tb_B739_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_B739_Techstars_Companies_OneArgs = {
  object: Tb_B739_Techstars_Companies_Insert_Input;
  on_conflict?: InputMaybe<Tb_B739_Techstars_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Bd249159795eArgs = {
  objects: Array<Tb_Bd249159795e_Insert_Input>;
  on_conflict?: InputMaybe<Tb_Bd249159795e_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Bd249159795e_OneArgs = {
  object: Tb_Bd249159795e_Insert_Input;
  on_conflict?: InputMaybe<Tb_Bd249159795e_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_C57cdd28d7c0Args = {
  objects: Array<Tb_C57cdd28d7c0_Insert_Input>;
  on_conflict?: InputMaybe<Tb_C57cdd28d7c0_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_C57cdd28d7c0_OneArgs = {
  object: Tb_C57cdd28d7c0_Insert_Input;
  on_conflict?: InputMaybe<Tb_C57cdd28d7c0_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_D0e828550903Args = {
  objects: Array<Tb_D0e828550903_Insert_Input>;
  on_conflict?: InputMaybe<Tb_D0e828550903_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_D0e828550903_OneArgs = {
  object: Tb_D0e828550903_Insert_Input;
  on_conflict?: InputMaybe<Tb_D0e828550903_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Ff89301ef0f8Args = {
  objects: Array<Tb_Ff89301ef0f8_Insert_Input>;
  on_conflict?: InputMaybe<Tb_Ff89301ef0f8_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_Ff89301ef0f8_OneArgs = {
  object: Tb_Ff89301ef0f8_Insert_Input;
  on_conflict?: InputMaybe<Tb_Ff89301ef0f8_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkspaceArgs = {
  objects: Array<Workspace_Insert_Input>;
  on_conflict?: InputMaybe<Workspace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workspace_MembershipArgs = {
  objects: Array<Workspace_Membership_Insert_Input>;
  on_conflict?: InputMaybe<Workspace_Membership_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workspace_Membership_OneArgs = {
  object: Workspace_Membership_Insert_Input;
  on_conflict?: InputMaybe<Workspace_Membership_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workspace_OneArgs = {
  object: Workspace_Insert_Input;
  on_conflict?: InputMaybe<Workspace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_App_StateArgs = {
  _append?: InputMaybe<App_State_Append_Input>;
  _delete_at_path?: InputMaybe<App_State_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_State_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_State_Delete_Key_Input>;
  _prepend?: InputMaybe<App_State_Prepend_Input>;
  _set?: InputMaybe<App_State_Set_Input>;
  where: App_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_State_ManyArgs = {
  updates: Array<App_State_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BlueprintArgs = {
  _inc?: InputMaybe<Blueprint_Inc_Input>;
  _set?: InputMaybe<Blueprint_Set_Input>;
  where: Blueprint_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blueprint_By_PkArgs = {
  _inc?: InputMaybe<Blueprint_Inc_Input>;
  _set?: InputMaybe<Blueprint_Set_Input>;
  pk_columns: Blueprint_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blueprint_ManyArgs = {
  updates: Array<Blueprint_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DataframeArgs = {
  _append?: InputMaybe<Dataframe_Append_Input>;
  _delete_at_path?: InputMaybe<Dataframe_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Dataframe_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Dataframe_Delete_Key_Input>;
  _prepend?: InputMaybe<Dataframe_Prepend_Input>;
  _set?: InputMaybe<Dataframe_Set_Input>;
  where: Dataframe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dataframe_By_PkArgs = {
  _append?: InputMaybe<Dataframe_Append_Input>;
  _delete_at_path?: InputMaybe<Dataframe_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Dataframe_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Dataframe_Delete_Key_Input>;
  _prepend?: InputMaybe<Dataframe_Prepend_Input>;
  _set?: InputMaybe<Dataframe_Set_Input>;
  pk_columns: Dataframe_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dataframe_ManyArgs = {
  updates: Array<Dataframe_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HistoryArgs = {
  _append?: InputMaybe<History_Append_Input>;
  _delete_at_path?: InputMaybe<History_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<History_Delete_Elem_Input>;
  _delete_key?: InputMaybe<History_Delete_Key_Input>;
  _prepend?: InputMaybe<History_Prepend_Input>;
  _set?: InputMaybe<History_Set_Input>;
  where: History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_History_By_PkArgs = {
  _append?: InputMaybe<History_Append_Input>;
  _delete_at_path?: InputMaybe<History_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<History_Delete_Elem_Input>;
  _delete_key?: InputMaybe<History_Delete_Key_Input>;
  _prepend?: InputMaybe<History_Prepend_Input>;
  _set?: InputMaybe<History_Set_Input>;
  pk_columns: History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_History_ManyArgs = {
  updates: Array<History_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InviteArgs = {
  _inc?: InputMaybe<Invite_Inc_Input>;
  _set?: InputMaybe<Invite_Set_Input>;
  where: Invite_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invite_By_PkArgs = {
  _inc?: InputMaybe<Invite_Inc_Input>;
  _set?: InputMaybe<Invite_Set_Input>;
  pk_columns: Invite_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Invite_ManyArgs = {
  updates: Array<Invite_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Login_ActivityArgs = {
  _append?: InputMaybe<Login_Activity_Append_Input>;
  _delete_at_path?: InputMaybe<Login_Activity_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Login_Activity_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Login_Activity_Delete_Key_Input>;
  _inc?: InputMaybe<Login_Activity_Inc_Input>;
  _prepend?: InputMaybe<Login_Activity_Prepend_Input>;
  _set?: InputMaybe<Login_Activity_Set_Input>;
  where: Login_Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Login_Activity_By_PkArgs = {
  _append?: InputMaybe<Login_Activity_Append_Input>;
  _delete_at_path?: InputMaybe<Login_Activity_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Login_Activity_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Login_Activity_Delete_Key_Input>;
  _inc?: InputMaybe<Login_Activity_Inc_Input>;
  _prepend?: InputMaybe<Login_Activity_Prepend_Input>;
  _set?: InputMaybe<Login_Activity_Set_Input>;
  pk_columns: Login_Activity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Login_Activity_ManyArgs = {
  updates: Array<Login_Activity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PagesArgs = {
  _append?: InputMaybe<Pages_Append_Input>;
  _delete_at_path?: InputMaybe<Pages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Pages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Pages_Delete_Key_Input>;
  _prepend?: InputMaybe<Pages_Prepend_Input>;
  _set?: InputMaybe<Pages_Set_Input>;
  where: Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pages_By_PkArgs = {
  _append?: InputMaybe<Pages_Append_Input>;
  _delete_at_path?: InputMaybe<Pages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Pages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Pages_Delete_Key_Input>;
  _prepend?: InputMaybe<Pages_Prepend_Input>;
  _set?: InputMaybe<Pages_Set_Input>;
  pk_columns: Pages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pages_ManyArgs = {
  updates: Array<Pages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_0d5fd0848814Args = {
  _inc?: InputMaybe<Tb_0d5fd0848814_Inc_Input>;
  _set?: InputMaybe<Tb_0d5fd0848814_Set_Input>;
  where: Tb_0d5fd0848814_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_0d5fd0848814_By_PkArgs = {
  _inc?: InputMaybe<Tb_0d5fd0848814_Inc_Input>;
  _set?: InputMaybe<Tb_0d5fd0848814_Set_Input>;
  pk_columns: Tb_0d5fd0848814_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_0d5fd0848814_ManyArgs = {
  updates: Array<Tb_0d5fd0848814_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_4d10c208adc8Args = {
  _append?: InputMaybe<Tb_4d10c208adc8_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_4d10c208adc8_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_4d10c208adc8_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_4d10c208adc8_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_4d10c208adc8_Prepend_Input>;
  _set?: InputMaybe<Tb_4d10c208adc8_Set_Input>;
  where: Tb_4d10c208adc8_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_4d10c208adc8_By_PkArgs = {
  _append?: InputMaybe<Tb_4d10c208adc8_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_4d10c208adc8_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_4d10c208adc8_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_4d10c208adc8_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_4d10c208adc8_Prepend_Input>;
  _set?: InputMaybe<Tb_4d10c208adc8_Set_Input>;
  pk_columns: Tb_4d10c208adc8_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_4d10c208adc8_ManyArgs = {
  updates: Array<Tb_4d10c208adc8_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8a3e5ae9851eArgs = {
  _set?: InputMaybe<Tb_8a3e5ae9851e_Set_Input>;
  where: Tb_8a3e5ae9851e_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8a3e5ae9851e_By_PkArgs = {
  _set?: InputMaybe<Tb_8a3e5ae9851e_Set_Input>;
  pk_columns: Tb_8a3e5ae9851e_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8a3e5ae9851e_ManyArgs = {
  updates: Array<Tb_8a3e5ae9851e_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8c0d_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_8c0d_Techstars_Companies_Set_Input>;
  where: Tb_8c0d_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8c0d_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_8c0d_Techstars_Companies_Set_Input>;
  pk_columns: Tb_8c0d_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8c0d_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_8c0d_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8f3a_Techstars_CompaniesArgs = {
  _append?: InputMaybe<Tb_8f3a_Techstars_Companies_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_8f3a_Techstars_Companies_Prepend_Input>;
  _set?: InputMaybe<Tb_8f3a_Techstars_Companies_Set_Input>;
  where: Tb_8f3a_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8f3a_Techstars_Companies_By_PkArgs = {
  _append?: InputMaybe<Tb_8f3a_Techstars_Companies_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_8f3a_Techstars_Companies_Prepend_Input>;
  _set?: InputMaybe<Tb_8f3a_Techstars_Companies_Set_Input>;
  pk_columns: Tb_8f3a_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8f3a_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_8f3a_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9ae55ff65521Args = {
  _set?: InputMaybe<Tb_9ae55ff65521_Set_Input>;
  where: Tb_9ae55ff65521_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9ae55ff65521_By_PkArgs = {
  _set?: InputMaybe<Tb_9ae55ff65521_Set_Input>;
  pk_columns: Tb_9ae55ff65521_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9ae55ff65521_ManyArgs = {
  updates: Array<Tb_9ae55ff65521_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9b4e_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_9b4e_Techstars_Companies_Set_Input>;
  where: Tb_9b4e_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9b4e_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_9b4e_Techstars_Companies_Set_Input>;
  pk_columns: Tb_9b4e_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9b4e_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_9b4e_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9bed8f8cd4faArgs = {
  _inc?: InputMaybe<Tb_9bed8f8cd4fa_Inc_Input>;
  _set?: InputMaybe<Tb_9bed8f8cd4fa_Set_Input>;
  where: Tb_9bed8f8cd4fa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9bed8f8cd4fa_By_PkArgs = {
  _inc?: InputMaybe<Tb_9bed8f8cd4fa_Inc_Input>;
  _set?: InputMaybe<Tb_9bed8f8cd4fa_Set_Input>;
  pk_columns: Tb_9bed8f8cd4fa_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9bed8f8cd4fa_ManyArgs = {
  updates: Array<Tb_9bed8f8cd4fa_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9cab_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_9cab_Techstars_Companies_Set_Input>;
  where: Tb_9cab_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9cab_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_9cab_Techstars_Companies_Set_Input>;
  pk_columns: Tb_9cab_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9cab_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_9cab_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9d66_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_9d66_Techstars_Companies_Set_Input>;
  where: Tb_9d66_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9d66_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_9d66_Techstars_Companies_Set_Input>;
  pk_columns: Tb_9d66_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9d66_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_9d66_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_14a707ad0fccArgs = {
  _set?: InputMaybe<Tb_14a707ad0fcc_Set_Input>;
  where: Tb_14a707ad0fcc_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_14a707ad0fcc_By_PkArgs = {
  _set?: InputMaybe<Tb_14a707ad0fcc_Set_Input>;
  pk_columns: Tb_14a707ad0fcc_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_14a707ad0fcc_ManyArgs = {
  updates: Array<Tb_14a707ad0fcc_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_66e8f877ca5cArgs = {
  _append?: InputMaybe<Tb_66e8f877ca5c_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_66e8f877ca5c_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_66e8f877ca5c_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_66e8f877ca5c_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_66e8f877ca5c_Prepend_Input>;
  _set?: InputMaybe<Tb_66e8f877ca5c_Set_Input>;
  where: Tb_66e8f877ca5c_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_66e8f877ca5c_By_PkArgs = {
  _append?: InputMaybe<Tb_66e8f877ca5c_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_66e8f877ca5c_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_66e8f877ca5c_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_66e8f877ca5c_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_66e8f877ca5c_Prepend_Input>;
  _set?: InputMaybe<Tb_66e8f877ca5c_Set_Input>;
  pk_columns: Tb_66e8f877ca5c_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_66e8f877ca5c_ManyArgs = {
  updates: Array<Tb_66e8f877ca5c_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_88fb_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_88fb_Techstars_Companies_Set_Input>;
  where: Tb_88fb_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_88fb_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_88fb_Techstars_Companies_Set_Input>;
  pk_columns: Tb_88fb_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_88fb_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_88fb_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_96fa_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_96fa_Techstars_Companies_Set_Input>;
  where: Tb_96fa_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_96fa_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_96fa_Techstars_Companies_Set_Input>;
  pk_columns: Tb_96fa_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_96fa_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_96fa_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_140d8afc9ce4Args = {
  _append?: InputMaybe<Tb_140d8afc9ce4_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_140d8afc9ce4_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_140d8afc9ce4_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_140d8afc9ce4_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_140d8afc9ce4_Prepend_Input>;
  _set?: InputMaybe<Tb_140d8afc9ce4_Set_Input>;
  where: Tb_140d8afc9ce4_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_140d8afc9ce4_By_PkArgs = {
  _append?: InputMaybe<Tb_140d8afc9ce4_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_140d8afc9ce4_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_140d8afc9ce4_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_140d8afc9ce4_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_140d8afc9ce4_Prepend_Input>;
  _set?: InputMaybe<Tb_140d8afc9ce4_Set_Input>;
  pk_columns: Tb_140d8afc9ce4_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_140d8afc9ce4_ManyArgs = {
  updates: Array<Tb_140d8afc9ce4_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8536_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_8536_Techstars_Companies_Set_Input>;
  where: Tb_8536_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8536_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_8536_Techstars_Companies_Set_Input>;
  pk_columns: Tb_8536_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_8536_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_8536_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9066_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_9066_Techstars_Companies_Set_Input>;
  where: Tb_9066_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9066_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_9066_Techstars_Companies_Set_Input>;
  pk_columns: Tb_9066_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9066_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_9066_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9459_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_9459_Techstars_Companies_Set_Input>;
  where: Tb_9459_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9459_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_9459_Techstars_Companies_Set_Input>;
  pk_columns: Tb_9459_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9459_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_9459_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9701_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_9701_Techstars_Companies_Set_Input>;
  where: Tb_9701_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9701_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_9701_Techstars_Companies_Set_Input>;
  pk_columns: Tb_9701_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_9701_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_9701_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_46723fcb5cf3Args = {
  _append?: InputMaybe<Tb_46723fcb5cf3_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_46723fcb5cf3_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_46723fcb5cf3_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_46723fcb5cf3_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_46723fcb5cf3_Prepend_Input>;
  _set?: InputMaybe<Tb_46723fcb5cf3_Set_Input>;
  where: Tb_46723fcb5cf3_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_46723fcb5cf3_By_PkArgs = {
  _append?: InputMaybe<Tb_46723fcb5cf3_Append_Input>;
  _delete_at_path?: InputMaybe<Tb_46723fcb5cf3_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Tb_46723fcb5cf3_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Tb_46723fcb5cf3_Delete_Key_Input>;
  _prepend?: InputMaybe<Tb_46723fcb5cf3_Prepend_Input>;
  _set?: InputMaybe<Tb_46723fcb5cf3_Set_Input>;
  pk_columns: Tb_46723fcb5cf3_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_46723fcb5cf3_ManyArgs = {
  updates: Array<Tb_46723fcb5cf3_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A5c1_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_A5c1_Techstars_Companies_Set_Input>;
  where: Tb_A5c1_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A5c1_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_A5c1_Techstars_Companies_Set_Input>;
  pk_columns: Tb_A5c1_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A5c1_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_A5c1_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A7dc_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_A7dc_Techstars_Companies_Set_Input>;
  where: Tb_A7dc_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A7dc_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_A7dc_Techstars_Companies_Set_Input>;
  pk_columns: Tb_A7dc_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A7dc_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_A7dc_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A332_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_A332_Techstars_Companies_Set_Input>;
  where: Tb_A332_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A332_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_A332_Techstars_Companies_Set_Input>;
  pk_columns: Tb_A332_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_A332_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_A332_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ac31_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_Ac31_Techstars_Companies_Set_Input>;
  where: Tb_Ac31_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ac31_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_Ac31_Techstars_Companies_Set_Input>;
  pk_columns: Tb_Ac31_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ac31_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_Ac31_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ae8e_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_Ae8e_Techstars_Companies_Set_Input>;
  where: Tb_Ae8e_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ae8e_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_Ae8e_Techstars_Companies_Set_Input>;
  pk_columns: Tb_Ae8e_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ae8e_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_Ae8e_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Af27_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_Af27_Techstars_Companies_Set_Input>;
  where: Tb_Af27_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Af27_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_Af27_Techstars_Companies_Set_Input>;
  pk_columns: Tb_Af27_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Af27_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_Af27_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B02e_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B02e_Techstars_Companies_Set_Input>;
  where: Tb_B02e_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B02e_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B02e_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B02e_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B02e_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B02e_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B3a8_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B3a8_Techstars_Companies_Set_Input>;
  where: Tb_B3a8_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B3a8_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B3a8_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B3a8_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B3a8_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B3a8_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B4fc_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B4fc_Techstars_Companies_Set_Input>;
  where: Tb_B4fc_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B4fc_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B4fc_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B4fc_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B4fc_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B4fc_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B7e7_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B7e7_Techstars_Companies_Set_Input>;
  where: Tb_B7e7_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B7e7_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B7e7_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B7e7_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B7e7_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B7e7_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B9c9_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B9c9_Techstars_Companies_Set_Input>;
  where: Tb_B9c9_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B9c9_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B9c9_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B9c9_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B9c9_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B9c9_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B14c_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B14c_Techstars_Companies_Set_Input>;
  where: Tb_B14c_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B14c_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B14c_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B14c_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B14c_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B14c_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B80b_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B80b_Techstars_Companies_Set_Input>;
  where: Tb_B80b_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B80b_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B80b_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B80b_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B80b_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B80b_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B225_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B225_Techstars_Companies_Set_Input>;
  where: Tb_B225_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B225_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B225_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B225_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B225_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B225_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B739_Techstars_CompaniesArgs = {
  _set?: InputMaybe<Tb_B739_Techstars_Companies_Set_Input>;
  where: Tb_B739_Techstars_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B739_Techstars_Companies_By_PkArgs = {
  _set?: InputMaybe<Tb_B739_Techstars_Companies_Set_Input>;
  pk_columns: Tb_B739_Techstars_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_B739_Techstars_Companies_ManyArgs = {
  updates: Array<Tb_B739_Techstars_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Bd249159795eArgs = {
  _inc?: InputMaybe<Tb_Bd249159795e_Inc_Input>;
  _set?: InputMaybe<Tb_Bd249159795e_Set_Input>;
  where: Tb_Bd249159795e_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Bd249159795e_By_PkArgs = {
  _inc?: InputMaybe<Tb_Bd249159795e_Inc_Input>;
  _set?: InputMaybe<Tb_Bd249159795e_Set_Input>;
  pk_columns: Tb_Bd249159795e_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Bd249159795e_ManyArgs = {
  updates: Array<Tb_Bd249159795e_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_C57cdd28d7c0Args = {
  _inc?: InputMaybe<Tb_C57cdd28d7c0_Inc_Input>;
  _set?: InputMaybe<Tb_C57cdd28d7c0_Set_Input>;
  where: Tb_C57cdd28d7c0_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_C57cdd28d7c0_By_PkArgs = {
  _inc?: InputMaybe<Tb_C57cdd28d7c0_Inc_Input>;
  _set?: InputMaybe<Tb_C57cdd28d7c0_Set_Input>;
  pk_columns: Tb_C57cdd28d7c0_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_C57cdd28d7c0_ManyArgs = {
  updates: Array<Tb_C57cdd28d7c0_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_D0e828550903Args = {
  _set?: InputMaybe<Tb_D0e828550903_Set_Input>;
  where: Tb_D0e828550903_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_D0e828550903_By_PkArgs = {
  _set?: InputMaybe<Tb_D0e828550903_Set_Input>;
  pk_columns: Tb_D0e828550903_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_D0e828550903_ManyArgs = {
  updates: Array<Tb_D0e828550903_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ff89301ef0f8Args = {
  _set?: InputMaybe<Tb_Ff89301ef0f8_Set_Input>;
  where: Tb_Ff89301ef0f8_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ff89301ef0f8_By_PkArgs = {
  _set?: InputMaybe<Tb_Ff89301ef0f8_Set_Input>;
  pk_columns: Tb_Ff89301ef0f8_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_Ff89301ef0f8_ManyArgs = {
  updates: Array<Tb_Ff89301ef0f8_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkspaceArgs = {
  _append?: InputMaybe<Workspace_Append_Input>;
  _delete_at_path?: InputMaybe<Workspace_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workspace_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workspace_Delete_Key_Input>;
  _inc?: InputMaybe<Workspace_Inc_Input>;
  _prepend?: InputMaybe<Workspace_Prepend_Input>;
  _set?: InputMaybe<Workspace_Set_Input>;
  where: Workspace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workspace_By_PkArgs = {
  _append?: InputMaybe<Workspace_Append_Input>;
  _delete_at_path?: InputMaybe<Workspace_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workspace_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workspace_Delete_Key_Input>;
  _inc?: InputMaybe<Workspace_Inc_Input>;
  _prepend?: InputMaybe<Workspace_Prepend_Input>;
  _set?: InputMaybe<Workspace_Set_Input>;
  pk_columns: Workspace_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workspace_ManyArgs = {
  updates: Array<Workspace_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workspace_MembershipArgs = {
  _set?: InputMaybe<Workspace_Membership_Set_Input>;
  where: Workspace_Membership_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workspace_Membership_By_PkArgs = {
  _set?: InputMaybe<Workspace_Membership_Set_Input>;
  pk_columns: Workspace_Membership_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workspace_Membership_ManyArgs = {
  updates: Array<Workspace_Membership_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "pages" */
export type Pages = {
  __typename?: 'pages';
  cover_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  featured: Scalars['Boolean'];
  id: Scalars['uuid'];
  notion_url?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['jsonb']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamp'];
};


/** columns and relationships of "pages" */
export type PagesPageArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "pages" */
export type Pages_Aggregate = {
  __typename?: 'pages_aggregate';
  aggregate?: Maybe<Pages_Aggregate_Fields>;
  nodes: Array<Pages>;
};

/** aggregate fields of "pages" */
export type Pages_Aggregate_Fields = {
  __typename?: 'pages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Pages_Max_Fields>;
  min?: Maybe<Pages_Min_Fields>;
};


/** aggregate fields of "pages" */
export type Pages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Pages_Append_Input = {
  page?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "pages". All fields are combined with a logical 'AND'. */
export type Pages_Bool_Exp = {
  _and?: InputMaybe<Array<Pages_Bool_Exp>>;
  _not?: InputMaybe<Pages_Bool_Exp>;
  _or?: InputMaybe<Array<Pages_Bool_Exp>>;
  cover_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  featured?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notion_url?: InputMaybe<String_Comparison_Exp>;
  page?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "pages" */
export type Pages_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'pages_id_uindex'
  /** unique or primary key constraint on columns "id" */
  | 'pages_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Pages_Delete_At_Path_Input = {
  page?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Pages_Delete_Elem_Input = {
  page?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Pages_Delete_Key_Input = {
  page?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "pages" */
export type Pages_Insert_Input = {
  cover_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  notion_url?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Pages_Max_Fields = {
  __typename?: 'pages_max_fields';
  cover_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  notion_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Pages_Min_Fields = {
  __typename?: 'pages_min_fields';
  cover_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  notion_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "pages" */
export type Pages_Mutation_Response = {
  __typename?: 'pages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pages>;
};

/** on_conflict condition type for table "pages" */
export type Pages_On_Conflict = {
  constraint: Pages_Constraint;
  update_columns?: Array<Pages_Update_Column>;
  where?: InputMaybe<Pages_Bool_Exp>;
};

/** Ordering options when selecting data from "pages". */
export type Pages_Order_By = {
  cover_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  featured?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notion_url?: InputMaybe<Order_By>;
  page?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pages */
export type Pages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Pages_Prepend_Input = {
  page?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "pages" */
export type Pages_Select_Column =
  /** column name */
  | 'cover_url'
  /** column name */
  | 'created_at'
  /** column name */
  | 'featured'
  /** column name */
  | 'id'
  /** column name */
  | 'notion_url'
  /** column name */
  | 'page'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "pages" */
export type Pages_Set_Input = {
  cover_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  notion_url?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "pages" */
export type Pages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pages_Stream_Cursor_Value_Input = {
  cover_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  notion_url?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "pages" */
export type Pages_Update_Column =
  /** column name */
  | 'cover_url'
  /** column name */
  | 'created_at'
  /** column name */
  | 'featured'
  /** column name */
  | 'id'
  /** column name */
  | 'notion_url'
  /** column name */
  | 'page'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

export type Pages_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Pages_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Pages_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Pages_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Pages_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Pages_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pages_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "app_state" */
  app_state: Array<App_State>;
  /** fetch aggregated fields from the table: "app_state" */
  app_state_aggregate: App_State_Aggregate;
  /** fetch data from the table: "blueprint" */
  blueprint: Array<Blueprint>;
  /** fetch aggregated fields from the table: "blueprint" */
  blueprint_aggregate: Blueprint_Aggregate;
  /** fetch data from the table: "blueprint" using primary key columns */
  blueprint_by_pk?: Maybe<Blueprint>;
  /** fetch data from the table: "dataframe" */
  dataframe: Array<Dataframe>;
  /** fetch aggregated fields from the table: "dataframe" */
  dataframe_aggregate: Dataframe_Aggregate;
  /** fetch data from the table: "dataframe" using primary key columns */
  dataframe_by_pk?: Maybe<Dataframe>;
  /** fetch data from the table: "history" */
  history: Array<History>;
  /** fetch aggregated fields from the table: "history" */
  history_aggregate: History_Aggregate;
  /** fetch data from the table: "history" using primary key columns */
  history_by_pk?: Maybe<History>;
  /** fetch data from the table: "invite" */
  invite: Array<Invite>;
  /** fetch aggregated fields from the table: "invite" */
  invite_aggregate: Invite_Aggregate;
  /** fetch data from the table: "invite" using primary key columns */
  invite_by_pk?: Maybe<Invite>;
  /** fetch data from the table: "login_activity" */
  login_activity: Array<Login_Activity>;
  /** fetch aggregated fields from the table: "login_activity" */
  login_activity_aggregate: Login_Activity_Aggregate;
  /** fetch data from the table: "login_activity" using primary key columns */
  login_activity_by_pk?: Maybe<Login_Activity>;
  /** fetch data from the table: "pages" */
  pages: Array<Pages>;
  /** fetch aggregated fields from the table: "pages" */
  pages_aggregate: Pages_Aggregate;
  /** fetch data from the table: "pages" using primary key columns */
  pages_by_pk?: Maybe<Pages>;
  /** fetch data from the table: "tb_0d5fd0848814" */
  tb_0d5fd0848814: Array<Tb_0d5fd0848814>;
  /** fetch aggregated fields from the table: "tb_0d5fd0848814" */
  tb_0d5fd0848814_aggregate: Tb_0d5fd0848814_Aggregate;
  /** fetch data from the table: "tb_0d5fd0848814" using primary key columns */
  tb_0d5fd0848814_by_pk?: Maybe<Tb_0d5fd0848814>;
  /** fetch data from the table: "tb_4d10c208adc8" */
  tb_4d10c208adc8: Array<Tb_4d10c208adc8>;
  /** fetch aggregated fields from the table: "tb_4d10c208adc8" */
  tb_4d10c208adc8_aggregate: Tb_4d10c208adc8_Aggregate;
  /** fetch data from the table: "tb_4d10c208adc8" using primary key columns */
  tb_4d10c208adc8_by_pk?: Maybe<Tb_4d10c208adc8>;
  /** fetch data from the table: "tb_8a3e5ae9851e" */
  tb_8a3e5ae9851e: Array<Tb_8a3e5ae9851e>;
  /** fetch aggregated fields from the table: "tb_8a3e5ae9851e" */
  tb_8a3e5ae9851e_aggregate: Tb_8a3e5ae9851e_Aggregate;
  /** fetch data from the table: "tb_8a3e5ae9851e" using primary key columns */
  tb_8a3e5ae9851e_by_pk?: Maybe<Tb_8a3e5ae9851e>;
  /** fetch data from the table: "tb_8c0d_techstars_companies" */
  tb_8c0d_techstars_companies: Array<Tb_8c0d_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_8c0d_techstars_companies" */
  tb_8c0d_techstars_companies_aggregate: Tb_8c0d_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_8c0d_techstars_companies" using primary key columns */
  tb_8c0d_techstars_companies_by_pk?: Maybe<Tb_8c0d_Techstars_Companies>;
  /** fetch data from the table: "tb_8f3a_techstars_companies" */
  tb_8f3a_techstars_companies: Array<Tb_8f3a_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_8f3a_techstars_companies" */
  tb_8f3a_techstars_companies_aggregate: Tb_8f3a_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_8f3a_techstars_companies" using primary key columns */
  tb_8f3a_techstars_companies_by_pk?: Maybe<Tb_8f3a_Techstars_Companies>;
  /** fetch data from the table: "tb_9ae55ff65521" */
  tb_9ae55ff65521: Array<Tb_9ae55ff65521>;
  /** fetch aggregated fields from the table: "tb_9ae55ff65521" */
  tb_9ae55ff65521_aggregate: Tb_9ae55ff65521_Aggregate;
  /** fetch data from the table: "tb_9ae55ff65521" using primary key columns */
  tb_9ae55ff65521_by_pk?: Maybe<Tb_9ae55ff65521>;
  /** fetch data from the table: "tb_9b4e_techstars_companies" */
  tb_9b4e_techstars_companies: Array<Tb_9b4e_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9b4e_techstars_companies" */
  tb_9b4e_techstars_companies_aggregate: Tb_9b4e_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9b4e_techstars_companies" using primary key columns */
  tb_9b4e_techstars_companies_by_pk?: Maybe<Tb_9b4e_Techstars_Companies>;
  /** fetch data from the table: "tb_9bed8f8cd4fa" */
  tb_9bed8f8cd4fa: Array<Tb_9bed8f8cd4fa>;
  /** fetch aggregated fields from the table: "tb_9bed8f8cd4fa" */
  tb_9bed8f8cd4fa_aggregate: Tb_9bed8f8cd4fa_Aggregate;
  /** fetch data from the table: "tb_9bed8f8cd4fa" using primary key columns */
  tb_9bed8f8cd4fa_by_pk?: Maybe<Tb_9bed8f8cd4fa>;
  /** fetch data from the table: "tb_9cab_techstars_companies" */
  tb_9cab_techstars_companies: Array<Tb_9cab_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9cab_techstars_companies" */
  tb_9cab_techstars_companies_aggregate: Tb_9cab_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9cab_techstars_companies" using primary key columns */
  tb_9cab_techstars_companies_by_pk?: Maybe<Tb_9cab_Techstars_Companies>;
  /** fetch data from the table: "tb_9d66_techstars_companies" */
  tb_9d66_techstars_companies: Array<Tb_9d66_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9d66_techstars_companies" */
  tb_9d66_techstars_companies_aggregate: Tb_9d66_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9d66_techstars_companies" using primary key columns */
  tb_9d66_techstars_companies_by_pk?: Maybe<Tb_9d66_Techstars_Companies>;
  /** fetch data from the table: "tb_14a707ad0fcc" */
  tb_14a707ad0fcc: Array<Tb_14a707ad0fcc>;
  /** fetch aggregated fields from the table: "tb_14a707ad0fcc" */
  tb_14a707ad0fcc_aggregate: Tb_14a707ad0fcc_Aggregate;
  /** fetch data from the table: "tb_14a707ad0fcc" using primary key columns */
  tb_14a707ad0fcc_by_pk?: Maybe<Tb_14a707ad0fcc>;
  /** fetch data from the table: "tb_66e8f877ca5c" */
  tb_66e8f877ca5c: Array<Tb_66e8f877ca5c>;
  /** fetch aggregated fields from the table: "tb_66e8f877ca5c" */
  tb_66e8f877ca5c_aggregate: Tb_66e8f877ca5c_Aggregate;
  /** fetch data from the table: "tb_66e8f877ca5c" using primary key columns */
  tb_66e8f877ca5c_by_pk?: Maybe<Tb_66e8f877ca5c>;
  /** fetch data from the table: "tb_88fb_techstars_companies" */
  tb_88fb_techstars_companies: Array<Tb_88fb_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_88fb_techstars_companies" */
  tb_88fb_techstars_companies_aggregate: Tb_88fb_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_88fb_techstars_companies" using primary key columns */
  tb_88fb_techstars_companies_by_pk?: Maybe<Tb_88fb_Techstars_Companies>;
  /** fetch data from the table: "tb_96fa_techstars_companies" */
  tb_96fa_techstars_companies: Array<Tb_96fa_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_96fa_techstars_companies" */
  tb_96fa_techstars_companies_aggregate: Tb_96fa_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_96fa_techstars_companies" using primary key columns */
  tb_96fa_techstars_companies_by_pk?: Maybe<Tb_96fa_Techstars_Companies>;
  /** fetch data from the table: "tb_140d8afc9ce4" */
  tb_140d8afc9ce4: Array<Tb_140d8afc9ce4>;
  /** fetch aggregated fields from the table: "tb_140d8afc9ce4" */
  tb_140d8afc9ce4_aggregate: Tb_140d8afc9ce4_Aggregate;
  /** fetch data from the table: "tb_140d8afc9ce4" using primary key columns */
  tb_140d8afc9ce4_by_pk?: Maybe<Tb_140d8afc9ce4>;
  /** fetch data from the table: "tb_8536_techstars_companies" */
  tb_8536_techstars_companies: Array<Tb_8536_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_8536_techstars_companies" */
  tb_8536_techstars_companies_aggregate: Tb_8536_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_8536_techstars_companies" using primary key columns */
  tb_8536_techstars_companies_by_pk?: Maybe<Tb_8536_Techstars_Companies>;
  /** fetch data from the table: "tb_9066_techstars_companies" */
  tb_9066_techstars_companies: Array<Tb_9066_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9066_techstars_companies" */
  tb_9066_techstars_companies_aggregate: Tb_9066_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9066_techstars_companies" using primary key columns */
  tb_9066_techstars_companies_by_pk?: Maybe<Tb_9066_Techstars_Companies>;
  /** fetch data from the table: "tb_9459_techstars_companies" */
  tb_9459_techstars_companies: Array<Tb_9459_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9459_techstars_companies" */
  tb_9459_techstars_companies_aggregate: Tb_9459_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9459_techstars_companies" using primary key columns */
  tb_9459_techstars_companies_by_pk?: Maybe<Tb_9459_Techstars_Companies>;
  /** fetch data from the table: "tb_9701_techstars_companies" */
  tb_9701_techstars_companies: Array<Tb_9701_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9701_techstars_companies" */
  tb_9701_techstars_companies_aggregate: Tb_9701_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9701_techstars_companies" using primary key columns */
  tb_9701_techstars_companies_by_pk?: Maybe<Tb_9701_Techstars_Companies>;
  /** fetch data from the table: "tb_46723fcb5cf3" */
  tb_46723fcb5cf3: Array<Tb_46723fcb5cf3>;
  /** fetch aggregated fields from the table: "tb_46723fcb5cf3" */
  tb_46723fcb5cf3_aggregate: Tb_46723fcb5cf3_Aggregate;
  /** fetch data from the table: "tb_46723fcb5cf3" using primary key columns */
  tb_46723fcb5cf3_by_pk?: Maybe<Tb_46723fcb5cf3>;
  /** fetch data from the table: "tb_a5c1_techstars_companies" */
  tb_a5c1_techstars_companies: Array<Tb_A5c1_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_a5c1_techstars_companies" */
  tb_a5c1_techstars_companies_aggregate: Tb_A5c1_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_a5c1_techstars_companies" using primary key columns */
  tb_a5c1_techstars_companies_by_pk?: Maybe<Tb_A5c1_Techstars_Companies>;
  /** fetch data from the table: "tb_a7dc_techstars_companies" */
  tb_a7dc_techstars_companies: Array<Tb_A7dc_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_a7dc_techstars_companies" */
  tb_a7dc_techstars_companies_aggregate: Tb_A7dc_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_a7dc_techstars_companies" using primary key columns */
  tb_a7dc_techstars_companies_by_pk?: Maybe<Tb_A7dc_Techstars_Companies>;
  /** fetch data from the table: "tb_a332_techstars_companies" */
  tb_a332_techstars_companies: Array<Tb_A332_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_a332_techstars_companies" */
  tb_a332_techstars_companies_aggregate: Tb_A332_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_a332_techstars_companies" using primary key columns */
  tb_a332_techstars_companies_by_pk?: Maybe<Tb_A332_Techstars_Companies>;
  /** fetch data from the table: "tb_ac31_techstars_companies" */
  tb_ac31_techstars_companies: Array<Tb_Ac31_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_ac31_techstars_companies" */
  tb_ac31_techstars_companies_aggregate: Tb_Ac31_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_ac31_techstars_companies" using primary key columns */
  tb_ac31_techstars_companies_by_pk?: Maybe<Tb_Ac31_Techstars_Companies>;
  /** fetch data from the table: "tb_ae8e_techstars_companies" */
  tb_ae8e_techstars_companies: Array<Tb_Ae8e_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_ae8e_techstars_companies" */
  tb_ae8e_techstars_companies_aggregate: Tb_Ae8e_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_ae8e_techstars_companies" using primary key columns */
  tb_ae8e_techstars_companies_by_pk?: Maybe<Tb_Ae8e_Techstars_Companies>;
  /** fetch data from the table: "tb_af27_techstars_companies" */
  tb_af27_techstars_companies: Array<Tb_Af27_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_af27_techstars_companies" */
  tb_af27_techstars_companies_aggregate: Tb_Af27_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_af27_techstars_companies" using primary key columns */
  tb_af27_techstars_companies_by_pk?: Maybe<Tb_Af27_Techstars_Companies>;
  /** fetch data from the table: "tb_b02e_techstars_companies" */
  tb_b02e_techstars_companies: Array<Tb_B02e_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b02e_techstars_companies" */
  tb_b02e_techstars_companies_aggregate: Tb_B02e_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b02e_techstars_companies" using primary key columns */
  tb_b02e_techstars_companies_by_pk?: Maybe<Tb_B02e_Techstars_Companies>;
  /** fetch data from the table: "tb_b3a8_techstars_companies" */
  tb_b3a8_techstars_companies: Array<Tb_B3a8_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b3a8_techstars_companies" */
  tb_b3a8_techstars_companies_aggregate: Tb_B3a8_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b3a8_techstars_companies" using primary key columns */
  tb_b3a8_techstars_companies_by_pk?: Maybe<Tb_B3a8_Techstars_Companies>;
  /** fetch data from the table: "tb_b4fc_techstars_companies" */
  tb_b4fc_techstars_companies: Array<Tb_B4fc_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b4fc_techstars_companies" */
  tb_b4fc_techstars_companies_aggregate: Tb_B4fc_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b4fc_techstars_companies" using primary key columns */
  tb_b4fc_techstars_companies_by_pk?: Maybe<Tb_B4fc_Techstars_Companies>;
  /** fetch data from the table: "tb_b7e7_techstars_companies" */
  tb_b7e7_techstars_companies: Array<Tb_B7e7_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b7e7_techstars_companies" */
  tb_b7e7_techstars_companies_aggregate: Tb_B7e7_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b7e7_techstars_companies" using primary key columns */
  tb_b7e7_techstars_companies_by_pk?: Maybe<Tb_B7e7_Techstars_Companies>;
  /** fetch data from the table: "tb_b9c9_techstars_companies" */
  tb_b9c9_techstars_companies: Array<Tb_B9c9_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b9c9_techstars_companies" */
  tb_b9c9_techstars_companies_aggregate: Tb_B9c9_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b9c9_techstars_companies" using primary key columns */
  tb_b9c9_techstars_companies_by_pk?: Maybe<Tb_B9c9_Techstars_Companies>;
  /** fetch data from the table: "tb_b14c_techstars_companies" */
  tb_b14c_techstars_companies: Array<Tb_B14c_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b14c_techstars_companies" */
  tb_b14c_techstars_companies_aggregate: Tb_B14c_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b14c_techstars_companies" using primary key columns */
  tb_b14c_techstars_companies_by_pk?: Maybe<Tb_B14c_Techstars_Companies>;
  /** fetch data from the table: "tb_b80b_techstars_companies" */
  tb_b80b_techstars_companies: Array<Tb_B80b_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b80b_techstars_companies" */
  tb_b80b_techstars_companies_aggregate: Tb_B80b_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b80b_techstars_companies" using primary key columns */
  tb_b80b_techstars_companies_by_pk?: Maybe<Tb_B80b_Techstars_Companies>;
  /** fetch data from the table: "tb_b225_techstars_companies" */
  tb_b225_techstars_companies: Array<Tb_B225_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b225_techstars_companies" */
  tb_b225_techstars_companies_aggregate: Tb_B225_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b225_techstars_companies" using primary key columns */
  tb_b225_techstars_companies_by_pk?: Maybe<Tb_B225_Techstars_Companies>;
  /** fetch data from the table: "tb_b739_techstars_companies" */
  tb_b739_techstars_companies: Array<Tb_B739_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b739_techstars_companies" */
  tb_b739_techstars_companies_aggregate: Tb_B739_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b739_techstars_companies" using primary key columns */
  tb_b739_techstars_companies_by_pk?: Maybe<Tb_B739_Techstars_Companies>;
  /** fetch data from the table: "tb_bd249159795e" */
  tb_bd249159795e: Array<Tb_Bd249159795e>;
  /** fetch aggregated fields from the table: "tb_bd249159795e" */
  tb_bd249159795e_aggregate: Tb_Bd249159795e_Aggregate;
  /** fetch data from the table: "tb_bd249159795e" using primary key columns */
  tb_bd249159795e_by_pk?: Maybe<Tb_Bd249159795e>;
  /** fetch data from the table: "tb_c57cdd28d7c0" */
  tb_c57cdd28d7c0: Array<Tb_C57cdd28d7c0>;
  /** fetch aggregated fields from the table: "tb_c57cdd28d7c0" */
  tb_c57cdd28d7c0_aggregate: Tb_C57cdd28d7c0_Aggregate;
  /** fetch data from the table: "tb_c57cdd28d7c0" using primary key columns */
  tb_c57cdd28d7c0_by_pk?: Maybe<Tb_C57cdd28d7c0>;
  /** fetch data from the table: "tb_d0e828550903" */
  tb_d0e828550903: Array<Tb_D0e828550903>;
  /** fetch aggregated fields from the table: "tb_d0e828550903" */
  tb_d0e828550903_aggregate: Tb_D0e828550903_Aggregate;
  /** fetch data from the table: "tb_d0e828550903" using primary key columns */
  tb_d0e828550903_by_pk?: Maybe<Tb_D0e828550903>;
  /** fetch data from the table: "tb_ff89301ef0f8" */
  tb_ff89301ef0f8: Array<Tb_Ff89301ef0f8>;
  /** fetch aggregated fields from the table: "tb_ff89301ef0f8" */
  tb_ff89301ef0f8_aggregate: Tb_Ff89301ef0f8_Aggregate;
  /** fetch data from the table: "tb_ff89301ef0f8" using primary key columns */
  tb_ff89301ef0f8_by_pk?: Maybe<Tb_Ff89301ef0f8>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "workspace" */
  workspace: Array<Workspace>;
  /** fetch aggregated fields from the table: "workspace" */
  workspace_aggregate: Workspace_Aggregate;
  /** fetch data from the table: "workspace" using primary key columns */
  workspace_by_pk?: Maybe<Workspace>;
  /** fetch data from the table: "workspace_membership" */
  workspace_membership: Array<Workspace_Membership>;
  /** fetch aggregated fields from the table: "workspace_membership" */
  workspace_membership_aggregate: Workspace_Membership_Aggregate;
  /** fetch data from the table: "workspace_membership" using primary key columns */
  workspace_membership_by_pk?: Maybe<Workspace_Membership>;
};


export type Query_RootApp_StateArgs = {
  distinct_on?: InputMaybe<Array<App_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_State_Order_By>>;
  where?: InputMaybe<App_State_Bool_Exp>;
};


export type Query_RootApp_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_State_Order_By>>;
  where?: InputMaybe<App_State_Bool_Exp>;
};


export type Query_RootBlueprintArgs = {
  distinct_on?: InputMaybe<Array<Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blueprint_Order_By>>;
  where?: InputMaybe<Blueprint_Bool_Exp>;
};


export type Query_RootBlueprint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blueprint_Order_By>>;
  where?: InputMaybe<Blueprint_Bool_Exp>;
};


export type Query_RootBlueprint_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootDataframeArgs = {
  distinct_on?: InputMaybe<Array<Dataframe_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dataframe_Order_By>>;
  where?: InputMaybe<Dataframe_Bool_Exp>;
};


export type Query_RootDataframe_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dataframe_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dataframe_Order_By>>;
  where?: InputMaybe<Dataframe_Bool_Exp>;
};


export type Query_RootDataframe_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootHistoryArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


export type Query_RootHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


export type Query_RootHistory_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootInviteArgs = {
  distinct_on?: InputMaybe<Array<Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Order_By>>;
  where?: InputMaybe<Invite_Bool_Exp>;
};


export type Query_RootInvite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Order_By>>;
  where?: InputMaybe<Invite_Bool_Exp>;
};


export type Query_RootInvite_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootLogin_ActivityArgs = {
  distinct_on?: InputMaybe<Array<Login_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Login_Activity_Order_By>>;
  where?: InputMaybe<Login_Activity_Bool_Exp>;
};


export type Query_RootLogin_Activity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Login_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Login_Activity_Order_By>>;
  where?: InputMaybe<Login_Activity_Bool_Exp>;
};


export type Query_RootLogin_Activity_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Query_RootPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Query_RootPages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTb_0d5fd0848814Args = {
  distinct_on?: InputMaybe<Array<Tb_0d5fd0848814_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_0d5fd0848814_Order_By>>;
  where?: InputMaybe<Tb_0d5fd0848814_Bool_Exp>;
};


export type Query_RootTb_0d5fd0848814_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_0d5fd0848814_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_0d5fd0848814_Order_By>>;
  where?: InputMaybe<Tb_0d5fd0848814_Bool_Exp>;
};


export type Query_RootTb_0d5fd0848814_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_4d10c208adc8Args = {
  distinct_on?: InputMaybe<Array<Tb_4d10c208adc8_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_4d10c208adc8_Order_By>>;
  where?: InputMaybe<Tb_4d10c208adc8_Bool_Exp>;
};


export type Query_RootTb_4d10c208adc8_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_4d10c208adc8_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_4d10c208adc8_Order_By>>;
  where?: InputMaybe<Tb_4d10c208adc8_Bool_Exp>;
};


export type Query_RootTb_4d10c208adc8_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_8a3e5ae9851eArgs = {
  distinct_on?: InputMaybe<Array<Tb_8a3e5ae9851e_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8a3e5ae9851e_Order_By>>;
  where?: InputMaybe<Tb_8a3e5ae9851e_Bool_Exp>;
};


export type Query_RootTb_8a3e5ae9851e_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_8a3e5ae9851e_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8a3e5ae9851e_Order_By>>;
  where?: InputMaybe<Tb_8a3e5ae9851e_Bool_Exp>;
};


export type Query_RootTb_8a3e5ae9851e_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_8c0d_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8c0d_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_8c0d_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8c0d_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_8c0d_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_8f3a_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8f3a_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_8f3a_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8f3a_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_8f3a_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_9ae55ff65521Args = {
  distinct_on?: InputMaybe<Array<Tb_9ae55ff65521_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9ae55ff65521_Order_By>>;
  where?: InputMaybe<Tb_9ae55ff65521_Bool_Exp>;
};


export type Query_RootTb_9ae55ff65521_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9ae55ff65521_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9ae55ff65521_Order_By>>;
  where?: InputMaybe<Tb_9ae55ff65521_Bool_Exp>;
};


export type Query_RootTb_9ae55ff65521_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_9b4e_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9b4e_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9b4e_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9b4e_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9b4e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_9bed8f8cd4faArgs = {
  distinct_on?: InputMaybe<Array<Tb_9bed8f8cd4fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9bed8f8cd4fa_Order_By>>;
  where?: InputMaybe<Tb_9bed8f8cd4fa_Bool_Exp>;
};


export type Query_RootTb_9bed8f8cd4fa_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9bed8f8cd4fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9bed8f8cd4fa_Order_By>>;
  where?: InputMaybe<Tb_9bed8f8cd4fa_Bool_Exp>;
};


export type Query_RootTb_9bed8f8cd4fa_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_9cab_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9cab_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9cab_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9cab_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9cab_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_9d66_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9d66_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9d66_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9d66_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9d66_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_14a707ad0fccArgs = {
  distinct_on?: InputMaybe<Array<Tb_14a707ad0fcc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_14a707ad0fcc_Order_By>>;
  where?: InputMaybe<Tb_14a707ad0fcc_Bool_Exp>;
};


export type Query_RootTb_14a707ad0fcc_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_14a707ad0fcc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_14a707ad0fcc_Order_By>>;
  where?: InputMaybe<Tb_14a707ad0fcc_Bool_Exp>;
};


export type Query_RootTb_14a707ad0fcc_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_66e8f877ca5cArgs = {
  distinct_on?: InputMaybe<Array<Tb_66e8f877ca5c_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_66e8f877ca5c_Order_By>>;
  where?: InputMaybe<Tb_66e8f877ca5c_Bool_Exp>;
};


export type Query_RootTb_66e8f877ca5c_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_66e8f877ca5c_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_66e8f877ca5c_Order_By>>;
  where?: InputMaybe<Tb_66e8f877ca5c_Bool_Exp>;
};


export type Query_RootTb_66e8f877ca5c_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_88fb_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_88fb_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_88fb_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_88fb_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_88fb_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_96fa_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_96fa_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_96fa_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_96fa_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_96fa_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_140d8afc9ce4Args = {
  distinct_on?: InputMaybe<Array<Tb_140d8afc9ce4_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_140d8afc9ce4_Order_By>>;
  where?: InputMaybe<Tb_140d8afc9ce4_Bool_Exp>;
};


export type Query_RootTb_140d8afc9ce4_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_140d8afc9ce4_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_140d8afc9ce4_Order_By>>;
  where?: InputMaybe<Tb_140d8afc9ce4_Bool_Exp>;
};


export type Query_RootTb_140d8afc9ce4_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_8536_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_8536_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8536_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8536_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_8536_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_8536_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8536_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8536_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_8536_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_9066_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9066_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9066_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9066_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9066_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9066_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9066_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9066_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9066_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_9459_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9459_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9459_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9459_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9459_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9459_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9459_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9459_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9459_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_9701_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9701_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9701_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9701_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9701_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9701_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9701_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9701_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_9701_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_46723fcb5cf3Args = {
  distinct_on?: InputMaybe<Array<Tb_46723fcb5cf3_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_46723fcb5cf3_Order_By>>;
  where?: InputMaybe<Tb_46723fcb5cf3_Bool_Exp>;
};


export type Query_RootTb_46723fcb5cf3_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_46723fcb5cf3_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_46723fcb5cf3_Order_By>>;
  where?: InputMaybe<Tb_46723fcb5cf3_Bool_Exp>;
};


export type Query_RootTb_46723fcb5cf3_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_A5c1_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A5c1_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_A5c1_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A5c1_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_A5c1_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_A7dc_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A7dc_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_A7dc_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A7dc_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_A7dc_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_A332_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_A332_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A332_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A332_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_A332_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_A332_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A332_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A332_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_A332_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_Ac31_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Ac31_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_Ac31_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Ac31_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_Ac31_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_Ae8e_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Ae8e_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_Ae8e_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Ae8e_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_Ae8e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_Af27_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Af27_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_Af27_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Af27_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_Af27_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B02e_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B02e_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B02e_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B02e_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B02e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B3a8_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B3a8_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B3a8_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B3a8_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B3a8_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B4fc_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B4fc_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B4fc_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B4fc_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B4fc_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B7e7_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B7e7_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B7e7_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B7e7_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B7e7_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B9c9_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B9c9_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B9c9_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B9c9_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B9c9_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B14c_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B14c_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B14c_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B14c_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B14c_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B80b_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B80b_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B80b_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B80b_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B80b_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B225_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B225_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B225_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B225_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B225_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B225_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B225_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B225_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B225_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_B739_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B739_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B739_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B739_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B739_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B739_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B739_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B739_Techstars_Companies_Bool_Exp>;
};


export type Query_RootTb_B739_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_Bd249159795eArgs = {
  distinct_on?: InputMaybe<Array<Tb_Bd249159795e_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Bd249159795e_Order_By>>;
  where?: InputMaybe<Tb_Bd249159795e_Bool_Exp>;
};


export type Query_RootTb_Bd249159795e_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Bd249159795e_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Bd249159795e_Order_By>>;
  where?: InputMaybe<Tb_Bd249159795e_Bool_Exp>;
};


export type Query_RootTb_Bd249159795e_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_C57cdd28d7c0Args = {
  distinct_on?: InputMaybe<Array<Tb_C57cdd28d7c0_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_C57cdd28d7c0_Order_By>>;
  where?: InputMaybe<Tb_C57cdd28d7c0_Bool_Exp>;
};


export type Query_RootTb_C57cdd28d7c0_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_C57cdd28d7c0_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_C57cdd28d7c0_Order_By>>;
  where?: InputMaybe<Tb_C57cdd28d7c0_Bool_Exp>;
};


export type Query_RootTb_C57cdd28d7c0_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_D0e828550903Args = {
  distinct_on?: InputMaybe<Array<Tb_D0e828550903_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_D0e828550903_Order_By>>;
  where?: InputMaybe<Tb_D0e828550903_Bool_Exp>;
};


export type Query_RootTb_D0e828550903_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_D0e828550903_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_D0e828550903_Order_By>>;
  where?: InputMaybe<Tb_D0e828550903_Bool_Exp>;
};


export type Query_RootTb_D0e828550903_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootTb_Ff89301ef0f8Args = {
  distinct_on?: InputMaybe<Array<Tb_Ff89301ef0f8_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ff89301ef0f8_Order_By>>;
  where?: InputMaybe<Tb_Ff89301ef0f8_Bool_Exp>;
};


export type Query_RootTb_Ff89301ef0f8_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ff89301ef0f8_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ff89301ef0f8_Order_By>>;
  where?: InputMaybe<Tb_Ff89301ef0f8_Bool_Exp>;
};


export type Query_RootTb_Ff89301ef0f8_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootWorkspaceArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Order_By>>;
  where?: InputMaybe<Workspace_Bool_Exp>;
};


export type Query_RootWorkspace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Order_By>>;
  where?: InputMaybe<Workspace_Bool_Exp>;
};


export type Query_RootWorkspace_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Query_RootWorkspace_MembershipArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Membership_Order_By>>;
  where?: InputMaybe<Workspace_Membership_Bool_Exp>;
};


export type Query_RootWorkspace_Membership_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Membership_Order_By>>;
  where?: InputMaybe<Workspace_Membership_Bool_Exp>;
};


export type Query_RootWorkspace_Membership_By_PkArgs = {
  _id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app_state" */
  app_state: Array<App_State>;
  /** fetch aggregated fields from the table: "app_state" */
  app_state_aggregate: App_State_Aggregate;
  /** fetch data from the table in a streaming manner: "app_state" */
  app_state_stream: Array<App_State>;
  /** fetch data from the table: "blueprint" */
  blueprint: Array<Blueprint>;
  /** fetch aggregated fields from the table: "blueprint" */
  blueprint_aggregate: Blueprint_Aggregate;
  /** fetch data from the table: "blueprint" using primary key columns */
  blueprint_by_pk?: Maybe<Blueprint>;
  /** fetch data from the table in a streaming manner: "blueprint" */
  blueprint_stream: Array<Blueprint>;
  /** fetch data from the table: "dataframe" */
  dataframe: Array<Dataframe>;
  /** fetch aggregated fields from the table: "dataframe" */
  dataframe_aggregate: Dataframe_Aggregate;
  /** fetch data from the table: "dataframe" using primary key columns */
  dataframe_by_pk?: Maybe<Dataframe>;
  /** fetch data from the table in a streaming manner: "dataframe" */
  dataframe_stream: Array<Dataframe>;
  /** fetch data from the table: "history" */
  history: Array<History>;
  /** fetch aggregated fields from the table: "history" */
  history_aggregate: History_Aggregate;
  /** fetch data from the table: "history" using primary key columns */
  history_by_pk?: Maybe<History>;
  /** fetch data from the table in a streaming manner: "history" */
  history_stream: Array<History>;
  /** fetch data from the table: "invite" */
  invite: Array<Invite>;
  /** fetch aggregated fields from the table: "invite" */
  invite_aggregate: Invite_Aggregate;
  /** fetch data from the table: "invite" using primary key columns */
  invite_by_pk?: Maybe<Invite>;
  /** fetch data from the table in a streaming manner: "invite" */
  invite_stream: Array<Invite>;
  /** fetch data from the table: "login_activity" */
  login_activity: Array<Login_Activity>;
  /** fetch aggregated fields from the table: "login_activity" */
  login_activity_aggregate: Login_Activity_Aggregate;
  /** fetch data from the table: "login_activity" using primary key columns */
  login_activity_by_pk?: Maybe<Login_Activity>;
  /** fetch data from the table in a streaming manner: "login_activity" */
  login_activity_stream: Array<Login_Activity>;
  /** fetch data from the table: "pages" */
  pages: Array<Pages>;
  /** fetch aggregated fields from the table: "pages" */
  pages_aggregate: Pages_Aggregate;
  /** fetch data from the table: "pages" using primary key columns */
  pages_by_pk?: Maybe<Pages>;
  /** fetch data from the table in a streaming manner: "pages" */
  pages_stream: Array<Pages>;
  /** fetch data from the table: "tb_0d5fd0848814" */
  tb_0d5fd0848814: Array<Tb_0d5fd0848814>;
  /** fetch aggregated fields from the table: "tb_0d5fd0848814" */
  tb_0d5fd0848814_aggregate: Tb_0d5fd0848814_Aggregate;
  /** fetch data from the table: "tb_0d5fd0848814" using primary key columns */
  tb_0d5fd0848814_by_pk?: Maybe<Tb_0d5fd0848814>;
  /** fetch data from the table in a streaming manner: "tb_0d5fd0848814" */
  tb_0d5fd0848814_stream: Array<Tb_0d5fd0848814>;
  /** fetch data from the table: "tb_4d10c208adc8" */
  tb_4d10c208adc8: Array<Tb_4d10c208adc8>;
  /** fetch aggregated fields from the table: "tb_4d10c208adc8" */
  tb_4d10c208adc8_aggregate: Tb_4d10c208adc8_Aggregate;
  /** fetch data from the table: "tb_4d10c208adc8" using primary key columns */
  tb_4d10c208adc8_by_pk?: Maybe<Tb_4d10c208adc8>;
  /** fetch data from the table in a streaming manner: "tb_4d10c208adc8" */
  tb_4d10c208adc8_stream: Array<Tb_4d10c208adc8>;
  /** fetch data from the table: "tb_8a3e5ae9851e" */
  tb_8a3e5ae9851e: Array<Tb_8a3e5ae9851e>;
  /** fetch aggregated fields from the table: "tb_8a3e5ae9851e" */
  tb_8a3e5ae9851e_aggregate: Tb_8a3e5ae9851e_Aggregate;
  /** fetch data from the table: "tb_8a3e5ae9851e" using primary key columns */
  tb_8a3e5ae9851e_by_pk?: Maybe<Tb_8a3e5ae9851e>;
  /** fetch data from the table in a streaming manner: "tb_8a3e5ae9851e" */
  tb_8a3e5ae9851e_stream: Array<Tb_8a3e5ae9851e>;
  /** fetch data from the table: "tb_8c0d_techstars_companies" */
  tb_8c0d_techstars_companies: Array<Tb_8c0d_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_8c0d_techstars_companies" */
  tb_8c0d_techstars_companies_aggregate: Tb_8c0d_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_8c0d_techstars_companies" using primary key columns */
  tb_8c0d_techstars_companies_by_pk?: Maybe<Tb_8c0d_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_8c0d_techstars_companies" */
  tb_8c0d_techstars_companies_stream: Array<Tb_8c0d_Techstars_Companies>;
  /** fetch data from the table: "tb_8f3a_techstars_companies" */
  tb_8f3a_techstars_companies: Array<Tb_8f3a_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_8f3a_techstars_companies" */
  tb_8f3a_techstars_companies_aggregate: Tb_8f3a_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_8f3a_techstars_companies" using primary key columns */
  tb_8f3a_techstars_companies_by_pk?: Maybe<Tb_8f3a_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_8f3a_techstars_companies" */
  tb_8f3a_techstars_companies_stream: Array<Tb_8f3a_Techstars_Companies>;
  /** fetch data from the table: "tb_9ae55ff65521" */
  tb_9ae55ff65521: Array<Tb_9ae55ff65521>;
  /** fetch aggregated fields from the table: "tb_9ae55ff65521" */
  tb_9ae55ff65521_aggregate: Tb_9ae55ff65521_Aggregate;
  /** fetch data from the table: "tb_9ae55ff65521" using primary key columns */
  tb_9ae55ff65521_by_pk?: Maybe<Tb_9ae55ff65521>;
  /** fetch data from the table in a streaming manner: "tb_9ae55ff65521" */
  tb_9ae55ff65521_stream: Array<Tb_9ae55ff65521>;
  /** fetch data from the table: "tb_9b4e_techstars_companies" */
  tb_9b4e_techstars_companies: Array<Tb_9b4e_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9b4e_techstars_companies" */
  tb_9b4e_techstars_companies_aggregate: Tb_9b4e_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9b4e_techstars_companies" using primary key columns */
  tb_9b4e_techstars_companies_by_pk?: Maybe<Tb_9b4e_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_9b4e_techstars_companies" */
  tb_9b4e_techstars_companies_stream: Array<Tb_9b4e_Techstars_Companies>;
  /** fetch data from the table: "tb_9bed8f8cd4fa" */
  tb_9bed8f8cd4fa: Array<Tb_9bed8f8cd4fa>;
  /** fetch aggregated fields from the table: "tb_9bed8f8cd4fa" */
  tb_9bed8f8cd4fa_aggregate: Tb_9bed8f8cd4fa_Aggregate;
  /** fetch data from the table: "tb_9bed8f8cd4fa" using primary key columns */
  tb_9bed8f8cd4fa_by_pk?: Maybe<Tb_9bed8f8cd4fa>;
  /** fetch data from the table in a streaming manner: "tb_9bed8f8cd4fa" */
  tb_9bed8f8cd4fa_stream: Array<Tb_9bed8f8cd4fa>;
  /** fetch data from the table: "tb_9cab_techstars_companies" */
  tb_9cab_techstars_companies: Array<Tb_9cab_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9cab_techstars_companies" */
  tb_9cab_techstars_companies_aggregate: Tb_9cab_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9cab_techstars_companies" using primary key columns */
  tb_9cab_techstars_companies_by_pk?: Maybe<Tb_9cab_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_9cab_techstars_companies" */
  tb_9cab_techstars_companies_stream: Array<Tb_9cab_Techstars_Companies>;
  /** fetch data from the table: "tb_9d66_techstars_companies" */
  tb_9d66_techstars_companies: Array<Tb_9d66_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9d66_techstars_companies" */
  tb_9d66_techstars_companies_aggregate: Tb_9d66_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9d66_techstars_companies" using primary key columns */
  tb_9d66_techstars_companies_by_pk?: Maybe<Tb_9d66_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_9d66_techstars_companies" */
  tb_9d66_techstars_companies_stream: Array<Tb_9d66_Techstars_Companies>;
  /** fetch data from the table: "tb_14a707ad0fcc" */
  tb_14a707ad0fcc: Array<Tb_14a707ad0fcc>;
  /** fetch aggregated fields from the table: "tb_14a707ad0fcc" */
  tb_14a707ad0fcc_aggregate: Tb_14a707ad0fcc_Aggregate;
  /** fetch data from the table: "tb_14a707ad0fcc" using primary key columns */
  tb_14a707ad0fcc_by_pk?: Maybe<Tb_14a707ad0fcc>;
  /** fetch data from the table in a streaming manner: "tb_14a707ad0fcc" */
  tb_14a707ad0fcc_stream: Array<Tb_14a707ad0fcc>;
  /** fetch data from the table: "tb_66e8f877ca5c" */
  tb_66e8f877ca5c: Array<Tb_66e8f877ca5c>;
  /** fetch aggregated fields from the table: "tb_66e8f877ca5c" */
  tb_66e8f877ca5c_aggregate: Tb_66e8f877ca5c_Aggregate;
  /** fetch data from the table: "tb_66e8f877ca5c" using primary key columns */
  tb_66e8f877ca5c_by_pk?: Maybe<Tb_66e8f877ca5c>;
  /** fetch data from the table in a streaming manner: "tb_66e8f877ca5c" */
  tb_66e8f877ca5c_stream: Array<Tb_66e8f877ca5c>;
  /** fetch data from the table: "tb_88fb_techstars_companies" */
  tb_88fb_techstars_companies: Array<Tb_88fb_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_88fb_techstars_companies" */
  tb_88fb_techstars_companies_aggregate: Tb_88fb_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_88fb_techstars_companies" using primary key columns */
  tb_88fb_techstars_companies_by_pk?: Maybe<Tb_88fb_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_88fb_techstars_companies" */
  tb_88fb_techstars_companies_stream: Array<Tb_88fb_Techstars_Companies>;
  /** fetch data from the table: "tb_96fa_techstars_companies" */
  tb_96fa_techstars_companies: Array<Tb_96fa_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_96fa_techstars_companies" */
  tb_96fa_techstars_companies_aggregate: Tb_96fa_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_96fa_techstars_companies" using primary key columns */
  tb_96fa_techstars_companies_by_pk?: Maybe<Tb_96fa_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_96fa_techstars_companies" */
  tb_96fa_techstars_companies_stream: Array<Tb_96fa_Techstars_Companies>;
  /** fetch data from the table: "tb_140d8afc9ce4" */
  tb_140d8afc9ce4: Array<Tb_140d8afc9ce4>;
  /** fetch aggregated fields from the table: "tb_140d8afc9ce4" */
  tb_140d8afc9ce4_aggregate: Tb_140d8afc9ce4_Aggregate;
  /** fetch data from the table: "tb_140d8afc9ce4" using primary key columns */
  tb_140d8afc9ce4_by_pk?: Maybe<Tb_140d8afc9ce4>;
  /** fetch data from the table in a streaming manner: "tb_140d8afc9ce4" */
  tb_140d8afc9ce4_stream: Array<Tb_140d8afc9ce4>;
  /** fetch data from the table: "tb_8536_techstars_companies" */
  tb_8536_techstars_companies: Array<Tb_8536_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_8536_techstars_companies" */
  tb_8536_techstars_companies_aggregate: Tb_8536_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_8536_techstars_companies" using primary key columns */
  tb_8536_techstars_companies_by_pk?: Maybe<Tb_8536_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_8536_techstars_companies" */
  tb_8536_techstars_companies_stream: Array<Tb_8536_Techstars_Companies>;
  /** fetch data from the table: "tb_9066_techstars_companies" */
  tb_9066_techstars_companies: Array<Tb_9066_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9066_techstars_companies" */
  tb_9066_techstars_companies_aggregate: Tb_9066_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9066_techstars_companies" using primary key columns */
  tb_9066_techstars_companies_by_pk?: Maybe<Tb_9066_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_9066_techstars_companies" */
  tb_9066_techstars_companies_stream: Array<Tb_9066_Techstars_Companies>;
  /** fetch data from the table: "tb_9459_techstars_companies" */
  tb_9459_techstars_companies: Array<Tb_9459_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9459_techstars_companies" */
  tb_9459_techstars_companies_aggregate: Tb_9459_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9459_techstars_companies" using primary key columns */
  tb_9459_techstars_companies_by_pk?: Maybe<Tb_9459_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_9459_techstars_companies" */
  tb_9459_techstars_companies_stream: Array<Tb_9459_Techstars_Companies>;
  /** fetch data from the table: "tb_9701_techstars_companies" */
  tb_9701_techstars_companies: Array<Tb_9701_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_9701_techstars_companies" */
  tb_9701_techstars_companies_aggregate: Tb_9701_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_9701_techstars_companies" using primary key columns */
  tb_9701_techstars_companies_by_pk?: Maybe<Tb_9701_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_9701_techstars_companies" */
  tb_9701_techstars_companies_stream: Array<Tb_9701_Techstars_Companies>;
  /** fetch data from the table: "tb_46723fcb5cf3" */
  tb_46723fcb5cf3: Array<Tb_46723fcb5cf3>;
  /** fetch aggregated fields from the table: "tb_46723fcb5cf3" */
  tb_46723fcb5cf3_aggregate: Tb_46723fcb5cf3_Aggregate;
  /** fetch data from the table: "tb_46723fcb5cf3" using primary key columns */
  tb_46723fcb5cf3_by_pk?: Maybe<Tb_46723fcb5cf3>;
  /** fetch data from the table in a streaming manner: "tb_46723fcb5cf3" */
  tb_46723fcb5cf3_stream: Array<Tb_46723fcb5cf3>;
  /** fetch data from the table: "tb_a5c1_techstars_companies" */
  tb_a5c1_techstars_companies: Array<Tb_A5c1_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_a5c1_techstars_companies" */
  tb_a5c1_techstars_companies_aggregate: Tb_A5c1_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_a5c1_techstars_companies" using primary key columns */
  tb_a5c1_techstars_companies_by_pk?: Maybe<Tb_A5c1_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_a5c1_techstars_companies" */
  tb_a5c1_techstars_companies_stream: Array<Tb_A5c1_Techstars_Companies>;
  /** fetch data from the table: "tb_a7dc_techstars_companies" */
  tb_a7dc_techstars_companies: Array<Tb_A7dc_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_a7dc_techstars_companies" */
  tb_a7dc_techstars_companies_aggregate: Tb_A7dc_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_a7dc_techstars_companies" using primary key columns */
  tb_a7dc_techstars_companies_by_pk?: Maybe<Tb_A7dc_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_a7dc_techstars_companies" */
  tb_a7dc_techstars_companies_stream: Array<Tb_A7dc_Techstars_Companies>;
  /** fetch data from the table: "tb_a332_techstars_companies" */
  tb_a332_techstars_companies: Array<Tb_A332_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_a332_techstars_companies" */
  tb_a332_techstars_companies_aggregate: Tb_A332_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_a332_techstars_companies" using primary key columns */
  tb_a332_techstars_companies_by_pk?: Maybe<Tb_A332_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_a332_techstars_companies" */
  tb_a332_techstars_companies_stream: Array<Tb_A332_Techstars_Companies>;
  /** fetch data from the table: "tb_ac31_techstars_companies" */
  tb_ac31_techstars_companies: Array<Tb_Ac31_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_ac31_techstars_companies" */
  tb_ac31_techstars_companies_aggregate: Tb_Ac31_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_ac31_techstars_companies" using primary key columns */
  tb_ac31_techstars_companies_by_pk?: Maybe<Tb_Ac31_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_ac31_techstars_companies" */
  tb_ac31_techstars_companies_stream: Array<Tb_Ac31_Techstars_Companies>;
  /** fetch data from the table: "tb_ae8e_techstars_companies" */
  tb_ae8e_techstars_companies: Array<Tb_Ae8e_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_ae8e_techstars_companies" */
  tb_ae8e_techstars_companies_aggregate: Tb_Ae8e_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_ae8e_techstars_companies" using primary key columns */
  tb_ae8e_techstars_companies_by_pk?: Maybe<Tb_Ae8e_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_ae8e_techstars_companies" */
  tb_ae8e_techstars_companies_stream: Array<Tb_Ae8e_Techstars_Companies>;
  /** fetch data from the table: "tb_af27_techstars_companies" */
  tb_af27_techstars_companies: Array<Tb_Af27_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_af27_techstars_companies" */
  tb_af27_techstars_companies_aggregate: Tb_Af27_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_af27_techstars_companies" using primary key columns */
  tb_af27_techstars_companies_by_pk?: Maybe<Tb_Af27_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_af27_techstars_companies" */
  tb_af27_techstars_companies_stream: Array<Tb_Af27_Techstars_Companies>;
  /** fetch data from the table: "tb_b02e_techstars_companies" */
  tb_b02e_techstars_companies: Array<Tb_B02e_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b02e_techstars_companies" */
  tb_b02e_techstars_companies_aggregate: Tb_B02e_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b02e_techstars_companies" using primary key columns */
  tb_b02e_techstars_companies_by_pk?: Maybe<Tb_B02e_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b02e_techstars_companies" */
  tb_b02e_techstars_companies_stream: Array<Tb_B02e_Techstars_Companies>;
  /** fetch data from the table: "tb_b3a8_techstars_companies" */
  tb_b3a8_techstars_companies: Array<Tb_B3a8_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b3a8_techstars_companies" */
  tb_b3a8_techstars_companies_aggregate: Tb_B3a8_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b3a8_techstars_companies" using primary key columns */
  tb_b3a8_techstars_companies_by_pk?: Maybe<Tb_B3a8_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b3a8_techstars_companies" */
  tb_b3a8_techstars_companies_stream: Array<Tb_B3a8_Techstars_Companies>;
  /** fetch data from the table: "tb_b4fc_techstars_companies" */
  tb_b4fc_techstars_companies: Array<Tb_B4fc_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b4fc_techstars_companies" */
  tb_b4fc_techstars_companies_aggregate: Tb_B4fc_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b4fc_techstars_companies" using primary key columns */
  tb_b4fc_techstars_companies_by_pk?: Maybe<Tb_B4fc_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b4fc_techstars_companies" */
  tb_b4fc_techstars_companies_stream: Array<Tb_B4fc_Techstars_Companies>;
  /** fetch data from the table: "tb_b7e7_techstars_companies" */
  tb_b7e7_techstars_companies: Array<Tb_B7e7_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b7e7_techstars_companies" */
  tb_b7e7_techstars_companies_aggregate: Tb_B7e7_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b7e7_techstars_companies" using primary key columns */
  tb_b7e7_techstars_companies_by_pk?: Maybe<Tb_B7e7_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b7e7_techstars_companies" */
  tb_b7e7_techstars_companies_stream: Array<Tb_B7e7_Techstars_Companies>;
  /** fetch data from the table: "tb_b9c9_techstars_companies" */
  tb_b9c9_techstars_companies: Array<Tb_B9c9_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b9c9_techstars_companies" */
  tb_b9c9_techstars_companies_aggregate: Tb_B9c9_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b9c9_techstars_companies" using primary key columns */
  tb_b9c9_techstars_companies_by_pk?: Maybe<Tb_B9c9_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b9c9_techstars_companies" */
  tb_b9c9_techstars_companies_stream: Array<Tb_B9c9_Techstars_Companies>;
  /** fetch data from the table: "tb_b14c_techstars_companies" */
  tb_b14c_techstars_companies: Array<Tb_B14c_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b14c_techstars_companies" */
  tb_b14c_techstars_companies_aggregate: Tb_B14c_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b14c_techstars_companies" using primary key columns */
  tb_b14c_techstars_companies_by_pk?: Maybe<Tb_B14c_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b14c_techstars_companies" */
  tb_b14c_techstars_companies_stream: Array<Tb_B14c_Techstars_Companies>;
  /** fetch data from the table: "tb_b80b_techstars_companies" */
  tb_b80b_techstars_companies: Array<Tb_B80b_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b80b_techstars_companies" */
  tb_b80b_techstars_companies_aggregate: Tb_B80b_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b80b_techstars_companies" using primary key columns */
  tb_b80b_techstars_companies_by_pk?: Maybe<Tb_B80b_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b80b_techstars_companies" */
  tb_b80b_techstars_companies_stream: Array<Tb_B80b_Techstars_Companies>;
  /** fetch data from the table: "tb_b225_techstars_companies" */
  tb_b225_techstars_companies: Array<Tb_B225_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b225_techstars_companies" */
  tb_b225_techstars_companies_aggregate: Tb_B225_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b225_techstars_companies" using primary key columns */
  tb_b225_techstars_companies_by_pk?: Maybe<Tb_B225_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b225_techstars_companies" */
  tb_b225_techstars_companies_stream: Array<Tb_B225_Techstars_Companies>;
  /** fetch data from the table: "tb_b739_techstars_companies" */
  tb_b739_techstars_companies: Array<Tb_B739_Techstars_Companies>;
  /** fetch aggregated fields from the table: "tb_b739_techstars_companies" */
  tb_b739_techstars_companies_aggregate: Tb_B739_Techstars_Companies_Aggregate;
  /** fetch data from the table: "tb_b739_techstars_companies" using primary key columns */
  tb_b739_techstars_companies_by_pk?: Maybe<Tb_B739_Techstars_Companies>;
  /** fetch data from the table in a streaming manner: "tb_b739_techstars_companies" */
  tb_b739_techstars_companies_stream: Array<Tb_B739_Techstars_Companies>;
  /** fetch data from the table: "tb_bd249159795e" */
  tb_bd249159795e: Array<Tb_Bd249159795e>;
  /** fetch aggregated fields from the table: "tb_bd249159795e" */
  tb_bd249159795e_aggregate: Tb_Bd249159795e_Aggregate;
  /** fetch data from the table: "tb_bd249159795e" using primary key columns */
  tb_bd249159795e_by_pk?: Maybe<Tb_Bd249159795e>;
  /** fetch data from the table in a streaming manner: "tb_bd249159795e" */
  tb_bd249159795e_stream: Array<Tb_Bd249159795e>;
  /** fetch data from the table: "tb_c57cdd28d7c0" */
  tb_c57cdd28d7c0: Array<Tb_C57cdd28d7c0>;
  /** fetch aggregated fields from the table: "tb_c57cdd28d7c0" */
  tb_c57cdd28d7c0_aggregate: Tb_C57cdd28d7c0_Aggregate;
  /** fetch data from the table: "tb_c57cdd28d7c0" using primary key columns */
  tb_c57cdd28d7c0_by_pk?: Maybe<Tb_C57cdd28d7c0>;
  /** fetch data from the table in a streaming manner: "tb_c57cdd28d7c0" */
  tb_c57cdd28d7c0_stream: Array<Tb_C57cdd28d7c0>;
  /** fetch data from the table: "tb_d0e828550903" */
  tb_d0e828550903: Array<Tb_D0e828550903>;
  /** fetch aggregated fields from the table: "tb_d0e828550903" */
  tb_d0e828550903_aggregate: Tb_D0e828550903_Aggregate;
  /** fetch data from the table: "tb_d0e828550903" using primary key columns */
  tb_d0e828550903_by_pk?: Maybe<Tb_D0e828550903>;
  /** fetch data from the table in a streaming manner: "tb_d0e828550903" */
  tb_d0e828550903_stream: Array<Tb_D0e828550903>;
  /** fetch data from the table: "tb_ff89301ef0f8" */
  tb_ff89301ef0f8: Array<Tb_Ff89301ef0f8>;
  /** fetch aggregated fields from the table: "tb_ff89301ef0f8" */
  tb_ff89301ef0f8_aggregate: Tb_Ff89301ef0f8_Aggregate;
  /** fetch data from the table: "tb_ff89301ef0f8" using primary key columns */
  tb_ff89301ef0f8_by_pk?: Maybe<Tb_Ff89301ef0f8>;
  /** fetch data from the table in a streaming manner: "tb_ff89301ef0f8" */
  tb_ff89301ef0f8_stream: Array<Tb_Ff89301ef0f8>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
  /** fetch data from the table: "workspace" */
  workspace: Array<Workspace>;
  /** fetch aggregated fields from the table: "workspace" */
  workspace_aggregate: Workspace_Aggregate;
  /** fetch data from the table: "workspace" using primary key columns */
  workspace_by_pk?: Maybe<Workspace>;
  /** fetch data from the table: "workspace_membership" */
  workspace_membership: Array<Workspace_Membership>;
  /** fetch aggregated fields from the table: "workspace_membership" */
  workspace_membership_aggregate: Workspace_Membership_Aggregate;
  /** fetch data from the table: "workspace_membership" using primary key columns */
  workspace_membership_by_pk?: Maybe<Workspace_Membership>;
  /** fetch data from the table in a streaming manner: "workspace_membership" */
  workspace_membership_stream: Array<Workspace_Membership>;
  /** fetch data from the table in a streaming manner: "workspace" */
  workspace_stream: Array<Workspace>;
};


export type Subscription_RootApp_StateArgs = {
  distinct_on?: InputMaybe<Array<App_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_State_Order_By>>;
  where?: InputMaybe<App_State_Bool_Exp>;
};


export type Subscription_RootApp_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_State_Order_By>>;
  where?: InputMaybe<App_State_Bool_Exp>;
};


export type Subscription_RootApp_State_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_State_Stream_Cursor_Input>>;
  where?: InputMaybe<App_State_Bool_Exp>;
};


export type Subscription_RootBlueprintArgs = {
  distinct_on?: InputMaybe<Array<Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blueprint_Order_By>>;
  where?: InputMaybe<Blueprint_Bool_Exp>;
};


export type Subscription_RootBlueprint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blueprint_Order_By>>;
  where?: InputMaybe<Blueprint_Bool_Exp>;
};


export type Subscription_RootBlueprint_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootBlueprint_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Blueprint_Stream_Cursor_Input>>;
  where?: InputMaybe<Blueprint_Bool_Exp>;
};


export type Subscription_RootDataframeArgs = {
  distinct_on?: InputMaybe<Array<Dataframe_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dataframe_Order_By>>;
  where?: InputMaybe<Dataframe_Bool_Exp>;
};


export type Subscription_RootDataframe_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dataframe_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dataframe_Order_By>>;
  where?: InputMaybe<Dataframe_Bool_Exp>;
};


export type Subscription_RootDataframe_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootDataframe_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Dataframe_Stream_Cursor_Input>>;
  where?: InputMaybe<Dataframe_Bool_Exp>;
};


export type Subscription_RootHistoryArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


export type Subscription_RootHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


export type Subscription_RootHistory_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootHistory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<History_Stream_Cursor_Input>>;
  where?: InputMaybe<History_Bool_Exp>;
};


export type Subscription_RootInviteArgs = {
  distinct_on?: InputMaybe<Array<Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Order_By>>;
  where?: InputMaybe<Invite_Bool_Exp>;
};


export type Subscription_RootInvite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Order_By>>;
  where?: InputMaybe<Invite_Bool_Exp>;
};


export type Subscription_RootInvite_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootInvite_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Invite_Stream_Cursor_Input>>;
  where?: InputMaybe<Invite_Bool_Exp>;
};


export type Subscription_RootLogin_ActivityArgs = {
  distinct_on?: InputMaybe<Array<Login_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Login_Activity_Order_By>>;
  where?: InputMaybe<Login_Activity_Bool_Exp>;
};


export type Subscription_RootLogin_Activity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Login_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Login_Activity_Order_By>>;
  where?: InputMaybe<Login_Activity_Bool_Exp>;
};


export type Subscription_RootLogin_Activity_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootLogin_Activity_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Login_Activity_Stream_Cursor_Input>>;
  where?: InputMaybe<Login_Activity_Bool_Exp>;
};


export type Subscription_RootPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPages_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pages_Stream_Cursor_Input>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootTb_0d5fd0848814Args = {
  distinct_on?: InputMaybe<Array<Tb_0d5fd0848814_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_0d5fd0848814_Order_By>>;
  where?: InputMaybe<Tb_0d5fd0848814_Bool_Exp>;
};


export type Subscription_RootTb_0d5fd0848814_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_0d5fd0848814_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_0d5fd0848814_Order_By>>;
  where?: InputMaybe<Tb_0d5fd0848814_Bool_Exp>;
};


export type Subscription_RootTb_0d5fd0848814_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_0d5fd0848814_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_0d5fd0848814_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_0d5fd0848814_Bool_Exp>;
};


export type Subscription_RootTb_4d10c208adc8Args = {
  distinct_on?: InputMaybe<Array<Tb_4d10c208adc8_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_4d10c208adc8_Order_By>>;
  where?: InputMaybe<Tb_4d10c208adc8_Bool_Exp>;
};


export type Subscription_RootTb_4d10c208adc8_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_4d10c208adc8_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_4d10c208adc8_Order_By>>;
  where?: InputMaybe<Tb_4d10c208adc8_Bool_Exp>;
};


export type Subscription_RootTb_4d10c208adc8_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_4d10c208adc8_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_4d10c208adc8_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_4d10c208adc8_Bool_Exp>;
};


export type Subscription_RootTb_8a3e5ae9851eArgs = {
  distinct_on?: InputMaybe<Array<Tb_8a3e5ae9851e_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8a3e5ae9851e_Order_By>>;
  where?: InputMaybe<Tb_8a3e5ae9851e_Bool_Exp>;
};


export type Subscription_RootTb_8a3e5ae9851e_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_8a3e5ae9851e_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8a3e5ae9851e_Order_By>>;
  where?: InputMaybe<Tb_8a3e5ae9851e_Bool_Exp>;
};


export type Subscription_RootTb_8a3e5ae9851e_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_8a3e5ae9851e_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_8a3e5ae9851e_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_8a3e5ae9851e_Bool_Exp>;
};


export type Subscription_RootTb_8c0d_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8c0d_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_8c0d_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8c0d_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_8c0d_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_8c0d_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_8c0d_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_8c0d_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_8f3a_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8f3a_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_8f3a_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8f3a_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_8f3a_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_8f3a_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_8f3a_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_8f3a_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9ae55ff65521Args = {
  distinct_on?: InputMaybe<Array<Tb_9ae55ff65521_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9ae55ff65521_Order_By>>;
  where?: InputMaybe<Tb_9ae55ff65521_Bool_Exp>;
};


export type Subscription_RootTb_9ae55ff65521_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9ae55ff65521_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9ae55ff65521_Order_By>>;
  where?: InputMaybe<Tb_9ae55ff65521_Bool_Exp>;
};


export type Subscription_RootTb_9ae55ff65521_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_9ae55ff65521_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_9ae55ff65521_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_9ae55ff65521_Bool_Exp>;
};


export type Subscription_RootTb_9b4e_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9b4e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9b4e_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9b4e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9b4e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_9b4e_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_9b4e_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_9b4e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9bed8f8cd4faArgs = {
  distinct_on?: InputMaybe<Array<Tb_9bed8f8cd4fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9bed8f8cd4fa_Order_By>>;
  where?: InputMaybe<Tb_9bed8f8cd4fa_Bool_Exp>;
};


export type Subscription_RootTb_9bed8f8cd4fa_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9bed8f8cd4fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9bed8f8cd4fa_Order_By>>;
  where?: InputMaybe<Tb_9bed8f8cd4fa_Bool_Exp>;
};


export type Subscription_RootTb_9bed8f8cd4fa_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_9bed8f8cd4fa_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_9bed8f8cd4fa_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_9bed8f8cd4fa_Bool_Exp>;
};


export type Subscription_RootTb_9cab_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9cab_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9cab_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9cab_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9cab_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_9cab_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_9cab_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_9cab_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9d66_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9d66_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9d66_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9d66_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9d66_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_9d66_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_9d66_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_9d66_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_14a707ad0fccArgs = {
  distinct_on?: InputMaybe<Array<Tb_14a707ad0fcc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_14a707ad0fcc_Order_By>>;
  where?: InputMaybe<Tb_14a707ad0fcc_Bool_Exp>;
};


export type Subscription_RootTb_14a707ad0fcc_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_14a707ad0fcc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_14a707ad0fcc_Order_By>>;
  where?: InputMaybe<Tb_14a707ad0fcc_Bool_Exp>;
};


export type Subscription_RootTb_14a707ad0fcc_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_14a707ad0fcc_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_14a707ad0fcc_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_14a707ad0fcc_Bool_Exp>;
};


export type Subscription_RootTb_66e8f877ca5cArgs = {
  distinct_on?: InputMaybe<Array<Tb_66e8f877ca5c_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_66e8f877ca5c_Order_By>>;
  where?: InputMaybe<Tb_66e8f877ca5c_Bool_Exp>;
};


export type Subscription_RootTb_66e8f877ca5c_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_66e8f877ca5c_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_66e8f877ca5c_Order_By>>;
  where?: InputMaybe<Tb_66e8f877ca5c_Bool_Exp>;
};


export type Subscription_RootTb_66e8f877ca5c_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_66e8f877ca5c_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_66e8f877ca5c_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_66e8f877ca5c_Bool_Exp>;
};


export type Subscription_RootTb_88fb_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_88fb_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_88fb_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_88fb_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_88fb_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_88fb_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_88fb_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_88fb_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_96fa_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_96fa_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_96fa_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_96fa_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_96fa_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_96fa_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_96fa_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_96fa_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_140d8afc9ce4Args = {
  distinct_on?: InputMaybe<Array<Tb_140d8afc9ce4_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_140d8afc9ce4_Order_By>>;
  where?: InputMaybe<Tb_140d8afc9ce4_Bool_Exp>;
};


export type Subscription_RootTb_140d8afc9ce4_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_140d8afc9ce4_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_140d8afc9ce4_Order_By>>;
  where?: InputMaybe<Tb_140d8afc9ce4_Bool_Exp>;
};


export type Subscription_RootTb_140d8afc9ce4_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_140d8afc9ce4_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_140d8afc9ce4_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_140d8afc9ce4_Bool_Exp>;
};


export type Subscription_RootTb_8536_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_8536_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8536_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8536_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_8536_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_8536_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_8536_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_8536_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_8536_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_8536_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_8536_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_8536_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9066_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9066_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9066_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9066_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9066_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9066_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9066_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9066_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9066_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_9066_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_9066_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_9066_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9459_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9459_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9459_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9459_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9459_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9459_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9459_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9459_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9459_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_9459_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_9459_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_9459_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9701_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_9701_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9701_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9701_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9701_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_9701_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_9701_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_9701_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_9701_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_9701_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_9701_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_9701_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_46723fcb5cf3Args = {
  distinct_on?: InputMaybe<Array<Tb_46723fcb5cf3_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_46723fcb5cf3_Order_By>>;
  where?: InputMaybe<Tb_46723fcb5cf3_Bool_Exp>;
};


export type Subscription_RootTb_46723fcb5cf3_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_46723fcb5cf3_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_46723fcb5cf3_Order_By>>;
  where?: InputMaybe<Tb_46723fcb5cf3_Bool_Exp>;
};


export type Subscription_RootTb_46723fcb5cf3_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_46723fcb5cf3_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_46723fcb5cf3_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_46723fcb5cf3_Bool_Exp>;
};


export type Subscription_RootTb_A5c1_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A5c1_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_A5c1_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A5c1_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_A5c1_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_A5c1_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_A5c1_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_A5c1_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_A7dc_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A7dc_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_A7dc_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A7dc_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_A7dc_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_A7dc_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_A7dc_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_A7dc_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_A332_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_A332_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A332_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A332_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_A332_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_A332_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_A332_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_A332_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_A332_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_A332_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_A332_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_A332_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Ac31_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Ac31_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Ac31_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Ac31_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Ac31_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_Ac31_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_Ac31_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_Ac31_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Ae8e_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Ae8e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Ae8e_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Ae8e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Ae8e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_Ae8e_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_Ae8e_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_Ae8e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Af27_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Af27_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Af27_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_Af27_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Af27_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_Af27_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_Af27_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_Af27_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B02e_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B02e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B02e_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B02e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B02e_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B02e_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B02e_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B02e_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B3a8_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B3a8_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B3a8_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B3a8_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B3a8_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B3a8_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B3a8_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B3a8_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B4fc_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B4fc_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B4fc_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B4fc_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B4fc_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B4fc_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B4fc_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B4fc_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B7e7_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B7e7_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B7e7_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B7e7_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B7e7_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B7e7_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B7e7_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B7e7_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B9c9_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B9c9_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B9c9_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B9c9_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B9c9_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B9c9_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B9c9_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B9c9_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B14c_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B14c_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B14c_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B14c_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B14c_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B14c_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B14c_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B14c_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B80b_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B80b_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B80b_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B80b_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B80b_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B80b_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B80b_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B80b_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B225_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B225_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B225_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B225_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B225_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B225_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B225_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B225_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B225_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B225_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B225_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B225_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B739_Techstars_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Tb_B739_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B739_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B739_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B739_Techstars_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_B739_Techstars_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_B739_Techstars_Companies_Order_By>>;
  where?: InputMaybe<Tb_B739_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_B739_Techstars_Companies_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_B739_Techstars_Companies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_B739_Techstars_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_B739_Techstars_Companies_Bool_Exp>;
};


export type Subscription_RootTb_Bd249159795eArgs = {
  distinct_on?: InputMaybe<Array<Tb_Bd249159795e_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Bd249159795e_Order_By>>;
  where?: InputMaybe<Tb_Bd249159795e_Bool_Exp>;
};


export type Subscription_RootTb_Bd249159795e_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Bd249159795e_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Bd249159795e_Order_By>>;
  where?: InputMaybe<Tb_Bd249159795e_Bool_Exp>;
};


export type Subscription_RootTb_Bd249159795e_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_Bd249159795e_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_Bd249159795e_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_Bd249159795e_Bool_Exp>;
};


export type Subscription_RootTb_C57cdd28d7c0Args = {
  distinct_on?: InputMaybe<Array<Tb_C57cdd28d7c0_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_C57cdd28d7c0_Order_By>>;
  where?: InputMaybe<Tb_C57cdd28d7c0_Bool_Exp>;
};


export type Subscription_RootTb_C57cdd28d7c0_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_C57cdd28d7c0_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_C57cdd28d7c0_Order_By>>;
  where?: InputMaybe<Tb_C57cdd28d7c0_Bool_Exp>;
};


export type Subscription_RootTb_C57cdd28d7c0_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_C57cdd28d7c0_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_C57cdd28d7c0_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_C57cdd28d7c0_Bool_Exp>;
};


export type Subscription_RootTb_D0e828550903Args = {
  distinct_on?: InputMaybe<Array<Tb_D0e828550903_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_D0e828550903_Order_By>>;
  where?: InputMaybe<Tb_D0e828550903_Bool_Exp>;
};


export type Subscription_RootTb_D0e828550903_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_D0e828550903_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_D0e828550903_Order_By>>;
  where?: InputMaybe<Tb_D0e828550903_Bool_Exp>;
};


export type Subscription_RootTb_D0e828550903_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_D0e828550903_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_D0e828550903_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_D0e828550903_Bool_Exp>;
};


export type Subscription_RootTb_Ff89301ef0f8Args = {
  distinct_on?: InputMaybe<Array<Tb_Ff89301ef0f8_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ff89301ef0f8_Order_By>>;
  where?: InputMaybe<Tb_Ff89301ef0f8_Bool_Exp>;
};


export type Subscription_RootTb_Ff89301ef0f8_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tb_Ff89301ef0f8_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tb_Ff89301ef0f8_Order_By>>;
  where?: InputMaybe<Tb_Ff89301ef0f8_Bool_Exp>;
};


export type Subscription_RootTb_Ff89301ef0f8_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootTb_Ff89301ef0f8_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tb_Ff89301ef0f8_Stream_Cursor_Input>>;
  where?: InputMaybe<Tb_Ff89301ef0f8_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootWorkspaceArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Order_By>>;
  where?: InputMaybe<Workspace_Bool_Exp>;
};


export type Subscription_RootWorkspace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Order_By>>;
  where?: InputMaybe<Workspace_Bool_Exp>;
};


export type Subscription_RootWorkspace_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootWorkspace_MembershipArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Membership_Order_By>>;
  where?: InputMaybe<Workspace_Membership_Bool_Exp>;
};


export type Subscription_RootWorkspace_Membership_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Membership_Order_By>>;
  where?: InputMaybe<Workspace_Membership_Bool_Exp>;
};


export type Subscription_RootWorkspace_Membership_By_PkArgs = {
  _id: Scalars['uuid'];
};


export type Subscription_RootWorkspace_Membership_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workspace_Membership_Stream_Cursor_Input>>;
  where?: InputMaybe<Workspace_Membership_Bool_Exp>;
};


export type Subscription_RootWorkspace_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workspace_Stream_Cursor_Input>>;
  where?: InputMaybe<Workspace_Bool_Exp>;
};

/** columns and relationships of "tb_0d5fd0848814" */
export type Tb_0d5fd0848814 = {
  __typename?: 'tb_0d5fd0848814';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _is_selected: Scalars['Boolean'];
  _up: Scalars['timestamptz'];
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Aggregate = {
  __typename?: 'tb_0d5fd0848814_aggregate';
  aggregate?: Maybe<Tb_0d5fd0848814_Aggregate_Fields>;
  nodes: Array<Tb_0d5fd0848814>;
};

/** aggregate fields of "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Aggregate_Fields = {
  __typename?: 'tb_0d5fd0848814_aggregate_fields';
  avg?: Maybe<Tb_0d5fd0848814_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tb_0d5fd0848814_Max_Fields>;
  min?: Maybe<Tb_0d5fd0848814_Min_Fields>;
  stddev?: Maybe<Tb_0d5fd0848814_Stddev_Fields>;
  stddev_pop?: Maybe<Tb_0d5fd0848814_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tb_0d5fd0848814_Stddev_Samp_Fields>;
  sum?: Maybe<Tb_0d5fd0848814_Sum_Fields>;
  var_pop?: Maybe<Tb_0d5fd0848814_Var_Pop_Fields>;
  var_samp?: Maybe<Tb_0d5fd0848814_Var_Samp_Fields>;
  variance?: Maybe<Tb_0d5fd0848814_Variance_Fields>;
};


/** aggregate fields of "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_0d5fd0848814_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tb_0d5fd0848814_Avg_Fields = {
  __typename?: 'tb_0d5fd0848814_avg_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tb_0d5fd0848814". All fields are combined with a logical 'AND'. */
export type Tb_0d5fd0848814_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_0d5fd0848814_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  _not?: InputMaybe<Tb_0d5fd0848814_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_0d5fd0848814_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  age?: InputMaybe<String_Comparison_Exp>;
  class_name?: InputMaybe<String_Comparison_Exp>;
  clothing_id?: InputMaybe<String_Comparison_Exp>;
  department_name?: InputMaybe<String_Comparison_Exp>;
  division_name?: InputMaybe<String_Comparison_Exp>;
  positive_feedback_count?: InputMaybe<String_Comparison_Exp>;
  rating?: InputMaybe<String_Comparison_Exp>;
  recommended_ind?: InputMaybe<String_Comparison_Exp>;
  review_text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  unnamed_0?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_0d5fd0848814__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_0d5fd0848814_pk';

/** input type for incrementing numeric columns in table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Inc_Input = {
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Tb_0d5fd0848814_Max_Fields = {
  __typename?: 'tb_0d5fd0848814_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Tb_0d5fd0848814_Min_Fields = {
  __typename?: 'tb_0d5fd0848814_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** response of any mutation on the table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Mutation_Response = {
  __typename?: 'tb_0d5fd0848814_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_0d5fd0848814>;
};

/** on_conflict condition type for table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_On_Conflict = {
  constraint: Tb_0d5fd0848814_Constraint;
  update_columns?: Array<Tb_0d5fd0848814_Update_Column>;
  where?: InputMaybe<Tb_0d5fd0848814_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_0d5fd0848814". */
export type Tb_0d5fd0848814_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _is_selected?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  age?: InputMaybe<Order_By>;
  class_name?: InputMaybe<Order_By>;
  clothing_id?: InputMaybe<Order_By>;
  department_name?: InputMaybe<Order_By>;
  division_name?: InputMaybe<Order_By>;
  positive_feedback_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  recommended_ind?: InputMaybe<Order_By>;
  review_text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  unnamed_0?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_0d5fd0848814 */
export type Tb_0d5fd0848814_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'age'
  /** column name */
  | 'class_name'
  /** column name */
  | 'clothing_id'
  /** column name */
  | 'department_name'
  /** column name */
  | 'division_name'
  /** column name */
  | 'positive_feedback_count'
  /** column name */
  | 'rating'
  /** column name */
  | 'recommended_ind'
  /** column name */
  | 'review_text'
  /** column name */
  | 'title'
  /** column name */
  | 'unnamed_0';

/** input type for updating data in table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Tb_0d5fd0848814_Stddev_Fields = {
  __typename?: 'tb_0d5fd0848814_stddev_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tb_0d5fd0848814_Stddev_Pop_Fields = {
  __typename?: 'tb_0d5fd0848814_stddev_pop_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tb_0d5fd0848814_Stddev_Samp_Fields = {
  __typename?: 'tb_0d5fd0848814_stddev_samp_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_0d5fd0848814_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_0d5fd0848814_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Tb_0d5fd0848814_Sum_Fields = {
  __typename?: 'tb_0d5fd0848814_sum_fields';
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** update columns of table "tb_0d5fd0848814" */
export type Tb_0d5fd0848814_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'age'
  /** column name */
  | 'class_name'
  /** column name */
  | 'clothing_id'
  /** column name */
  | 'department_name'
  /** column name */
  | 'division_name'
  /** column name */
  | 'positive_feedback_count'
  /** column name */
  | 'rating'
  /** column name */
  | 'recommended_ind'
  /** column name */
  | 'review_text'
  /** column name */
  | 'title'
  /** column name */
  | 'unnamed_0';

export type Tb_0d5fd0848814_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tb_0d5fd0848814_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_0d5fd0848814_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_0d5fd0848814_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tb_0d5fd0848814_Var_Pop_Fields = {
  __typename?: 'tb_0d5fd0848814_var_pop_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tb_0d5fd0848814_Var_Samp_Fields = {
  __typename?: 'tb_0d5fd0848814_var_samp_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tb_0d5fd0848814_Variance_Fields = {
  __typename?: 'tb_0d5fd0848814_variance_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8 = {
  __typename?: 'tb_4d10c208adc8';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  ai_column_10?: Maybe<Scalars['jsonb']>;
  ai_column_11?: Maybe<Scalars['jsonb']>;
  ai_column_15?: Maybe<Scalars['jsonb']>;
  ai_column_16?: Maybe<Scalars['jsonb']>;
  ai_column_17?: Maybe<Scalars['jsonb']>;
  ai_column_18?: Maybe<Scalars['jsonb']>;
  ai_column_19?: Maybe<Scalars['jsonb']>;
  company_name?: Maybe<Scalars['String']>;
  country_2?: Maybe<Scalars['jsonb']>;
  country_ai?: Maybe<Scalars['String']>;
  employee_count_ai?: Maybe<Scalars['jsonb']>;
  geo_region?: Maybe<Scalars['String']>;
  has_acquisitions?: Maybe<Scalars['jsonb']>;
  hq?: Maybe<Scalars['String']>;
  is_agile?: Maybe<Scalars['jsonb']>;
  layoff?: Maybe<Scalars['jsonb']>;
  news?: Maybe<Scalars['jsonb']>;
  total_employees?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  wikipedia_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Ai_Column_10Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Ai_Column_11Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Ai_Column_15Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Ai_Column_16Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Ai_Column_17Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Ai_Column_18Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Ai_Column_19Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Country_2Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Employee_Count_AiArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Has_AcquisitionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8Is_AgileArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8LayoffArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8NewsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Aggregate = {
  __typename?: 'tb_4d10c208adc8_aggregate';
  aggregate?: Maybe<Tb_4d10c208adc8_Aggregate_Fields>;
  nodes: Array<Tb_4d10c208adc8>;
};

/** aggregate fields of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Aggregate_Fields = {
  __typename?: 'tb_4d10c208adc8_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_4d10c208adc8_Max_Fields>;
  min?: Maybe<Tb_4d10c208adc8_Min_Fields>;
};


/** aggregate fields of "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_4d10c208adc8_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tb_4d10c208adc8_Append_Input = {
  ai_column_10?: InputMaybe<Scalars['jsonb']>;
  ai_column_11?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  ai_column_17?: InputMaybe<Scalars['jsonb']>;
  ai_column_18?: InputMaybe<Scalars['jsonb']>;
  ai_column_19?: InputMaybe<Scalars['jsonb']>;
  country_2?: InputMaybe<Scalars['jsonb']>;
  employee_count_ai?: InputMaybe<Scalars['jsonb']>;
  has_acquisitions?: InputMaybe<Scalars['jsonb']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoff?: InputMaybe<Scalars['jsonb']>;
  news?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "tb_4d10c208adc8". All fields are combined with a logical 'AND'. */
export type Tb_4d10c208adc8_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_4d10c208adc8_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_4d10c208adc8_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_4d10c208adc8_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  ai_column_10?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_11?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_15?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_16?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_17?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_18?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_19?: InputMaybe<Jsonb_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  country_2?: InputMaybe<Jsonb_Comparison_Exp>;
  country_ai?: InputMaybe<String_Comparison_Exp>;
  employee_count_ai?: InputMaybe<Jsonb_Comparison_Exp>;
  geo_region?: InputMaybe<String_Comparison_Exp>;
  has_acquisitions?: InputMaybe<Jsonb_Comparison_Exp>;
  hq?: InputMaybe<String_Comparison_Exp>;
  is_agile?: InputMaybe<Jsonb_Comparison_Exp>;
  layoff?: InputMaybe<Jsonb_Comparison_Exp>;
  news?: InputMaybe<Jsonb_Comparison_Exp>;
  total_employees?: InputMaybe<String_Comparison_Exp>;
  website_url?: InputMaybe<String_Comparison_Exp>;
  wikipedia_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_4d10c208adc8__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_4d10c208adc8_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tb_4d10c208adc8_Delete_At_Path_Input = {
  ai_column_10?: InputMaybe<Array<Scalars['String']>>;
  ai_column_11?: InputMaybe<Array<Scalars['String']>>;
  ai_column_15?: InputMaybe<Array<Scalars['String']>>;
  ai_column_16?: InputMaybe<Array<Scalars['String']>>;
  ai_column_17?: InputMaybe<Array<Scalars['String']>>;
  ai_column_18?: InputMaybe<Array<Scalars['String']>>;
  ai_column_19?: InputMaybe<Array<Scalars['String']>>;
  country_2?: InputMaybe<Array<Scalars['String']>>;
  employee_count_ai?: InputMaybe<Array<Scalars['String']>>;
  has_acquisitions?: InputMaybe<Array<Scalars['String']>>;
  is_agile?: InputMaybe<Array<Scalars['String']>>;
  layoff?: InputMaybe<Array<Scalars['String']>>;
  news?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tb_4d10c208adc8_Delete_Elem_Input = {
  ai_column_10?: InputMaybe<Scalars['Int']>;
  ai_column_11?: InputMaybe<Scalars['Int']>;
  ai_column_15?: InputMaybe<Scalars['Int']>;
  ai_column_16?: InputMaybe<Scalars['Int']>;
  ai_column_17?: InputMaybe<Scalars['Int']>;
  ai_column_18?: InputMaybe<Scalars['Int']>;
  ai_column_19?: InputMaybe<Scalars['Int']>;
  country_2?: InputMaybe<Scalars['Int']>;
  employee_count_ai?: InputMaybe<Scalars['Int']>;
  has_acquisitions?: InputMaybe<Scalars['Int']>;
  is_agile?: InputMaybe<Scalars['Int']>;
  layoff?: InputMaybe<Scalars['Int']>;
  news?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tb_4d10c208adc8_Delete_Key_Input = {
  ai_column_10?: InputMaybe<Scalars['String']>;
  ai_column_11?: InputMaybe<Scalars['String']>;
  ai_column_15?: InputMaybe<Scalars['String']>;
  ai_column_16?: InputMaybe<Scalars['String']>;
  ai_column_17?: InputMaybe<Scalars['String']>;
  ai_column_18?: InputMaybe<Scalars['String']>;
  ai_column_19?: InputMaybe<Scalars['String']>;
  country_2?: InputMaybe<Scalars['String']>;
  employee_count_ai?: InputMaybe<Scalars['String']>;
  has_acquisitions?: InputMaybe<Scalars['String']>;
  is_agile?: InputMaybe<Scalars['String']>;
  layoff?: InputMaybe<Scalars['String']>;
  news?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_10?: InputMaybe<Scalars['jsonb']>;
  ai_column_11?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  ai_column_17?: InputMaybe<Scalars['jsonb']>;
  ai_column_18?: InputMaybe<Scalars['jsonb']>;
  ai_column_19?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  country_2?: InputMaybe<Scalars['jsonb']>;
  country_ai?: InputMaybe<Scalars['String']>;
  employee_count_ai?: InputMaybe<Scalars['jsonb']>;
  geo_region?: InputMaybe<Scalars['String']>;
  has_acquisitions?: InputMaybe<Scalars['jsonb']>;
  hq?: InputMaybe<Scalars['String']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoff?: InputMaybe<Scalars['jsonb']>;
  news?: InputMaybe<Scalars['jsonb']>;
  total_employees?: InputMaybe<Scalars['String']>;
  website_url?: InputMaybe<Scalars['String']>;
  wikipedia_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_4d10c208adc8_Max_Fields = {
  __typename?: 'tb_4d10c208adc8_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  country_ai?: Maybe<Scalars['String']>;
  geo_region?: Maybe<Scalars['String']>;
  hq?: Maybe<Scalars['String']>;
  total_employees?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  wikipedia_url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_4d10c208adc8_Min_Fields = {
  __typename?: 'tb_4d10c208adc8_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  country_ai?: Maybe<Scalars['String']>;
  geo_region?: Maybe<Scalars['String']>;
  hq?: Maybe<Scalars['String']>;
  total_employees?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  wikipedia_url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Mutation_Response = {
  __typename?: 'tb_4d10c208adc8_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_4d10c208adc8>;
};

/** on_conflict condition type for table "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_On_Conflict = {
  constraint: Tb_4d10c208adc8_Constraint;
  update_columns?: Array<Tb_4d10c208adc8_Update_Column>;
  where?: InputMaybe<Tb_4d10c208adc8_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_4d10c208adc8". */
export type Tb_4d10c208adc8_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  ai_column_10?: InputMaybe<Order_By>;
  ai_column_11?: InputMaybe<Order_By>;
  ai_column_15?: InputMaybe<Order_By>;
  ai_column_16?: InputMaybe<Order_By>;
  ai_column_17?: InputMaybe<Order_By>;
  ai_column_18?: InputMaybe<Order_By>;
  ai_column_19?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  country_2?: InputMaybe<Order_By>;
  country_ai?: InputMaybe<Order_By>;
  employee_count_ai?: InputMaybe<Order_By>;
  geo_region?: InputMaybe<Order_By>;
  has_acquisitions?: InputMaybe<Order_By>;
  hq?: InputMaybe<Order_By>;
  is_agile?: InputMaybe<Order_By>;
  layoff?: InputMaybe<Order_By>;
  news?: InputMaybe<Order_By>;
  total_employees?: InputMaybe<Order_By>;
  website_url?: InputMaybe<Order_By>;
  wikipedia_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_4d10c208adc8 */
export type Tb_4d10c208adc8_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tb_4d10c208adc8_Prepend_Input = {
  ai_column_10?: InputMaybe<Scalars['jsonb']>;
  ai_column_11?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  ai_column_17?: InputMaybe<Scalars['jsonb']>;
  ai_column_18?: InputMaybe<Scalars['jsonb']>;
  ai_column_19?: InputMaybe<Scalars['jsonb']>;
  country_2?: InputMaybe<Scalars['jsonb']>;
  employee_count_ai?: InputMaybe<Scalars['jsonb']>;
  has_acquisitions?: InputMaybe<Scalars['jsonb']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoff?: InputMaybe<Scalars['jsonb']>;
  news?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_column_10'
  /** column name */
  | 'ai_column_11'
  /** column name */
  | 'ai_column_15'
  /** column name */
  | 'ai_column_16'
  /** column name */
  | 'ai_column_17'
  /** column name */
  | 'ai_column_18'
  /** column name */
  | 'ai_column_19'
  /** column name */
  | 'company_name'
  /** column name */
  | 'country_2'
  /** column name */
  | 'country_ai'
  /** column name */
  | 'employee_count_ai'
  /** column name */
  | 'geo_region'
  /** column name */
  | 'has_acquisitions'
  /** column name */
  | 'hq'
  /** column name */
  | 'is_agile'
  /** column name */
  | 'layoff'
  /** column name */
  | 'news'
  /** column name */
  | 'total_employees'
  /** column name */
  | 'website_url'
  /** column name */
  | 'wikipedia_url';

/** input type for updating data in table "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_10?: InputMaybe<Scalars['jsonb']>;
  ai_column_11?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  ai_column_17?: InputMaybe<Scalars['jsonb']>;
  ai_column_18?: InputMaybe<Scalars['jsonb']>;
  ai_column_19?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  country_2?: InputMaybe<Scalars['jsonb']>;
  country_ai?: InputMaybe<Scalars['String']>;
  employee_count_ai?: InputMaybe<Scalars['jsonb']>;
  geo_region?: InputMaybe<Scalars['String']>;
  has_acquisitions?: InputMaybe<Scalars['jsonb']>;
  hq?: InputMaybe<Scalars['String']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoff?: InputMaybe<Scalars['jsonb']>;
  news?: InputMaybe<Scalars['jsonb']>;
  total_employees?: InputMaybe<Scalars['String']>;
  website_url?: InputMaybe<Scalars['String']>;
  wikipedia_url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_4d10c208adc8_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_4d10c208adc8_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_10?: InputMaybe<Scalars['jsonb']>;
  ai_column_11?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  ai_column_17?: InputMaybe<Scalars['jsonb']>;
  ai_column_18?: InputMaybe<Scalars['jsonb']>;
  ai_column_19?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  country_2?: InputMaybe<Scalars['jsonb']>;
  country_ai?: InputMaybe<Scalars['String']>;
  employee_count_ai?: InputMaybe<Scalars['jsonb']>;
  geo_region?: InputMaybe<Scalars['String']>;
  has_acquisitions?: InputMaybe<Scalars['jsonb']>;
  hq?: InputMaybe<Scalars['String']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoff?: InputMaybe<Scalars['jsonb']>;
  news?: InputMaybe<Scalars['jsonb']>;
  total_employees?: InputMaybe<Scalars['String']>;
  website_url?: InputMaybe<Scalars['String']>;
  wikipedia_url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_4d10c208adc8" */
export type Tb_4d10c208adc8_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_column_10'
  /** column name */
  | 'ai_column_11'
  /** column name */
  | 'ai_column_15'
  /** column name */
  | 'ai_column_16'
  /** column name */
  | 'ai_column_17'
  /** column name */
  | 'ai_column_18'
  /** column name */
  | 'ai_column_19'
  /** column name */
  | 'company_name'
  /** column name */
  | 'country_2'
  /** column name */
  | 'country_ai'
  /** column name */
  | 'employee_count_ai'
  /** column name */
  | 'geo_region'
  /** column name */
  | 'has_acquisitions'
  /** column name */
  | 'hq'
  /** column name */
  | 'is_agile'
  /** column name */
  | 'layoff'
  /** column name */
  | 'news'
  /** column name */
  | 'total_employees'
  /** column name */
  | 'website_url'
  /** column name */
  | 'wikipedia_url';

export type Tb_4d10c208adc8_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Tb_4d10c208adc8_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Tb_4d10c208adc8_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Tb_4d10c208adc8_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Tb_4d10c208adc8_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Tb_4d10c208adc8_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_4d10c208adc8_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_4d10c208adc8_Bool_Exp;
};

/** columns and relationships of "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e = {
  __typename?: 'tb_8a3e5ae9851e';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _is_selected: Scalars['Boolean'];
  _up: Scalars['timestamptz'];
  ai_column_1?: Maybe<Scalars['String']>;
  ai_column_2?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Aggregate = {
  __typename?: 'tb_8a3e5ae9851e_aggregate';
  aggregate?: Maybe<Tb_8a3e5ae9851e_Aggregate_Fields>;
  nodes: Array<Tb_8a3e5ae9851e>;
};

/** aggregate fields of "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Aggregate_Fields = {
  __typename?: 'tb_8a3e5ae9851e_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_8a3e5ae9851e_Max_Fields>;
  min?: Maybe<Tb_8a3e5ae9851e_Min_Fields>;
};


/** aggregate fields of "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_8a3e5ae9851e_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_8a3e5ae9851e". All fields are combined with a logical 'AND'. */
export type Tb_8a3e5ae9851e_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_8a3e5ae9851e_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  _not?: InputMaybe<Tb_8a3e5ae9851e_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_8a3e5ae9851e_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  ai_column_1?: InputMaybe<String_Comparison_Exp>;
  ai_column_2?: InputMaybe<String_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_8a3e5ae9851e__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_8a3e5ae9851e_pk';

/** input type for inserting data into table "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_1?: InputMaybe<Scalars['String']>;
  ai_column_2?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_8a3e5ae9851e_Max_Fields = {
  __typename?: 'tb_8a3e5ae9851e_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  ai_column_1?: Maybe<Scalars['String']>;
  ai_column_2?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_8a3e5ae9851e_Min_Fields = {
  __typename?: 'tb_8a3e5ae9851e_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  ai_column_1?: Maybe<Scalars['String']>;
  ai_column_2?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Mutation_Response = {
  __typename?: 'tb_8a3e5ae9851e_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_8a3e5ae9851e>;
};

/** on_conflict condition type for table "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_On_Conflict = {
  constraint: Tb_8a3e5ae9851e_Constraint;
  update_columns?: Array<Tb_8a3e5ae9851e_Update_Column>;
  where?: InputMaybe<Tb_8a3e5ae9851e_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_8a3e5ae9851e". */
export type Tb_8a3e5ae9851e_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _is_selected?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  ai_column_1?: InputMaybe<Order_By>;
  ai_column_2?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_8a3e5ae9851e */
export type Tb_8a3e5ae9851e_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_column_1'
  /** column name */
  | 'ai_column_2'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_1?: InputMaybe<Scalars['String']>;
  ai_column_2?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_8a3e5ae9851e_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_8a3e5ae9851e_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_1?: InputMaybe<Scalars['String']>;
  ai_column_2?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_8a3e5ae9851e" */
export type Tb_8a3e5ae9851e_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_column_1'
  /** column name */
  | 'ai_column_2'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_8a3e5ae9851e_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_8a3e5ae9851e_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_8a3e5ae9851e_Bool_Exp;
};

/** columns and relationships of "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies = {
  __typename?: 'tb_8c0d_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Aggregate = {
  __typename?: 'tb_8c0d_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_8c0d_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_8c0d_Techstars_Companies>;
};

/** aggregate fields of "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_8c0d_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_8c0d_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_8c0d_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_8c0d_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_8c0d_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_8c0d_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_8c0d_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_8c0d_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_8c0d_techstars_companies_pk';

/** input type for inserting data into table "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_8c0d_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_8c0d_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_8c0d_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_8c0d_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_8c0d_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_8c0d_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_On_Conflict = {
  constraint: Tb_8c0d_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_8c0d_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_8c0d_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_8c0d_techstars_companies". */
export type Tb_8c0d_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_8c0d_techstars_companies */
export type Tb_8c0d_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_8c0d_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_8c0d_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_8c0d_techstars_companies" */
export type Tb_8c0d_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_8c0d_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_8c0d_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_8c0d_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies = {
  __typename?: 'tb_8f3a_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  ai_column_5?: Maybe<Scalars['jsonb']>;
  ai_column_6?: Maybe<Scalars['jsonb']>;
  ai_column_7?: Maybe<Scalars['jsonb']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};


/** columns and relationships of "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_CompaniesAi_Column_5Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_CompaniesAi_Column_6Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_CompaniesAi_Column_7Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Aggregate = {
  __typename?: 'tb_8f3a_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_8f3a_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_8f3a_Techstars_Companies>;
};

/** aggregate fields of "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_8f3a_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_8f3a_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_8f3a_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tb_8f3a_Techstars_Companies_Append_Input = {
  ai_column_5?: InputMaybe<Scalars['jsonb']>;
  ai_column_6?: InputMaybe<Scalars['jsonb']>;
  ai_column_7?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "tb_8f3a_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_8f3a_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_8f3a_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_8f3a_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  ai_column_5?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_6?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_7?: InputMaybe<Jsonb_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_8f3a_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_8f3a_techstars_companies_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tb_8f3a_Techstars_Companies_Delete_At_Path_Input = {
  ai_column_5?: InputMaybe<Array<Scalars['String']>>;
  ai_column_6?: InputMaybe<Array<Scalars['String']>>;
  ai_column_7?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tb_8f3a_Techstars_Companies_Delete_Elem_Input = {
  ai_column_5?: InputMaybe<Scalars['Int']>;
  ai_column_6?: InputMaybe<Scalars['Int']>;
  ai_column_7?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tb_8f3a_Techstars_Companies_Delete_Key_Input = {
  ai_column_5?: InputMaybe<Scalars['String']>;
  ai_column_6?: InputMaybe<Scalars['String']>;
  ai_column_7?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_5?: InputMaybe<Scalars['jsonb']>;
  ai_column_6?: InputMaybe<Scalars['jsonb']>;
  ai_column_7?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_8f3a_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_8f3a_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_8f3a_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_8f3a_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_8f3a_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_8f3a_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_On_Conflict = {
  constraint: Tb_8f3a_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_8f3a_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_8f3a_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_8f3a_techstars_companies". */
export type Tb_8f3a_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  ai_column_5?: InputMaybe<Order_By>;
  ai_column_6?: InputMaybe<Order_By>;
  ai_column_7?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_8f3a_techstars_companies */
export type Tb_8f3a_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tb_8f3a_Techstars_Companies_Prepend_Input = {
  ai_column_5?: InputMaybe<Scalars['jsonb']>;
  ai_column_6?: InputMaybe<Scalars['jsonb']>;
  ai_column_7?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_column_5'
  /** column name */
  | 'ai_column_6'
  /** column name */
  | 'ai_column_7'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_5?: InputMaybe<Scalars['jsonb']>;
  ai_column_6?: InputMaybe<Scalars['jsonb']>;
  ai_column_7?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_8f3a_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_8f3a_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_5?: InputMaybe<Scalars['jsonb']>;
  ai_column_6?: InputMaybe<Scalars['jsonb']>;
  ai_column_7?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_8f3a_techstars_companies" */
export type Tb_8f3a_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_column_5'
  /** column name */
  | 'ai_column_6'
  /** column name */
  | 'ai_column_7'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_8f3a_Techstars_Companies_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Tb_8f3a_Techstars_Companies_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Tb_8f3a_Techstars_Companies_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Tb_8f3a_Techstars_Companies_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_8f3a_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_8f3a_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_9ae55ff65521" */
export type Tb_9ae55ff65521 = {
  __typename?: 'tb_9ae55ff65521';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _is_selected: Scalars['Boolean'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Aggregate = {
  __typename?: 'tb_9ae55ff65521_aggregate';
  aggregate?: Maybe<Tb_9ae55ff65521_Aggregate_Fields>;
  nodes: Array<Tb_9ae55ff65521>;
};

/** aggregate fields of "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Aggregate_Fields = {
  __typename?: 'tb_9ae55ff65521_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_9ae55ff65521_Max_Fields>;
  min?: Maybe<Tb_9ae55ff65521_Min_Fields>;
};


/** aggregate fields of "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_9ae55ff65521_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_9ae55ff65521". All fields are combined with a logical 'AND'. */
export type Tb_9ae55ff65521_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_9ae55ff65521_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  _not?: InputMaybe<Tb_9ae55ff65521_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_9ae55ff65521_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9ae55ff65521__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9ae55ff65521_pk';

/** input type for inserting data into table "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_9ae55ff65521_Max_Fields = {
  __typename?: 'tb_9ae55ff65521_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_9ae55ff65521_Min_Fields = {
  __typename?: 'tb_9ae55ff65521_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Mutation_Response = {
  __typename?: 'tb_9ae55ff65521_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_9ae55ff65521>;
};

/** on_conflict condition type for table "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_On_Conflict = {
  constraint: Tb_9ae55ff65521_Constraint;
  update_columns?: Array<Tb_9ae55ff65521_Update_Column>;
  where?: InputMaybe<Tb_9ae55ff65521_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_9ae55ff65521". */
export type Tb_9ae55ff65521_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _is_selected?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_9ae55ff65521 */
export type Tb_9ae55ff65521_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_9ae55ff65521_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_9ae55ff65521_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_9ae55ff65521" */
export type Tb_9ae55ff65521_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_9ae55ff65521_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_9ae55ff65521_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_9ae55ff65521_Bool_Exp;
};

/** columns and relationships of "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies = {
  __typename?: 'tb_9b4e_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Aggregate = {
  __typename?: 'tb_9b4e_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_9b4e_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_9b4e_Techstars_Companies>;
};

/** aggregate fields of "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_9b4e_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_9b4e_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_9b4e_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_9b4e_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_9b4e_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_9b4e_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_9b4e_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9b4e_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9b4e_techstars_companies_pk';

/** input type for inserting data into table "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_9b4e_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_9b4e_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_9b4e_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_9b4e_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_9b4e_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_9b4e_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_On_Conflict = {
  constraint: Tb_9b4e_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_9b4e_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_9b4e_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_9b4e_techstars_companies". */
export type Tb_9b4e_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_9b4e_techstars_companies */
export type Tb_9b4e_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_9b4e_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_9b4e_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_9b4e_techstars_companies" */
export type Tb_9b4e_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_9b4e_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_9b4e_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_9b4e_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa = {
  __typename?: 'tb_9bed8f8cd4fa';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _is_selected: Scalars['Boolean'];
  _up: Scalars['timestamptz'];
  account_owner?: Maybe<Scalars['String']>;
  annual_revenue?: Maybe<Scalars['float8']>;
  apollo_account_id?: Maybe<Scalars['String']>;
  apollo_contact_id?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  company_address?: Maybe<Scalars['String']>;
  company_city?: Maybe<Scalars['String']>;
  company_country?: Maybe<Scalars['String']>;
  company_linkedin_url?: Maybe<Scalars['String']>;
  company_name_for_emails?: Maybe<Scalars['String']>;
  company_phone?: Maybe<Scalars['String']>;
  company_state?: Maybe<Scalars['String']>;
  contact_owner?: Maybe<Scalars['String']>;
  corporate_phone?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  demoed?: Maybe<Scalars['Boolean']>;
  departments?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_bounced?: Maybe<Scalars['Boolean']>;
  email_confidence?: Maybe<Scalars['float8']>;
  email_open?: Maybe<Scalars['Boolean']>;
  email_sent?: Maybe<Scalars['String']>;
  email_status?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  facebook_url?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  first_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['float8']>;
  industry?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  last_contacted?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_raised_at?: Maybe<Scalars['String']>;
  latest_funding?: Maybe<Scalars['String']>;
  latest_funding_amount?: Maybe<Scalars['float8']>;
  lists?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['float8']>;
  number_of_retail_locations?: Maybe<Scalars['float8']>;
  other_phone?: Maybe<Scalars['float8']>;
  person_linkedin_url?: Maybe<Scalars['String']>;
  replied?: Maybe<Scalars['Boolean']>;
  seniority?: Maybe<Scalars['String']>;
  seo_description?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  technologies?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total_funding?: Maybe<Scalars['float8']>;
  twitter_url?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  work_direct_phone?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Aggregate = {
  __typename?: 'tb_9bed8f8cd4fa_aggregate';
  aggregate?: Maybe<Tb_9bed8f8cd4fa_Aggregate_Fields>;
  nodes: Array<Tb_9bed8f8cd4fa>;
};

/** aggregate fields of "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Aggregate_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_aggregate_fields';
  avg?: Maybe<Tb_9bed8f8cd4fa_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tb_9bed8f8cd4fa_Max_Fields>;
  min?: Maybe<Tb_9bed8f8cd4fa_Min_Fields>;
  stddev?: Maybe<Tb_9bed8f8cd4fa_Stddev_Fields>;
  stddev_pop?: Maybe<Tb_9bed8f8cd4fa_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tb_9bed8f8cd4fa_Stddev_Samp_Fields>;
  sum?: Maybe<Tb_9bed8f8cd4fa_Sum_Fields>;
  var_pop?: Maybe<Tb_9bed8f8cd4fa_Var_Pop_Fields>;
  var_samp?: Maybe<Tb_9bed8f8cd4fa_Var_Samp_Fields>;
  variance?: Maybe<Tb_9bed8f8cd4fa_Variance_Fields>;
};


/** aggregate fields of "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_9bed8f8cd4fa_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tb_9bed8f8cd4fa_Avg_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_avg_fields';
  annual_revenue?: Maybe<Scalars['Float']>;
  email_confidence?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Float']>;
  home_phone?: Maybe<Scalars['Float']>;
  latest_funding_amount?: Maybe<Scalars['Float']>;
  mobile_phone?: Maybe<Scalars['Float']>;
  number_of_retail_locations?: Maybe<Scalars['Float']>;
  other_phone?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  work_direct_phone?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tb_9bed8f8cd4fa". All fields are combined with a logical 'AND'. */
export type Tb_9bed8f8cd4fa_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_9bed8f8cd4fa_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  _not?: InputMaybe<Tb_9bed8f8cd4fa_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_9bed8f8cd4fa_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  account_owner?: InputMaybe<String_Comparison_Exp>;
  annual_revenue?: InputMaybe<Float8_Comparison_Exp>;
  apollo_account_id?: InputMaybe<String_Comparison_Exp>;
  apollo_contact_id?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  company?: InputMaybe<String_Comparison_Exp>;
  company_address?: InputMaybe<String_Comparison_Exp>;
  company_city?: InputMaybe<String_Comparison_Exp>;
  company_country?: InputMaybe<String_Comparison_Exp>;
  company_linkedin_url?: InputMaybe<String_Comparison_Exp>;
  company_name_for_emails?: InputMaybe<String_Comparison_Exp>;
  company_phone?: InputMaybe<String_Comparison_Exp>;
  company_state?: InputMaybe<String_Comparison_Exp>;
  contact_owner?: InputMaybe<String_Comparison_Exp>;
  corporate_phone?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  demoed?: InputMaybe<Boolean_Comparison_Exp>;
  departments?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_bounced?: InputMaybe<Boolean_Comparison_Exp>;
  email_confidence?: InputMaybe<Float8_Comparison_Exp>;
  email_open?: InputMaybe<Boolean_Comparison_Exp>;
  email_sent?: InputMaybe<String_Comparison_Exp>;
  email_status?: InputMaybe<String_Comparison_Exp>;
  employees?: InputMaybe<Int_Comparison_Exp>;
  facebook_url?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  first_phone?: InputMaybe<String_Comparison_Exp>;
  home_phone?: InputMaybe<Float8_Comparison_Exp>;
  industry?: InputMaybe<String_Comparison_Exp>;
  keywords?: InputMaybe<String_Comparison_Exp>;
  last_contacted?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_raised_at?: InputMaybe<String_Comparison_Exp>;
  latest_funding?: InputMaybe<String_Comparison_Exp>;
  latest_funding_amount?: InputMaybe<Float8_Comparison_Exp>;
  lists?: InputMaybe<String_Comparison_Exp>;
  mobile_phone?: InputMaybe<Float8_Comparison_Exp>;
  number_of_retail_locations?: InputMaybe<Float8_Comparison_Exp>;
  other_phone?: InputMaybe<Float8_Comparison_Exp>;
  person_linkedin_url?: InputMaybe<String_Comparison_Exp>;
  replied?: InputMaybe<Boolean_Comparison_Exp>;
  seniority?: InputMaybe<String_Comparison_Exp>;
  seo_description?: InputMaybe<String_Comparison_Exp>;
  stage?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  technologies?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  total_funding?: InputMaybe<Float8_Comparison_Exp>;
  twitter_url?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
  work_direct_phone?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9bed8f8cd4fa__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9bed8f8cd4fa_pk';

/** input type for incrementing numeric columns in table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Inc_Input = {
  annual_revenue?: InputMaybe<Scalars['float8']>;
  email_confidence?: InputMaybe<Scalars['float8']>;
  employees?: InputMaybe<Scalars['Int']>;
  home_phone?: InputMaybe<Scalars['float8']>;
  latest_funding_amount?: InputMaybe<Scalars['float8']>;
  mobile_phone?: InputMaybe<Scalars['float8']>;
  number_of_retail_locations?: InputMaybe<Scalars['float8']>;
  other_phone?: InputMaybe<Scalars['float8']>;
  total_funding?: InputMaybe<Scalars['float8']>;
  work_direct_phone?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  account_owner?: InputMaybe<Scalars['String']>;
  annual_revenue?: InputMaybe<Scalars['float8']>;
  apollo_account_id?: InputMaybe<Scalars['String']>;
  apollo_contact_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  company_address?: InputMaybe<Scalars['String']>;
  company_city?: InputMaybe<Scalars['String']>;
  company_country?: InputMaybe<Scalars['String']>;
  company_linkedin_url?: InputMaybe<Scalars['String']>;
  company_name_for_emails?: InputMaybe<Scalars['String']>;
  company_phone?: InputMaybe<Scalars['String']>;
  company_state?: InputMaybe<Scalars['String']>;
  contact_owner?: InputMaybe<Scalars['String']>;
  corporate_phone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  demoed?: InputMaybe<Scalars['Boolean']>;
  departments?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_bounced?: InputMaybe<Scalars['Boolean']>;
  email_confidence?: InputMaybe<Scalars['float8']>;
  email_open?: InputMaybe<Scalars['Boolean']>;
  email_sent?: InputMaybe<Scalars['String']>;
  email_status?: InputMaybe<Scalars['String']>;
  employees?: InputMaybe<Scalars['Int']>;
  facebook_url?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  first_phone?: InputMaybe<Scalars['String']>;
  home_phone?: InputMaybe<Scalars['float8']>;
  industry?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  last_contacted?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_raised_at?: InputMaybe<Scalars['String']>;
  latest_funding?: InputMaybe<Scalars['String']>;
  latest_funding_amount?: InputMaybe<Scalars['float8']>;
  lists?: InputMaybe<Scalars['String']>;
  mobile_phone?: InputMaybe<Scalars['float8']>;
  number_of_retail_locations?: InputMaybe<Scalars['float8']>;
  other_phone?: InputMaybe<Scalars['float8']>;
  person_linkedin_url?: InputMaybe<Scalars['String']>;
  replied?: InputMaybe<Scalars['Boolean']>;
  seniority?: InputMaybe<Scalars['String']>;
  seo_description?: InputMaybe<Scalars['String']>;
  stage?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  technologies?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  total_funding?: InputMaybe<Scalars['float8']>;
  twitter_url?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  work_direct_phone?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Tb_9bed8f8cd4fa_Max_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  account_owner?: Maybe<Scalars['String']>;
  annual_revenue?: Maybe<Scalars['float8']>;
  apollo_account_id?: Maybe<Scalars['String']>;
  apollo_contact_id?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  company_address?: Maybe<Scalars['String']>;
  company_city?: Maybe<Scalars['String']>;
  company_country?: Maybe<Scalars['String']>;
  company_linkedin_url?: Maybe<Scalars['String']>;
  company_name_for_emails?: Maybe<Scalars['String']>;
  company_phone?: Maybe<Scalars['String']>;
  company_state?: Maybe<Scalars['String']>;
  contact_owner?: Maybe<Scalars['String']>;
  corporate_phone?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  departments?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_confidence?: Maybe<Scalars['float8']>;
  email_sent?: Maybe<Scalars['String']>;
  email_status?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  facebook_url?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  first_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['float8']>;
  industry?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  last_contacted?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_raised_at?: Maybe<Scalars['String']>;
  latest_funding?: Maybe<Scalars['String']>;
  latest_funding_amount?: Maybe<Scalars['float8']>;
  lists?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['float8']>;
  number_of_retail_locations?: Maybe<Scalars['float8']>;
  other_phone?: Maybe<Scalars['float8']>;
  person_linkedin_url?: Maybe<Scalars['String']>;
  seniority?: Maybe<Scalars['String']>;
  seo_description?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  technologies?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total_funding?: Maybe<Scalars['float8']>;
  twitter_url?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  work_direct_phone?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Tb_9bed8f8cd4fa_Min_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  account_owner?: Maybe<Scalars['String']>;
  annual_revenue?: Maybe<Scalars['float8']>;
  apollo_account_id?: Maybe<Scalars['String']>;
  apollo_contact_id?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  company_address?: Maybe<Scalars['String']>;
  company_city?: Maybe<Scalars['String']>;
  company_country?: Maybe<Scalars['String']>;
  company_linkedin_url?: Maybe<Scalars['String']>;
  company_name_for_emails?: Maybe<Scalars['String']>;
  company_phone?: Maybe<Scalars['String']>;
  company_state?: Maybe<Scalars['String']>;
  contact_owner?: Maybe<Scalars['String']>;
  corporate_phone?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  departments?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_confidence?: Maybe<Scalars['float8']>;
  email_sent?: Maybe<Scalars['String']>;
  email_status?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  facebook_url?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  first_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['float8']>;
  industry?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  last_contacted?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_raised_at?: Maybe<Scalars['String']>;
  latest_funding?: Maybe<Scalars['String']>;
  latest_funding_amount?: Maybe<Scalars['float8']>;
  lists?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['float8']>;
  number_of_retail_locations?: Maybe<Scalars['float8']>;
  other_phone?: Maybe<Scalars['float8']>;
  person_linkedin_url?: Maybe<Scalars['String']>;
  seniority?: Maybe<Scalars['String']>;
  seo_description?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  technologies?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total_funding?: Maybe<Scalars['float8']>;
  twitter_url?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  work_direct_phone?: Maybe<Scalars['float8']>;
};

/** response of any mutation on the table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Mutation_Response = {
  __typename?: 'tb_9bed8f8cd4fa_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_9bed8f8cd4fa>;
};

/** on_conflict condition type for table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_On_Conflict = {
  constraint: Tb_9bed8f8cd4fa_Constraint;
  update_columns?: Array<Tb_9bed8f8cd4fa_Update_Column>;
  where?: InputMaybe<Tb_9bed8f8cd4fa_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_9bed8f8cd4fa". */
export type Tb_9bed8f8cd4fa_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _is_selected?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  account_owner?: InputMaybe<Order_By>;
  annual_revenue?: InputMaybe<Order_By>;
  apollo_account_id?: InputMaybe<Order_By>;
  apollo_contact_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  company?: InputMaybe<Order_By>;
  company_address?: InputMaybe<Order_By>;
  company_city?: InputMaybe<Order_By>;
  company_country?: InputMaybe<Order_By>;
  company_linkedin_url?: InputMaybe<Order_By>;
  company_name_for_emails?: InputMaybe<Order_By>;
  company_phone?: InputMaybe<Order_By>;
  company_state?: InputMaybe<Order_By>;
  contact_owner?: InputMaybe<Order_By>;
  corporate_phone?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  demoed?: InputMaybe<Order_By>;
  departments?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_bounced?: InputMaybe<Order_By>;
  email_confidence?: InputMaybe<Order_By>;
  email_open?: InputMaybe<Order_By>;
  email_sent?: InputMaybe<Order_By>;
  email_status?: InputMaybe<Order_By>;
  employees?: InputMaybe<Order_By>;
  facebook_url?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  first_phone?: InputMaybe<Order_By>;
  home_phone?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  last_contacted?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_raised_at?: InputMaybe<Order_By>;
  latest_funding?: InputMaybe<Order_By>;
  latest_funding_amount?: InputMaybe<Order_By>;
  lists?: InputMaybe<Order_By>;
  mobile_phone?: InputMaybe<Order_By>;
  number_of_retail_locations?: InputMaybe<Order_By>;
  other_phone?: InputMaybe<Order_By>;
  person_linkedin_url?: InputMaybe<Order_By>;
  replied?: InputMaybe<Order_By>;
  seniority?: InputMaybe<Order_By>;
  seo_description?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  technologies?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  total_funding?: InputMaybe<Order_By>;
  twitter_url?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
  work_direct_phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_9bed8f8cd4fa */
export type Tb_9bed8f8cd4fa_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'account_owner'
  /** column name */
  | 'annual_revenue'
  /** column name */
  | 'apollo_account_id'
  /** column name */
  | 'apollo_contact_id'
  /** column name */
  | 'city'
  /** column name */
  | 'company'
  /** column name */
  | 'company_address'
  /** column name */
  | 'company_city'
  /** column name */
  | 'company_country'
  /** column name */
  | 'company_linkedin_url'
  /** column name */
  | 'company_name_for_emails'
  /** column name */
  | 'company_phone'
  /** column name */
  | 'company_state'
  /** column name */
  | 'contact_owner'
  /** column name */
  | 'corporate_phone'
  /** column name */
  | 'country'
  /** column name */
  | 'demoed'
  /** column name */
  | 'departments'
  /** column name */
  | 'email'
  /** column name */
  | 'email_bounced'
  /** column name */
  | 'email_confidence'
  /** column name */
  | 'email_open'
  /** column name */
  | 'email_sent'
  /** column name */
  | 'email_status'
  /** column name */
  | 'employees'
  /** column name */
  | 'facebook_url'
  /** column name */
  | 'first_name'
  /** column name */
  | 'first_phone'
  /** column name */
  | 'home_phone'
  /** column name */
  | 'industry'
  /** column name */
  | 'keywords'
  /** column name */
  | 'last_contacted'
  /** column name */
  | 'last_name'
  /** column name */
  | 'last_raised_at'
  /** column name */
  | 'latest_funding'
  /** column name */
  | 'latest_funding_amount'
  /** column name */
  | 'lists'
  /** column name */
  | 'mobile_phone'
  /** column name */
  | 'number_of_retail_locations'
  /** column name */
  | 'other_phone'
  /** column name */
  | 'person_linkedin_url'
  /** column name */
  | 'replied'
  /** column name */
  | 'seniority'
  /** column name */
  | 'seo_description'
  /** column name */
  | 'stage'
  /** column name */
  | 'state'
  /** column name */
  | 'technologies'
  /** column name */
  | 'title'
  /** column name */
  | 'total_funding'
  /** column name */
  | 'twitter_url'
  /** column name */
  | 'website'
  /** column name */
  | 'work_direct_phone';

/** input type for updating data in table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  account_owner?: InputMaybe<Scalars['String']>;
  annual_revenue?: InputMaybe<Scalars['float8']>;
  apollo_account_id?: InputMaybe<Scalars['String']>;
  apollo_contact_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  company_address?: InputMaybe<Scalars['String']>;
  company_city?: InputMaybe<Scalars['String']>;
  company_country?: InputMaybe<Scalars['String']>;
  company_linkedin_url?: InputMaybe<Scalars['String']>;
  company_name_for_emails?: InputMaybe<Scalars['String']>;
  company_phone?: InputMaybe<Scalars['String']>;
  company_state?: InputMaybe<Scalars['String']>;
  contact_owner?: InputMaybe<Scalars['String']>;
  corporate_phone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  demoed?: InputMaybe<Scalars['Boolean']>;
  departments?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_bounced?: InputMaybe<Scalars['Boolean']>;
  email_confidence?: InputMaybe<Scalars['float8']>;
  email_open?: InputMaybe<Scalars['Boolean']>;
  email_sent?: InputMaybe<Scalars['String']>;
  email_status?: InputMaybe<Scalars['String']>;
  employees?: InputMaybe<Scalars['Int']>;
  facebook_url?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  first_phone?: InputMaybe<Scalars['String']>;
  home_phone?: InputMaybe<Scalars['float8']>;
  industry?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  last_contacted?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_raised_at?: InputMaybe<Scalars['String']>;
  latest_funding?: InputMaybe<Scalars['String']>;
  latest_funding_amount?: InputMaybe<Scalars['float8']>;
  lists?: InputMaybe<Scalars['String']>;
  mobile_phone?: InputMaybe<Scalars['float8']>;
  number_of_retail_locations?: InputMaybe<Scalars['float8']>;
  other_phone?: InputMaybe<Scalars['float8']>;
  person_linkedin_url?: InputMaybe<Scalars['String']>;
  replied?: InputMaybe<Scalars['Boolean']>;
  seniority?: InputMaybe<Scalars['String']>;
  seo_description?: InputMaybe<Scalars['String']>;
  stage?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  technologies?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  total_funding?: InputMaybe<Scalars['float8']>;
  twitter_url?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  work_direct_phone?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Tb_9bed8f8cd4fa_Stddev_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_stddev_fields';
  annual_revenue?: Maybe<Scalars['Float']>;
  email_confidence?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Float']>;
  home_phone?: Maybe<Scalars['Float']>;
  latest_funding_amount?: Maybe<Scalars['Float']>;
  mobile_phone?: Maybe<Scalars['Float']>;
  number_of_retail_locations?: Maybe<Scalars['Float']>;
  other_phone?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  work_direct_phone?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tb_9bed8f8cd4fa_Stddev_Pop_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_stddev_pop_fields';
  annual_revenue?: Maybe<Scalars['Float']>;
  email_confidence?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Float']>;
  home_phone?: Maybe<Scalars['Float']>;
  latest_funding_amount?: Maybe<Scalars['Float']>;
  mobile_phone?: Maybe<Scalars['Float']>;
  number_of_retail_locations?: Maybe<Scalars['Float']>;
  other_phone?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  work_direct_phone?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tb_9bed8f8cd4fa_Stddev_Samp_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_stddev_samp_fields';
  annual_revenue?: Maybe<Scalars['Float']>;
  email_confidence?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Float']>;
  home_phone?: Maybe<Scalars['Float']>;
  latest_funding_amount?: Maybe<Scalars['Float']>;
  mobile_phone?: Maybe<Scalars['Float']>;
  number_of_retail_locations?: Maybe<Scalars['Float']>;
  other_phone?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  work_direct_phone?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_9bed8f8cd4fa_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_9bed8f8cd4fa_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  account_owner?: InputMaybe<Scalars['String']>;
  annual_revenue?: InputMaybe<Scalars['float8']>;
  apollo_account_id?: InputMaybe<Scalars['String']>;
  apollo_contact_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  company_address?: InputMaybe<Scalars['String']>;
  company_city?: InputMaybe<Scalars['String']>;
  company_country?: InputMaybe<Scalars['String']>;
  company_linkedin_url?: InputMaybe<Scalars['String']>;
  company_name_for_emails?: InputMaybe<Scalars['String']>;
  company_phone?: InputMaybe<Scalars['String']>;
  company_state?: InputMaybe<Scalars['String']>;
  contact_owner?: InputMaybe<Scalars['String']>;
  corporate_phone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  demoed?: InputMaybe<Scalars['Boolean']>;
  departments?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_bounced?: InputMaybe<Scalars['Boolean']>;
  email_confidence?: InputMaybe<Scalars['float8']>;
  email_open?: InputMaybe<Scalars['Boolean']>;
  email_sent?: InputMaybe<Scalars['String']>;
  email_status?: InputMaybe<Scalars['String']>;
  employees?: InputMaybe<Scalars['Int']>;
  facebook_url?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  first_phone?: InputMaybe<Scalars['String']>;
  home_phone?: InputMaybe<Scalars['float8']>;
  industry?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  last_contacted?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_raised_at?: InputMaybe<Scalars['String']>;
  latest_funding?: InputMaybe<Scalars['String']>;
  latest_funding_amount?: InputMaybe<Scalars['float8']>;
  lists?: InputMaybe<Scalars['String']>;
  mobile_phone?: InputMaybe<Scalars['float8']>;
  number_of_retail_locations?: InputMaybe<Scalars['float8']>;
  other_phone?: InputMaybe<Scalars['float8']>;
  person_linkedin_url?: InputMaybe<Scalars['String']>;
  replied?: InputMaybe<Scalars['Boolean']>;
  seniority?: InputMaybe<Scalars['String']>;
  seo_description?: InputMaybe<Scalars['String']>;
  stage?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  technologies?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  total_funding?: InputMaybe<Scalars['float8']>;
  twitter_url?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  work_direct_phone?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Tb_9bed8f8cd4fa_Sum_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_sum_fields';
  annual_revenue?: Maybe<Scalars['float8']>;
  email_confidence?: Maybe<Scalars['float8']>;
  employees?: Maybe<Scalars['Int']>;
  home_phone?: Maybe<Scalars['float8']>;
  latest_funding_amount?: Maybe<Scalars['float8']>;
  mobile_phone?: Maybe<Scalars['float8']>;
  number_of_retail_locations?: Maybe<Scalars['float8']>;
  other_phone?: Maybe<Scalars['float8']>;
  total_funding?: Maybe<Scalars['float8']>;
  work_direct_phone?: Maybe<Scalars['float8']>;
};

/** update columns of table "tb_9bed8f8cd4fa" */
export type Tb_9bed8f8cd4fa_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'account_owner'
  /** column name */
  | 'annual_revenue'
  /** column name */
  | 'apollo_account_id'
  /** column name */
  | 'apollo_contact_id'
  /** column name */
  | 'city'
  /** column name */
  | 'company'
  /** column name */
  | 'company_address'
  /** column name */
  | 'company_city'
  /** column name */
  | 'company_country'
  /** column name */
  | 'company_linkedin_url'
  /** column name */
  | 'company_name_for_emails'
  /** column name */
  | 'company_phone'
  /** column name */
  | 'company_state'
  /** column name */
  | 'contact_owner'
  /** column name */
  | 'corporate_phone'
  /** column name */
  | 'country'
  /** column name */
  | 'demoed'
  /** column name */
  | 'departments'
  /** column name */
  | 'email'
  /** column name */
  | 'email_bounced'
  /** column name */
  | 'email_confidence'
  /** column name */
  | 'email_open'
  /** column name */
  | 'email_sent'
  /** column name */
  | 'email_status'
  /** column name */
  | 'employees'
  /** column name */
  | 'facebook_url'
  /** column name */
  | 'first_name'
  /** column name */
  | 'first_phone'
  /** column name */
  | 'home_phone'
  /** column name */
  | 'industry'
  /** column name */
  | 'keywords'
  /** column name */
  | 'last_contacted'
  /** column name */
  | 'last_name'
  /** column name */
  | 'last_raised_at'
  /** column name */
  | 'latest_funding'
  /** column name */
  | 'latest_funding_amount'
  /** column name */
  | 'lists'
  /** column name */
  | 'mobile_phone'
  /** column name */
  | 'number_of_retail_locations'
  /** column name */
  | 'other_phone'
  /** column name */
  | 'person_linkedin_url'
  /** column name */
  | 'replied'
  /** column name */
  | 'seniority'
  /** column name */
  | 'seo_description'
  /** column name */
  | 'stage'
  /** column name */
  | 'state'
  /** column name */
  | 'technologies'
  /** column name */
  | 'title'
  /** column name */
  | 'total_funding'
  /** column name */
  | 'twitter_url'
  /** column name */
  | 'website'
  /** column name */
  | 'work_direct_phone';

export type Tb_9bed8f8cd4fa_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tb_9bed8f8cd4fa_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_9bed8f8cd4fa_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_9bed8f8cd4fa_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tb_9bed8f8cd4fa_Var_Pop_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_var_pop_fields';
  annual_revenue?: Maybe<Scalars['Float']>;
  email_confidence?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Float']>;
  home_phone?: Maybe<Scalars['Float']>;
  latest_funding_amount?: Maybe<Scalars['Float']>;
  mobile_phone?: Maybe<Scalars['Float']>;
  number_of_retail_locations?: Maybe<Scalars['Float']>;
  other_phone?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  work_direct_phone?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tb_9bed8f8cd4fa_Var_Samp_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_var_samp_fields';
  annual_revenue?: Maybe<Scalars['Float']>;
  email_confidence?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Float']>;
  home_phone?: Maybe<Scalars['Float']>;
  latest_funding_amount?: Maybe<Scalars['Float']>;
  mobile_phone?: Maybe<Scalars['Float']>;
  number_of_retail_locations?: Maybe<Scalars['Float']>;
  other_phone?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  work_direct_phone?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tb_9bed8f8cd4fa_Variance_Fields = {
  __typename?: 'tb_9bed8f8cd4fa_variance_fields';
  annual_revenue?: Maybe<Scalars['Float']>;
  email_confidence?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Float']>;
  home_phone?: Maybe<Scalars['Float']>;
  latest_funding_amount?: Maybe<Scalars['Float']>;
  mobile_phone?: Maybe<Scalars['Float']>;
  number_of_retail_locations?: Maybe<Scalars['Float']>;
  other_phone?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  work_direct_phone?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies = {
  __typename?: 'tb_9cab_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Aggregate = {
  __typename?: 'tb_9cab_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_9cab_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_9cab_Techstars_Companies>;
};

/** aggregate fields of "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_9cab_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_9cab_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_9cab_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_9cab_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_9cab_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_9cab_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_9cab_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9cab_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9cab_techstars_companies_pk';

/** input type for inserting data into table "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_9cab_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_9cab_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_9cab_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_9cab_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_9cab_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_9cab_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_On_Conflict = {
  constraint: Tb_9cab_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_9cab_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_9cab_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_9cab_techstars_companies". */
export type Tb_9cab_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_9cab_techstars_companies */
export type Tb_9cab_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_9cab_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_9cab_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_9cab_techstars_companies" */
export type Tb_9cab_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_9cab_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_9cab_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_9cab_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies = {
  __typename?: 'tb_9d66_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Aggregate = {
  __typename?: 'tb_9d66_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_9d66_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_9d66_Techstars_Companies>;
};

/** aggregate fields of "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_9d66_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_9d66_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_9d66_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_9d66_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_9d66_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_9d66_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_9d66_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9d66_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9d66_techstars_companies_pk';

/** input type for inserting data into table "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_9d66_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_9d66_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_9d66_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_9d66_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_9d66_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_9d66_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_On_Conflict = {
  constraint: Tb_9d66_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_9d66_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_9d66_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_9d66_techstars_companies". */
export type Tb_9d66_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_9d66_techstars_companies */
export type Tb_9d66_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_9d66_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_9d66_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_9d66_techstars_companies" */
export type Tb_9d66_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_9d66_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_9d66_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_9d66_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc = {
  __typename?: 'tb_14a707ad0fcc';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Aggregate = {
  __typename?: 'tb_14a707ad0fcc_aggregate';
  aggregate?: Maybe<Tb_14a707ad0fcc_Aggregate_Fields>;
  nodes: Array<Tb_14a707ad0fcc>;
};

/** aggregate fields of "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Aggregate_Fields = {
  __typename?: 'tb_14a707ad0fcc_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_14a707ad0fcc_Max_Fields>;
  min?: Maybe<Tb_14a707ad0fcc_Min_Fields>;
};


/** aggregate fields of "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_14a707ad0fcc_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_14a707ad0fcc". All fields are combined with a logical 'AND'. */
export type Tb_14a707ad0fcc_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_14a707ad0fcc_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_14a707ad0fcc_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_14a707ad0fcc_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_14a707ad0fcc__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_14a707ad0fcc_pk';

/** input type for inserting data into table "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_14a707ad0fcc_Max_Fields = {
  __typename?: 'tb_14a707ad0fcc_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_14a707ad0fcc_Min_Fields = {
  __typename?: 'tb_14a707ad0fcc_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Mutation_Response = {
  __typename?: 'tb_14a707ad0fcc_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_14a707ad0fcc>;
};

/** on_conflict condition type for table "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_On_Conflict = {
  constraint: Tb_14a707ad0fcc_Constraint;
  update_columns?: Array<Tb_14a707ad0fcc_Update_Column>;
  where?: InputMaybe<Tb_14a707ad0fcc_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_14a707ad0fcc". */
export type Tb_14a707ad0fcc_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_14a707ad0fcc */
export type Tb_14a707ad0fcc_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_14a707ad0fcc_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_14a707ad0fcc_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_14a707ad0fcc" */
export type Tb_14a707ad0fcc_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_14a707ad0fcc_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_14a707ad0fcc_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_14a707ad0fcc_Bool_Exp;
};

/** columns and relationships of "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c = {
  __typename?: 'tb_66e8f877ca5c';
  Company_CEO_?: Maybe<Scalars['jsonb']>;
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};


/** columns and relationships of "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5cCompany_Ceo_Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Aggregate = {
  __typename?: 'tb_66e8f877ca5c_aggregate';
  aggregate?: Maybe<Tb_66e8f877ca5c_Aggregate_Fields>;
  nodes: Array<Tb_66e8f877ca5c>;
};

/** aggregate fields of "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Aggregate_Fields = {
  __typename?: 'tb_66e8f877ca5c_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_66e8f877ca5c_Max_Fields>;
  min?: Maybe<Tb_66e8f877ca5c_Min_Fields>;
};


/** aggregate fields of "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_66e8f877ca5c_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tb_66e8f877ca5c_Append_Input = {
  Company_CEO_?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "tb_66e8f877ca5c". All fields are combined with a logical 'AND'. */
export type Tb_66e8f877ca5c_Bool_Exp = {
  Company_CEO_?: InputMaybe<Jsonb_Comparison_Exp>;
  _and?: InputMaybe<Array<Tb_66e8f877ca5c_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_66e8f877ca5c_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_66e8f877ca5c_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_66e8f877ca5c__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_66e8f877ca5c_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tb_66e8f877ca5c_Delete_At_Path_Input = {
  Company_CEO_?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tb_66e8f877ca5c_Delete_Elem_Input = {
  Company_CEO_?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tb_66e8f877ca5c_Delete_Key_Input = {
  Company_CEO_?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Insert_Input = {
  Company_CEO_?: InputMaybe<Scalars['jsonb']>;
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_66e8f877ca5c_Max_Fields = {
  __typename?: 'tb_66e8f877ca5c_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_66e8f877ca5c_Min_Fields = {
  __typename?: 'tb_66e8f877ca5c_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Mutation_Response = {
  __typename?: 'tb_66e8f877ca5c_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_66e8f877ca5c>;
};

/** on_conflict condition type for table "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_On_Conflict = {
  constraint: Tb_66e8f877ca5c_Constraint;
  update_columns?: Array<Tb_66e8f877ca5c_Update_Column>;
  where?: InputMaybe<Tb_66e8f877ca5c_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_66e8f877ca5c". */
export type Tb_66e8f877ca5c_Order_By = {
  Company_CEO_?: InputMaybe<Order_By>;
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_66e8f877ca5c */
export type Tb_66e8f877ca5c_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tb_66e8f877ca5c_Prepend_Input = {
  Company_CEO_?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Select_Column =
  /** column name */
  | 'Company_CEO_'
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Set_Input = {
  Company_CEO_?: InputMaybe<Scalars['jsonb']>;
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_66e8f877ca5c_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_66e8f877ca5c_Stream_Cursor_Value_Input = {
  Company_CEO_?: InputMaybe<Scalars['jsonb']>;
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_66e8f877ca5c" */
export type Tb_66e8f877ca5c_Update_Column =
  /** column name */
  | 'Company_CEO_'
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_66e8f877ca5c_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Tb_66e8f877ca5c_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Tb_66e8f877ca5c_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Tb_66e8f877ca5c_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Tb_66e8f877ca5c_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Tb_66e8f877ca5c_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_66e8f877ca5c_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_66e8f877ca5c_Bool_Exp;
};

/** columns and relationships of "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies = {
  __typename?: 'tb_88fb_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Aggregate = {
  __typename?: 'tb_88fb_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_88fb_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_88fb_Techstars_Companies>;
};

/** aggregate fields of "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_88fb_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_88fb_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_88fb_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_88fb_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_88fb_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_88fb_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_88fb_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_88fb_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_88fb_techstars_companies_pk';

/** input type for inserting data into table "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_88fb_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_88fb_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_88fb_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_88fb_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_88fb_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_88fb_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_On_Conflict = {
  constraint: Tb_88fb_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_88fb_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_88fb_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_88fb_techstars_companies". */
export type Tb_88fb_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_88fb_techstars_companies */
export type Tb_88fb_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_88fb_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_88fb_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_88fb_techstars_companies" */
export type Tb_88fb_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_88fb_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_88fb_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_88fb_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies = {
  __typename?: 'tb_96fa_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Aggregate = {
  __typename?: 'tb_96fa_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_96fa_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_96fa_Techstars_Companies>;
};

/** aggregate fields of "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_96fa_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_96fa_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_96fa_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_96fa_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_96fa_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_96fa_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_96fa_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_96fa_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_96fa_techstars_companies_pk';

/** input type for inserting data into table "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_96fa_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_96fa_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_96fa_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_96fa_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_96fa_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_96fa_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_On_Conflict = {
  constraint: Tb_96fa_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_96fa_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_96fa_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_96fa_techstars_companies". */
export type Tb_96fa_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_96fa_techstars_companies */
export type Tb_96fa_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_96fa_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_96fa_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_96fa_techstars_companies" */
export type Tb_96fa_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_96fa_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_96fa_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_96fa_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4 = {
  __typename?: 'tb_140d8afc9ce4';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _is_selected: Scalars['Boolean'];
  _up: Scalars['timestamptz'];
  ai_column_13?: Maybe<Scalars['jsonb']>;
  ai_column_14?: Maybe<Scalars['jsonb']>;
  ai_column_15?: Maybe<Scalars['jsonb']>;
  ai_column_16?: Maybe<Scalars['jsonb']>;
  company_name?: Maybe<Scalars['String']>;
  employee_count?: Maybe<Scalars['jsonb']>;
  geo_region?: Maybe<Scalars['String']>;
  has_raised?: Maybe<Scalars['jsonb']>;
  has_raised_01?: Maybe<Scalars['jsonb']>;
  hq?: Maybe<Scalars['String']>;
  is_agile: Scalars['jsonb'];
  layoffs?: Maybe<Scalars['jsonb']>;
  location?: Maybe<Scalars['jsonb']>;
  total_employees?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  wikipedia_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4Ai_Column_13Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4Ai_Column_14Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4Ai_Column_15Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4Ai_Column_16Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4Employee_CountArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4Has_RaisedArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4Has_Raised_01Args = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4Is_AgileArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4LayoffsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4LocationArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Aggregate = {
  __typename?: 'tb_140d8afc9ce4_aggregate';
  aggregate?: Maybe<Tb_140d8afc9ce4_Aggregate_Fields>;
  nodes: Array<Tb_140d8afc9ce4>;
};

/** aggregate fields of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Aggregate_Fields = {
  __typename?: 'tb_140d8afc9ce4_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_140d8afc9ce4_Max_Fields>;
  min?: Maybe<Tb_140d8afc9ce4_Min_Fields>;
};


/** aggregate fields of "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_140d8afc9ce4_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tb_140d8afc9ce4_Append_Input = {
  ai_column_13?: InputMaybe<Scalars['jsonb']>;
  ai_column_14?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  employee_count?: InputMaybe<Scalars['jsonb']>;
  has_raised?: InputMaybe<Scalars['jsonb']>;
  has_raised_01?: InputMaybe<Scalars['jsonb']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoffs?: InputMaybe<Scalars['jsonb']>;
  location?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "tb_140d8afc9ce4". All fields are combined with a logical 'AND'. */
export type Tb_140d8afc9ce4_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_140d8afc9ce4_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  _not?: InputMaybe<Tb_140d8afc9ce4_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_140d8afc9ce4_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  ai_column_13?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_14?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_15?: InputMaybe<Jsonb_Comparison_Exp>;
  ai_column_16?: InputMaybe<Jsonb_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  employee_count?: InputMaybe<Jsonb_Comparison_Exp>;
  geo_region?: InputMaybe<String_Comparison_Exp>;
  has_raised?: InputMaybe<Jsonb_Comparison_Exp>;
  has_raised_01?: InputMaybe<Jsonb_Comparison_Exp>;
  hq?: InputMaybe<String_Comparison_Exp>;
  is_agile?: InputMaybe<Jsonb_Comparison_Exp>;
  layoffs?: InputMaybe<Jsonb_Comparison_Exp>;
  location?: InputMaybe<Jsonb_Comparison_Exp>;
  total_employees?: InputMaybe<String_Comparison_Exp>;
  website_url?: InputMaybe<String_Comparison_Exp>;
  wikipedia_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_140d8afc9ce4__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_140d8afc9ce4_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tb_140d8afc9ce4_Delete_At_Path_Input = {
  ai_column_13?: InputMaybe<Array<Scalars['String']>>;
  ai_column_14?: InputMaybe<Array<Scalars['String']>>;
  ai_column_15?: InputMaybe<Array<Scalars['String']>>;
  ai_column_16?: InputMaybe<Array<Scalars['String']>>;
  employee_count?: InputMaybe<Array<Scalars['String']>>;
  has_raised?: InputMaybe<Array<Scalars['String']>>;
  has_raised_01?: InputMaybe<Array<Scalars['String']>>;
  is_agile?: InputMaybe<Array<Scalars['String']>>;
  layoffs?: InputMaybe<Array<Scalars['String']>>;
  location?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tb_140d8afc9ce4_Delete_Elem_Input = {
  ai_column_13?: InputMaybe<Scalars['Int']>;
  ai_column_14?: InputMaybe<Scalars['Int']>;
  ai_column_15?: InputMaybe<Scalars['Int']>;
  ai_column_16?: InputMaybe<Scalars['Int']>;
  employee_count?: InputMaybe<Scalars['Int']>;
  has_raised?: InputMaybe<Scalars['Int']>;
  has_raised_01?: InputMaybe<Scalars['Int']>;
  is_agile?: InputMaybe<Scalars['Int']>;
  layoffs?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tb_140d8afc9ce4_Delete_Key_Input = {
  ai_column_13?: InputMaybe<Scalars['String']>;
  ai_column_14?: InputMaybe<Scalars['String']>;
  ai_column_15?: InputMaybe<Scalars['String']>;
  ai_column_16?: InputMaybe<Scalars['String']>;
  employee_count?: InputMaybe<Scalars['String']>;
  has_raised?: InputMaybe<Scalars['String']>;
  has_raised_01?: InputMaybe<Scalars['String']>;
  is_agile?: InputMaybe<Scalars['String']>;
  layoffs?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_13?: InputMaybe<Scalars['jsonb']>;
  ai_column_14?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  employee_count?: InputMaybe<Scalars['jsonb']>;
  geo_region?: InputMaybe<Scalars['String']>;
  has_raised?: InputMaybe<Scalars['jsonb']>;
  has_raised_01?: InputMaybe<Scalars['jsonb']>;
  hq?: InputMaybe<Scalars['String']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoffs?: InputMaybe<Scalars['jsonb']>;
  location?: InputMaybe<Scalars['jsonb']>;
  total_employees?: InputMaybe<Scalars['String']>;
  website_url?: InputMaybe<Scalars['String']>;
  wikipedia_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_140d8afc9ce4_Max_Fields = {
  __typename?: 'tb_140d8afc9ce4_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  geo_region?: Maybe<Scalars['String']>;
  hq?: Maybe<Scalars['String']>;
  total_employees?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  wikipedia_url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_140d8afc9ce4_Min_Fields = {
  __typename?: 'tb_140d8afc9ce4_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  geo_region?: Maybe<Scalars['String']>;
  hq?: Maybe<Scalars['String']>;
  total_employees?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  wikipedia_url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Mutation_Response = {
  __typename?: 'tb_140d8afc9ce4_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_140d8afc9ce4>;
};

/** on_conflict condition type for table "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_On_Conflict = {
  constraint: Tb_140d8afc9ce4_Constraint;
  update_columns?: Array<Tb_140d8afc9ce4_Update_Column>;
  where?: InputMaybe<Tb_140d8afc9ce4_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_140d8afc9ce4". */
export type Tb_140d8afc9ce4_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _is_selected?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  ai_column_13?: InputMaybe<Order_By>;
  ai_column_14?: InputMaybe<Order_By>;
  ai_column_15?: InputMaybe<Order_By>;
  ai_column_16?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  employee_count?: InputMaybe<Order_By>;
  geo_region?: InputMaybe<Order_By>;
  has_raised?: InputMaybe<Order_By>;
  has_raised_01?: InputMaybe<Order_By>;
  hq?: InputMaybe<Order_By>;
  is_agile?: InputMaybe<Order_By>;
  layoffs?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  total_employees?: InputMaybe<Order_By>;
  website_url?: InputMaybe<Order_By>;
  wikipedia_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_140d8afc9ce4 */
export type Tb_140d8afc9ce4_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tb_140d8afc9ce4_Prepend_Input = {
  ai_column_13?: InputMaybe<Scalars['jsonb']>;
  ai_column_14?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  employee_count?: InputMaybe<Scalars['jsonb']>;
  has_raised?: InputMaybe<Scalars['jsonb']>;
  has_raised_01?: InputMaybe<Scalars['jsonb']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoffs?: InputMaybe<Scalars['jsonb']>;
  location?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_column_13'
  /** column name */
  | 'ai_column_14'
  /** column name */
  | 'ai_column_15'
  /** column name */
  | 'ai_column_16'
  /** column name */
  | 'company_name'
  /** column name */
  | 'employee_count'
  /** column name */
  | 'geo_region'
  /** column name */
  | 'has_raised'
  /** column name */
  | 'has_raised_01'
  /** column name */
  | 'hq'
  /** column name */
  | 'is_agile'
  /** column name */
  | 'layoffs'
  /** column name */
  | 'location'
  /** column name */
  | 'total_employees'
  /** column name */
  | 'website_url'
  /** column name */
  | 'wikipedia_url';

/** input type for updating data in table "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_13?: InputMaybe<Scalars['jsonb']>;
  ai_column_14?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  employee_count?: InputMaybe<Scalars['jsonb']>;
  geo_region?: InputMaybe<Scalars['String']>;
  has_raised?: InputMaybe<Scalars['jsonb']>;
  has_raised_01?: InputMaybe<Scalars['jsonb']>;
  hq?: InputMaybe<Scalars['String']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoffs?: InputMaybe<Scalars['jsonb']>;
  location?: InputMaybe<Scalars['jsonb']>;
  total_employees?: InputMaybe<Scalars['String']>;
  website_url?: InputMaybe<Scalars['String']>;
  wikipedia_url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_140d8afc9ce4_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_140d8afc9ce4_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_column_13?: InputMaybe<Scalars['jsonb']>;
  ai_column_14?: InputMaybe<Scalars['jsonb']>;
  ai_column_15?: InputMaybe<Scalars['jsonb']>;
  ai_column_16?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  employee_count?: InputMaybe<Scalars['jsonb']>;
  geo_region?: InputMaybe<Scalars['String']>;
  has_raised?: InputMaybe<Scalars['jsonb']>;
  has_raised_01?: InputMaybe<Scalars['jsonb']>;
  hq?: InputMaybe<Scalars['String']>;
  is_agile?: InputMaybe<Scalars['jsonb']>;
  layoffs?: InputMaybe<Scalars['jsonb']>;
  location?: InputMaybe<Scalars['jsonb']>;
  total_employees?: InputMaybe<Scalars['String']>;
  website_url?: InputMaybe<Scalars['String']>;
  wikipedia_url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_140d8afc9ce4" */
export type Tb_140d8afc9ce4_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_column_13'
  /** column name */
  | 'ai_column_14'
  /** column name */
  | 'ai_column_15'
  /** column name */
  | 'ai_column_16'
  /** column name */
  | 'company_name'
  /** column name */
  | 'employee_count'
  /** column name */
  | 'geo_region'
  /** column name */
  | 'has_raised'
  /** column name */
  | 'has_raised_01'
  /** column name */
  | 'hq'
  /** column name */
  | 'is_agile'
  /** column name */
  | 'layoffs'
  /** column name */
  | 'location'
  /** column name */
  | 'total_employees'
  /** column name */
  | 'website_url'
  /** column name */
  | 'wikipedia_url';

export type Tb_140d8afc9ce4_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Tb_140d8afc9ce4_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Tb_140d8afc9ce4_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Tb_140d8afc9ce4_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Tb_140d8afc9ce4_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Tb_140d8afc9ce4_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_140d8afc9ce4_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_140d8afc9ce4_Bool_Exp;
};

/** columns and relationships of "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies = {
  __typename?: 'tb_8536_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Aggregate = {
  __typename?: 'tb_8536_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_8536_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_8536_Techstars_Companies>;
};

/** aggregate fields of "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_8536_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_8536_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_8536_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_8536_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_8536_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_8536_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_8536_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_8536_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_8536_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_8536_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_8536_techstars_companies_pk';

/** input type for inserting data into table "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_8536_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_8536_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_8536_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_8536_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_8536_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_8536_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_On_Conflict = {
  constraint: Tb_8536_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_8536_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_8536_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_8536_techstars_companies". */
export type Tb_8536_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_8536_techstars_companies */
export type Tb_8536_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_8536_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_8536_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_8536_techstars_companies" */
export type Tb_8536_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_8536_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_8536_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_8536_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies = {
  __typename?: 'tb_9066_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Aggregate = {
  __typename?: 'tb_9066_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_9066_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_9066_Techstars_Companies>;
};

/** aggregate fields of "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_9066_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_9066_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_9066_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_9066_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_9066_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_9066_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_9066_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_9066_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_9066_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9066_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9066_techstars_companies_pk';

/** input type for inserting data into table "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_9066_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_9066_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_9066_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_9066_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_9066_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_9066_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_On_Conflict = {
  constraint: Tb_9066_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_9066_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_9066_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_9066_techstars_companies". */
export type Tb_9066_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_9066_techstars_companies */
export type Tb_9066_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_9066_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_9066_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_9066_techstars_companies" */
export type Tb_9066_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_9066_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_9066_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_9066_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies = {
  __typename?: 'tb_9459_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Aggregate = {
  __typename?: 'tb_9459_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_9459_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_9459_Techstars_Companies>;
};

/** aggregate fields of "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_9459_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_9459_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_9459_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_9459_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_9459_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_9459_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_9459_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_9459_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_9459_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9459_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9459_techstars_companies_pk';

/** input type for inserting data into table "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_9459_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_9459_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_9459_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_9459_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_9459_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_9459_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_On_Conflict = {
  constraint: Tb_9459_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_9459_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_9459_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_9459_techstars_companies". */
export type Tb_9459_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_9459_techstars_companies */
export type Tb_9459_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_9459_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_9459_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_9459_techstars_companies" */
export type Tb_9459_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_9459_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_9459_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_9459_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies = {
  __typename?: 'tb_9701_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Aggregate = {
  __typename?: 'tb_9701_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_9701_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_9701_Techstars_Companies>;
};

/** aggregate fields of "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_9701_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_9701_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_9701_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_9701_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_9701_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_9701_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_9701_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_9701_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_9701_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9701_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_9701_techstars_companies_pk';

/** input type for inserting data into table "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_9701_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_9701_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_9701_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_9701_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_9701_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_9701_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_On_Conflict = {
  constraint: Tb_9701_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_9701_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_9701_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_9701_techstars_companies". */
export type Tb_9701_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_9701_techstars_companies */
export type Tb_9701_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_9701_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_9701_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_9701_techstars_companies" */
export type Tb_9701_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_9701_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_9701_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_9701_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3 = {
  __typename?: 'tb_46723fcb5cf3';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  ceo?: Maybe<Scalars['jsonb']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
  latest_funding?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3CeoArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3Latest_FundingArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Aggregate = {
  __typename?: 'tb_46723fcb5cf3_aggregate';
  aggregate?: Maybe<Tb_46723fcb5cf3_Aggregate_Fields>;
  nodes: Array<Tb_46723fcb5cf3>;
};

/** aggregate fields of "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Aggregate_Fields = {
  __typename?: 'tb_46723fcb5cf3_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_46723fcb5cf3_Max_Fields>;
  min?: Maybe<Tb_46723fcb5cf3_Min_Fields>;
};


/** aggregate fields of "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_46723fcb5cf3_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tb_46723fcb5cf3_Append_Input = {
  ceo?: InputMaybe<Scalars['jsonb']>;
  latest_funding?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "tb_46723fcb5cf3". All fields are combined with a logical 'AND'. */
export type Tb_46723fcb5cf3_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_46723fcb5cf3_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_46723fcb5cf3_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_46723fcb5cf3_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  ceo?: InputMaybe<Jsonb_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
  latest_funding?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_46723fcb5cf3__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_46723fcb5cf3_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tb_46723fcb5cf3_Delete_At_Path_Input = {
  ceo?: InputMaybe<Array<Scalars['String']>>;
  latest_funding?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tb_46723fcb5cf3_Delete_Elem_Input = {
  ceo?: InputMaybe<Scalars['Int']>;
  latest_funding?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tb_46723fcb5cf3_Delete_Key_Input = {
  ceo?: InputMaybe<Scalars['String']>;
  latest_funding?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ceo?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
  latest_funding?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Tb_46723fcb5cf3_Max_Fields = {
  __typename?: 'tb_46723fcb5cf3_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_46723fcb5cf3_Min_Fields = {
  __typename?: 'tb_46723fcb5cf3_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Mutation_Response = {
  __typename?: 'tb_46723fcb5cf3_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_46723fcb5cf3>;
};

/** on_conflict condition type for table "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_On_Conflict = {
  constraint: Tb_46723fcb5cf3_Constraint;
  update_columns?: Array<Tb_46723fcb5cf3_Update_Column>;
  where?: InputMaybe<Tb_46723fcb5cf3_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_46723fcb5cf3". */
export type Tb_46723fcb5cf3_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  ceo?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
  latest_funding?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_46723fcb5cf3 */
export type Tb_46723fcb5cf3_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tb_46723fcb5cf3_Prepend_Input = {
  ceo?: InputMaybe<Scalars['jsonb']>;
  latest_funding?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'ceo'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile'
  /** column name */
  | 'latest_funding';

/** input type for updating data in table "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ceo?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
  latest_funding?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_46723fcb5cf3_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_46723fcb5cf3_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ceo?: InputMaybe<Scalars['jsonb']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
  latest_funding?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "tb_46723fcb5cf3" */
export type Tb_46723fcb5cf3_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'ceo'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile'
  /** column name */
  | 'latest_funding';

export type Tb_46723fcb5cf3_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Tb_46723fcb5cf3_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Tb_46723fcb5cf3_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Tb_46723fcb5cf3_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Tb_46723fcb5cf3_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Tb_46723fcb5cf3_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_46723fcb5cf3_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_46723fcb5cf3_Bool_Exp;
};

/** columns and relationships of "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies = {
  __typename?: 'tb_a5c1_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Aggregate = {
  __typename?: 'tb_a5c1_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_A5c1_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_A5c1_Techstars_Companies>;
};

/** aggregate fields of "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_a5c1_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_A5c1_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_A5c1_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_a5c1_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_A5c1_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_A5c1_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_A5c1_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_a5c1_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_a5c1_techstars_companies_pk';

/** input type for inserting data into table "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_A5c1_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_a5c1_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_A5c1_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_a5c1_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_a5c1_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_A5c1_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_On_Conflict = {
  constraint: Tb_A5c1_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_A5c1_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_A5c1_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_a5c1_techstars_companies". */
export type Tb_A5c1_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_a5c1_techstars_companies */
export type Tb_A5c1_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_A5c1_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_A5c1_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_a5c1_techstars_companies" */
export type Tb_A5c1_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_A5c1_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_A5c1_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_A5c1_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies = {
  __typename?: 'tb_a7dc_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Aggregate = {
  __typename?: 'tb_a7dc_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_A7dc_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_A7dc_Techstars_Companies>;
};

/** aggregate fields of "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_a7dc_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_A7dc_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_A7dc_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_a7dc_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_A7dc_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_A7dc_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_A7dc_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_a7dc_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_a7dc_techstars_companies_pk';

/** input type for inserting data into table "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_A7dc_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_a7dc_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_A7dc_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_a7dc_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_a7dc_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_A7dc_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_On_Conflict = {
  constraint: Tb_A7dc_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_A7dc_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_A7dc_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_a7dc_techstars_companies". */
export type Tb_A7dc_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_a7dc_techstars_companies */
export type Tb_A7dc_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_A7dc_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_A7dc_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_a7dc_techstars_companies" */
export type Tb_A7dc_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_A7dc_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_A7dc_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_A7dc_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies = {
  __typename?: 'tb_a332_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Aggregate = {
  __typename?: 'tb_a332_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_A332_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_A332_Techstars_Companies>;
};

/** aggregate fields of "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_a332_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_A332_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_A332_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_A332_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_a332_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_A332_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_A332_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_A332_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_A332_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_a332_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_a332_techstars_companies_pk';

/** input type for inserting data into table "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_A332_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_a332_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_A332_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_a332_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_a332_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_A332_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_On_Conflict = {
  constraint: Tb_A332_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_A332_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_A332_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_a332_techstars_companies". */
export type Tb_A332_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_a332_techstars_companies */
export type Tb_A332_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_A332_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_A332_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_a332_techstars_companies" */
export type Tb_A332_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_A332_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_A332_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_A332_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies = {
  __typename?: 'tb_ac31_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Aggregate = {
  __typename?: 'tb_ac31_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_Ac31_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_Ac31_Techstars_Companies>;
};

/** aggregate fields of "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_ac31_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_Ac31_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_Ac31_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_ac31_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_Ac31_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_Ac31_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_Ac31_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_ac31_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_ac31_techstars_companies_pk';

/** input type for inserting data into table "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_Ac31_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_ac31_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_Ac31_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_ac31_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_ac31_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_Ac31_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_On_Conflict = {
  constraint: Tb_Ac31_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_Ac31_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_Ac31_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_ac31_techstars_companies". */
export type Tb_Ac31_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_ac31_techstars_companies */
export type Tb_Ac31_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_Ac31_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_Ac31_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_ac31_techstars_companies" */
export type Tb_Ac31_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_Ac31_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_Ac31_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_Ac31_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies = {
  __typename?: 'tb_ae8e_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Aggregate = {
  __typename?: 'tb_ae8e_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_Ae8e_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_Ae8e_Techstars_Companies>;
};

/** aggregate fields of "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_ae8e_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_Ae8e_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_Ae8e_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_ae8e_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_Ae8e_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_Ae8e_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_Ae8e_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_ae8e_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_ae8e_techstars_companies_pk';

/** input type for inserting data into table "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_Ae8e_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_ae8e_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_Ae8e_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_ae8e_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_ae8e_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_Ae8e_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_On_Conflict = {
  constraint: Tb_Ae8e_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_Ae8e_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_Ae8e_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_ae8e_techstars_companies". */
export type Tb_Ae8e_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_ae8e_techstars_companies */
export type Tb_Ae8e_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_Ae8e_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_Ae8e_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_ae8e_techstars_companies" */
export type Tb_Ae8e_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_Ae8e_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_Ae8e_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_Ae8e_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies = {
  __typename?: 'tb_af27_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Aggregate = {
  __typename?: 'tb_af27_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_Af27_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_Af27_Techstars_Companies>;
};

/** aggregate fields of "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_af27_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_Af27_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_Af27_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_af27_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_Af27_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_Af27_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_Af27_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_af27_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_af27_techstars_companies_pk';

/** input type for inserting data into table "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_Af27_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_af27_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_Af27_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_af27_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_af27_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_Af27_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_On_Conflict = {
  constraint: Tb_Af27_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_Af27_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_Af27_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_af27_techstars_companies". */
export type Tb_Af27_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_af27_techstars_companies */
export type Tb_Af27_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_Af27_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_Af27_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_af27_techstars_companies" */
export type Tb_Af27_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_Af27_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_Af27_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_Af27_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies = {
  __typename?: 'tb_b02e_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b02e_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B02e_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B02e_Techstars_Companies>;
};

/** aggregate fields of "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b02e_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B02e_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B02e_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b02e_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B02e_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B02e_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B02e_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b02e_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b02e_techstars_companies_pk';

/** input type for inserting data into table "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B02e_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b02e_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B02e_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b02e_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b02e_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B02e_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_On_Conflict = {
  constraint: Tb_B02e_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B02e_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B02e_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b02e_techstars_companies". */
export type Tb_B02e_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b02e_techstars_companies */
export type Tb_B02e_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B02e_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B02e_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b02e_techstars_companies" */
export type Tb_B02e_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B02e_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B02e_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B02e_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies = {
  __typename?: 'tb_b3a8_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b3a8_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B3a8_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B3a8_Techstars_Companies>;
};

/** aggregate fields of "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b3a8_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B3a8_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B3a8_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b3a8_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B3a8_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B3a8_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B3a8_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b3a8_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b3a8_techstars_companies_pk';

/** input type for inserting data into table "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B3a8_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b3a8_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B3a8_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b3a8_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b3a8_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B3a8_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_On_Conflict = {
  constraint: Tb_B3a8_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B3a8_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B3a8_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b3a8_techstars_companies". */
export type Tb_B3a8_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b3a8_techstars_companies */
export type Tb_B3a8_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B3a8_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B3a8_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b3a8_techstars_companies" */
export type Tb_B3a8_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B3a8_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B3a8_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B3a8_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies = {
  __typename?: 'tb_b4fc_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b4fc_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B4fc_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B4fc_Techstars_Companies>;
};

/** aggregate fields of "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b4fc_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B4fc_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B4fc_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b4fc_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B4fc_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B4fc_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B4fc_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b4fc_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b4fc_techstars_companies_pk';

/** input type for inserting data into table "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B4fc_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b4fc_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B4fc_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b4fc_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b4fc_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B4fc_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_On_Conflict = {
  constraint: Tb_B4fc_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B4fc_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B4fc_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b4fc_techstars_companies". */
export type Tb_B4fc_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b4fc_techstars_companies */
export type Tb_B4fc_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B4fc_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B4fc_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b4fc_techstars_companies" */
export type Tb_B4fc_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B4fc_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B4fc_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B4fc_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies = {
  __typename?: 'tb_b7e7_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b7e7_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B7e7_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B7e7_Techstars_Companies>;
};

/** aggregate fields of "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b7e7_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B7e7_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B7e7_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b7e7_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B7e7_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B7e7_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B7e7_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b7e7_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b7e7_techstars_companies_pk';

/** input type for inserting data into table "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B7e7_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b7e7_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B7e7_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b7e7_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b7e7_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B7e7_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_On_Conflict = {
  constraint: Tb_B7e7_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B7e7_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B7e7_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b7e7_techstars_companies". */
export type Tb_B7e7_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b7e7_techstars_companies */
export type Tb_B7e7_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B7e7_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B7e7_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b7e7_techstars_companies" */
export type Tb_B7e7_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B7e7_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B7e7_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B7e7_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies = {
  __typename?: 'tb_b9c9_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b9c9_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B9c9_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B9c9_Techstars_Companies>;
};

/** aggregate fields of "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b9c9_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B9c9_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B9c9_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b9c9_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B9c9_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B9c9_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B9c9_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b9c9_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b9c9_techstars_companies_pk';

/** input type for inserting data into table "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B9c9_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b9c9_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B9c9_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b9c9_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b9c9_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B9c9_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_On_Conflict = {
  constraint: Tb_B9c9_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B9c9_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B9c9_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b9c9_techstars_companies". */
export type Tb_B9c9_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b9c9_techstars_companies */
export type Tb_B9c9_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B9c9_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B9c9_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b9c9_techstars_companies" */
export type Tb_B9c9_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B9c9_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B9c9_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B9c9_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies = {
  __typename?: 'tb_b14c_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b14c_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B14c_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B14c_Techstars_Companies>;
};

/** aggregate fields of "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b14c_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B14c_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B14c_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b14c_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B14c_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B14c_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B14c_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b14c_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b14c_techstars_companies_pk';

/** input type for inserting data into table "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B14c_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b14c_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B14c_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b14c_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b14c_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B14c_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_On_Conflict = {
  constraint: Tb_B14c_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B14c_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B14c_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b14c_techstars_companies". */
export type Tb_B14c_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b14c_techstars_companies */
export type Tb_B14c_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B14c_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B14c_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b14c_techstars_companies" */
export type Tb_B14c_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B14c_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B14c_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B14c_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies = {
  __typename?: 'tb_b80b_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b80b_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B80b_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B80b_Techstars_Companies>;
};

/** aggregate fields of "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b80b_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B80b_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B80b_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b80b_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B80b_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B80b_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B80b_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b80b_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b80b_techstars_companies_pk';

/** input type for inserting data into table "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B80b_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b80b_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B80b_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b80b_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b80b_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B80b_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_On_Conflict = {
  constraint: Tb_B80b_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B80b_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B80b_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b80b_techstars_companies". */
export type Tb_B80b_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b80b_techstars_companies */
export type Tb_B80b_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B80b_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B80b_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b80b_techstars_companies" */
export type Tb_B80b_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B80b_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B80b_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B80b_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies = {
  __typename?: 'tb_b225_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b225_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B225_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B225_Techstars_Companies>;
};

/** aggregate fields of "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b225_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B225_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B225_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B225_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b225_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B225_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B225_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B225_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B225_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b225_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b225_techstars_companies_pk';

/** input type for inserting data into table "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B225_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b225_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B225_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b225_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b225_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B225_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_On_Conflict = {
  constraint: Tb_B225_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B225_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B225_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b225_techstars_companies". */
export type Tb_B225_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b225_techstars_companies */
export type Tb_B225_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B225_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B225_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b225_techstars_companies" */
export type Tb_B225_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B225_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B225_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B225_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies = {
  __typename?: 'tb_b739_techstars_companies';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Aggregate = {
  __typename?: 'tb_b739_techstars_companies_aggregate';
  aggregate?: Maybe<Tb_B739_Techstars_Companies_Aggregate_Fields>;
  nodes: Array<Tb_B739_Techstars_Companies>;
};

/** aggregate fields of "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Aggregate_Fields = {
  __typename?: 'tb_b739_techstars_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_B739_Techstars_Companies_Max_Fields>;
  min?: Maybe<Tb_B739_Techstars_Companies_Min_Fields>;
};


/** aggregate fields of "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_B739_Techstars_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_b739_techstars_companies". All fields are combined with a logical 'AND'. */
export type Tb_B739_Techstars_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_B739_Techstars_Companies_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_B739_Techstars_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_B739_Techstars_Companies_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b739_techstars_companies__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_b739_techstars_companies_pk';

/** input type for inserting data into table "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_B739_Techstars_Companies_Max_Fields = {
  __typename?: 'tb_b739_techstars_companies_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_B739_Techstars_Companies_Min_Fields = {
  __typename?: 'tb_b739_techstars_companies_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Mutation_Response = {
  __typename?: 'tb_b739_techstars_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_B739_Techstars_Companies>;
};

/** on_conflict condition type for table "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_On_Conflict = {
  constraint: Tb_B739_Techstars_Companies_Constraint;
  update_columns?: Array<Tb_B739_Techstars_Companies_Update_Column>;
  where?: InputMaybe<Tb_B739_Techstars_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_b739_techstars_companies". */
export type Tb_B739_Techstars_Companies_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_b739_techstars_companies */
export type Tb_B739_Techstars_Companies_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_B739_Techstars_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_B739_Techstars_Companies_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_b739_techstars_companies" */
export type Tb_B739_Techstars_Companies_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_B739_Techstars_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_B739_Techstars_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_B739_Techstars_Companies_Bool_Exp;
};

/** columns and relationships of "tb_bd249159795e" */
export type Tb_Bd249159795e = {
  __typename?: 'tb_bd249159795e';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _is_selected: Scalars['Boolean'];
  _up: Scalars['timestamptz'];
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "tb_bd249159795e" */
export type Tb_Bd249159795e_Aggregate = {
  __typename?: 'tb_bd249159795e_aggregate';
  aggregate?: Maybe<Tb_Bd249159795e_Aggregate_Fields>;
  nodes: Array<Tb_Bd249159795e>;
};

/** aggregate fields of "tb_bd249159795e" */
export type Tb_Bd249159795e_Aggregate_Fields = {
  __typename?: 'tb_bd249159795e_aggregate_fields';
  avg?: Maybe<Tb_Bd249159795e_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tb_Bd249159795e_Max_Fields>;
  min?: Maybe<Tb_Bd249159795e_Min_Fields>;
  stddev?: Maybe<Tb_Bd249159795e_Stddev_Fields>;
  stddev_pop?: Maybe<Tb_Bd249159795e_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tb_Bd249159795e_Stddev_Samp_Fields>;
  sum?: Maybe<Tb_Bd249159795e_Sum_Fields>;
  var_pop?: Maybe<Tb_Bd249159795e_Var_Pop_Fields>;
  var_samp?: Maybe<Tb_Bd249159795e_Var_Samp_Fields>;
  variance?: Maybe<Tb_Bd249159795e_Variance_Fields>;
};


/** aggregate fields of "tb_bd249159795e" */
export type Tb_Bd249159795e_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_Bd249159795e_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tb_Bd249159795e_Avg_Fields = {
  __typename?: 'tb_bd249159795e_avg_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tb_bd249159795e". All fields are combined with a logical 'AND'. */
export type Tb_Bd249159795e_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_Bd249159795e_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  _not?: InputMaybe<Tb_Bd249159795e_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_Bd249159795e_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  age?: InputMaybe<String_Comparison_Exp>;
  class_name?: InputMaybe<String_Comparison_Exp>;
  clothing_id?: InputMaybe<String_Comparison_Exp>;
  department_name?: InputMaybe<String_Comparison_Exp>;
  division_name?: InputMaybe<String_Comparison_Exp>;
  positive_feedback_count?: InputMaybe<String_Comparison_Exp>;
  rating?: InputMaybe<String_Comparison_Exp>;
  recommended_ind?: InputMaybe<String_Comparison_Exp>;
  review_text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  unnamed_0?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_bd249159795e" */
export type Tb_Bd249159795e_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_bd249159795e__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_bd249159795e_pk';

/** input type for incrementing numeric columns in table "tb_bd249159795e" */
export type Tb_Bd249159795e_Inc_Input = {
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "tb_bd249159795e" */
export type Tb_Bd249159795e_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Tb_Bd249159795e_Max_Fields = {
  __typename?: 'tb_bd249159795e_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Tb_Bd249159795e_Min_Fields = {
  __typename?: 'tb_bd249159795e_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** response of any mutation on the table "tb_bd249159795e" */
export type Tb_Bd249159795e_Mutation_Response = {
  __typename?: 'tb_bd249159795e_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_Bd249159795e>;
};

/** on_conflict condition type for table "tb_bd249159795e" */
export type Tb_Bd249159795e_On_Conflict = {
  constraint: Tb_Bd249159795e_Constraint;
  update_columns?: Array<Tb_Bd249159795e_Update_Column>;
  where?: InputMaybe<Tb_Bd249159795e_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_bd249159795e". */
export type Tb_Bd249159795e_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _is_selected?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  age?: InputMaybe<Order_By>;
  class_name?: InputMaybe<Order_By>;
  clothing_id?: InputMaybe<Order_By>;
  department_name?: InputMaybe<Order_By>;
  division_name?: InputMaybe<Order_By>;
  positive_feedback_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  recommended_ind?: InputMaybe<Order_By>;
  review_text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  unnamed_0?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_bd249159795e */
export type Tb_Bd249159795e_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_bd249159795e" */
export type Tb_Bd249159795e_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'age'
  /** column name */
  | 'class_name'
  /** column name */
  | 'clothing_id'
  /** column name */
  | 'department_name'
  /** column name */
  | 'division_name'
  /** column name */
  | 'positive_feedback_count'
  /** column name */
  | 'rating'
  /** column name */
  | 'recommended_ind'
  /** column name */
  | 'review_text'
  /** column name */
  | 'title'
  /** column name */
  | 'unnamed_0';

/** input type for updating data in table "tb_bd249159795e" */
export type Tb_Bd249159795e_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Tb_Bd249159795e_Stddev_Fields = {
  __typename?: 'tb_bd249159795e_stddev_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tb_Bd249159795e_Stddev_Pop_Fields = {
  __typename?: 'tb_bd249159795e_stddev_pop_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tb_Bd249159795e_Stddev_Samp_Fields = {
  __typename?: 'tb_bd249159795e_stddev_samp_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "tb_bd249159795e" */
export type Tb_Bd249159795e_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_Bd249159795e_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_Bd249159795e_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Tb_Bd249159795e_Sum_Fields = {
  __typename?: 'tb_bd249159795e_sum_fields';
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** update columns of table "tb_bd249159795e" */
export type Tb_Bd249159795e_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'age'
  /** column name */
  | 'class_name'
  /** column name */
  | 'clothing_id'
  /** column name */
  | 'department_name'
  /** column name */
  | 'division_name'
  /** column name */
  | 'positive_feedback_count'
  /** column name */
  | 'rating'
  /** column name */
  | 'recommended_ind'
  /** column name */
  | 'review_text'
  /** column name */
  | 'title'
  /** column name */
  | 'unnamed_0';

export type Tb_Bd249159795e_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tb_Bd249159795e_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_Bd249159795e_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_Bd249159795e_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tb_Bd249159795e_Var_Pop_Fields = {
  __typename?: 'tb_bd249159795e_var_pop_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tb_Bd249159795e_Var_Samp_Fields = {
  __typename?: 'tb_bd249159795e_var_samp_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tb_Bd249159795e_Variance_Fields = {
  __typename?: 'tb_bd249159795e_variance_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0 = {
  __typename?: 'tb_c57cdd28d7c0';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _is_selected: Scalars['Boolean'];
  _up: Scalars['timestamptz'];
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Aggregate = {
  __typename?: 'tb_c57cdd28d7c0_aggregate';
  aggregate?: Maybe<Tb_C57cdd28d7c0_Aggregate_Fields>;
  nodes: Array<Tb_C57cdd28d7c0>;
};

/** aggregate fields of "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Aggregate_Fields = {
  __typename?: 'tb_c57cdd28d7c0_aggregate_fields';
  avg?: Maybe<Tb_C57cdd28d7c0_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tb_C57cdd28d7c0_Max_Fields>;
  min?: Maybe<Tb_C57cdd28d7c0_Min_Fields>;
  stddev?: Maybe<Tb_C57cdd28d7c0_Stddev_Fields>;
  stddev_pop?: Maybe<Tb_C57cdd28d7c0_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tb_C57cdd28d7c0_Stddev_Samp_Fields>;
  sum?: Maybe<Tb_C57cdd28d7c0_Sum_Fields>;
  var_pop?: Maybe<Tb_C57cdd28d7c0_Var_Pop_Fields>;
  var_samp?: Maybe<Tb_C57cdd28d7c0_Var_Samp_Fields>;
  variance?: Maybe<Tb_C57cdd28d7c0_Variance_Fields>;
};


/** aggregate fields of "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_C57cdd28d7c0_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tb_C57cdd28d7c0_Avg_Fields = {
  __typename?: 'tb_c57cdd28d7c0_avg_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tb_c57cdd28d7c0". All fields are combined with a logical 'AND'. */
export type Tb_C57cdd28d7c0_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_C57cdd28d7c0_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  _not?: InputMaybe<Tb_C57cdd28d7c0_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_C57cdd28d7c0_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  age?: InputMaybe<String_Comparison_Exp>;
  class_name?: InputMaybe<String_Comparison_Exp>;
  clothing_id?: InputMaybe<String_Comparison_Exp>;
  department_name?: InputMaybe<String_Comparison_Exp>;
  division_name?: InputMaybe<String_Comparison_Exp>;
  positive_feedback_count?: InputMaybe<String_Comparison_Exp>;
  rating?: InputMaybe<String_Comparison_Exp>;
  recommended_ind?: InputMaybe<String_Comparison_Exp>;
  review_text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  unnamed_0?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_c57cdd28d7c0__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_c57cdd28d7c0_pk';

/** input type for incrementing numeric columns in table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Inc_Input = {
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Tb_C57cdd28d7c0_Max_Fields = {
  __typename?: 'tb_c57cdd28d7c0_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Tb_C57cdd28d7c0_Min_Fields = {
  __typename?: 'tb_c57cdd28d7c0_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  age?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  clothing_id?: Maybe<Scalars['String']>;
  department_name?: Maybe<Scalars['String']>;
  division_name?: Maybe<Scalars['String']>;
  positive_feedback_count?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  recommended_ind?: Maybe<Scalars['String']>;
  review_text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** response of any mutation on the table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Mutation_Response = {
  __typename?: 'tb_c57cdd28d7c0_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_C57cdd28d7c0>;
};

/** on_conflict condition type for table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_On_Conflict = {
  constraint: Tb_C57cdd28d7c0_Constraint;
  update_columns?: Array<Tb_C57cdd28d7c0_Update_Column>;
  where?: InputMaybe<Tb_C57cdd28d7c0_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_c57cdd28d7c0". */
export type Tb_C57cdd28d7c0_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _is_selected?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  age?: InputMaybe<Order_By>;
  class_name?: InputMaybe<Order_By>;
  clothing_id?: InputMaybe<Order_By>;
  department_name?: InputMaybe<Order_By>;
  division_name?: InputMaybe<Order_By>;
  positive_feedback_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  recommended_ind?: InputMaybe<Order_By>;
  review_text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  unnamed_0?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_c57cdd28d7c0 */
export type Tb_C57cdd28d7c0_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'age'
  /** column name */
  | 'class_name'
  /** column name */
  | 'clothing_id'
  /** column name */
  | 'department_name'
  /** column name */
  | 'division_name'
  /** column name */
  | 'positive_feedback_count'
  /** column name */
  | 'rating'
  /** column name */
  | 'recommended_ind'
  /** column name */
  | 'review_text'
  /** column name */
  | 'title'
  /** column name */
  | 'unnamed_0';

/** input type for updating data in table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Tb_C57cdd28d7c0_Stddev_Fields = {
  __typename?: 'tb_c57cdd28d7c0_stddev_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tb_C57cdd28d7c0_Stddev_Pop_Fields = {
  __typename?: 'tb_c57cdd28d7c0_stddev_pop_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tb_C57cdd28d7c0_Stddev_Samp_Fields = {
  __typename?: 'tb_c57cdd28d7c0_stddev_samp_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_C57cdd28d7c0_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_C57cdd28d7c0_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  age?: InputMaybe<Scalars['String']>;
  class_name?: InputMaybe<Scalars['String']>;
  clothing_id?: InputMaybe<Scalars['String']>;
  department_name?: InputMaybe<Scalars['String']>;
  division_name?: InputMaybe<Scalars['String']>;
  positive_feedback_count?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  recommended_ind?: InputMaybe<Scalars['String']>;
  review_text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  unnamed_0?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Tb_C57cdd28d7c0_Sum_Fields = {
  __typename?: 'tb_c57cdd28d7c0_sum_fields';
  unnamed_0?: Maybe<Scalars['float8']>;
};

/** update columns of table "tb_c57cdd28d7c0" */
export type Tb_C57cdd28d7c0_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'age'
  /** column name */
  | 'class_name'
  /** column name */
  | 'clothing_id'
  /** column name */
  | 'department_name'
  /** column name */
  | 'division_name'
  /** column name */
  | 'positive_feedback_count'
  /** column name */
  | 'rating'
  /** column name */
  | 'recommended_ind'
  /** column name */
  | 'review_text'
  /** column name */
  | 'title'
  /** column name */
  | 'unnamed_0';

export type Tb_C57cdd28d7c0_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tb_C57cdd28d7c0_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_C57cdd28d7c0_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_C57cdd28d7c0_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tb_C57cdd28d7c0_Var_Pop_Fields = {
  __typename?: 'tb_c57cdd28d7c0_var_pop_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tb_C57cdd28d7c0_Var_Samp_Fields = {
  __typename?: 'tb_c57cdd28d7c0_var_samp_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tb_C57cdd28d7c0_Variance_Fields = {
  __typename?: 'tb_c57cdd28d7c0_variance_fields';
  unnamed_0?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "tb_d0e828550903" */
export type Tb_D0e828550903 = {
  __typename?: 'tb_d0e828550903';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _is_selected: Scalars['Boolean'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_d0e828550903" */
export type Tb_D0e828550903_Aggregate = {
  __typename?: 'tb_d0e828550903_aggregate';
  aggregate?: Maybe<Tb_D0e828550903_Aggregate_Fields>;
  nodes: Array<Tb_D0e828550903>;
};

/** aggregate fields of "tb_d0e828550903" */
export type Tb_D0e828550903_Aggregate_Fields = {
  __typename?: 'tb_d0e828550903_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_D0e828550903_Max_Fields>;
  min?: Maybe<Tb_D0e828550903_Min_Fields>;
};


/** aggregate fields of "tb_d0e828550903" */
export type Tb_D0e828550903_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_D0e828550903_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_d0e828550903". All fields are combined with a logical 'AND'. */
export type Tb_D0e828550903_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_D0e828550903_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  _not?: InputMaybe<Tb_D0e828550903_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_D0e828550903_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_d0e828550903" */
export type Tb_D0e828550903_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_d0e828550903__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_d0e828550903_pk';

/** input type for inserting data into table "tb_d0e828550903" */
export type Tb_D0e828550903_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_D0e828550903_Max_Fields = {
  __typename?: 'tb_d0e828550903_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_D0e828550903_Min_Fields = {
  __typename?: 'tb_d0e828550903_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_d0e828550903" */
export type Tb_D0e828550903_Mutation_Response = {
  __typename?: 'tb_d0e828550903_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_D0e828550903>;
};

/** on_conflict condition type for table "tb_d0e828550903" */
export type Tb_D0e828550903_On_Conflict = {
  constraint: Tb_D0e828550903_Constraint;
  update_columns?: Array<Tb_D0e828550903_Update_Column>;
  where?: InputMaybe<Tb_D0e828550903_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_d0e828550903". */
export type Tb_D0e828550903_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _is_selected?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_d0e828550903 */
export type Tb_D0e828550903_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_d0e828550903" */
export type Tb_D0e828550903_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_d0e828550903" */
export type Tb_D0e828550903_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_d0e828550903" */
export type Tb_D0e828550903_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_D0e828550903_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_D0e828550903_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _is_selected?: InputMaybe<Scalars['Boolean']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_d0e828550903" */
export type Tb_D0e828550903_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_is_selected'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_D0e828550903_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_D0e828550903_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_D0e828550903_Bool_Exp;
};

/** columns and relationships of "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8 = {
  __typename?: 'tb_ff89301ef0f8';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Aggregate = {
  __typename?: 'tb_ff89301ef0f8_aggregate';
  aggregate?: Maybe<Tb_Ff89301ef0f8_Aggregate_Fields>;
  nodes: Array<Tb_Ff89301ef0f8>;
};

/** aggregate fields of "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Aggregate_Fields = {
  __typename?: 'tb_ff89301ef0f8_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tb_Ff89301ef0f8_Max_Fields>;
  min?: Maybe<Tb_Ff89301ef0f8_Min_Fields>;
};


/** aggregate fields of "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tb_Ff89301ef0f8_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tb_ff89301ef0f8". All fields are combined with a logical 'AND'. */
export type Tb_Ff89301ef0f8_Bool_Exp = {
  _and?: InputMaybe<Array<Tb_Ff89301ef0f8_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Tb_Ff89301ef0f8_Bool_Exp>;
  _or?: InputMaybe<Array<Tb_Ff89301ef0f8_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  crunchbase_profile?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'tb_ff89301ef0f8__id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'tb_ff89301ef0f8_pk';

/** input type for inserting data into table "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tb_Ff89301ef0f8_Max_Fields = {
  __typename?: 'tb_ff89301ef0f8_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tb_Ff89301ef0f8_Min_Fields = {
  __typename?: 'tb_ff89301ef0f8_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  crunchbase_profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Mutation_Response = {
  __typename?: 'tb_ff89301ef0f8_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tb_Ff89301ef0f8>;
};

/** on_conflict condition type for table "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_On_Conflict = {
  constraint: Tb_Ff89301ef0f8_Constraint;
  update_columns?: Array<Tb_Ff89301ef0f8_Update_Column>;
  where?: InputMaybe<Tb_Ff89301ef0f8_Bool_Exp>;
};

/** Ordering options when selecting data from "tb_ff89301ef0f8". */
export type Tb_Ff89301ef0f8_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  crunchbase_profile?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tb_ff89301ef0f8 */
export type Tb_Ff89301ef0f8_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

/** input type for updating data in table "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tb_Ff89301ef0f8_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tb_Ff89301ef0f8_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  crunchbase_profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tb_ff89301ef0f8" */
export type Tb_Ff89301ef0f8_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'crunchbase_profile';

export type Tb_Ff89301ef0f8_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tb_Ff89301ef0f8_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tb_Ff89301ef0f8_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  _cr: Scalars['timestamptz'];
  _id: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  app_metadata?: Maybe<Scalars['jsonb']>;
  auth0_id: Scalars['String'];
  beta_access: Scalars['Boolean'];
  beta_access_code_id?: Maybe<Scalars['uuid']>;
  blocked: Scalars['Boolean'];
  content_admin: Scalars['Boolean'];
  email: Scalars['String'];
  email_verified: Scalars['Boolean'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  nickname: Scalars['String'];
  picture: Scalars['String'];
  preferred_name?: Maybe<Scalars['String']>;
  user_metadata: Scalars['jsonb'];
};


/** columns and relationships of "user" */
export type UserApp_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "user" */
export type UserUser_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  app_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  auth0_id?: InputMaybe<String_Comparison_Exp>;
  beta_access?: InputMaybe<Boolean_Comparison_Exp>;
  beta_access_code_id?: InputMaybe<Uuid_Comparison_Exp>;
  blocked?: InputMaybe<Boolean_Comparison_Exp>;
  content_admin?: InputMaybe<Boolean_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  preferred_name?: InputMaybe<String_Comparison_Exp>;
  user_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export type User_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'user__id_uindex'
  /** unique or primary key constraint on columns "auth0_id" */
  | 'user_auth0_id_uindex'
  /** unique or primary key constraint on columns "_id" */
  | 'user_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Delete_At_Path_Input = {
  app_metadata?: InputMaybe<Array<Scalars['String']>>;
  user_metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Delete_Elem_Input = {
  app_metadata?: InputMaybe<Scalars['Int']>;
  user_metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Delete_Key_Input = {
  app_metadata?: InputMaybe<Scalars['String']>;
  user_metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  auth0_id?: InputMaybe<Scalars['String']>;
  beta_access?: InputMaybe<Scalars['Boolean']>;
  beta_access_code_id?: InputMaybe<Scalars['uuid']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  content_admin?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  preferred_name?: InputMaybe<Scalars['String']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  auth0_id?: Maybe<Scalars['String']>;
  beta_access_code_id?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  preferred_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  auth0_id?: Maybe<Scalars['String']>;
  beta_access_code_id?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  preferred_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  app_metadata?: InputMaybe<Order_By>;
  auth0_id?: InputMaybe<Order_By>;
  beta_access?: InputMaybe<Order_By>;
  beta_access_code_id?: InputMaybe<Order_By>;
  blocked?: InputMaybe<Order_By>;
  content_admin?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  preferred_name?: InputMaybe<Order_By>;
  user_metadata?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Prepend_Input = {
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "user" */
export type User_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'app_metadata'
  /** column name */
  | 'auth0_id'
  /** column name */
  | 'beta_access'
  /** column name */
  | 'beta_access_code_id'
  /** column name */
  | 'blocked'
  /** column name */
  | 'content_admin'
  /** column name */
  | 'email'
  /** column name */
  | 'email_verified'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'name'
  /** column name */
  | 'nickname'
  /** column name */
  | 'picture'
  /** column name */
  | 'preferred_name'
  /** column name */
  | 'user_metadata';

/** input type for updating data in table "user" */
export type User_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  auth0_id?: InputMaybe<Scalars['String']>;
  beta_access?: InputMaybe<Scalars['Boolean']>;
  beta_access_code_id?: InputMaybe<Scalars['uuid']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  content_admin?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  preferred_name?: InputMaybe<Scalars['String']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  auth0_id?: InputMaybe<Scalars['String']>;
  beta_access?: InputMaybe<Scalars['Boolean']>;
  beta_access_code_id?: InputMaybe<Scalars['uuid']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  content_admin?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  preferred_name?: InputMaybe<Scalars['String']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "user" */
export type User_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'app_metadata'
  /** column name */
  | 'auth0_id'
  /** column name */
  | 'beta_access'
  /** column name */
  | 'beta_access_code_id'
  /** column name */
  | 'blocked'
  /** column name */
  | 'content_admin'
  /** column name */
  | 'email'
  /** column name */
  | 'email_verified'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'name'
  /** column name */
  | 'nickname'
  /** column name */
  | 'picture'
  /** column name */
  | 'preferred_name'
  /** column name */
  | 'user_metadata';

export type User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "workspace" */
export type Workspace = {
  __typename?: 'workspace';
  _cr?: Maybe<Scalars['timestamp']>;
  _id: Scalars['uuid'];
  _up?: Maybe<Scalars['timestamp']>;
  credit_balance: Scalars['float8'];
  credit_balance_PU?: Maybe<Scalars['float8']>;
  data_db_params?: Maybe<Scalars['jsonb']>;
  framework_api_key: Scalars['String'];
  hasura_params?: Maybe<Scalars['jsonb']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  trace_db_params?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  workspace_membership_list: Array<Workspace_Membership>;
  /** An aggregate relationship */
  workspace_membership_list_aggregate: Workspace_Membership_Aggregate;
};


/** columns and relationships of "workspace" */
export type WorkspaceData_Db_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "workspace" */
export type WorkspaceHasura_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "workspace" */
export type WorkspaceTrace_Db_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "workspace" */
export type WorkspaceWorkspace_Membership_ListArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Membership_Order_By>>;
  where?: InputMaybe<Workspace_Membership_Bool_Exp>;
};


/** columns and relationships of "workspace" */
export type WorkspaceWorkspace_Membership_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspace_Membership_Order_By>>;
  where?: InputMaybe<Workspace_Membership_Bool_Exp>;
};

/** aggregated selection of "workspace" */
export type Workspace_Aggregate = {
  __typename?: 'workspace_aggregate';
  aggregate?: Maybe<Workspace_Aggregate_Fields>;
  nodes: Array<Workspace>;
};

/** aggregate fields of "workspace" */
export type Workspace_Aggregate_Fields = {
  __typename?: 'workspace_aggregate_fields';
  avg?: Maybe<Workspace_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Workspace_Max_Fields>;
  min?: Maybe<Workspace_Min_Fields>;
  stddev?: Maybe<Workspace_Stddev_Fields>;
  stddev_pop?: Maybe<Workspace_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workspace_Stddev_Samp_Fields>;
  sum?: Maybe<Workspace_Sum_Fields>;
  var_pop?: Maybe<Workspace_Var_Pop_Fields>;
  var_samp?: Maybe<Workspace_Var_Samp_Fields>;
  variance?: Maybe<Workspace_Variance_Fields>;
};


/** aggregate fields of "workspace" */
export type Workspace_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workspace_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Workspace_Append_Input = {
  data_db_params?: InputMaybe<Scalars['jsonb']>;
  hasura_params?: InputMaybe<Scalars['jsonb']>;
  trace_db_params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Workspace_Avg_Fields = {
  __typename?: 'workspace_avg_fields';
  credit_balance?: Maybe<Scalars['Float']>;
  credit_balance_PU?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "workspace". All fields are combined with a logical 'AND'. */
export type Workspace_Bool_Exp = {
  _and?: InputMaybe<Array<Workspace_Bool_Exp>>;
  _cr?: InputMaybe<Timestamp_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Workspace_Bool_Exp>;
  _or?: InputMaybe<Array<Workspace_Bool_Exp>>;
  _up?: InputMaybe<Timestamp_Comparison_Exp>;
  credit_balance?: InputMaybe<Float8_Comparison_Exp>;
  credit_balance_PU?: InputMaybe<Float8_Comparison_Exp>;
  data_db_params?: InputMaybe<Jsonb_Comparison_Exp>;
  framework_api_key?: InputMaybe<String_Comparison_Exp>;
  hasura_params?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  trace_db_params?: InputMaybe<Jsonb_Comparison_Exp>;
  workspace_membership_list?: InputMaybe<Workspace_Membership_Bool_Exp>;
  workspace_membership_list_aggregate?: InputMaybe<Workspace_Membership_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "workspace" */
export type Workspace_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'workspace_pk'
  /** unique or primary key constraint on columns "slug" */
  | 'workspace_slug_uindex';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Workspace_Delete_At_Path_Input = {
  data_db_params?: InputMaybe<Array<Scalars['String']>>;
  hasura_params?: InputMaybe<Array<Scalars['String']>>;
  trace_db_params?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Workspace_Delete_Elem_Input = {
  data_db_params?: InputMaybe<Scalars['Int']>;
  hasura_params?: InputMaybe<Scalars['Int']>;
  trace_db_params?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Workspace_Delete_Key_Input = {
  data_db_params?: InputMaybe<Scalars['String']>;
  hasura_params?: InputMaybe<Scalars['String']>;
  trace_db_params?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "workspace" */
export type Workspace_Inc_Input = {
  credit_balance?: InputMaybe<Scalars['float8']>;
  credit_balance_PU?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "workspace" */
export type Workspace_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  credit_balance?: InputMaybe<Scalars['float8']>;
  credit_balance_PU?: InputMaybe<Scalars['float8']>;
  data_db_params?: InputMaybe<Scalars['jsonb']>;
  framework_api_key?: InputMaybe<Scalars['String']>;
  hasura_params?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  trace_db_params?: InputMaybe<Scalars['jsonb']>;
  workspace_membership_list?: InputMaybe<Workspace_Membership_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Workspace_Max_Fields = {
  __typename?: 'workspace_max_fields';
  _cr?: Maybe<Scalars['timestamp']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamp']>;
  credit_balance?: Maybe<Scalars['float8']>;
  credit_balance_PU?: Maybe<Scalars['float8']>;
  framework_api_key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** columns and relationships of "workspace_membership" */
export type Workspace_Membership = {
  __typename?: 'workspace_membership';
  _cr?: Maybe<Scalars['timestamp']>;
  _id: Scalars['uuid'];
  _up?: Maybe<Scalars['timestamp']>;
  role: Scalars['String'];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars['uuid'];
  /** An object relationship */
  workspace?: Maybe<Workspace>;
  workspace_id: Scalars['uuid'];
};

/** aggregated selection of "workspace_membership" */
export type Workspace_Membership_Aggregate = {
  __typename?: 'workspace_membership_aggregate';
  aggregate?: Maybe<Workspace_Membership_Aggregate_Fields>;
  nodes: Array<Workspace_Membership>;
};

export type Workspace_Membership_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workspace_Membership_Aggregate_Bool_Exp_Count>;
};

export type Workspace_Membership_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workspace_Membership_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workspace_Membership_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workspace_membership" */
export type Workspace_Membership_Aggregate_Fields = {
  __typename?: 'workspace_membership_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Workspace_Membership_Max_Fields>;
  min?: Maybe<Workspace_Membership_Min_Fields>;
};


/** aggregate fields of "workspace_membership" */
export type Workspace_Membership_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workspace_Membership_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workspace_membership" */
export type Workspace_Membership_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workspace_Membership_Max_Order_By>;
  min?: InputMaybe<Workspace_Membership_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workspace_membership" */
export type Workspace_Membership_Arr_Rel_Insert_Input = {
  data: Array<Workspace_Membership_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workspace_Membership_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workspace_membership". All fields are combined with a logical 'AND'. */
export type Workspace_Membership_Bool_Exp = {
  _and?: InputMaybe<Array<Workspace_Membership_Bool_Exp>>;
  _cr?: InputMaybe<Timestamp_Comparison_Exp>;
  _id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Workspace_Membership_Bool_Exp>;
  _or?: InputMaybe<Array<Workspace_Membership_Bool_Exp>>;
  _up?: InputMaybe<Timestamp_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  workspace?: InputMaybe<Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workspace_membership" */
export type Workspace_Membership_Constraint =
  /** unique or primary key constraint on columns "_id" */
  | 'workspace_membership_pk'
  /** unique or primary key constraint on columns "workspace_id", "user_id" */
  | 'workspace_membership_user_workspace_idx';

/** input type for inserting data into table "workspace_membership" */
export type Workspace_Membership_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  role?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  workspace?: InputMaybe<Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Workspace_Membership_Max_Fields = {
  __typename?: 'workspace_membership_max_fields';
  _cr?: Maybe<Scalars['timestamp']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamp']>;
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workspace_membership" */
export type Workspace_Membership_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workspace_Membership_Min_Fields = {
  __typename?: 'workspace_membership_min_fields';
  _cr?: Maybe<Scalars['timestamp']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamp']>;
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workspace_membership" */
export type Workspace_Membership_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workspace_membership" */
export type Workspace_Membership_Mutation_Response = {
  __typename?: 'workspace_membership_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workspace_Membership>;
};

/** on_conflict condition type for table "workspace_membership" */
export type Workspace_Membership_On_Conflict = {
  constraint: Workspace_Membership_Constraint;
  update_columns?: Array<Workspace_Membership_Update_Column>;
  where?: InputMaybe<Workspace_Membership_Bool_Exp>;
};

/** Ordering options when selecting data from "workspace_membership". */
export type Workspace_Membership_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
  workspace?: InputMaybe<Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workspace_membership */
export type Workspace_Membership_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** select columns of table "workspace_membership" */
export type Workspace_Membership_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'role'
  /** column name */
  | 'user_id'
  /** column name */
  | 'workspace_id';

/** input type for updating data in table "workspace_membership" */
export type Workspace_Membership_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  role?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "workspace_membership" */
export type Workspace_Membership_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workspace_Membership_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workspace_Membership_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  role?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workspace_membership" */
export type Workspace_Membership_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'role'
  /** column name */
  | 'user_id'
  /** column name */
  | 'workspace_id';

export type Workspace_Membership_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workspace_Membership_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workspace_Membership_Bool_Exp;
};

/** aggregate min on columns */
export type Workspace_Min_Fields = {
  __typename?: 'workspace_min_fields';
  _cr?: Maybe<Scalars['timestamp']>;
  _id?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamp']>;
  credit_balance?: Maybe<Scalars['float8']>;
  credit_balance_PU?: Maybe<Scalars['float8']>;
  framework_api_key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "workspace" */
export type Workspace_Mutation_Response = {
  __typename?: 'workspace_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workspace>;
};

/** input type for inserting object relation for remote table "workspace" */
export type Workspace_Obj_Rel_Insert_Input = {
  data: Workspace_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workspace_On_Conflict>;
};

/** on_conflict condition type for table "workspace" */
export type Workspace_On_Conflict = {
  constraint: Workspace_Constraint;
  update_columns?: Array<Workspace_Update_Column>;
  where?: InputMaybe<Workspace_Bool_Exp>;
};

/** Ordering options when selecting data from "workspace". */
export type Workspace_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _id?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  credit_balance?: InputMaybe<Order_By>;
  credit_balance_PU?: InputMaybe<Order_By>;
  data_db_params?: InputMaybe<Order_By>;
  framework_api_key?: InputMaybe<Order_By>;
  hasura_params?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  trace_db_params?: InputMaybe<Order_By>;
  workspace_membership_list_aggregate?: InputMaybe<Workspace_Membership_Aggregate_Order_By>;
};

/** primary key columns input for table: workspace */
export type Workspace_Pk_Columns_Input = {
  _id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Workspace_Prepend_Input = {
  data_db_params?: InputMaybe<Scalars['jsonb']>;
  hasura_params?: InputMaybe<Scalars['jsonb']>;
  trace_db_params?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "workspace" */
export type Workspace_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'credit_balance'
  /** column name */
  | 'credit_balance_PU'
  /** column name */
  | 'data_db_params'
  /** column name */
  | 'framework_api_key'
  /** column name */
  | 'hasura_params'
  /** column name */
  | 'name'
  /** column name */
  | 'slug'
  /** column name */
  | 'trace_db_params';

/** input type for updating data in table "workspace" */
export type Workspace_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  credit_balance?: InputMaybe<Scalars['float8']>;
  credit_balance_PU?: InputMaybe<Scalars['float8']>;
  data_db_params?: InputMaybe<Scalars['jsonb']>;
  framework_api_key?: InputMaybe<Scalars['String']>;
  hasura_params?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  trace_db_params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Workspace_Stddev_Fields = {
  __typename?: 'workspace_stddev_fields';
  credit_balance?: Maybe<Scalars['Float']>;
  credit_balance_PU?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Workspace_Stddev_Pop_Fields = {
  __typename?: 'workspace_stddev_pop_fields';
  credit_balance?: Maybe<Scalars['Float']>;
  credit_balance_PU?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Workspace_Stddev_Samp_Fields = {
  __typename?: 'workspace_stddev_samp_fields';
  credit_balance?: Maybe<Scalars['Float']>;
  credit_balance_PU?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "workspace" */
export type Workspace_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workspace_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workspace_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _id?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  credit_balance?: InputMaybe<Scalars['float8']>;
  credit_balance_PU?: InputMaybe<Scalars['float8']>;
  data_db_params?: InputMaybe<Scalars['jsonb']>;
  framework_api_key?: InputMaybe<Scalars['String']>;
  hasura_params?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  trace_db_params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Workspace_Sum_Fields = {
  __typename?: 'workspace_sum_fields';
  credit_balance?: Maybe<Scalars['float8']>;
  credit_balance_PU?: Maybe<Scalars['float8']>;
};

/** update columns of table "workspace" */
export type Workspace_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_id'
  /** column name */
  | '_up'
  /** column name */
  | 'credit_balance'
  /** column name */
  | 'credit_balance_PU'
  /** column name */
  | 'data_db_params'
  /** column name */
  | 'framework_api_key'
  /** column name */
  | 'hasura_params'
  /** column name */
  | 'name'
  /** column name */
  | 'slug'
  /** column name */
  | 'trace_db_params';

export type Workspace_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Workspace_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Workspace_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Workspace_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Workspace_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workspace_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workspace_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workspace_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workspace_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workspace_Var_Pop_Fields = {
  __typename?: 'workspace_var_pop_fields';
  credit_balance?: Maybe<Scalars['Float']>;
  credit_balance_PU?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Workspace_Var_Samp_Fields = {
  __typename?: 'workspace_var_samp_fields';
  credit_balance?: Maybe<Scalars['Float']>;
  credit_balance_PU?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Workspace_Variance_Fields = {
  __typename?: 'workspace_variance_fields';
  credit_balance?: Maybe<Scalars['Float']>;
  credit_balance_PU?: Maybe<Scalars['Float']>;
};

export type InsertAppStateMutationVariables = Exact<{
  object: App_State_Insert_Input;
}>;


export type InsertAppStateMutation = { __typename?: 'mutation_root', insert_app_state_one?: { __typename?: 'app_state', _id: any, _up: any, meta: any, session_id: string, user_id: any } | null };

export type UpdateBlueprintMutationVariables = Exact<{
  _id: Scalars['uuid'];
  width: Scalars['Int'];
}>;


export type UpdateBlueprintMutation = { __typename?: 'mutation_root', update_blueprint_by_pk?: { __typename?: 'blueprint', _id: any } | null };

export type InsertUserAndInviteToProjectMutationVariables = Exact<{
  auth0_id: Scalars['String'];
  email: Scalars['String'];
  user_id: Scalars['uuid'];
  workspace_id: Scalars['uuid'];
  invitor_id: Scalars['uuid'];
}>;


export type InsertUserAndInviteToProjectMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename?: 'user', _id: any } | null, insert_workspace_membership_one?: { __typename?: 'workspace_membership', _id: any } | null };

export type UpsertPagesManyMutationVariables = Exact<{
  objects?: InputMaybe<Array<Pages_Insert_Input> | Pages_Insert_Input>;
}>;


export type UpsertPagesManyMutation = { __typename?: 'mutation_root', insert_pages?: { __typename?: 'pages_mutation_response', returning: Array<{ __typename?: 'pages', id: any }> } | null };

export type InsertUserMutationVariables = Exact<{
  auth0_id: Scalars['String'];
  email: Scalars['String'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename?: 'user', _id: any } | null };

export type UpdateUserPrefNameMutationVariables = Exact<{
  _id: Scalars['uuid'];
  preferred_name: Scalars['String'];
}>;


export type UpdateUserPrefNameMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename?: 'user', _id: any } | null };

export type UpdateUserEmailVerifiedMutationVariables = Exact<{
  _id: Scalars['uuid'];
  email_verified: Scalars['Boolean'];
}>;


export type UpdateUserEmailVerifiedMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename?: 'user', _id: any } | null };

export type InsertWorkspaceOneMutationVariables = Exact<{
  object: Workspace_Insert_Input;
}>;


export type InsertWorkspaceOneMutation = { __typename?: 'mutation_root', insert_workspace_one?: { __typename?: 'workspace', _id: any, _cr?: any | null, _up?: any | null } | null };

export type InsertWorkspaceMembershipOneMutationVariables = Exact<{
  object: Workspace_Membership_Insert_Input;
}>;


export type InsertWorkspaceMembershipOneMutation = { __typename?: 'mutation_root', insert_workspace_membership_one?: { __typename?: 'workspace_membership', _id: any, _cr?: any | null, _up?: any | null, role: string, user_id: any, workspace_id: any } | null };

export type FetchLatestAppStateQueryVariables = Exact<{
  user_id: Scalars['uuid'];
  session_id: Scalars['String'];
}>;


export type FetchLatestAppStateQuery = { __typename?: 'query_root', app_state: Array<{ __typename?: 'app_state', _id: any, _cr: any, _up: any, meta: any, user_id: any }> };

export type FetchDatasetQueryVariables = Exact<{
  workspace_id: Scalars['uuid'];
}>;


export type FetchDatasetQuery = { __typename?: 'query_root', dataframe: Array<{ __typename?: 'dataframe', _id: any, _cr: any, _up: any, meta?: any | null, name: string, workspace_id: any, slug: string }> };

export type InsertInviteListMutationVariables = Exact<{
  objects: Array<Invite_Insert_Input> | Invite_Insert_Input;
}>;


export type InsertInviteListMutation = { __typename?: 'mutation_root', insert_invite?: { __typename?: 'invite_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'invite', _id: any, _cr: any, _up: any, email: string, num_reminders: number, accepted: boolean, last_reminder?: any | null, workspace_id: any, inviter: any, promo_name?: string | null }> } | null };

export type FetchPageQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  featured?: InputMaybe<Array<Scalars['Boolean']> | Scalars['Boolean']>;
}>;


export type FetchPageQuery = { __typename?: 'query_root', pages: Array<{ __typename?: 'pages', created_at: any, id: any, title: string, updated_at: any, notion_url?: string | null, cover_url?: string | null, featured: boolean }>, pages_aggregate: { __typename?: 'pages_aggregate', aggregate?: { __typename?: 'pages_aggregate_fields', count: number } | null } };

export type FetchUserQueryVariables = Exact<{
  auth0_id: Scalars['String'];
}>;


export type FetchUserQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', _id: any, _cr: any, _up: any, email: string, name: string, auth0_id: string, nickname: string, picture: string, email_verified: boolean, app_metadata?: any | null, user_metadata: any, beta_access: boolean, content_admin: boolean }> };

export type GetLatestAppStateStreamSubscriptionVariables = Exact<{
  user_id: Scalars['uuid'];
  session_id: Scalars['String'];
}>;


export type GetLatestAppStateStreamSubscription = { __typename?: 'subscription_root', app_state: Array<{ __typename?: 'app_state', _id: any, _cr: any, _up: any, meta: any, user_id: any }> };

export type GetDataframeStreamSubscriptionVariables = Exact<{
  workspace_id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetDataframeStreamSubscription = { __typename?: 'subscription_root', dataframe: Array<{ __typename?: 'dataframe', _id: any, _cr: any, _up: any, analysis_column?: string | null, bp_version: string, name: string, slug: string, meta?: any | null, table_name?: string | null, workspace_id: any, icon?: string | null, blueprint: Array<{ __typename?: 'blueprint', _id: any, ai_gen: boolean, dataframe_id: any, display_format: string, display_name: string, horizontal_align: string, index: number, overflow: string, selected: boolean, shown: boolean, sticky_left: boolean, sticky_right: boolean, system: boolean, type: string, slug: string, vertical_align: string, width: number }> }> };

export type GetHistoryStreamSubscriptionVariables = Exact<{
  workspace_id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetHistoryStreamSubscription = { __typename?: 'subscription_root', history: Array<{ __typename?: 'history', _id: any, _cr: any, _up: any, item: any, type: string }> };

export type GetUserStreamSubscriptionVariables = Exact<{
  _id: Scalars['uuid'];
}>;


export type GetUserStreamSubscription = { __typename?: 'subscription_root', user: Array<{ __typename?: 'user', _id: any, _cr: any, _up: any, auth0_id: string, email: string, name: string, app_metadata?: any | null, beta_access: boolean, content_admin: boolean, email_verified: boolean, preferred_name?: string | null, picture: string, nickname: string }> };

export type GetWorkspaceMembershipStreamSubscriptionVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type GetWorkspaceMembershipStreamSubscription = { __typename?: 'subscription_root', workspace_membership: Array<{ __typename?: 'workspace_membership', _id: any, _cr?: any | null, _up?: any | null, workspace_id: any, role: string, workspace?: { __typename?: 'workspace', _id: any, name: string, slug: string } | null }> };

export type GetWorkspaceMembersStreamSubscriptionVariables = Exact<{
  workspace_id: Scalars['uuid'];
}>;


export type GetWorkspaceMembersStreamSubscription = { __typename?: 'subscription_root', workspace_membership: Array<{ __typename?: 'workspace_membership', _id: any, _cr?: any | null, _up?: any | null, workspace_id: any, role: string, user?: { __typename?: 'user', _id: any, _cr: any, _up: any, name: string, email: string, picture: string, preferred_name?: string | null } | null }> };


export const InsertAppStateDocument = gql`
    mutation InsertAppState($object: app_state_insert_input!) {
  insert_app_state_one(object: $object) {
    _id
    _up
    meta
    session_id
    user_id
  }
}
    `;
export type InsertAppStateMutationFn = Apollo.MutationFunction<InsertAppStateMutation, InsertAppStateMutationVariables>;

/**
 * __useInsertAppStateMutation__
 *
 * To run a mutation, you first call `useInsertAppStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAppStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAppStateMutation, { data, loading, error }] = useInsertAppStateMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertAppStateMutation(baseOptions?: Apollo.MutationHookOptions<InsertAppStateMutation, InsertAppStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertAppStateMutation, InsertAppStateMutationVariables>(InsertAppStateDocument, options);
      }
export type InsertAppStateMutationHookResult = ReturnType<typeof useInsertAppStateMutation>;
export type InsertAppStateMutationResult = Apollo.MutationResult<InsertAppStateMutation>;
export type InsertAppStateMutationOptions = Apollo.BaseMutationOptions<InsertAppStateMutation, InsertAppStateMutationVariables>;
export const UpdateBlueprintDocument = gql`
    mutation UpdateBlueprint($_id: uuid!, $width: Int!) {
  update_blueprint_by_pk(pk_columns: {_id: $_id}, _set: {width: $width}) {
    _id
  }
}
    `;
export type UpdateBlueprintMutationFn = Apollo.MutationFunction<UpdateBlueprintMutation, UpdateBlueprintMutationVariables>;

/**
 * __useUpdateBlueprintMutation__
 *
 * To run a mutation, you first call `useUpdateBlueprintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlueprintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlueprintMutation, { data, loading, error }] = useUpdateBlueprintMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      width: // value for 'width'
 *   },
 * });
 */
export function useUpdateBlueprintMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlueprintMutation, UpdateBlueprintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlueprintMutation, UpdateBlueprintMutationVariables>(UpdateBlueprintDocument, options);
      }
export type UpdateBlueprintMutationHookResult = ReturnType<typeof useUpdateBlueprintMutation>;
export type UpdateBlueprintMutationResult = Apollo.MutationResult<UpdateBlueprintMutation>;
export type UpdateBlueprintMutationOptions = Apollo.BaseMutationOptions<UpdateBlueprintMutation, UpdateBlueprintMutationVariables>;
export const InsertUserAndInviteToProjectDocument = gql`
    mutation InsertUserAndInviteToProject($auth0_id: String!, $email: String!, $user_id: uuid!, $workspace_id: uuid!, $invitor_id: uuid!) {
  insert_user_one(object: {_id: $user_id, auth0_id: $auth0_id, email: $email}) {
    _id
  }
  insert_workspace_membership_one(
    object: {user_id: $user_id, workspace_id: $workspace_id, _cr: "now()", _up: "now()"}
  ) {
    _id
  }
}
    `;
export type InsertUserAndInviteToProjectMutationFn = Apollo.MutationFunction<InsertUserAndInviteToProjectMutation, InsertUserAndInviteToProjectMutationVariables>;

/**
 * __useInsertUserAndInviteToProjectMutation__
 *
 * To run a mutation, you first call `useInsertUserAndInviteToProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserAndInviteToProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserAndInviteToProjectMutation, { data, loading, error }] = useInsertUserAndInviteToProjectMutation({
 *   variables: {
 *      auth0_id: // value for 'auth0_id'
 *      email: // value for 'email'
 *      user_id: // value for 'user_id'
 *      workspace_id: // value for 'workspace_id'
 *      invitor_id: // value for 'invitor_id'
 *   },
 * });
 */
export function useInsertUserAndInviteToProjectMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserAndInviteToProjectMutation, InsertUserAndInviteToProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserAndInviteToProjectMutation, InsertUserAndInviteToProjectMutationVariables>(InsertUserAndInviteToProjectDocument, options);
      }
export type InsertUserAndInviteToProjectMutationHookResult = ReturnType<typeof useInsertUserAndInviteToProjectMutation>;
export type InsertUserAndInviteToProjectMutationResult = Apollo.MutationResult<InsertUserAndInviteToProjectMutation>;
export type InsertUserAndInviteToProjectMutationOptions = Apollo.BaseMutationOptions<InsertUserAndInviteToProjectMutation, InsertUserAndInviteToProjectMutationVariables>;
export const UpsertPagesManyDocument = gql`
    mutation UpsertPagesMany($objects: [pages_insert_input!] = []) {
  insert_pages(
    objects: $objects
    on_conflict: {constraint: pages_pk, update_columns: [title, notion_url, cover_url, created_at, updated_at]}
  ) {
    returning {
      id
    }
  }
}
    `;
export type UpsertPagesManyMutationFn = Apollo.MutationFunction<UpsertPagesManyMutation, UpsertPagesManyMutationVariables>;

/**
 * __useUpsertPagesManyMutation__
 *
 * To run a mutation, you first call `useUpsertPagesManyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertPagesManyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertPagesManyMutation, { data, loading, error }] = useUpsertPagesManyMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useUpsertPagesManyMutation(baseOptions?: Apollo.MutationHookOptions<UpsertPagesManyMutation, UpsertPagesManyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertPagesManyMutation, UpsertPagesManyMutationVariables>(UpsertPagesManyDocument, options);
      }
export type UpsertPagesManyMutationHookResult = ReturnType<typeof useUpsertPagesManyMutation>;
export type UpsertPagesManyMutationResult = Apollo.MutationResult<UpsertPagesManyMutation>;
export type UpsertPagesManyMutationOptions = Apollo.BaseMutationOptions<UpsertPagesManyMutation, UpsertPagesManyMutationVariables>;
export const InsertUserDocument = gql`
    mutation InsertUser($auth0_id: String!, $email: String!) {
  insert_user_one(object: {auth0_id: $auth0_id, email: $email}) {
    _id
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      auth0_id: // value for 'auth0_id'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const UpdateUserPrefNameDocument = gql`
    mutation UpdateUserPrefName($_id: uuid!, $preferred_name: String!) {
  update_user_by_pk(
    pk_columns: {_id: $_id}
    _set: {preferred_name: $preferred_name}
  ) {
    _id
  }
}
    `;
export type UpdateUserPrefNameMutationFn = Apollo.MutationFunction<UpdateUserPrefNameMutation, UpdateUserPrefNameMutationVariables>;

/**
 * __useUpdateUserPrefNameMutation__
 *
 * To run a mutation, you first call `useUpdateUserPrefNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPrefNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPrefNameMutation, { data, loading, error }] = useUpdateUserPrefNameMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      preferred_name: // value for 'preferred_name'
 *   },
 * });
 */
export function useUpdateUserPrefNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPrefNameMutation, UpdateUserPrefNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserPrefNameMutation, UpdateUserPrefNameMutationVariables>(UpdateUserPrefNameDocument, options);
      }
export type UpdateUserPrefNameMutationHookResult = ReturnType<typeof useUpdateUserPrefNameMutation>;
export type UpdateUserPrefNameMutationResult = Apollo.MutationResult<UpdateUserPrefNameMutation>;
export type UpdateUserPrefNameMutationOptions = Apollo.BaseMutationOptions<UpdateUserPrefNameMutation, UpdateUserPrefNameMutationVariables>;
export const UpdateUserEmailVerifiedDocument = gql`
    mutation UpdateUserEmailVerified($_id: uuid!, $email_verified: Boolean!) {
  update_user_by_pk(
    pk_columns: {_id: $_id}
    _set: {email_verified: $email_verified}
  ) {
    _id
  }
}
    `;
export type UpdateUserEmailVerifiedMutationFn = Apollo.MutationFunction<UpdateUserEmailVerifiedMutation, UpdateUserEmailVerifiedMutationVariables>;

/**
 * __useUpdateUserEmailVerifiedMutation__
 *
 * To run a mutation, you first call `useUpdateUserEmailVerifiedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserEmailVerifiedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserEmailVerifiedMutation, { data, loading, error }] = useUpdateUserEmailVerifiedMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      email_verified: // value for 'email_verified'
 *   },
 * });
 */
export function useUpdateUserEmailVerifiedMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserEmailVerifiedMutation, UpdateUserEmailVerifiedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserEmailVerifiedMutation, UpdateUserEmailVerifiedMutationVariables>(UpdateUserEmailVerifiedDocument, options);
      }
export type UpdateUserEmailVerifiedMutationHookResult = ReturnType<typeof useUpdateUserEmailVerifiedMutation>;
export type UpdateUserEmailVerifiedMutationResult = Apollo.MutationResult<UpdateUserEmailVerifiedMutation>;
export type UpdateUserEmailVerifiedMutationOptions = Apollo.BaseMutationOptions<UpdateUserEmailVerifiedMutation, UpdateUserEmailVerifiedMutationVariables>;
export const InsertWorkspaceOneDocument = gql`
    mutation InsertWorkspaceOne($object: workspace_insert_input!) {
  insert_workspace_one(object: $object) {
    _id
    _cr
    _up
  }
}
    `;
export type InsertWorkspaceOneMutationFn = Apollo.MutationFunction<InsertWorkspaceOneMutation, InsertWorkspaceOneMutationVariables>;

/**
 * __useInsertWorkspaceOneMutation__
 *
 * To run a mutation, you first call `useInsertWorkspaceOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertWorkspaceOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertWorkspaceOneMutation, { data, loading, error }] = useInsertWorkspaceOneMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertWorkspaceOneMutation(baseOptions?: Apollo.MutationHookOptions<InsertWorkspaceOneMutation, InsertWorkspaceOneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertWorkspaceOneMutation, InsertWorkspaceOneMutationVariables>(InsertWorkspaceOneDocument, options);
      }
export type InsertWorkspaceOneMutationHookResult = ReturnType<typeof useInsertWorkspaceOneMutation>;
export type InsertWorkspaceOneMutationResult = Apollo.MutationResult<InsertWorkspaceOneMutation>;
export type InsertWorkspaceOneMutationOptions = Apollo.BaseMutationOptions<InsertWorkspaceOneMutation, InsertWorkspaceOneMutationVariables>;
export const InsertWorkspaceMembershipOneDocument = gql`
    mutation InsertWorkspaceMembershipOne($object: workspace_membership_insert_input!) {
  insert_workspace_membership_one(object: $object) {
    _id
    _cr
    _up
    role
    user_id
    workspace_id
  }
}
    `;
export type InsertWorkspaceMembershipOneMutationFn = Apollo.MutationFunction<InsertWorkspaceMembershipOneMutation, InsertWorkspaceMembershipOneMutationVariables>;

/**
 * __useInsertWorkspaceMembershipOneMutation__
 *
 * To run a mutation, you first call `useInsertWorkspaceMembershipOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertWorkspaceMembershipOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertWorkspaceMembershipOneMutation, { data, loading, error }] = useInsertWorkspaceMembershipOneMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertWorkspaceMembershipOneMutation(baseOptions?: Apollo.MutationHookOptions<InsertWorkspaceMembershipOneMutation, InsertWorkspaceMembershipOneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertWorkspaceMembershipOneMutation, InsertWorkspaceMembershipOneMutationVariables>(InsertWorkspaceMembershipOneDocument, options);
      }
export type InsertWorkspaceMembershipOneMutationHookResult = ReturnType<typeof useInsertWorkspaceMembershipOneMutation>;
export type InsertWorkspaceMembershipOneMutationResult = Apollo.MutationResult<InsertWorkspaceMembershipOneMutation>;
export type InsertWorkspaceMembershipOneMutationOptions = Apollo.BaseMutationOptions<InsertWorkspaceMembershipOneMutation, InsertWorkspaceMembershipOneMutationVariables>;
export const FetchLatestAppStateDocument = gql`
    query FetchLatestAppState($user_id: uuid!, $session_id: String!) {
  app_state(
    where: {_and: [{user_id: {_eq: $user_id}}, {session_id: {_eq: $session_id}}]}
    limit: 1
    order_by: {_cr: desc_nulls_last}
  ) {
    _id
    _cr
    _up
    meta
    user_id
  }
}
    `;

/**
 * __useFetchLatestAppStateQuery__
 *
 * To run a query within a React component, call `useFetchLatestAppStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchLatestAppStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchLatestAppStateQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      session_id: // value for 'session_id'
 *   },
 * });
 */
export function useFetchLatestAppStateQuery(baseOptions: Apollo.QueryHookOptions<FetchLatestAppStateQuery, FetchLatestAppStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchLatestAppStateQuery, FetchLatestAppStateQueryVariables>(FetchLatestAppStateDocument, options);
      }
export function useFetchLatestAppStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchLatestAppStateQuery, FetchLatestAppStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchLatestAppStateQuery, FetchLatestAppStateQueryVariables>(FetchLatestAppStateDocument, options);
        }
export type FetchLatestAppStateQueryHookResult = ReturnType<typeof useFetchLatestAppStateQuery>;
export type FetchLatestAppStateLazyQueryHookResult = ReturnType<typeof useFetchLatestAppStateLazyQuery>;
export type FetchLatestAppStateQueryResult = Apollo.QueryResult<FetchLatestAppStateQuery, FetchLatestAppStateQueryVariables>;
export const FetchDatasetDocument = gql`
    query fetchDataset($workspace_id: uuid!) {
  dataframe(where: {workspace_id: {_eq: $workspace_id}}) {
    _id
    _cr
    _up
    meta
    name
    workspace_id
    slug
  }
}
    `;

/**
 * __useFetchDatasetQuery__
 *
 * To run a query within a React component, call `useFetchDatasetQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchDatasetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchDatasetQuery({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *   },
 * });
 */
export function useFetchDatasetQuery(baseOptions: Apollo.QueryHookOptions<FetchDatasetQuery, FetchDatasetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchDatasetQuery, FetchDatasetQueryVariables>(FetchDatasetDocument, options);
      }
export function useFetchDatasetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchDatasetQuery, FetchDatasetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchDatasetQuery, FetchDatasetQueryVariables>(FetchDatasetDocument, options);
        }
export type FetchDatasetQueryHookResult = ReturnType<typeof useFetchDatasetQuery>;
export type FetchDatasetLazyQueryHookResult = ReturnType<typeof useFetchDatasetLazyQuery>;
export type FetchDatasetQueryResult = Apollo.QueryResult<FetchDatasetQuery, FetchDatasetQueryVariables>;
export const InsertInviteListDocument = gql`
    mutation InsertInviteList($objects: [invite_insert_input!]!) {
  insert_invite(objects: $objects) {
    affected_rows
    returning {
      _id
      _cr
      _up
      email
      num_reminders
      accepted
      last_reminder
      workspace_id
      inviter
      promo_name
    }
  }
}
    `;
export type InsertInviteListMutationFn = Apollo.MutationFunction<InsertInviteListMutation, InsertInviteListMutationVariables>;

/**
 * __useInsertInviteListMutation__
 *
 * To run a mutation, you first call `useInsertInviteListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertInviteListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertInviteListMutation, { data, loading, error }] = useInsertInviteListMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertInviteListMutation(baseOptions?: Apollo.MutationHookOptions<InsertInviteListMutation, InsertInviteListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertInviteListMutation, InsertInviteListMutationVariables>(InsertInviteListDocument, options);
      }
export type InsertInviteListMutationHookResult = ReturnType<typeof useInsertInviteListMutation>;
export type InsertInviteListMutationResult = Apollo.MutationResult<InsertInviteListMutation>;
export type InsertInviteListMutationOptions = Apollo.BaseMutationOptions<InsertInviteListMutation, InsertInviteListMutationVariables>;
export const FetchPageDocument = gql`
    query FetchPage($offset: Int!, $limit: Int!, $featured: [Boolean!] = [false, true]) {
  pages(
    offset: $offset
    limit: $limit
    order_by: {created_at: desc}
    where: {featured: {_in: $featured}}
  ) {
    created_at
    id
    title
    updated_at
    notion_url
    cover_url
    featured
  }
  pages_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useFetchPageQuery__
 *
 * To run a query within a React component, call `useFetchPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPageQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      featured: // value for 'featured'
 *   },
 * });
 */
export function useFetchPageQuery(baseOptions: Apollo.QueryHookOptions<FetchPageQuery, FetchPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPageQuery, FetchPageQueryVariables>(FetchPageDocument, options);
      }
export function useFetchPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPageQuery, FetchPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPageQuery, FetchPageQueryVariables>(FetchPageDocument, options);
        }
export type FetchPageQueryHookResult = ReturnType<typeof useFetchPageQuery>;
export type FetchPageLazyQueryHookResult = ReturnType<typeof useFetchPageLazyQuery>;
export type FetchPageQueryResult = Apollo.QueryResult<FetchPageQuery, FetchPageQueryVariables>;
export const FetchUserDocument = gql`
    query FetchUser($auth0_id: String!) {
  user(where: {auth0_id: {_eq: $auth0_id}}) {
    _id
    _cr
    _up
    email
    name
    auth0_id
    nickname
    picture
    email_verified
    app_metadata
    user_metadata
    beta_access
    content_admin
  }
}
    `;

/**
 * __useFetchUserQuery__
 *
 * To run a query within a React component, call `useFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQuery({
 *   variables: {
 *      auth0_id: // value for 'auth0_id'
 *   },
 * });
 */
export function useFetchUserQuery(baseOptions: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
      }
export function useFetchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
        }
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<typeof useFetchUserLazyQuery>;
export type FetchUserQueryResult = Apollo.QueryResult<FetchUserQuery, FetchUserQueryVariables>;
export const GetLatestAppStateStreamDocument = gql`
    subscription GetLatestAppStateStream($user_id: uuid!, $session_id: String!) {
  app_state(
    where: {_and: [{user_id: {_eq: $user_id}}, {session_id: {_eq: $session_id}}]}
    limit: 1
    order_by: {_cr: desc_nulls_last}
  ) {
    _id
    _cr
    _up
    meta
    user_id
  }
}
    `;

/**
 * __useGetLatestAppStateStreamSubscription__
 *
 * To run a query within a React component, call `useGetLatestAppStateStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestAppStateStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestAppStateStreamSubscription({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      session_id: // value for 'session_id'
 *   },
 * });
 */
export function useGetLatestAppStateStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetLatestAppStateStreamSubscription, GetLatestAppStateStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetLatestAppStateStreamSubscription, GetLatestAppStateStreamSubscriptionVariables>(GetLatestAppStateStreamDocument, options);
      }
export type GetLatestAppStateStreamSubscriptionHookResult = ReturnType<typeof useGetLatestAppStateStreamSubscription>;
export type GetLatestAppStateStreamSubscriptionResult = Apollo.SubscriptionResult<GetLatestAppStateStreamSubscription>;
export const GetDataframeStreamDocument = gql`
    subscription GetDataframeStream($workspace_id: uuid) {
  dataframe(
    order_by: {_cr: desc_nulls_last}
    where: {workspace_id: {_eq: $workspace_id}}
  ) {
    _id
    _cr
    _up
    analysis_column
    bp_version
    name
    slug
    blueprint(order_by: {_cr: asc_nulls_last}) {
      _id
      ai_gen
      dataframe_id
      display_format
      display_name
      horizontal_align
      index
      overflow
      selected
      shown
      sticky_left
      sticky_right
      system
      type
      slug
      vertical_align
      width
    }
    meta
    table_name
    workspace_id
    icon
  }
}
    `;

/**
 * __useGetDataframeStreamSubscription__
 *
 * To run a query within a React component, call `useGetDataframeStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetDataframeStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataframeStreamSubscription({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *   },
 * });
 */
export function useGetDataframeStreamSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetDataframeStreamSubscription, GetDataframeStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetDataframeStreamSubscription, GetDataframeStreamSubscriptionVariables>(GetDataframeStreamDocument, options);
      }
export type GetDataframeStreamSubscriptionHookResult = ReturnType<typeof useGetDataframeStreamSubscription>;
export type GetDataframeStreamSubscriptionResult = Apollo.SubscriptionResult<GetDataframeStreamSubscription>;
export const GetHistoryStreamDocument = gql`
    subscription GetHistoryStream($workspace_id: uuid) {
  history(
    limit: 100
    order_by: {_cr: desc_nulls_last}
    where: {workspace_id: {_eq: $workspace_id}}
  ) {
    _id
    _cr
    _up
    item
    type
  }
}
    `;

/**
 * __useGetHistoryStreamSubscription__
 *
 * To run a query within a React component, call `useGetHistoryStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetHistoryStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHistoryStreamSubscription({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *   },
 * });
 */
export function useGetHistoryStreamSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetHistoryStreamSubscription, GetHistoryStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetHistoryStreamSubscription, GetHistoryStreamSubscriptionVariables>(GetHistoryStreamDocument, options);
      }
export type GetHistoryStreamSubscriptionHookResult = ReturnType<typeof useGetHistoryStreamSubscription>;
export type GetHistoryStreamSubscriptionResult = Apollo.SubscriptionResult<GetHistoryStreamSubscription>;
export const GetUserStreamDocument = gql`
    subscription GetUserStream($_id: uuid!) {
  user(where: {_id: {_eq: $_id}}) {
    _id
    _cr
    _up
    auth0_id
    email
    name
    app_metadata
    beta_access
    content_admin
    email_verified
    preferred_name
    picture
    nickname
  }
}
    `;

/**
 * __useGetUserStreamSubscription__
 *
 * To run a query within a React component, call `useGetUserStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetUserStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserStreamSubscription({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useGetUserStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetUserStreamSubscription, GetUserStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetUserStreamSubscription, GetUserStreamSubscriptionVariables>(GetUserStreamDocument, options);
      }
export type GetUserStreamSubscriptionHookResult = ReturnType<typeof useGetUserStreamSubscription>;
export type GetUserStreamSubscriptionResult = Apollo.SubscriptionResult<GetUserStreamSubscription>;
export const GetWorkspaceMembershipStreamDocument = gql`
    subscription GetWorkspaceMembershipStream($user_id: uuid!) {
  workspace_membership(where: {user_id: {_eq: $user_id}}) {
    _id
    _cr
    _up
    workspace_id
    role
    workspace {
      _id
      name
      slug
    }
  }
}
    `;

/**
 * __useGetWorkspaceMembershipStreamSubscription__
 *
 * To run a query within a React component, call `useGetWorkspaceMembershipStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceMembershipStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceMembershipStreamSubscription({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetWorkspaceMembershipStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetWorkspaceMembershipStreamSubscription, GetWorkspaceMembershipStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetWorkspaceMembershipStreamSubscription, GetWorkspaceMembershipStreamSubscriptionVariables>(GetWorkspaceMembershipStreamDocument, options);
      }
export type GetWorkspaceMembershipStreamSubscriptionHookResult = ReturnType<typeof useGetWorkspaceMembershipStreamSubscription>;
export type GetWorkspaceMembershipStreamSubscriptionResult = Apollo.SubscriptionResult<GetWorkspaceMembershipStreamSubscription>;
export const GetWorkspaceMembersStreamDocument = gql`
    subscription GetWorkspaceMembersStream($workspace_id: uuid!) {
  workspace_membership(where: {workspace_id: {_eq: $workspace_id}}) {
    _id
    _cr
    _up
    workspace_id
    role
    user {
      _id
      _cr
      _up
      name
      email
      picture
      preferred_name
    }
  }
}
    `;

/**
 * __useGetWorkspaceMembersStreamSubscription__
 *
 * To run a query within a React component, call `useGetWorkspaceMembersStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceMembersStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceMembersStreamSubscription({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *   },
 * });
 */
export function useGetWorkspaceMembersStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetWorkspaceMembersStreamSubscription, GetWorkspaceMembersStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetWorkspaceMembersStreamSubscription, GetWorkspaceMembersStreamSubscriptionVariables>(GetWorkspaceMembersStreamDocument, options);
      }
export type GetWorkspaceMembersStreamSubscriptionHookResult = ReturnType<typeof useGetWorkspaceMembersStreamSubscription>;
export type GetWorkspaceMembersStreamSubscriptionResult = Apollo.SubscriptionResult<GetWorkspaceMembersStreamSubscription>;