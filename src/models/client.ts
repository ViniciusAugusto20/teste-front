export type Client = {
  id: string;
  name: string;
  birthday: string;
  driver_license?: string;
  state: string;
  city: string;
  responsibleName?: string;
  responsiblePhone?: string;
  phoneNumbers: string[];
  emails: string[];
  userIsUnderAge: boolean;
};
