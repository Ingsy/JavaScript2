  //register account

  const API_BASE_URL = "https://nf-api.onrender.com";

  //End-points:
  //Register: /api/v1/social/auth/register

  /**
 * API call that registers user 
 * 
 * @param {string} url
 * @param {any} userData
 * ```js
 * registerUser(registerUrl, userToRegister);
 * ```
*/ 

  async function registerUser(url, userData) {
    try{
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),

      };
      const response = await fetch(url, postData);
      const json = await response.json();
      console.log(json);
    } catch(error) {
      console.log(error);
    }
  }
  const userToRegister = {
    "name": "ingeborg",                          
    "email": "ingeborgm@noroff.no",           
    "password": "Oliver2022",                  
  };
  const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;



  //registerUser(registerUrl, userToRegister);


  async function loginUser(url, userData) {
      try {
          const postData = {
              method: "POST",
              headers: {
                  "content-Type": "application/json",
              },
              body: JSON.stringify(userData),
          };
          const response = await fetch(url, postData);
          console.log(response);
          const json = await respons.json();
          console.log(json);
          console.log(json.accessToken);
          const accessToken = json.accessToken;
          localStorage.setItem("accessToken", accessToken);
      } catch(error) {
          console.log(error);
        }
  }

  //get the data from the form in login.html
  const userToLogin = {
    email: "ingmel@noroff.no",           
    password: "Oliver2022",  
  };
  
  const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

  //loginUser(loginUrl, userToLogin);

  // ---------- request with token 

 //  async function getWithToken elr can call it getPost...(url, method = "GET") "set the function option"

  async function getWithToken(url) {
      try {
          console.log(url);
          const token = localStorage.getItem("accessToken");
          console.log(token);
          const fetchOptions = {
              method: "POST",
              headers: {
                "content-Type": "application/json",
                Authotization: `Bearer ${token}`,
            },
          };
          const response = await fetch(url, fetchOptions);
          console.log(response);
          const json = await respnse.json();
      } catch(error) {
          console.log(error);
      }
  }

  const postUrl = `${API_BASE_URL}/api/v1/social/posts`;


  getWithToken(postUrl);


