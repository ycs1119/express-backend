const jotForm = require("jotform");

async function getProduct(req: any, res: any, next: any) {
  try {
    jotForm.options({
      debug: true,
      apiKey: "1e9a4906f3c1ab0988919bb4a8f2e47d"
    });
    let forms = await jotForm.getForms();
    forms = forms.filter((form: any) => { return form.status === "ENABLED" })
    res.status(200).send({
      status: 200,
      success: true,
      message: "This is the root path for products",
      data: forms
    });
  } catch (error) {
    next(error);
  }
}

async function create(req: any, res: any, next: any) {
  try {
    console.log('You are Welcome to page');
    const multer = require("multer");
    const storage = multer.diskStorage({
      destination: "public/uploads/",
      filename: (req: any, _file: any, res: (arg0: null, arg1: string) => void): void => {
        const uniqueSuffix = Date.now();
        res(null, uniqueSuffix + ".png");
      },
    });
    const upload = multer({ storage: storage });
    const data = JSON.parse(upload);
    res.status(201).json({
      success: true,
      type: "image",
      title: "image Products",
      message: "Welcome to here"
    });

    console.log('...................always-data....................', data);


  } catch (error) {
    console.log(req);
    next(error);
  }
}

module.exports = { getProduct, create };
