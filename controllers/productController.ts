async function getProduct(req: any, res: any, next: any) {
  try {
    res.status(200).send({
      status: 200,
      success: true,
      message: "This is the root path for products",
    });
  } catch (error) {
    next(error);
  }
}

async function create(req: any, res: any, next: any) {
  try {
    console.log("req", req.body);
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
