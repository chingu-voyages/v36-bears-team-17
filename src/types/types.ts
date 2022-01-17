export interface signupField {
  displayName: string;
  username: string;
  email: string;
  password: string;
}

export interface registerResponse {
  success: boolean;
  token: string;
  user: {
    displayName: string;
    username: string;
    _id: string;
  };
}

export interface loginFieldWithEmail {
  email: string;
  password: string;
}

export interface loginFieldWithUsername {
  username: string;
  password: string;
}