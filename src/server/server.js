import Koa  from 'koa';
import Router from 'koa-router';

import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../shared/App/App';
import {StaticRouter} from "react-router-dom";

const app = new Koa();
const router = new Router();

router.get('*', (ctx) => {
    const url = ctx.request.url;
    const body = renderToString(
        <StaticRouter location={url} context={ctx}>
            <App />
        </StaticRouter>
    );
    const title = 'Server side Rendering with Styled Components';

    ctx.body = `
        <!DOCTYPE html>
          <html>
            <head>
              <title>${title}</title>
            </head>
            <body>
              <div id="app">${body}</div>
            </body>
          </html>
    `;
});

app.use(router.routes())
    .use(router.allowedMethods());


app.listen(8080, '0.0.0.0');
console.log(`Serving at http://0.0.0.0:${8080}`);
