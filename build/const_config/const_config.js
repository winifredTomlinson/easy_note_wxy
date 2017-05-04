const config = {
  debug: true,
  version: '0.0.2',
  APIGatewayAddress: '127.0.0.1:3000',
  configServiceAddress: '127.0.0.1:3000/eggkeeper/v1',
  DomainName: 'Newkit',
  SSOAddress: 'http://rapapi.org/api/queryModel.do?projectId=17064&ve=146070',
  // NewkitAPI: 'http://10.16.75.27:9031/newegg-central-2/v1',
  NewkitAPI: '127.0.0.1:3000',
  Applications: [{
    id: '1f48a705-b734-476c-b32b-29359177c122', name: 'Newkit'
  }],
  moduleRoot: 'modules/',
  modules: [
    { path: 'nk-template', module: 'nk-template' },
    { path: 'nk-common', module: 'nk-common' },
    { path: 'nk-test', module: 'nk-test' },
    { path: 'nk-demo', module: 'nk-demo' }
  ]
};

window.NewkitConf = config;