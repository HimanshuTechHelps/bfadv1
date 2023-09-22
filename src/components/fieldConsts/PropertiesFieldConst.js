import { TEXT } from "../utils/Const";

export const newPropertyConst = [
  {
    name: "state",
    label: "State",
    type: "select",
    parentclassName: "property-w-1",
    isRequired: true,
    requiredErrorMessage: "Please select a state.",
  },
  {
    name: "city",
    label: "City",
    type: "select",
    parentclassName: "property-w-1",
    isRequired: true,
    requiredErrorMessage: "Please select a city.",
  },
  {
    name: "sectorNumber",
    label: "Location",
    type: "select",
    parentclassName: "property-w-1",
    isRequired: true,
    requiredErrorMessage: "Please select a sector number.",
  },
  {
    name: "plotNumber",
    label: "Plot Number",
    parentclassName: "property-w-1",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a plot number.",
  },
  {
    name: "size",
    nameType: "sizeType",
    parentclassName: "property-w-1",
    label: "Size",
    className: "property-price-class",
    type: "size",
    options: [
      { value: "Sq.Yd.", label: "Sq.Yd." },
      { value: "Sq.Mt.", label: "Sq.Mt." },
    ],
    defaultOption: { value: "Sq.Yd.", label: "Sq.Yd." },
    isRequired: true,
    requiredErrorMessage: "Please enter a size.",
  },
  {
    name: "floor",
    label: "Floor",
    parentclassName: "property-w-1",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please enter a floor.",
  },
  {
    name: "price",
    label: "Price",
    parentclassName: "property-w-1",
    type: "price",
    className: "property-price-class",
    isRequired: true,
    requiredErrorMessage: "Please enter a price.",
  },
  {
    name: "accommodation",
    label: "Accommodation",
    type: "select",
    parentclassName: "property-w-1",
    isRequired: true,
    requiredErrorMessage: "Please select an accommodation.",
  },
  {
    name: "facing",
    label: "Facing",
    type: "select",
    parentclassName: "property-w-1",
    isRequired: true,
    requiredErrorMessage: "Please select a facing direction.",
  },

  {
    name: "parkFacing",
    label: "Park Facing",
    type: "radio",
    parentclassName: "property-w-1",
    dataKey: "parkFacing",
    isRequired: true,
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    requiredErrorMessage: "Please select an option for park facing.",
  },
  {
    name: "corner",
    label: "Corner",
    type: "radio",
    isRequired: true,
    parentclassName: "property-w-1",
    dataKey: "corner",
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    requiredErrorMessage: "Please select an option for corner.",
  },

  {
    name: "possession",
    label: "Possession",
    type: "select",
    parentclassName: "property-w-1",
    isRequired: true,
    requiredErrorMessage: "Please select a possession status.",
  },
  {
    name: "builderName",
    label: "Builder Name",
    parentclassName: "property-w-2",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a builder name.",
  },
  {
    name: "builderContact",
    label: "Builder Contact",
    parentclassName: "property-w-2",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a builder contact.",
  },
  {
    name: "title",
    label: "Primary Title",
    parentclassName: "property-w-2 property-margin-r",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please enter a title.",
  },
  {
    name: "detailTitle",
    parentclassName: "property-w-2 property-margin-r",
    label: "Secondary Title",
    type: TEXT,
    textLimit: 100,
    isRequired: true,
    requiredErrorMessage: "Please enter a detail title.",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    parentclassName: "property-w-3 column-property",
    className: "column-property",
    isRequired: true,
    textLimit: 100,
    requiredErrorMessage: "Please enter a description.",
  },
  {
    name: "thumbnailFile",
    label: "Thumbnail Image",
    parentclassName: "property-w-1",
    type: "file",
    isRequired: true,
    requiredErrorMessage: "Please Add 360 Image",
    acceptedFileTypes: "image/*",
  },
  {
    name: "normalImageFile",
    label: "Normal Images",
    type: "file",
    parentclassName: "property-w-1",
    isRequired: false,
    requiredErrorMessage: "Please Add 360 Image",
    acceptedFileTypes: "image/*",
  },
  {
    name: "threeSixtyImages",
    label: "360 Images",
    parentclassName: "property-w-1",
    type: "file",
    isRequired: false,
    requiredErrorMessage: "Please Add 360 Image",
    acceptedFileTypes: "image/*",
  },
  {
    name: "layoutFile",
    label: "Layout Plan",
    parentclassName: "property-w-1",
    type: "file",
    isRequired: false,
    requiredErrorMessage: "Please Add 360 Image",
    acceptedFileTypes: "image/*",
  },
  {
    name: "videoFile",
    label: "Load Videos",
    parentclassName: "property-w-1",
    type: "file",
    isRequired: false,
    requiredErrorMessage: "Please Add 360 Image",
    acceptedFileTypes: "video/*",
  },
  {
    name: "virtualFile",
    label: "Load Virtual Tour",
    parentclassName: "property-w-1",
    type: "file",
    isRequired: false,
    requiredErrorMessage: "Please Add 360 Image",
    acceptedFileTypes: "video/*",
  },
];
export const bulkuploadheader = [
  {
    property: [
      "Property id",
      "City",
      "Location",
      "Plot Number",
      "Size",
      "Floor",
      "Accommodation",
      "Possession",
      "Price",
      "Facing",
      "Park Facing",
      "Corner",
      "Description",
      "1st Page Title",
      "2 Page Title",
      "Channel Partner Name",
      "Channel Contact Number",
      "Builder name",
      "Contact",
      "THUMBNAIL IMAGE NAME",
      "FOLDER NAME",
    ],
  },
];
