# xplat sample: Web + Electron with routing configured

## Setup

```
npm i
```

## Run

* web: `npm start`
* electron (live reload browser dev): `npm run start.electron.myapp`

See other [electron options here](https://nstudio.io/xplat/generators/#appelectron).

### Commands used to setup this workspace

```
create-nx-workspace xplat-sample-electron-routing
cd xplat-sample-electron-routing
npm i @nstudio/schematics -D
ng g xplat --prefix=abc --platforms=electron,web
ng g app myapp
ng g app.electron myapp --target=web-myapp
```

### Notes

A `main.electron.ts` + `app.electron.module.ts` and `main.browser.ts` + `app.browser.module.ts` were added to handle routing for livesync development as well as when packaged for desktop deployment.