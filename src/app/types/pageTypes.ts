import { ObjectId } from "mongodb";

export type PageData = {
  _id: ObjectId;
  key: string;
  title: string;
  content: (SectionContent | TextContent)[];
  footnotes: string[];
};
export type AdminBackendLoginData = {
  _id: ObjectId;
  success: boolean;
  authKey: string;
  validUntil: number;
};
export type SectionContent = {
  type: PageContentType;
  content: (SectionContent | TextContent)[];
  heading: string;
};

export type TextContent = {
  type: PageContentType;
  content: string;
};

export enum PageContentType {
  Section = "section",
  Text = "text",
}
