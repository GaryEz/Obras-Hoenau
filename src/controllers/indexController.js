
const nodemailerTrasnporter=require("../controllers/functions")


const proyectos_destacados=[
    {
        id:1,
        nombre:"Obra 1",
        datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
        descripcion:"Descripcion de la obra N°1 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        estado:"finalizado",
        image:["obra-1/edi-1.jpg","perry.png","logo.png","logo2.png"],
        destacado:true,
        },
        {
        id:2,
        nombre:"Obra 2",
        datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
        descripcion:"Descripcion de la obra N°2 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        estado:"finalizado",
        image:["obra-2/edi-2.jpg","perry.png","logo.png","logo2.png"],
        destacado:true,
        },
        {
        id:3,
        nombre:"Obra 3",
        datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
        descripcion:"Descripcion de la obra N°3 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        estado:"progreso",
        image:["obra-3/edi-3.jpg","perry.png","logo.png","logo2.png"],
        destacado:true,
        }
]

module.exports={
    index:(req,res)=>{
        res.render("home.ejs",{
        proyectos_destacados
        })
    },
    about:(req,res)=>{
        res.render("nosotros.ejs")
    },
    mail:(req,res)=>{

       let {name,email,phone,comments}=req.body
       const mailform=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
       <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
       <head>
       <meta charset="UTF-8">
       <meta content="width=device-width, initial-scale=1" name="viewport">
       <meta name="x-apple-disable-message-reformatting">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta content="telephone=no" name="format-detection">
       <title>New email template 2023-02-10</title><!--[if (mso 16)]>
       <style type="text/css">
       a {text-decoration: none;}
       </style>
       <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
       <xml>
       <o:OfficeDocumentSettings>
       <o:AllowPNG></o:AllowPNG>
       <o:PixelsPerInch>96</o:PixelsPerInch>
       </o:OfficeDocumentSettings>
       </xml>
       <![endif]--><!--[if !mso]><!-- -->
       <link href="https://fonts.googleapis.com/css2?family=Imprima&display=swap" rel="stylesheet"><!--<![endif]-->
       <style type="text/css">
       #outlook a {
       padding:0;
       }
       .es-button {
       mso-style-priority:100!important;
       text-decoration:none!important;
       }
       a[x-apple-data-detectors] {
       color:inherit!important;
       text-decoration:none!important;
       font-size:inherit!important;
       font-family:inherit!important;
       font-weight:inherit!important;
       line-height:inherit!important;
       }
       .es-desk-hidden {
       display:none;
       float:left;
       overflow:hidden;
       width:0;
       max-height:0;
       line-height:0;
       mso-hide:all;
       }
       [data-ogsb] .es-button {
       border-width:0!important;
       padding:15px 20px 15px 20px!important;
       }
       @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:left; margin-bottom:18px } h2 { font-size:24px!important; text-align:left; margin-bottom:15px } h3 { font-size:20px!important; text-align:left; margin-bottom:12px } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:18px!important; display:block!important; border-right-width:0px!important; border-left-width:0px!important; border-top-width:15px!important; border-bottom-width:15px!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } p, ul li, ol li { margin-bottom:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li { margin-bottom:11px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li { margin-bottom:11px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li { margin-bottom:9px!important } }
       </style>
       </head>
       <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
       <div class="es-wrapper-color" style="background-color:#FFFFFF"><!--[if gte mso 9]>
       <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
       <v:fill type="tile" color="#Fff" origin="0.5, 0" position="0.5, 0"></v:fill>
       </v:background>
       <![endif]-->
       <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
       <tr>
       <td valign="top" style="padding:0;Margin:0">
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
       <tr>
       <td align="center" style="padding:0;Margin:0">
       <table bgcolor="#efefef" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;border-radius:20px 20px 0 0;width:600px">
       <tr>
       <td align="left" bgcolor="#f6f1b9" style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px;background-color:#f6f1b9">
       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
       <tr>
       <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
       <tr>
       <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://gcovtd.stripocdn.email/content/guids/CABINET_ed21741a711d77f0761efe5c66cb656f9273c0615d4d7d41f28f0cc1780532a9/images/imageremovebgpreviewremovebgpreview_Ztz.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="200"></td>
       </tr>
       </table></td>
       </tr>
       </table></td>
       </tr>
       <tr>
       <td align="left" bgcolor="#f6f1b9" style="padding:0;Margin:0;padding-top:5px;padding-left:40px;padding-right:40px;background-color:#f6f1b9">
       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
       <tr>
       <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
       <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fafafa" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#fafafa;border-radius:10px" role="presentation">
       <tr>
       <td align="left" style="padding:20px;Margin:0"><h3 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Imprima, Arial, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#2D3142;margin-bottom:17px">Mi nombre es&nbsp;<strong><span style="font-size:28px;color:#000000">${name}</span></strong><br>Correo :<span style="font-size:20px"> ${email}</span><br>Asunto:&nbsp;<span style="font-size:20px">${phone}</span></h3><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Imprima, Arial, sans-serif;line-height:30px;margin-bottom:14px;color:#2D3142;font-size:20px">${comments}</p></td>
       </tr>
       </table></td>
       </tr>
       </table></td>
       </tr>
       </table></td>
       </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
       <tr>
       <td align="center" style="padding:0;Margin:0">
       <table bgcolor="#efefef" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;border-radius:0 0 20px 20px;width:600px">
       <tr>
       <td align="left" bgcolor="#f6f1b9" style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px;background-color:#f6f1b9">
       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
       <tr>
       <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
       <tr>
       <td align="center" style="padding:10px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Imprima, Arial, sans-serif;line-height:27px;margin-bottom:14px;color:#2D3142;font-size:18px">Copyright © 2022 Hoenau Construcciones</p></td>
       </tr>
       </table></td>
       </tr>
       </table></td>
       </tr>
       </table></td>
       </tr>
       </table></td>
       </tr>
       </table>
       </div>
       </body>
       </html>`

        const mensaje={
            from:`Usuario <${email}>`,
            to:"<solutions.lardev@gmail.com>",
            subject:`Consulta de ${name}`,
            html:mailform
            /* `<h1 style=" background-color: #FEF5AC;;">Asunto: ${phone}</h1>
            <br>
            <p>${comments} y mi mail es ${email}</p>` */
        }
  nodemailerTrasnporter.sendMail(mensaje,(err,data)=>{
    console.log('email enviado')
            res.redirect('/')
  })

}

}
