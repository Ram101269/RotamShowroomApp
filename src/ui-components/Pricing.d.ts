/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, CheckboxFieldProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PricingInputValues = {
    Select_Model?: boolean;
    Select_Variant?: boolean;
    Select_Colour?: boolean;
    ExShowroom_Price?: string;
    OnRoad_Price?: string;
    Upload_PriceListImage?: string;
    Select_ContactPersonName?: string;
    Enter_ContactPersonName?: string;
    Select_ContactPersonNumber?: string;
    Enter_ContactPersonNumber?: string;
};
export declare type PricingValidationValues = {
    Select_Model?: ValidationFunction<boolean>;
    Select_Variant?: ValidationFunction<boolean>;
    Select_Colour?: ValidationFunction<boolean>;
    ExShowroom_Price?: ValidationFunction<string>;
    OnRoad_Price?: ValidationFunction<string>;
    Upload_PriceListImage?: ValidationFunction<string>;
    Select_ContactPersonName?: ValidationFunction<string>;
    Enter_ContactPersonName?: ValidationFunction<string>;
    Select_ContactPersonNumber?: ValidationFunction<string>;
    Enter_ContactPersonNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PricingOverridesProps = {
    PricingGrid?: PrimitiveOverrideProps<GridProps>;
    Select_Model?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Select_Variant?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Select_Colour?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ExShowroom_Price?: PrimitiveOverrideProps<TextFieldProps>;
    OnRoad_Price?: PrimitiveOverrideProps<TextFieldProps>;
    Upload_PriceListImage?: PrimitiveOverrideProps<AutocompleteProps>;
    Select_ContactPersonName?: PrimitiveOverrideProps<SelectFieldProps>;
    Enter_ContactPersonName?: PrimitiveOverrideProps<TextFieldProps>;
    Select_ContactPersonNumber?: PrimitiveOverrideProps<SelectFieldProps>;
    Enter_ContactPersonNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PricingProps = React.PropsWithChildren<{
    overrides?: PricingOverridesProps | undefined | null;
} & {
    onSubmit: (fields: PricingInputValues) => void;
    onChange?: (fields: PricingInputValues) => PricingInputValues;
    onValidate?: PricingValidationValues;
} & React.CSSProperties>;
export default function Pricing(props: PricingProps): React.ReactElement;
