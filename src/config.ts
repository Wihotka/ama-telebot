const config:any = {};

const domainsWithInsideMode = ['amakids.ru'];
const insideMode = domainsWithInsideMode.includes(window.location.hostname);

config.prodMode = process.env.NODE_ENV === 'production';
config.appPath = config.prodMode ? (insideMode ? '/platform' : '') + '/apps/telebot/' : '/';
config.root = 'https://' + window.location.hostname;
config.host = config.prodMode ? 'https://' + window.location.hostname + (insideMode ? '/platform' : '') +  '/apps/telebot/' : 'https://' + window.location.host + '/';
config.apiHost = 'https://' + window.location.hostname + (insideMode ? '/platform' : '') +  '/api/';

config.path = {
    main: config.appPath,
    smartumHelper: config.appPath + 'smartumHelper/'
};

export default config;