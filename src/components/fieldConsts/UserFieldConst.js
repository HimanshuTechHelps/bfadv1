import { TEXT } from "../utils/Const";

export const newUserConst = [
  {
    name: "name",
    label: "Name",
    dataKey: "name",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "phoneNumber",
    label: "Mobile Number",
    dataKey: "PhoneNumber",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your phone number.",
  },
  {
    name: "email",
    label: "Email",
    dataKey: "email",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your email.",
  },
  {
    name: "companyName",
    label: "Company Name",
    dataKey: "companyName",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "companyAddress",
    label: "Company Address",
    dataKey: "companyAddress",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your address.",
  },

  {
    name: "city",
    label: "city",
    dataKey: "city",
    type: "select",
    isRequired: true,
    options: [{ value: "gurgaon", label: "Gurgaon" }],
    requiredErrorMessage: "Please select a City.",
  },
  {
    name: "state",
    label: "state",
    dataKey: "state",
    type: "select",
    isRequired: true,
    options: [{ value: "harayana", label: "Harayana" }],
    requiredErrorMessage: "Please select a State.",
  },
  {
    name: "location",
    label: "Locations Allowed",
    dataKey: "location",
    type: "select",
    isRequired: true,
    isMulti: true,
    options: [
      { label: "DLF City Phase 1", value: "DLF City Phase 1" },
      { label: "DLF City Phase 2", value: "DLF City Phase 2" },
      { label: "DLF City Phase 3", value: "DLF City Phase 3" },
      { label: "DLF City Phase 4", value: "DLF City Phase 4" },
      { label: "Sector 15 Part 2", value: "Sector 15 Part 2" },
      { label: "Sector 27", value: "Sector 27" },
      { label: "Sector 28", value: "Sector 28" },
      { label: "Sector 38", value: "Sector 38" },
      { label: "Sector 42", value: "Sector 42" },
      { label: "Sector 43", value: "Sector 43" },
      { label: "Sector 45", value: "Sector 45" },
      { label: "Sector 46", value: "Sector 46" },
      { label: "South City 1", value: "South City 1" },
      { label: "Sushant Lok 1", value: "Sushant Lok 1" },
    ],
    requiredErrorMessage: "Please select a Locations.",
  },
];

export const editUserConst = [
  {
    name: "name",
    label: "Name",
    dataKey: "name",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "phoneNumber",
    label: "Mobile Number",
    dataKey: "PhoneNumber",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your phone number.",
  },
  {
    name: "email",
    label: "Email",
    dataKey: "email",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your email.",
  },
  {
    name: "companyName",
    label: "Company Name",
    dataKey: "companyName",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "companyAddress",
    label: "Company Address",
    dataKey: "companyAddress",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your address.",
  },

  {
    name: "city",
    label: "city",
    dataKey: "city",
    type: "select",
    isRequired: true,
    options: [{ value: "gurgaon", label: "Gurgaon" }],
    requiredErrorMessage: "Please select a City.",
  },
  {
    name: "state",
    label: "state",
    dataKey: "state",
    type: "select",
    isRequired: true,
    options: [{ value: "harayana", label: "Harayana" }],
    requiredErrorMessage: "Please select a State.",
  },
  {
    name: "location",
    label: "Locations Allowed",
    dataKey: "location",
    type: "select",
    isRequired: true,
    options: [
      { label: "DLF City Phase 1", value: "DLF City Phase 1" },
      { label: "DLF City Phase 2", value: "DLF City Phase 2" },
      { label: "DLF City Phase 3", value: "DLF City Phase 3" },
      { label: "DLF City Phase 4", value: "DLF City Phase 4" },
      { label: "Sector 15 Part 2", value: "Sector 15 Part 2" },
      { label: "Sector 27", value: "Sector 27" },
      { label: "Sector 28", value: "Sector 28" },
      { label: "Sector 38", value: "Sector 38" },
      { label: "Sector 42", value: "Sector 42" },
      { label: "Sector 43", value: "Sector 43" },
      { label: "Sector 45", value: "Sector 45" },
      { label: "Sector 46", value: "Sector 46" },
      { label: "South City 1", value: "South City 1" },
      { label: "Sushant Lok 1", value: "Sushant Lok 1" },
    ],
    requiredErrorMessage: "Please select a Locations.",
  },
  {
    name: "status",
    label: "Status",
    dataKey: "status",
    type: "select",
    isRequired: true,
    options: [
      { value: "Suspend", label: "Suspend" },
      { value: "active", label: "Active" },
      { value: "Terminate", label: "Terminate" },
    ],
    requiredErrorMessage: "Please select a Status.",
  },
];
