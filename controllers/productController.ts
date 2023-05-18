const jotForm = require("jotform");

async function getProduct(req: any, res: any, next: any) {
  try {
    console.log(req.body);
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
    const data = JSON.parse(req.body.rawRequest)
    console.log('data in create', data)
    const productName = req.body.name;
    // const productPrice = req.body.price;
    // const productQuantity = req.body.quantity;
    const adderName = req.query.name || "Kizito Mrema";
    res.status(201).json({
      success: true,
      type: "image",
      title: "image Products",
      message: `${productName + " has been added by " + adderName + "."}`,
    });
  } catch (error) {
    console.log(req);
    next(error);
  }
}

module.exports = { getProduct, create };
