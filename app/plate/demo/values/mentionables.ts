// @ts-nocheck
import { TComboboxItem } from '@udecode/plate-combobox';

export const AGENTS: TComboboxItem[]  = [
  {
    key: "6",
    name: "Browser",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/chrome.png",
    activation_command: "browse",
    text: "browse",
  },
  {
    key: "4",
    name: "Google Search",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/google-search.png",
    activation_command: "google_search",
    text: "google_search",
  },
  {
    key: "3",
    name: "Bing Search",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/bing-search.webp",
    tags: ["Search", "Bing", "Microsoft"],
    activation_command: "bing_search",
    text: "bing_search",
  },
  {
    key: "1",
    name: "Hubspot",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/hubspot.png",
    tags: ["CRM", "Hubspot", "Sales", "Marketing", "Customer Service"],
    activation_command: "hubspot",
  },
  {
    key: "8",
    name: "Salesforce",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/salesforce.png",
    activation_command: "salesforce",
  },
  {
    key: "8",
    name: "Apollo.io",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/apollo-io-logo.png",
    tags: [],
    activation_command: "apollo",
  },
  {
    key: "8",
    name: "LinkedIn",
    icon: "https://reframe-static.s3.us-east-2.amazonaws.com/icons/linkedin.webp",
    activation_command: "linkedin",
  },
];