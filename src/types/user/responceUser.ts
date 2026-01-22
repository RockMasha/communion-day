export interface responceUser {
  access_token: string
  student: {
    email: string;
    isActivated: boolean;
    givenName: string;
    familyName: string;
    className: string;
    id: number;
  };
}
