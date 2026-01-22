export const ENDPOINTS = {
  user: "students",
  activePoint: "students/:id",
  auth: "students/login",
  refresh: "students/refresh",
};


// get /students

// patch /students (auth)
// { isActivated: boolean }

// get /students/:id

// post /students/login
// {pass: string, email: string}

// get /students/refresh (auth)