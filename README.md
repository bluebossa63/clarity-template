# clarity-template

You'll have to adapt [proxy.conf.json](src/main/frontend/src/proxy.conf.json) to have results in the tables. You can take a token from a service account and insert your cluster k8s endpoint. [Here](src/main/frontend/src/app/cmdb-list/cmdb-list.component.ts) is the only call that is functional - the service account has to have access to the called api paths and methods.

## starting the app locally

```txt
daniele@kubuntu:~/dev/clarity-template$ ng serve
Warning: Running a server with --disable-host-check is a security risk. See https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a for more information.
****************************************************************************************
This is a simple server for use in testing or debugging Angular applications locally.
It hasn't been reviewed for security issues.

DON'T USE IT FOR PRODUCTION!
****************************************************************************************
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size | Estimated Transfer Size
styles.css, styles.js | styles        | 758.75 kB |               158.07 kB
main.js               | main          | 709.85 kB |               165.48 kB
scripts.js            | scripts       | 680.28 kB |               102.44 kB
polyfills.js          | polyfills     | 163.24 kB |                42.20 kB
runtime.js            | runtime       |   1.25 kB |               673 bytes

                      | Initial Total |   2.26 MB |               468.85 kB

Build at: 2022-05-09T00:25:01.999Z - Hash: 132b067c1f07ce99 - Time: 39638ms

Warning: /home/daniele/dev/clarity-template/src/environments/environment.prod.ts is part of the TypeScript compilation but it's unused.
Add only entry points to the 'files' or 'include' properties in your tsconfig.

Warning: 1 rules skipped due to selector errors:
  .clr-wizard-page>> -> Did not expect successive traversals.



** Angular Live Development Server is listening on 0.0.0.0:8080, open your browser on http://localhost:8080/ **


✔ Compiled successfully.
```
