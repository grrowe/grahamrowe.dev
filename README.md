Welcome to [grahamrowe.dev](https://grahamrowe.dev/). I am Graham Rowe, a full stack dev based in Indianapolis, Indiana. Currently working for [Aptible](https://www.aptible.com/) as a CRE.

[grahamrowe.dev](https://grahamrowe.dev/) is a Next.js app hosted in an Amazon Lightsail Instance and I am using this Readme to document so I do not forget the process.

I am using [PM2](https://pm2.keymetrics.io/) to run my next.js as a NPM script instead of `next export` then serve those files.

### PM2 (Deployment)
- Kill existing process `pm2 stop grahamrowe.dev`
- Pull in the new changes from this repo
- Run `npm run build` to build a production ready thingy
- Start the process `pm2 start npm --name "grahamrowe.dev" -- start`


