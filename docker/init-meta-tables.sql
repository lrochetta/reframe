WITH
     skey AS (
    select 'sk_' || substr(md5(random()::text), 0, 64) as key
),
     ins_workspace as
(
    -- Create the default workspace
    INSERT INTO public.workspace
        (name, slug, data_db_params, framework_api_key, trace_db_params, hasura_params)
    VALUES
        ('Space', 'space', '{}'::jsonb, (SELECT key FROM skey), '{}'::jsonb, '{}'::jsonb)
    RETURNING _id
),
     ins_namespace as
(
    -- Create the default workspace
    INSERT INTO public.namespace
        (_id, name, slug, data_db_params, trace_db_params)
    VALUES
      ((SELECT _id from ins_workspace), 'Space', 'space', '{}'::jsonb, '{}'::jsonb)
    RETURNING _id
),
     ins_dataframe as
(
    -- Create a sample dataframe
    INSERT INTO public.dataframe
        (name, slug, workspace_id, table_name)
    VALUES
      ('Sample | Company Data', 'sample', (SELECT _id from ins_workspace), 'tb_x')
    RETURNING _id
) INSERT INTO public.api_key
    (key, namespace_id, name)
VALUES
  ((SELECT key FROM skey),  (SELECT _id from ins_workspace), 'Default Key')
RETURNING _id;