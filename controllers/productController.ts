// @Author Kizito Mrema
// @Usage Bootstratping a Node TS app

async function all(req: any, res: any, next: any) {
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
    const productName = req.body.name;
    // const productPrice = req.body.price;
    // const productQuantity = req.body.quantity;
    const adderName = req.query.name || "Kizito Mrema";
    res.status(201).json({
      success: true,
      type: "List",
      title: "List Products",
      message: `${productName + " has been added by " + adderName + "."}`,
    });
  } catch (error) {
    console.log(req);
    next(error);
  }
}

async function remove(req: any, res: any, next: any) {
  try {
    const productId = req.body.id;

    // to-do: code

    res.status(201).json({
      status: "success",
      message: "succesfully removed"
    });
  } catch (error) {
    console.log(req);
    nextTick(error);
  }
}

module.exports = { all, create };
