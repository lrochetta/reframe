import { KEY_ALIGN } from '@udecode/plate-alignment';
import { KEY_AUTOFORMAT } from '@udecode/plate-autoformat';
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block';
import { KEY_COMBOBOX } from '@udecode/plate-combobox';
import { KEY_INDENT } from '@udecode/plate-indent';
import { KEY_LINE_HEIGHT } from '@udecode/plate-line-height';
import { ELEMENT_MENTION } from '@udecode/plate-mention';
import { KEY_NODE_ID } from '@udecode/plate-node-id';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

import { SettingBadge, settingBadges } from '@/config/setting-badges';
import { settingValues } from '@/config/setting-values';

export type CheckedId = keyof typeof settingPluginItems;

export type SettingPlugin = {
  id: string;
  label: string;
  route?: string;
  badges?: SettingBadge[];
  dependencies?: CheckedId[];
  conflicts?: CheckedId[];
};

export const settingPluginItems = {
  [ELEMENT_BLOCKQUOTE]: {
    id: ELEMENT_BLOCKQUOTE,
    label: 'Blockquote',
    badges: [settingBadges.element],
    route: settingValues.basicnodes.route,
  },
  code_block: {
    id: ELEMENT_CODE_BLOCK,
    label: 'Code block',
    badges: [settingBadges.element],
    route: settingValues.basicnodes.route,
  },
  heading: {
    id: 'heading',
    label: 'Heading',
    badges: [settingBadges.element],
    route: settingValues.basicnodes.route,
  },
  [ELEMENT_MENTION]: {
    id: ELEMENT_MENTION,
    label: 'Mention',
    badges: [settingBadges.element, settingBadges.inline, settingBadges.void],
    dependencies: [KEY_COMBOBOX],
    route: settingValues.mention.route,
  },
  [ELEMENT_PARAGRAPH]: {
    id: ELEMENT_PARAGRAPH,
    label: 'Paragraph',
    badges: [settingBadges.element],
    route: settingValues.basicnodes.route,
  },
  [MARK_BOLD]: {
    id: MARK_BOLD,
    label: 'Bold',
    badges: [settingBadges.leaf],
    route: settingValues.basicmarks.route,
  },
  [MARK_CODE]: {
    id: MARK_CODE,
    label: 'Code',
    badges: [settingBadges.leaf],
    route: settingValues.basicmarks.route,
  },
  [MARK_ITALIC]: {
    id: MARK_ITALIC,
    label: 'Italic',
    badges: [settingBadges.leaf],
    route: settingValues.basicmarks.route,
  },
  [MARK_STRIKETHROUGH]: {
    id: MARK_STRIKETHROUGH,
    label: 'Strikethrough',
    badges: [settingBadges.leaf],
    route: settingValues.basicmarks.route,
  },
  [MARK_SUBSCRIPT]: {
    id: MARK_SUBSCRIPT,
    label: 'Subscript',
    badges: [settingBadges.leaf],
    route: settingValues.basicmarks.route,
  },
  [MARK_SUPERSCRIPT]: {
    id: MARK_SUPERSCRIPT,
    label: 'Superscript',
    badges: [settingBadges.leaf],
    route: settingValues.basicmarks.route,
  },
  [MARK_UNDERLINE]: {
    id: MARK_UNDERLINE,
    label: 'Underline',
    badges: [settingBadges.leaf],
    route: settingValues.basicmarks.route,
  },
  [KEY_ALIGN]: {
    id: KEY_ALIGN,
    label: 'Align',
    badges: [settingBadges.style],
    route: settingValues.align.route,
  },
  [KEY_LINE_HEIGHT]: {
    id: KEY_LINE_HEIGHT,
    label: 'Line Height',
    badges: [settingBadges.style],
    route: settingValues.lineheight.route,
  },
  [KEY_INDENT]: {
    id: KEY_INDENT,
    label: 'Indent',
    badges: [settingBadges.style],
    route: settingValues.indent.route,
  },
  // Functionality
  [KEY_AUTOFORMAT]: {
    id: KEY_AUTOFORMAT,
    label: 'Autoformat',
    badges: [settingBadges.handler],
    route: settingValues.autoformat.route,
  },
  // [KEY_BLOCK_SELECTION]: {
  [KEY_COMBOBOX]: {
    id: KEY_COMBOBOX,
    label: 'Combobox',
    badges: [settingBadges.handler, settingBadges.ui],
    // route: settingValues.combobox.route,
  },
  [KEY_NODE_ID]: {
    id: KEY_NODE_ID,
    label: 'Id',
    badges: [settingBadges.normalizer],
    // route: settingValues.nodeid.route,
  },
};

export const settingPlugins = [
  {
    id: 'blocks',
    label: 'Nodes',
    children: [
      settingPluginItems[ELEMENT_BLOCKQUOTE],
      settingPluginItems[ELEMENT_CODE_BLOCK],
      settingPluginItems.heading,
      settingPluginItems[ELEMENT_MENTION],
      settingPluginItems[ELEMENT_PARAGRAPH]
    ],
  },
  {
    id: 'marks',
    label: 'Marks',
    children: [
      settingPluginItems[MARK_BOLD],
      settingPluginItems[MARK_CODE],
      settingPluginItems[MARK_ITALIC],
      settingPluginItems[MARK_STRIKETHROUGH],
      settingPluginItems[MARK_SUBSCRIPT],
      settingPluginItems[MARK_SUPERSCRIPT],
      settingPluginItems[MARK_UNDERLINE],
    ],
  },
  {
    id: 'style',
    label: 'Block Style',
    children: [
      settingPluginItems[KEY_ALIGN],
      settingPluginItems[KEY_INDENT],
      // settingPluginItems[KEY_LIST_STYLE_TYPE],
      settingPluginItems[KEY_LINE_HEIGHT],
    ],
  },
  {
    id: 'functionality',
    label: 'Functionality',
    children: [
      settingPluginItems[KEY_AUTOFORMAT],
      settingPluginItems[KEY_COMBOBOX],
      settingPluginItems[KEY_NODE_ID]
    ],
  },
  {
    id: 'Deserialization',
    label: 'Deserialization',
    children: [
    ],
  },
];
