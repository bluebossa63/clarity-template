# clarity-template

You'll have to adapt [proxy.conf.json](src/main/frontend/src/proxy.conf.json) to have results in the tables. You can take a token from a service account and insert your cluster k8s endpoint. [Here](src/main/frontend/src/app/cmdb-list/cmdb-list.component.ts) is the only call that is functional - the service account has to have access to the called api paths and methods.
