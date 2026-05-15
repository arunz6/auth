function genrateotp  (){
  return Math.floor(100000 + Math.random() * 900000);
}


function getotphtml (otp){
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>OTP Verification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>OTP Verification</h1>
        <p>Your OTP is: <strong>${otp}</strong></p>
      </div>
    </body>
  </html>
`;}

export  { genrateotp ,getotphtml}