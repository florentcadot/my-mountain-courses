// See https://developers.notion.com/reference/property-item-object
import {
  GetPagePropertyResponse,
  PropertyItemListResponse,
  PropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

const isPropertyItemObject = (
  x: GetPagePropertyResponse
): x is PropertyItemObjectResponse => {
  return x.object === 'property_item';
};

const isPropertyItemListResponse = (
  x: GetPagePropertyResponse
): x is PropertyItemListResponse => {
  return x.object === 'list';
};

const isText = (x: {
  type: string;
  plain_text?: string;
}): x is { type: string; plain_text: string } => {
  return x.type === 'text';
};

const isMultiSelect = (propertyData: GetPagePropertyResponse) =>
  propertyData.type === 'multi_select';

const isDate = (propertyData: GetPagePropertyResponse) =>
  propertyData.type === 'date';

export const extractValueFromPageProperty = (
  propertyData: GetPagePropertyResponse
) => {
  if (isPropertyItemObject(propertyData)) {
    const result = propertyData[propertyData.type];
    if (isMultiSelect(propertyData)) return result.map((item) => item.name);
    if (isDate(propertyData)) return result.start;
    return result;
  } else if (isPropertyItemListResponse(propertyData)) {
    const results = propertyData.results.map(
      (item: PropertyItemObjectResponse) => item[item.type]
    );
    if (isText(results[0])) return results[0].plain_text;
    return results;
  }
};
