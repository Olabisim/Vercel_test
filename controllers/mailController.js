import nodemailer from 'nodemailer'
// const nodemailer = require("nodemailer");





// Defines recipients username: business.name, clientEmail: email

export async function sendtheMail(data) {

  let data2 = 'this is some data'

  let transporter = nodemailer.createTransport({
    
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
      user: process.env.user,
      pass: process.env.pass,
    },

  });

  let info = await transporter.sendMail({
    from: '"Sales Department" <***-example-person@gmail.com>',
    to: [
      data.clientEmail,
      'olabisiajoseh@gmail.com',
    ], // Mails to array of recipients
    subject: `${data.businessName} payrik invite`,
    // html: `
    //     <div style="width: 100%;">
    //         <p> You are invited by ${data.businessName}. </p>
            
    //         <p>Please log in to your account</p>

    //         <table style="border: 1px solid black; width: 100%;">
    //         <tr style="border: 1px solid black; background: black; color: white">
    //             <th  style="border: 1px solid black">Username</th>
    //             <th  style="border: 1px solid black">Password</th>
    //         </tr>
    //         <tr style="border: 1px solid black">
    //             <td  style="border: 1px solid black">${data.clientEmail}</td>
    //             <td  style="border: 1px solid black">${data.password}</td>
    //         </tr>
    //         </table>


    //         <p>Thank you from sales department. </p>

    //     </div>
    // `,
    
    html: `
    <style type="text/css">
      @media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }
}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

@media (max-width: 480px) {
  .hide-mobile {
    max-height: 0px;
    overflow: hidden;
    display: none !important;
  }
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 31% !important; } #u_content_menu_2 .v-padding { padding: 0px 9px 12px !important; } #u_row_5 .v-row-background-image--inner { background-position: 50% 10% !important; background-repeat: no-repeat !important; } #u_row_5 .v-row-background-image--outer { background-position: 50% 10% !important; background-repeat: no-repeat !important; } #u_row_5.v-row-background-image--outer { background-position: 50% 10% !important; background-repeat: no-repeat !important; } #u_content_heading_1 .v-container-padding-padding { padding: 520px 10px 0px !important; } #u_content_heading_2 .v-container-padding-padding { padding: 20px 10px 5px !important; } #u_content_heading_3 .v-container-padding-padding { padding: 0px 10px 0px 5px !important; } #u_content_heading_3 .v-font-size { font-size: 75px !important; } #u_content_heading_4 .v-container-padding-padding { padding: 0px 80px 111px 10px !important; } #u_content_heading_4 .v-line-height { line-height: 60% !important; } #u_content_text_1 .v-container-padding-padding { padding: 40px 10px 5px !important; } #u_content_text_1 .v-font-size { font-size: 14px !important; } #u_content_button_1 .v-container-padding-padding { padding: 10px 10px 40px !important; } #u_content_button_1 .v-size-width { width: 65% !important; } #u_content_social_1 .v-container-padding-padding { padding: 40px 10px 10px !important; } #u_content_text_2 .v-container-padding-padding { padding: 10px 10px 20px !important; } #u_content_image_2 .v-container-padding-padding { padding: 20px 10px 40px !important; } }
    </style>
  
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #fff;color: #000000">
   <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #fff;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
         <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
               <div class="u-row-container v-row-background-image--outer" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                     <div class="v-row-background-image--inner" style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                           <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                              <!--[if (!mso)&(!IE)]><!-->
                              <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <!--<![endif]-->
                                 <table id="u_content_image_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 15px;font-family:'Open Sans',sans-serif;" align="left">
                                             <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                   <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="u-row-container v-row-background-image--outer" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                     <div class="v-row-background-image--inner" style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                           <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                              <!--[if (!mso)&(!IE)]><!-->
                              <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 1px solid #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <!--<![endif]-->
                                 <table id="u_content_menu_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    </tbody>
                                 </table>
                                 
                                <div class="menu" style="max-width: 320px;min-width: 600px;display: table-cell; background: #42034f;display:flex;justify-content:center;align-items: center;">
                                <h1 class="v-line-height v-font-size" style="text-align: center; padding: 25px; margin: 0px; color: #fff; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Open Sans',sans-serif; font-size: 16px; font-weight: 400;">
                                  <span>
                                    <span style="text-align: center;">Your account has been created with this company name, please view your account details and log in.</span>
                                  </span>
                                </h1>
                              </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- menu style -->
                  <div style="margin:auto;display:flex;justify-content:center;align-items: center;">
                     <h1 class="v-line-height v-font-size" style="margin: 0px;padding-top: 70px; padding-bottom: 30px; color: #e48b37; line-height: 110%; text-align: center; word-wrap: break-word; font-family: 'Open Sans',sans-serif; font-size: 25px; font-weight: 400;"><span><span>Account details. </span></span></h1>
                  </div>
                  <div style="margin:auto;display:flex;justify-content:center;align-items: center;">
                     <div class="menu" style="max-width: 520px;min-width: 800px;display: table-cell; background: #42034f;">
                        <a href="#" target="_self" style="padding:10px 20px;display:inline-block;color:#fff;font-family:'Montserrat',sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
                        Email
                        </a>
                        <span style="padding:10px 20px;display:inline-block;color:#fff;font-family:'Montserrat',sans-serif;font-size:14px;" class="v-padding v-font-size hide-mobile">
                        |
                        </span>
                        <a href="#" target="_self" style="padding:10px 20px;display:inline-block;color:#fff;font-family:'Montserrat',sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
                        Password
                        </a>
                        <span style="padding:10px 20px;display:inline-block;color:#fff;font-family:'Montserrat',sans-serif;font-size:14px;" class="v-padding v-font-size hide-mobile">
                        |
                        </span>
                     </div>
                  </div>
                  <div style="margin:auto;display:flex;justify-content:center;align-items: center;">
                     <div class="menu" style="max-width: 520px;min-width: 800px;display: table-cell; border: 1px solid black;">
                        <a href="https://www.azatrailers.ng/" target="_self" style="padding:10px 20px;display:inline-block;color:#000000;font-family:'Montserrat',sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
                        ${data.clientEmail}
                        </a>
                        <span style="padding:10px 20px;display:inline-block;color:#000000;font-family:'Montserrat',sans-serif;font-size:14px;" class="v-padding v-font-size hide-mobile">
                        |
                        </span>
                        <a href="https://www.azatrailers.ng/" target="_self" style="padding:10px 20px;display:inline-block;color:#000000;font-family:'Montserrat',sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
                        ${data.password}
                        </a>
                        <span style="padding:10px 20px;display:inline-block;color:#000000;font-family:'Montserrat',sans-serif;font-size:14px;" class="v-padding v-font-size hide-mobile">
                        |
                        </span>
                     </div>
                  </div>
                  <table id="u_content_text_1" style="font-family:'Open Sans',sans-serif; padding-top: 50px;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                     <tbody>
                        <tr>
                           <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 5px;font-family:'Open Sans',sans-serif;" align="left">
                              <div class="v-line-height v-font-size" style="font-size: 18px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                 <p style="line-height: 140%;">
                                    Transact with us.
                                 </p>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <table id="u_content_button_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                     <tbody>
                        <tr>
                           <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 60px;font-family:'Open Sans',sans-serif;" align="left">
                              <div align="center">
                                 <a href="https://www.azatrailers.ng/product" target="_blank" class="v-button v-size-width v-font-size" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #42034f; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:30%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
                                 <span class="v-line-height v-padding" style="display:block;padding:10px 20px;line-height:120%;"><span style="line-height: 16.8px;">Login now</span></span>
                                 </a>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               </div>
               </div>
               </div>
               </div>
               </div>
               <div class="u-row-container v-row-background-image--outer" style="padding: 0px;">
               <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                  <div class="v-row-background-image--inner" style="border-collapse: collapse;display: table;width: 100%;height: 100%;">
                     <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="background-color: #42034f;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                           <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                              <!--<![endif]-->
                              <table id="u_content_social_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                 <tbody>
                                    <tr>
                                       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 10px;font-family:'Open Sans',sans-serif;" align="left">
                                          <div align="center">
                                             <div style="display: table; max-width:167px;">
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="u_content_text_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                 <tbody>
                                    <tr>
                                       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 100px 30px;font-family:'Open Sans',sans-serif;" align="left">
                                          <div class="v-line-height v-font-size" style="font-size: 14px; color: #ffffff; line-height: 170%; text-align: center; word-wrap: break-word;">
                                             <p style="font-size: 14px; line-height: 170%;">UNSUBSCRIBE   |   PRIVACY POLICY   |   WEB</p>
                                             <p style="font-size: 14px; line-height: 170%;">Payrik business limited </p>
                                             <p style="font-size: 14px; line-height: 170%;">
                                                Address:
                                                Shop Lot 19, Block E
                                                Okoafor Bus-Stop, Badagry
                                                Expressway Lagos State.
                                             </p>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                 <tbody>
                                    <tr>
                                       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left">
                                          <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                             <tbody>
                                                <tr style="vertical-align: top">
                                                   <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                      <span>&#160;</span>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="u_content_image_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                 <tbody>
                                    <tr>
                                       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px;font-family:'Open Sans',sans-serif;" align="left">
                                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                             <tr>
                                                <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                    <p>Sales@payrik.ng</p>
                                                </td>
                                             </tr>
                                          </table>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </td>
         </tr>
      </tbody>
   </table>
</body>
    `,
  });

  console.log(info.messageId);
  console.log(info.accepted);
  console.log(info.rejected);

//   return res.status(200).json({
//     status: true,
//     message: 'email sent'
//   })

}


export const sendingMail = (req, res) => {

  console.log("req.body")
  console.log(req.body)

    main(req.body, res)
    .catch(err =>   
      res.status({
        status: true,
        message: err
      })
    );
    
}



// API to send the token mail

export async function sendtheTokenMail(data) {

  let data2 = 'this is some data'

  let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  let info = await transporter.sendMail({
    from: '"Sales Department" <***-example-person@gmail.com>',
    to: [
      data.userEmail,
      'olabisiajoseh@gmail.com',
    ], // Mails to array of recipients
    subject: `Password Reset Mail`,
    html: `
        <div style="width: 100%;">
            <p> You are invited by ${data.userName}. </p>
            
            <p>Please click this link to reset your password</p>

            <p>${passwordResetLink}</p>

        </div>
    `,
  });

  console.log(info.messageId);
  console.log(info.accepted);
  console.log(info.rejected);

//   return res.status(200).json({
//     status: true,
//     message: 'email sent'
//   })

}
