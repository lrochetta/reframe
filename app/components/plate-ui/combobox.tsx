// @ts-nocheck
"use client";

import React, { useEffect, useRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  comboboxActions,
  ComboboxContentItemProps,
  ComboboxContentProps,
  ComboboxProps,
  Data,
  NoData,
  TComboboxItem,
  useActiveComboboxStore,
  useComboboxContent,
  useComboboxContentState,
  useComboboxControls,
  useComboboxItem,
  useComboboxSelectors,
} from "@udecode/plate-combobox";
import {
  useEventEditorSelectors,
  usePlateEditorState,
} from "@udecode/plate-common";
import { createVirtualRef } from "@udecode/plate-floating";

import clsx from "clsx";

export function ComboboxItem<TData extends Data = NoData>({
  combobox,
  index,
  item,
  onRenderItem,
}: ComboboxContentItemProps<TData>) {
  const { props } = useComboboxItem({ item, index, combobox, onRenderItem });
  // console.log("ComboboxItem", props, item);

  const onClick = () => {
    console.log("onClick", item);
  };

  return (
    <div
      {...props}
      className={clsx(
        "border-b border-slate-200 mx-2 my-2 px-2 py-1.5 flex flex-row",
        props["data-highlighted"]
          ? "bg-zinc-100 dark:bg-zinc-900"
          : "bg-white dark:bg-black",
        "space-y-2 space-x-2 cursor-pointer select-none items-center rounded-sm  text-sm outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground data-[highlighted=true]:bg-accent data-[highlighted=true]:text-accent-foreground"
      )}
    >
      <img className={"w-6"} src={item.icon} />
      <span>{item?.text}</span>
    </div>
  );
}

export function ComboboxContent<TData extends Data = NoData>(
  props: ComboboxContentProps<TData>
) {
  const {
    component: Component,
    items,
    portalElement,
    combobox,
    onRenderItem,
  } = props;
  const fallbackRef = useRef();

  const editor = usePlateEditorState();

  const filteredItems =
    useComboboxSelectors.filteredItems() as TComboboxItem<TData>[];
  const activeComboboxStore = useActiveComboboxStore()!;

  const state = useComboboxContentState({ items, combobox });
  const { menuProps, targetRange } = useComboboxContent(state);

  const onKeyDown = (event) => {
    console.log(onKeyDown, event);
  };

  return (
    <div onKeyDown={onKeyDown}>
      <div
        ref={(el) => {
          // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
          if (!el) return;

          // console.log(el.getBoundingClientRect()); // prints 200px
          // @ts-nocheck
          ("use client");
          fallbackRef.current = el.getBoundingClientRect();
        }}
        style={{
          display: "inline-block",
          width: "200px",
          height: "100px",
        }}
      />
      <div ref={fallbackRef} className={"h-24 w-full"}>
        {/*Fallback ref*/}
      </div>
      <Popover.Root open>
        <Popover.PopoverAnchor
          virtualRef={createVirtualRef(editor, targetRange ?? undefined, {
            fallbackRef: {
              x: 1392.34375,
              y: 152,
              top: 152,
              bottom: 170,
              left: 1392.34375,
              right: 1392.34375,
              width: 0,
              height: 18,
            },
          })}
        />

        <Popover.Portal container={portalElement}>
          <Popover.Content
            {...menuProps}
            sideOffset={5}
            side="bottom"
            align="start"
            className={clsx(
              "bg-white dark:bg-black",
              "z-[500] m-0 max-h-[25rem] w-[300px] shadow-2xl p-1 border border-slate-200 overflow-scroll rounded-md bg-popover p-0 shadow-md"
            )}
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            {Component ? Component({ store: activeComboboxStore }) : null}

            {filteredItems.map((item, index) => (
              <ComboboxItem
                key={item.key}
                item={item}
                combobox={combobox}
                index={index}
                onRenderItem={onRenderItem}
              />
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

/**
 * Register the combobox id, trigger, onSelectItem
 * Renders the combobox if active.
 */
export function Combobox<TData extends Data = NoData>({
  id,
  trigger,
  searchPattern,
  onSelectItem,
  controlled,
  maxSuggestions,
  filter,
  sort,
  disabled: _disabled,
  ...props
}: ComboboxProps<TData>) {
  searchPattern = searchPattern ?? trigger;

  const storeItems = useComboboxSelectors.items();
  const disabled =
    _disabled ?? (storeItems.length === 0 && !props.items?.length);

  const focusedEditorId = useEventEditorSelectors.focus?.();
  const combobox = useComboboxControls();
  const activeId = useComboboxSelectors.activeId();
  const editor = usePlateEditorState();

  console.log(searchPattern, "searchPattern", trigger, activeId);

  useEffect(() => {
    comboboxActions.setComboboxById({
      id,
      trigger,
      searchPattern,
      controlled,
      onSelectItem,
      maxSuggestions,
      filter,
      sort,
    });
  }, [
    id,
    trigger,
    searchPattern,
    controlled,
    onSelectItem,
    maxSuggestions,
    filter,
    sort,
  ]);

  if (
    !combobox ||
    !editor.selection ||
    focusedEditorId !== editor.id ||
    activeId !== id ||
    disabled
  ) {
    return null;
  }

  return <ComboboxContent combobox={combobox} {...props} />;
}
