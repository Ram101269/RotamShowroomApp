/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Button,
  CheckboxField,
  Flex,
  Grid,
  SelectField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
export default function Pricing(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const { tokens } = useTheme();
  const initialValues = {
    Select_Model: false,
    Select_Variant: false,
    Select_Colour: false,
    ExShowroom_Price: "",
    OnRoad_Price: "",
    Upload_PriceListImage: undefined,
    Select_ContactPersonName: "",
    Enter_ContactPersonName: "",
    Select_ContactPersonNumber: "",
    Enter_ContactPersonNumber: "",
  };
  const [Select_Model, setSelect_Model] = React.useState(
    initialValues.Select_Model
  );
  const [Select_Variant, setSelect_Variant] = React.useState(
    initialValues.Select_Variant
  );
  const [Select_Colour, setSelect_Colour] = React.useState(
    initialValues.Select_Colour
  );
  const [ExShowroom_Price, setExShowroom_Price] = React.useState(
    initialValues.ExShowroom_Price
  );
  const [OnRoad_Price, setOnRoad_Price] = React.useState(
    initialValues.OnRoad_Price
  );
  const [Upload_PriceListImage, setUpload_PriceListImage] = React.useState(
    initialValues.Upload_PriceListImage
  );
  const [Select_ContactPersonName, setSelect_ContactPersonName] =
    React.useState(initialValues.Select_ContactPersonName);
  const [Enter_ContactPersonName, setEnter_ContactPersonName] = React.useState(
    initialValues.Enter_ContactPersonName
  );
  const [Select_ContactPersonNumber, setSelect_ContactPersonNumber] =
    React.useState(initialValues.Select_ContactPersonNumber);
  const [Enter_ContactPersonNumber, setEnter_ContactPersonNumber] =
    React.useState(initialValues.Enter_ContactPersonNumber);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSelect_Model(initialValues.Select_Model);
    setSelect_Variant(initialValues.Select_Variant);
    setSelect_Colour(initialValues.Select_Colour);
    setExShowroom_Price(initialValues.ExShowroom_Price);
    setOnRoad_Price(initialValues.OnRoad_Price);
    setUpload_PriceListImage(initialValues.Upload_PriceListImage);
    setSelect_ContactPersonName(initialValues.Select_ContactPersonName);
    setEnter_ContactPersonName(initialValues.Enter_ContactPersonName);
    setSelect_ContactPersonNumber(initialValues.Select_ContactPersonNumber);
    setEnter_ContactPersonNumber(initialValues.Enter_ContactPersonNumber);
    setErrors({});
  };
  const validations = {
    Select_Model: [],
    Select_Variant: [],
    Select_Colour: [],
    ExShowroom_Price: [],
    OnRoad_Price: [],
    Upload_PriceListImage: [],
    Select_ContactPersonName: [],
    Enter_ContactPersonName: [],
    Select_ContactPersonNumber: [],
    Enter_ContactPersonNumber: [{ type: "Required" }, { type: "Phone" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.medium.value}
      columnGap={tokens.space.large.value}
      padding={tokens.space.small.value}
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Select_Model,
          Select_Variant,
          Select_Colour,
          ExShowroom_Price,
          OnRoad_Price,
          Upload_PriceListImage,
          Select_ContactPersonName,
          Enter_ContactPersonName,
          Select_ContactPersonNumber,
          Enter_ContactPersonNumber,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "Pricing")}
      {...rest}
    >
      <CheckboxField
        label="Select Model"
        name="fieldName"
        value="fieldName"
        checked={Select_Model}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Select_Model: value,
              Select_Variant,
              Select_Colour,
              ExShowroom_Price,
              OnRoad_Price,
              Upload_PriceListImage,
              Select_ContactPersonName,
              Enter_ContactPersonName,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.Select_Model ?? value;
          }
          if (errors.Select_Model?.hasError) {
            runValidationTasks("Select_Model", value);
          }
          setSelect_Model(value);
        }}
        onBlur={() => runValidationTasks("Select_Model", Select_Model)}
        errorMessage={errors.Select_Model?.errorMessage}
        hasError={errors.Select_Model?.hasError}
        {...getOverrideProps(overrides, "Select_Model")}
      ></CheckboxField>
      <CheckboxField
        label="Select Variant"
        name="fieldName"
        value="fieldName"
        checked={Select_Variant}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant: value,
              Select_Colour,
              ExShowroom_Price,
              OnRoad_Price,
              Upload_PriceListImage,
              Select_ContactPersonName,
              Enter_ContactPersonName,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.Select_Variant ?? value;
          }
          if (errors.Select_Variant?.hasError) {
            runValidationTasks("Select_Variant", value);
          }
          setSelect_Variant(value);
        }}
        onBlur={() => runValidationTasks("Select_Variant", Select_Variant)}
        errorMessage={errors.Select_Variant?.errorMessage}
        hasError={errors.Select_Variant?.hasError}
        {...getOverrideProps(overrides, "Select_Variant")}
      ></CheckboxField>
      <CheckboxField
        label="Select Colour"
        name="fieldName"
        value="fieldName"
        checked={Select_Colour}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant,
              Select_Colour: value,
              ExShowroom_Price,
              OnRoad_Price,
              Upload_PriceListImage,
              Select_ContactPersonName,
              Enter_ContactPersonName,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.Select_Colour ?? value;
          }
          if (errors.Select_Colour?.hasError) {
            runValidationTasks("Select_Colour", value);
          }
          setSelect_Colour(value);
        }}
        onBlur={() => runValidationTasks("Select_Colour", Select_Colour)}
        errorMessage={errors.Select_Colour?.errorMessage}
        hasError={errors.Select_Colour?.hasError}
        {...getOverrideProps(overrides, "Select_Colour")}
      ></CheckboxField>
      <TextField
        label="Ex-Showroom Price in INR"
        placeholder="No Decimals Allowed"
        type="number"
        step="any"
        value={ExShowroom_Price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant,
              Select_Colour,
              ExShowroom_Price: value,
              OnRoad_Price,
              Upload_PriceListImage,
              Select_ContactPersonName,
              Enter_ContactPersonName,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.ExShowroom_Price ?? value;
          }
          if (errors.ExShowroom_Price?.hasError) {
            runValidationTasks("ExShowroom_Price", value);
          }
          setExShowroom_Price(value);
        }}
        onBlur={() => runValidationTasks("ExShowroom_Price", ExShowroom_Price)}
        errorMessage={errors.ExShowroom_Price?.errorMessage}
        hasError={errors.ExShowroom_Price?.hasError}
        {...getOverrideProps(overrides, "ExShowroom_Price")}
      ></TextField>
      <TextField
        label="On-Road Price in INR"
        placeholder="No Decimals Allowed"
        type="number"
        step="any"
        value={OnRoad_Price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant,
              Select_Colour,
              ExShowroom_Price,
              OnRoad_Price: value,
              Upload_PriceListImage,
              Select_ContactPersonName,
              Enter_ContactPersonName,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.OnRoad_Price ?? value;
          }
          if (errors.OnRoad_Price?.hasError) {
            runValidationTasks("OnRoad_Price", value);
          }
          setOnRoad_Price(value);
        }}
        onBlur={() => runValidationTasks("OnRoad_Price", OnRoad_Price)}
        errorMessage={errors.OnRoad_Price?.errorMessage}
        hasError={errors.OnRoad_Price?.hasError}
        {...getOverrideProps(overrides, "OnRoad_Price")}
      ></TextField>
      <Autocomplete
        label="Upload Price List Image"
        placeholder="Only jpg/png Format, MaxSize 1MB"
        options={[]}
        onSelect={({ id, label }) => {
          setUpload_PriceListImage(id);
          runValidationTasks("Upload_PriceListImage", id);
        }}
        onClear={() => {
          setUpload_PriceListImage("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant,
              Select_Colour,
              ExShowroom_Price,
              OnRoad_Price,
              Upload_PriceListImage: value,
              Select_ContactPersonName,
              Enter_ContactPersonName,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.Upload_PriceListImage ?? value;
          }
          if (errors.Upload_PriceListImage?.hasError) {
            runValidationTasks("Upload_PriceListImage", value);
          }
          setUpload_PriceListImage(value);
        }}
        onBlur={() =>
          runValidationTasks("Upload_PriceListImage", Upload_PriceListImage)
        }
        errorMessage={errors.Upload_PriceListImage?.errorMessage}
        hasError={errors.Upload_PriceListImage?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "Upload_PriceListImage")}
      ></Autocomplete>
      <SelectField
        label="Select Contact Person Name"
        placeholder="Please select an option"
        value={Select_ContactPersonName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant,
              Select_Colour,
              ExShowroom_Price,
              OnRoad_Price,
              Upload_PriceListImage,
              Select_ContactPersonName: value,
              Enter_ContactPersonName,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.Select_ContactPersonName ?? value;
          }
          if (errors.Select_ContactPersonName?.hasError) {
            runValidationTasks("Select_ContactPersonName", value);
          }
          setSelect_ContactPersonName(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "Select_ContactPersonName",
            Select_ContactPersonName
          )
        }
        errorMessage={errors.Select_ContactPersonName?.errorMessage}
        hasError={errors.Select_ContactPersonName?.hasError}
        {...getOverrideProps(overrides, "Select_ContactPersonName")}
      ></SelectField>
      <TextField
        label="Enter Contact Person Name"
        placeholder="Enter New Name if not available as Option"
        value={Enter_ContactPersonName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant,
              Select_Colour,
              ExShowroom_Price,
              OnRoad_Price,
              Upload_PriceListImage,
              Select_ContactPersonName,
              Enter_ContactPersonName: value,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.Enter_ContactPersonName ?? value;
          }
          if (errors.Enter_ContactPersonName?.hasError) {
            runValidationTasks("Enter_ContactPersonName", value);
          }
          setEnter_ContactPersonName(value);
        }}
        onBlur={() =>
          runValidationTasks("Enter_ContactPersonName", Enter_ContactPersonName)
        }
        errorMessage={errors.Enter_ContactPersonName?.errorMessage}
        hasError={errors.Enter_ContactPersonName?.hasError}
        {...getOverrideProps(overrides, "Enter_ContactPersonName")}
      ></TextField>
      <SelectField
        label="Select Contact Person Number"
        placeholder="Please select an option"
        value={Select_ContactPersonNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant,
              Select_Colour,
              ExShowroom_Price,
              OnRoad_Price,
              Upload_PriceListImage,
              Select_ContactPersonName,
              Enter_ContactPersonName,
              Select_ContactPersonNumber: value,
              Enter_ContactPersonNumber,
            };
            const result = onChange(modelFields);
            value = result?.Select_ContactPersonNumber ?? value;
          }
          if (errors.Select_ContactPersonNumber?.hasError) {
            runValidationTasks("Select_ContactPersonNumber", value);
          }
          setSelect_ContactPersonNumber(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "Select_ContactPersonNumber",
            Select_ContactPersonNumber
          )
        }
        errorMessage={errors.Select_ContactPersonNumber?.errorMessage}
        hasError={errors.Select_ContactPersonNumber?.hasError}
        {...getOverrideProps(overrides, "Select_ContactPersonNumber")}
      ></SelectField>
      <TextField
        label="Enter Contact Person Number"
        isRequired={true}
        placeholder="Valid WhatsApp Mobile Number"
        type="tel"
        value={Enter_ContactPersonNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Select_Model,
              Select_Variant,
              Select_Colour,
              ExShowroom_Price,
              OnRoad_Price,
              Upload_PriceListImage,
              Select_ContactPersonName,
              Enter_ContactPersonName,
              Select_ContactPersonNumber,
              Enter_ContactPersonNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.Enter_ContactPersonNumber ?? value;
          }
          if (errors.Enter_ContactPersonNumber?.hasError) {
            runValidationTasks("Enter_ContactPersonNumber", value);
          }
          setEnter_ContactPersonNumber(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "Enter_ContactPersonNumber",
            Enter_ContactPersonNumber
          )
        }
        errorMessage={errors.Enter_ContactPersonNumber?.errorMessage}
        hasError={errors.Enter_ContactPersonNumber?.hasError}
        {...getOverrideProps(overrides, "Enter_ContactPersonNumber")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.large.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
