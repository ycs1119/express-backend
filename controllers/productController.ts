import { removeBg } from '../helpers/removeBg'

const jotForm = require("jotform");
jotForm.options({
  debug: true,
  apiKey: "1e9a4906f3c1ab0988919bb4a8f2e47d"
});

interface Answer {
  cfname?: string,
  name: string,
  order: string,
  selectedField?: string,
  static: string,
  text: string,
  type: string,
  answer?: string
}

async function getProduct(req: any, res: any, next: any) {
  try {
    console.log("This is the root path for products");
    let forms = await jotForm.getForms();
    forms = forms.filter((form: any) => { return form.status === "ENABLED" })
    res.status(200).send({
      status: 200,
      success: true,
      message: "This is the root path for products",
      data: forms
    });
  } catch (error) {
    next('You are wrong', error);
  }
}

async function create(req: any, res: any, next: any) {
  try {
    const submissions = await jotForm.getSubmissions();
    const recent_sub = submissions.filter((submission: any) => { return submission?.form_id === "231352576902052" && submission?.status === "ACTIVE" })?.[0];
    const answer = (Object.values(recent_sub?.answers).filter((sub: any) => { return !!sub?.answer })?.[0] as Answer)?.answer;
    const image_url = JSON.parse(answer || "{}")?.widget_metadata?.value[0]?.url;
    await removeBg(`https://files.jotform.com/jotformWidgets/${image_url?.replace('/widget-uploads/', '')}`);
    res.status(201).json({
      success: true,
      data: image_url,
      message: "Welcome to here"
    });
  } catch (error) {
    console.log(req);
    next(error);
  }
}

module.exports = { getProduct, create };
