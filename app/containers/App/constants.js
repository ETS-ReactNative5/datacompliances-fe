export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';

const isProdEnv = process.env.NODE_ENV === 'production';

export const API_BASE = isProdEnv
  ? 'http://adminlego.nodebeats.com/api/'
  : 'http://localhost:4000/api/';

export const RECAPTCHA_SITE_KEY = '6Le8zp0UAAAAAAYejRTLJgXSCnXx7rhqMYXukMbd';

export const LOAD_ORGANIZATION_INFO_REQUEST =
  'app/containers/App/LOAD_ORGANIZATION_INFO_REQUEST';
export const LOAD_ORGANIZATION_INFO_SUCCESS =
  'app/containers/App/LOAD_ORGANIZATION_INFO_SUCCESS';
export const LOAD_ORGANIZATION_INFO_FAILURE =
  'app/containers/App/LOAD_ORGANIZATION_INFO_FAILURE';

export const LOAD_CONTENT_TEMPLATE_REQUEST =
  'app/containers/App/LOAD_CONTENT_TEMPLATE_REQUEST';
export const LOAD_CONTENT_TEMPLATE_SUCCESS =
  'app/containers/App/LOAD_CONTENT_TEMPLATE_SUCCESS';
export const LOAD_CONTENT_TEMPLATE_FAILURE =
  'app/containers/App/LOAA_CONTENT_TEMPLATE_FAILURE';

export const SHOW_DIALOG = 'app/containers/App/SHOW_DIALOG';

export const DOCUMENT_URL_UPDATE =
  process.env.NODE_ENV === 'production'
    ? 'https://dev-bitsbeat-s3.s3.amazonaws.com/'
    : 'https://dev-bitsbeat-s3.s3.amazonaws.com/';

export const DOCUMENT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://dev-bitsbeat-s3.s3.amazonaws.com/'
    : 'https://dev-bitsbeat-s3.s3.amazonaws.com/';
