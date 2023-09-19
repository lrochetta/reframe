-- HASURA
CREATE DATABASE "leaptable-meta";
CREATE DATABASE "leaptable-data";
CREATE DATABASE "leaptable-gql";

CREATE ROLE "postgres";

GRANT CONNECT ON DATABASE "leaptable-meta" TO postgres;
GRANT CONNECT ON DATABASE "leaptable-data" TO postgres;
GRANT CONNECT ON DATABASE "leaptable-gql" TO postgres;

-- WORKSPACE
create table workspace
(
    _id                 uuid             default gen_random_uuid() not null
        constraint workspace_pk
            primary key,
    _cr                 timestamp        default now(),
    _up                 timestamp        default now(),
    name                varchar(64)                                not null,
    slug                varchar(64)                                not null,
    data_db_params      jsonb,
    framework_api_key   varchar(100)                               not null,
    trace_db_params     jsonb,
    hasura_params       jsonb            default '{}'::jsonb
);

alter table workspace
    owner to postgres;

create unique index workspace_slug_uindex
    on workspace (slug);



-- DATAFRAME
create table dataframe
(
    _id             uuid                     default gen_random_uuid()         not null
        constraint dataset_pkey
            primary key,
    _cr             timestamp with time zone default now()                     not null,
    _up             timestamp                default now()                     not null,
    name            varchar(64)                                                not null,
    slug            varchar(64)                                                not null,
    meta            jsonb                    default '{}'::jsonb,
    workspace_id    uuid                                                       not null
        constraint dataframe_workspace__id_fk
            references workspace
            on delete cascade,
    _blueprint      jsonb                    default '{}'::jsonb,
    bp_version      varchar(10)              default 'v0.1'::character varying not null,
    table_name      text,
    icon            varchar(20)              default '📘'::character varying
);

alter table dataframe
    owner to postgres;

-- BLUEPRINT
create table blueprint
(
    _id              uuid                     default gen_random_uuid()         not null
        constraint blueprint_pk
            primary key,
    _cr              timestamp with time zone default now()                     not null,
    _up              timestamp with time zone default now()                     not null,
    display_name     varchar(100)                                               not null,
    display_format   varchar(50)              default 'TEXT'::character varying not null,
    dataframe_id     uuid                                                       not null
        constraint blueprint_dataframe__id_fk
            references dataframe
            on delete cascade,
    sticky_left      boolean                  default false                     not null,
    sticky_right     boolean                  default false                     not null,
    system           boolean                  default false                     not null,
    width            integer                  default 350                       not null,
    type             varchar(50)                                                not null,
    selected         boolean                  default false                     not null,
    ai_gen           boolean                  default false                     not null,
    shown            boolean                  default true                      not null,
    index            integer                  default 0                         not null,
    overflow         varchar(50)              default 'CLIP'::character varying not null,
    horizontal_align varchar(20)              default 'LEFT'::character varying not null,
    vertical_align   varchar(20)              default 'TOP'::character varying  not null,
    slug             varchar(200)                                               not null,
    is_processing    boolean                  default false                     not null
);

alter table blueprint
    owner to postgres;

create unique index blueprint__id_uindex
    on blueprint (_id);

create unique index blueprint__dataframe_id_slug_uindex
    on blueprint (dataframe_id, slug);

-- auto-generated definition
create table "user"
(
    _id                 uuid                     default gen_random_uuid() not null
        constraint user_pk
            primary key,
    _cr                 timestamp with time zone default now()             not null,
    _up                 timestamp with time zone default now()             not null,
    email               varchar(100)                                       not null,
    name                varchar(100)                                       not null,
    picture             varchar(200)                                       not null,
    email_verified      boolean                  default false             not null,
    last_seen           timestamp with time zone
);

alter table "user"
    owner to postgres;

create unique index user__id_uindex
    on "user" (_id);

-- Namespace
create table namespace
(
    _id             uuid                     default gen_random_uuid() not null
        constraint namespace_pk
            primary key,
    _cr             timestamp with time zone default now()             not null,
    _up             timestamp with time zone default now()             not null,
    slug            varchar(100)                                       not null
        unique,
    trace_db_params jsonb                    default '{}'::jsonb       not null,
    name            varchar(100)                                       not null,
    data_db_params  jsonb                    default '{}'::jsonb       not null
);

alter table namespace
    owner to postgres;

create unique index namespace__id_uindex
    on namespace (_id);

-- API Keys
create table api_key
(
    _id          uuid                     default gen_random_uuid() not null
        constraint api_key_pk
            primary key,
    _cr          timestamp with time zone default now()             not null,
    _up          timestamp with time zone default now()             not null,
    key          varchar(250)                                       not null,
    active       boolean                  default true              not null,
    namespace_id uuid                                               not null
        constraint api_key_namespace__id_fk
            references namespace
            on delete cascade,
    usage_count  bigint                   default 0                 not null,
    name         varchar(100)                                       not null
);

alter table api_key
    owner to postgres;

create unique index api_key__id_uindex
    on api_key (_id);


