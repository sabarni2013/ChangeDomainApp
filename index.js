var appController = require('./appController');
const test1 = {
  code: "BMSSG",
  header: {
    banners: [
      {
        name: "banner1",
        imageUrl:
          "https://cdn.localhost.dev/dev/202006/9ada1f665d99-1592130713518.png",
      },
      {
        imageUrl:
          "http://cdn.localhost.dev/dev/202007/dc19bd6ba566-1594964851886.jpg",
      }
    ],
  },
  name: "BookMyShow",
  cardImageUrl: "cdn.localhost.dev/71/e1/71e13de783f5cef09c8128e186fac0a8.png",
  whiteLabel: {
    header: { primary: "#5c2a90", darker: "#171717", lighter: "#f1e4f7" },
    logo: "https://cdn.localhost.dev/dev/202007/e90d1e06b1ce-1594707971188.png"
  },
  emailTemplateSubject: "Dev BMSSG - Tickets Purchased Testing New Template"
}

const searchAndReplace = appController.searchAndProcess(test1, 'cdn.localhost.dev', handler);

function handler() {
  console.log('enter handler...');
}
console.log(searchAndReplace);